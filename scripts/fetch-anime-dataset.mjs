import { mkdir, writeFile } from "node:fs/promises";

const targetCount = 3000;
const pageSize = 25;
const outputPath = new URL("../anime-dataset.js", import.meta.url);
const sourcePlans = [
  { label: "top", query: "" },
  { label: "popularity", query: "&filter=bypopularity" },
];

const moodByGenre = new Map([
  ["Action", "燃"],
  ["Adventure", "史诗"],
  ["Avant Garde", "悬疑"],
  ["Award Winning", "史诗"],
  ["Boys Love", "治愈"],
  ["Comedy", "轻松"],
  ["Drama", "治愈"],
  ["Fantasy", "史诗"],
  ["Girls Love", "治愈"],
  ["Gourmet", "轻松"],
  ["Horror", "悬疑"],
  ["Mystery", "悬疑"],
  ["Romance", "治愈"],
  ["Sci-Fi", "悬疑"],
  ["Slice of Life", "轻松"],
  ["Sports", "燃"],
  ["Supernatural", "悬疑"],
  ["Suspense", "悬疑"],
]);

const genreNameMap = new Map([
  ["Action", "动作"],
  ["Adventure", "冒险"],
  ["Avant Garde", "实验"],
  ["Award Winning", "获奖"],
  ["Comedy", "喜剧"],
  ["Drama", "剧情"],
  ["Fantasy", "奇幻"],
  ["Gourmet", "美食"],
  ["Horror", "恐怖"],
  ["Mystery", "悬疑"],
  ["Romance", "恋爱"],
  ["Sci-Fi", "科幻"],
  ["Slice of Life", "日常"],
  ["Sports", "运动"],
  ["Supernatural", "超自然"],
  ["Suspense", "惊悚"],
  ["Mecha", "机甲"],
  ["School", "校园"],
  ["Music", "音乐"],
  ["Historical", "历史"],
  ["Military", "军事"],
  ["Psychological", "心理"],
  ["Space", "太空"],
  ["Time Travel", "时间旅行"],
  ["Idols (Female)", "女性偶像"],
  ["Idols (Male)", "男性偶像"],
  ["Isekai", "异世界"],
  ["Martial Arts", "武术"],
  ["Team Sports", "团队运动"],
  ["Strategy Game", "策略游戏"],
]);

const typeMap = new Map([
  ["TV", "TV"],
  ["Movie", "Movie"],
  ["OVA", "OVA"],
  ["ONA", "OVA"],
  ["Special", "Special"],
  ["Music", "Music"],
  ["TV Special", "Special"],
]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function pickMood(entry) {
  const names = [...(entry.genres || []), ...(entry.themes || [])].map((item) => item.name);
  for (const name of names) {
    if (moodByGenre.has(name)) return moodByGenre.get(name);
  }
  return entry.score >= 8.6 ? "史诗" : "轻松";
}

function pickGenres(entry) {
  const names = [...(entry.genres || []), ...(entry.themes || []), ...(entry.demographics || [])]
    .map((item) => genreNameMap.get(item.name) || item.name)
    .filter(Boolean);
  return [...new Set(names)].slice(0, 4);
}

function cleanSummary(entry, genres) {
  const synopsis = (entry.synopsis || "").replace(/\s+/g, " ").trim();
  if (synopsis) return synopsis.slice(0, 180);

  const year = entry.year || entry.aired?.prop?.from?.year || "未知年份";
  const tags = genres.length ? genres.join("、") : "动画";
  return `${entry.title} 是 ${year} 年前后推出的经典动画条目，关键词包括 ${tags}。`;
}

function normalizeEntry(entry) {
  const genres = pickGenres(entry);
  return {
    id: `jikan-${entry.mal_id}`,
    malId: entry.mal_id,
    title: entry.title_japanese || entry.title || entry.title_english || `Anime ${entry.mal_id}`,
    englishTitle: entry.title_english || entry.title || "",
    type: typeMap.get(entry.type) || "TV",
    moods: [pickMood(entry)],
    genres,
    score: entry.score ? String(entry.score.toFixed(1)) : "N/A",
    year: String(entry.year || entry.aired?.prop?.from?.year || "未知"),
    cover: entry.images?.jpg?.large_image_url || entry.images?.jpg?.image_url || "",
    summary: cleanSummary(entry, genres),
  };
}

async function fetchPage(page, query = "") {
  const url = `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${pageSize}${query}`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "ACG local recommendation dataset builder",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Jikan page ${page} failed: ${response.status}`);
  }

  return response.json();
}

const entries = [];
const seen = new Set();

for (const plan of sourcePlans) {
  let page = 1;

  while (entries.length < targetCount) {
    const payload = await fetchPage(page, plan.query);
    let addedThisPage = 0;

    for (const raw of payload.data || []) {
      if (!seen.has(raw.mal_id)) {
        seen.add(raw.mal_id);
        entries.push(normalizeEntry(raw));
        addedThisPage += 1;
      }
    }

    console.log(`[${plan.label}] page ${page}, added ${addedThisPage}, total ${entries.length}`);
    if (entries.length >= targetCount) break;
    if (!payload.pagination?.has_next_page) break;

    page += 1;
    await sleep(650);
  }

  if (entries.length >= targetCount) break;
}

const dataset = entries.slice(0, targetCount);
const generatedAt = new Date().toISOString();
if (dataset.length < targetCount) {
  throw new Error(`Only found ${dataset.length} unique entries, below target ${targetCount}.`);
}

const content = `// Generated from Jikan public API top anime + popularity data on ${generatedAt}.
// Source: https://docs.api.jikan.moe/
window.externalAnimeData = ${JSON.stringify(dataset, null, 2)};
`;

await mkdir(new URL("../", import.meta.url), { recursive: true });
await writeFile(outputPath, content, "utf8");
console.log(`Wrote ${dataset.length} anime entries to ${outputPath.pathname}`);
