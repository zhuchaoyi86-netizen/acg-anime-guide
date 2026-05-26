const baseAnimeData = [
  {
    id: "frieren",
    title: "葬送的芙莉莲",
    type: "TV",
    moods: ["治愈", "史诗"],
    genres: ["奇幻", "公路", "成长"],
    score: "9.1",
    year: "2023",
    cover: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    summary: "勇者队伍打败魔王后的后日谈，以长寿精灵的视角重新理解时间、离别和冒险。",
  },
  {
    id: "eva",
    title: "新世纪福音战士",
    type: "TV",
    moods: ["悬疑"],
    genres: ["机甲", "心理", "末世"],
    score: "8.5",
    year: "1995",
    cover: "https://cdn.myanimelist.net/images/anime/1314/108941l.jpg",
    summary: "少年驾驶巨大人形兵器对抗使徒，外壳是机战，核心是孤独、自我和人际关系。",
  },
  {
    id: "jujutsu",
    title: "咒术回战",
    type: "TV",
    moods: ["燃"],
    genres: ["战斗", "校园", "超自然"],
    score: "8.6",
    year: "2020",
    cover: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    summary: "高中生吞下特级咒物后进入咒术世界，节奏快、打戏强，适合热血战斗入门。",
  },
  {
    id: "spy-family",
    title: "间谍过家家",
    type: "TV",
    moods: ["轻松"],
    genres: ["喜剧", "家庭", "日常"],
    score: "8.5",
    year: "2022",
    cover: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    summary: "间谍、杀手和读心小孩组成临时家庭，在任务与日常之间制造高密度笑点。",
  },
  {
    id: "kimi-no-na-wa",
    title: "你的名字。",
    type: "Movie",
    moods: ["治愈"],
    genres: ["恋爱", "青春", "奇幻"],
    score: "8.8",
    year: "2016",
    cover: "https://cdn.myanimelist.net/images/anime/5/87048l.jpg",
    summary: "男女高中生在梦中交换身体，青春恋爱与灾难悬念结合，视听完成度很高。",
  },
  {
    id: "steins-gate",
    title: "命运石之门",
    type: "TV",
    moods: ["悬疑"],
    genres: ["科幻", "时间旅行", "剧情"],
    score: "9.0",
    year: "2011",
    cover: "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
    summary: "中二社团意外触碰时间机器，前期铺垫轻松，后期剧情回收极强。",
  },
  {
    id: "demon-slayer",
    title: "鬼灭之刃",
    type: "TV",
    moods: ["燃"],
    genres: ["战斗", "少年", "和风"],
    score: "8.4",
    year: "2019",
    cover: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    summary: "少年为让妹妹变回人类而成为猎鬼人，动作演出和情绪爆发是主要看点。",
  },
  {
    id: "bocchi",
    title: "孤独摇滚！",
    type: "TV",
    moods: ["轻松"],
    genres: ["音乐", "喜剧", "成长"],
    score: "8.8",
    year: "2022",
    cover: "https://cdn.myanimelist.net/images/anime/1448/127956l.jpg",
    summary: "社恐吉他少女加入乐队，夸张演出表现内心戏，轻松但很能共情。",
  },
  {
    id: "fate-zero",
    title: "Fate/Zero",
    type: "TV",
    moods: ["史诗"],
    genres: ["奇幻", "群像", "战斗"],
    score: "8.3",
    year: "2011",
    cover: "https://cdn.myanimelist.net/images/anime/1887/117644l.jpg",
    summary: "七组御主与英灵争夺圣杯，阵营复杂、气质冷峻，是型月世界常见入口。",
  },
  {
    id: "nier",
    title: "尼尔：自动人形 Ver1.1a",
    type: "Game",
    moods: ["悬疑"],
    genres: ["游戏改", "科幻", "哲学"],
    score: "7.6",
    year: "2023",
    cover: "https://cdn.myanimelist.net/images/anime/1164/127927l.jpg",
    summary: "人造人与机械生命体在废土中的战争，适合想了解游戏改动画和世界观叙事的人。",
  },
  {
    id: "one-piece",
    title: "海贼王",
    type: "Manga",
    moods: ["史诗"],
    genres: ["冒险", "少年", "长篇"],
    score: "8.7",
    year: "1999",
    cover: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    summary: "路飞和伙伴们寻找大秘宝，世界观宏大，适合长期追番和补漫画。",
  },
  {
    id: "madoka",
    title: "魔法少女小圆",
    type: "TV",
    moods: ["悬疑"],
    genres: ["魔法少女", "反类型", "剧情"],
    score: "8.4",
    year: "2011",
    cover: "https://cdn.myanimelist.net/images/anime/11/55225l.jpg",
    summary: "用可爱外观包装高压剧情，适合理解“反类型”和虚渊玄风格。",
  },
  {
    id: "attack-on-titan",
    title: "进击的巨人",
    type: "Manga",
    moods: ["史诗"],
    genres: ["末世", "战争", "悬疑"],
    score: "9.0",
    year: "2013",
    malId: 16498,
    cover: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    summary: "人类在高墙内对抗巨人，逐步展开战争、历史与自由意志的巨大叙事。",
  },
  {
    id: "fullmetal",
    title: "钢之炼金术师 FA",
    type: "Manga",
    moods: ["史诗"],
    genres: ["奇幻", "冒险", "兄弟"],
    score: "9.1",
    year: "2009",
    malId: 5114,
    cover: "https://cdn.myanimelist.net/images/anime/1208/94745l.jpg",
    summary: "炼金术兄弟寻找身体复原之路，主线完整、群像扎实，是少年漫改经典。",
  },
  {
    id: "haikyu",
    title: "排球少年！！",
    type: "Manga",
    moods: ["燃"],
    genres: ["运动", "校园", "团队"],
    score: "8.7",
    year: "2014",
    malId: 20583,
    cover: "https://cdn.myanimelist.net/images/anime/7/76014l.jpg",
    summary: "小个子主攻手进入乌野高中排球部，比赛节奏爽快，团队成长非常热血。",
  },
  {
    id: "violet",
    title: "紫罗兰永恒花园",
    type: "Novel",
    moods: ["治愈"],
    genres: ["情感", "书信", "成长"],
    score: "8.7",
    year: "2018",
    malId: 33352,
    cover: "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
    summary: "曾经的少女兵学习代写书信，在理解他人情感的过程中寻找爱的含义。",
  },
  {
    id: "re-zero",
    title: "Re:从零开始的异世界生活",
    type: "Novel",
    moods: ["悬疑"],
    genres: ["异世界", "轮回", "剧情"],
    score: "8.3",
    year: "2016",
    malId: 31240,
    cover: "https://cdn.myanimelist.net/images/anime/1522/128039l.jpg",
    summary: "普通少年获得死亡回归能力，在异世界不断试错，兼具悬疑和情绪冲击。",
  },
  {
    id: "konosuba",
    title: "为美好的世界献上祝福！",
    type: "Novel",
    moods: ["轻松"],
    genres: ["异世界", "喜剧", "冒险"],
    score: "8.1",
    year: "2016",
    malId: 30831,
    cover: "https://cdn.myanimelist.net/images/anime/1895/142748l.jpg",
    summary: "反套路异世界喜剧，队友全员问题儿童，适合想轻松看番的时候打开。",
  },
  {
    id: "clannad-after",
    title: "CLANNAD After Story",
    type: "Novel",
    moods: ["治愈"],
    genres: ["恋爱", "家庭", "催泪"],
    score: "8.9",
    year: "2008",
    malId: 4181,
    cover: "https://cdn.myanimelist.net/images/anime/1299/110774l.jpg",
    summary: "从校园恋爱延伸到家庭人生，情感浓度高，是催泪系动画代表之一。",
  },
  {
    id: "kaguya",
    title: "辉夜大小姐想让我告白",
    type: "Manga",
    moods: ["轻松"],
    genres: ["恋爱", "喜剧", "校园"],
    score: "8.8",
    year: "2019",
    malId: 37999,
    cover: "https://cdn.myanimelist.net/images/anime/1295/106551l.jpg",
    summary: "学生会两位天才互相试探告白，恋爱喜剧节奏快，演出夸张又可爱。",
  },
  {
    id: "horimiya",
    title: "堀与宫村",
    type: "Manga",
    moods: ["轻松"],
    genres: ["恋爱", "校园", "日常"],
    score: "8.2",
    year: "2021",
    malId: 42897,
    cover: "https://cdn.myanimelist.net/images/anime/1695/111486l.jpg",
    summary: "反差感男女主逐渐靠近，轻松自然，适合入门校园恋爱番。",
  },
  {
    id: "cowboy-bebop",
    title: "星际牛仔",
    type: "Original",
    moods: ["史诗"],
    genres: ["科幻", "赏金猎人", "爵士"],
    score: "8.8",
    year: "1998",
    malId: 1,
    cover: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
    summary: "太空赏金猎人的单元剧，爵士乐、孤独感和成人气质让它非常耐看。",
  },
  {
    id: "code-geass",
    title: "反叛的鲁路修",
    type: "Original",
    moods: ["燃"],
    genres: ["机甲", "智斗", "战争"],
    score: "8.7",
    year: "2006",
    malId: 1575,
    cover: "https://cdn.myanimelist.net/images/anime/1032/135088l.jpg",
    summary: "少年获得绝对命令之力后反抗帝国，机甲、智斗和戏剧性展开都很强。",
  },
  {
    id: "psycho-pass",
    title: "心理测量者",
    type: "Original",
    moods: ["悬疑"],
    genres: ["赛博朋克", "犯罪", "哲学"],
    score: "8.3",
    year: "2012",
    malId: 13601,
    cover: "https://cdn.myanimelist.net/images/anime/1314/142015l.jpg",
    summary: "未来社会用系统测量犯罪倾向，围绕秩序、自由和正义展开刑侦故事。",
  },
  {
    id: "gurren-lagann",
    title: "天元突破红莲螺岩",
    type: "Mecha",
    moods: ["燃"],
    genres: ["机甲", "热血", "宇宙"],
    score: "8.6",
    year: "2007",
    malId: 2001,
    cover: "https://cdn.myanimelist.net/images/anime/4/5123l.jpg",
    summary: "从地下村庄一路燃到宇宙尺度，适合想看高能热血机甲的人。",
  },
  {
    id: "gundam-witch",
    title: "机动战士高达 水星的魔女",
    type: "Mecha",
    moods: ["燃"],
    genres: ["机甲", "校园", "企业战争"],
    score: "7.8",
    year: "2022",
    malId: 49828,
    cover: "https://cdn.myanimelist.net/images/anime/1440/127624l.jpg",
    summary: "高达系列较新的入口之一，把校园决斗、企业斗争和机甲战斗结合起来。",
  },
  {
    id: "oshi-no-ko",
    title: "我推的孩子",
    type: "Manga",
    moods: ["悬疑"],
    genres: ["偶像", "娱乐圈", "复仇"],
    score: "8.6",
    year: "2023",
    malId: 52034,
    cover: "https://cdn.myanimelist.net/images/anime/1812/134736l.jpg",
    summary: "以偶像产业为入口，混合悬疑、娱乐圈内幕和角色成长。",
  },
  {
    id: "love-live",
    title: "Love Live!",
    type: "Idol",
    moods: ["轻松"],
    genres: ["偶像", "音乐", "校园"],
    score: "7.4",
    year: "2013",
    malId: 15051,
    cover: "https://cdn.myanimelist.net/images/anime/11/56849l.jpg",
    summary: "校园偶像企划代表作之一，适合了解偶像番的舞台、团体和应援文化。",
  },
  {
    id: "bang-dream",
    title: "BanG Dream! It's MyGO!!!!!",
    type: "Idol",
    moods: ["悬疑"],
    genres: ["乐队", "青春", "关系"],
    score: "8.2",
    year: "2023",
    malId: 54959,
    cover: "https://cdn.myanimelist.net/images/anime/1891/136948l.jpg",
    summary: "以少女乐队为核心，重点描写关系裂缝、重组和舞台表达。",
  },
  {
    id: "cyberpunk",
    title: "赛博朋克：边缘行者",
    type: "Game",
    moods: ["燃"],
    genres: ["游戏改", "赛博朋克", "悲剧"],
    score: "8.6",
    year: "2022",
    malId: 42310,
    cover: "https://cdn.myanimelist.net/images/anime/1818/126435l.jpg",
    summary: "夜之城里的少年走向边缘人生，节奏凌厉，适合游戏改动画入门。",
  },
  {
    id: "arcane",
    title: "英雄联盟：双城之战",
    type: "Game",
    moods: ["史诗"],
    genres: ["游戏改", "奇幻科技", "姐妹"],
    score: "9.0",
    year: "2021",
    cover: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    summary: "以皮尔特沃夫和祖安为舞台，讲述姐妹、阶层与科技失控的冲突。",
  },
  {
    id: "fog-hill",
    title: "雾山五行",
    type: "Donghua",
    moods: ["燃"],
    genres: ["国创", "水墨", "战斗"],
    score: "8.3",
    year: "2020",
    malId: 37936,
    cover: "https://cdn.myanimelist.net/images/anime/1141/112764l.jpg",
    summary: "国创动作动画代表之一，水墨风格和打斗作画辨识度很高。",
  },
  {
    id: "link-click",
    title: "时光代理人",
    type: "Donghua",
    moods: ["悬疑"],
    genres: ["国创", "时间", "单元剧"],
    score: "8.6",
    year: "2021",
    malId: 44074,
    cover: "https://cdn.myanimelist.net/images/anime/1135/114867l.jpg",
    summary: "通过照片进入过去完成委托，单元故事和主线悬疑并进。",
  },
  {
    id: "scissor-seven",
    title: "刺客伍六七",
    type: "Donghua",
    moods: ["轻松"],
    genres: ["国创", "喜剧", "动作"],
    score: "8.2",
    year: "2018",
    malId: 38409,
    cover: "https://cdn.myanimelist.net/images/anime/1620/94968l.jpg",
    summary: "失忆刺客和小岛日常展开，喜剧外壳下也有热血和情义。",
  },
  {
    id: "made-in-abyss",
    title: "来自深渊",
    type: "Manga",
    moods: ["悬疑"],
    genres: ["冒险", "黑暗奇幻", "探索"],
    score: "8.7",
    year: "2017",
    malId: 34599,
    cover: "https://cdn.myanimelist.net/images/anime/6/86733l.jpg",
    summary: "少女与机器人进入巨大深渊，童话视觉和残酷设定形成强烈反差。",
  },
  {
    id: "mob-psycho",
    title: "灵能百分百",
    type: "Manga",
    moods: ["燃"],
    genres: ["超能力", "成长", "喜剧"],
    score: "8.6",
    year: "2016",
    malId: 32182,
    cover: "https://cdn.myanimelist.net/images/anime/8/80356l.jpg",
    summary: "强大超能力少年学习普通地成长，动作表现自由，情感落点温柔。",
  },
  {
    id: "mushishi",
    title: "虫师",
    type: "Manga",
    moods: ["治愈"],
    genres: ["自然", "单元剧", "空灵"],
    score: "8.7",
    year: "2005",
    malId: 457,
    cover: "https://cdn.myanimelist.net/images/anime/2/73862l.jpg",
    summary: "虫师银古游历各地处理人与虫的关系，节奏舒缓，适合静下来看。",
  },
  {
    id: "death-note",
    title: "死亡笔记",
    type: "Manga",
    moods: ["悬疑"],
    genres: ["智斗", "犯罪", "心理"],
    score: "8.7",
    year: "2006",
    malId: 1535,
    summary: "高中生捡到能杀人的笔记本后与名侦探展开智斗，是很多人入坑悬疑番的第一站。",
  },
  {
    id: "hunter-x-hunter",
    title: "全职猎人",
    type: "Manga",
    moods: ["燃"],
    genres: ["冒险", "少年", "成长"],
    score: "9.0",
    year: "2011",
    malId: 11061,
    summary: "从少年冒险一路升级到复杂能力体系和高压剧情，长线补番体验非常扎实。",
  },
  {
    id: "vinland-saga",
    title: "冰海战记",
    type: "Manga",
    moods: ["史诗"],
    genres: ["战争", "成长", "历史"],
    score: "8.8",
    year: "2019",
    malId: 37521,
    summary: "以维京时代为背景，从复仇进入真正的成长与和平命题，后劲很强。",
  },
  {
    id: "one-punch-man",
    title: "一拳超人",
    type: "Manga",
    moods: ["轻松"],
    genres: ["超能力", "喜剧", "战斗"],
    score: "8.5",
    year: "2015",
    malId: 30276,
    summary: "最强英雄却感到无聊，用反套路方式重写热血成长线，兼具爽感和喜剧节奏。",
  },
  {
    id: "toradora",
    title: "龙与虎",
    type: "Novel",
    moods: ["治愈"],
    genres: ["恋爱", "校园", "青春"],
    score: "8.4",
    year: "2008",
    malId: 4224,
    summary: "校园恋爱经典之一，从互相帮助到关系升温，情感推进自然又细腻。",
  },
  {
    id: "k-on",
    title: "轻音少女",
    type: "Manga",
    moods: ["轻松"],
    genres: ["音乐", "校园", "日常"],
    score: "8.2",
    year: "2009",
    malId: 5680,
    summary: "少女乐队和放学后时光的代表作，轻松日常与青春陪伴感很强。",
  },
  {
    id: "railgun",
    title: "某科学的超电磁炮",
    type: "Manga",
    moods: ["燃"],
    genres: ["超能力", "校园", "科幻"],
    score: "8.1",
    year: "2009",
    malId: 6213,
    summary: "学园都市系代表作之一，兼具角色魅力、超能力战斗和都市科幻设定。",
  },
  {
    id: "fate-ubw",
    title: "Fate/stay night [Unlimited Blade Works]",
    type: "Game",
    moods: ["史诗"],
    genres: ["战斗", "群像", "奇幻"],
    score: "8.2",
    year: "2014",
    malId: 22297,
    summary: "圣杯战争的主流观看入口之一，兼顾角色关系、战斗演出和世界观说明。",
  },
  {
    id: "fate-heavens-feel",
    title: "Fate/stay night [Heaven's Feel]",
    type: "Game",
    moods: ["悬疑"],
    genres: ["黑暗", "奇幻", "战斗"],
    score: "8.6",
    year: "2017",
    malId: 25537,
    summary: "Fate 系列里情绪和黑暗度更强的一条线，更适合在 UBW 之后接着看。",
  },
  {
    id: "jojo",
    title: "JOJO的奇妙冒险",
    type: "Manga",
    moods: ["燃"],
    genres: ["战斗", "超自然", "长篇"],
    score: "8.4",
    year: "2012",
    malId: 14719,
    summary: "风格极强的长线系列，每一部主角和气质都不同，是很适合慢慢补的经典。",
  },
  {
    id: "spirited-away",
    title: "千与千寻",
    type: "Movie",
    moods: ["治愈"],
    genres: ["奇幻", "成长", "电影"],
    score: "8.8",
    year: "2001",
    malId: 199,
    summary: "宫崎骏代表作之一，用幻想空间讲成长与劳动，是动画电影的重要坐标。",
  },
  {
    id: "monogatari-second",
    title: "物语系列 第二季",
    type: "Novel",
    moods: ["悬疑"],
    genres: ["对话", "青春", "怪异"],
    score: "8.8",
    year: "2013",
    malId: 17074,
    summary: "物语系列成熟阶段的代表，角色心理和对话风格极强，适合喜欢作者表达的人。",
  },
  {
    id: "naruto",
    title: "火影忍者",
    type: "Manga",
    moods: ["燃"],
    genres: ["少年", "战斗", "成长"],
    score: "8.4",
    year: "2002",
    malId: 20,
    summary: "少年忍者一路成长为村子核心人物，是王道热血补番的重要地标之一。",
  },
  {
    id: "bleach",
    title: "死神 千年血战篇",
    type: "Manga",
    moods: ["燃"],
    genres: ["战斗", "少年", "超自然"],
    score: "8.8",
    year: "2022",
    malId: 41467,
    summary: "老牌 Jump 系热血在新制作下回归，动作演出和角色阵容都很强。",
  },
  {
    id: "conan",
    title: "名侦探柯南",
    type: "Manga",
    moods: ["悬疑"],
    genres: ["推理", "长篇", "犯罪"],
    score: "8.3",
    year: "1996",
    malId: 235,
    summary: "以案件单元和主线黑衣组织并进，适合长期轻量追看。",
  },
  {
    id: "apothecary",
    title: "药屋少女的呢喃",
    type: "Novel",
    moods: ["悬疑"],
    genres: ["宫廷", "推理", "成长"],
    score: "8.7",
    year: "2023",
    malId: 54492,
    summary: "以宫廷日常和毒理推理为切口，女主观察力强，近年口碑很稳。",
  },
  {
    id: "slam-dunk",
    title: "灌篮高手",
    type: "Manga",
    moods: ["燃"],
    genres: ["运动", "成长", "校园"],
    score: "8.8",
    year: "1993",
    malId: 170,
    summary: "运动番和少年成长番的重要经典，角色群像和比赛张力都很强。",
  },
  {
    id: "slam-dunk-movie",
    title: "THE FIRST SLAM DUNK",
    type: "Movie",
    moods: ["史诗"],
    genres: ["运动", "电影", "热血"],
    score: "8.8",
    year: "2022",
    malId: 45649,
    summary: "以现代电影表达重讲经典篮球高潮，适合新观众作为灌篮入口。",
  },
  {
    id: "sailor-moon",
    title: "美少女战士",
    type: "Manga",
    moods: ["治愈"],
    genres: ["魔法少女", "校园", "恋爱"],
    score: "7.9",
    year: "1992",
    malId: 530,
    summary: "少女向和魔法少女的重要文化坐标，影响力非常大。",
  },
  {
    id: "dragon-ball",
    title: "龙珠Z",
    type: "Manga",
    moods: ["燃"],
    genres: ["战斗", "冒险", "经典"],
    score: "8.7",
    year: "1989",
    malId: 813,
    summary: "热血战斗动画的基础模板之一，很多现代王道番都能看到它的影子。",
  },
  {
    id: "classroom-elite",
    title: "欢迎来到实力至上主义的教室",
    englishTitle: "Classroom of the Elite",
    type: "Novel",
    moods: ["悬疑"],
    genres: ["校园", "智斗", "群像"],
    score: "7.8",
    year: "2017",
    malId: 35507,
    cover: "https://cdn.myanimelist.net/images/anime/6/86863l.jpg",
    summary: "高度竞争的精英学校里，学生围绕积分、阶级和人际博弈展开较量，适合喜欢校园智斗的人。",
  },
];

const animeData = [
  ...baseAnimeData,
  ...(window.externalAnimeData || []).filter(
    (externalItem) => !baseAnimeData.some((baseItem) => baseItem.id === externalItem.id),
  ),
];

function collectAnimeText(item) {
  return [
    item.title,
    item.englishTitle,
    item.type,
    item.year,
    item.summary,
    ...(item.moods || []),
    ...(item.genres || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function includesAnyTerm(item, terms) {
  const haystack = collectAnimeText(item);
  return terms.some((term) => haystack.includes(term.toLowerCase()));
}

function matchesNamedCollection(item, collection = {}) {
  if (collection.ids?.includes(item.id)) return true;
  if (collection.terms?.length && includesAnyTerm(item, collection.terms)) return true;
  return false;
}

const categoryViews = {
  theme: {
    label: "题材",
    summary: "按题材与观看气质筛选",
    items: [
      {
        key: "battle",
        name: "少年热血",
        desc: "战斗、成长、友情与高能展开",
        match: (item) => includesAnyTerm(item, ["燃", "战斗", "热血", "少年", "冒险", "动作", "action", "shounen"]),
      },
      {
        key: "slice",
        name: "日常治愈",
        desc: "陪伴、生活感、温柔情绪",
        match: (item) =>
          includesAnyTerm(item, ["轻松", "治愈", "日常", "家庭", "成长", "书信", "自然", "slice", "healing", "iyashikei"]),
      },
      {
        key: "romance",
        name: "恋爱青春",
        desc: "校园、情感关系与青春氛围",
        match: (item) =>
          includesAnyTerm(item, ["恋爱", "青春", "校园", "关系", "催泪", "romance", "school", "drama"]),
      },
      {
        key: "scifi",
        name: "科幻机甲",
        desc: "赛博、机甲、未来技术与战争",
        match: (item) =>
          includesAnyTerm(item, ["科幻", "赛博", "机甲", "宇宙", "时间旅行", "技术", "sci-fi", "science fiction", "mecha", "space"]),
      },
      {
        key: "fantasy",
        name: "奇幻异世界",
        desc: "异世界、魔法、架空世界冒险",
        match: (item) =>
          includesAnyTerm(item, ["奇幻", "异世界", "魔法", "公路", "黑暗奇幻", "fantasy", "isekai", "magic", "adventure"]),
      },
      {
        key: "mystery",
        name: "悬疑烧脑",
        desc: "伏笔、反转、心理压迫与谜团",
        match: (item) =>
          includesAnyTerm(item, ["悬疑", "心理", "哲学", "犯罪", "轮回", "复仇", "惊悚", "mystery", "thriller", "psychological", "crime"]),
      },
      {
        key: "adaptation",
        name: "游戏改编",
        desc: "从游戏世界观延展到动画表现",
        match: (item) => includesAnyTerm(item, ["游戏改", "game", "video game", "rpg"]),
      },
      {
        key: "music",
        name: "偶像音乐",
        desc: "乐队、舞台、偶像企划与团体成长",
        match: (item) => includesAnyTerm(item, ["音乐", "偶像", "乐队", "舞台", "music", "idol", "band"]),
      },
    ],
  },
  studio: {
    label: "制作社",
    summary: "按代表制作公司索引经典作品",
    items: [
      { key: "madhouse", name: "MADHOUSE", desc: "芙莉莲 / 小圆 / 葬送系与经典名作", ids: ["frieren", "madoka", "cowboy-bebop"], terms: ["frieren", "フリーレン", "madoka", "まどか", "monster", "葬送"] },
      { key: "bones", name: "BONES", desc: "钢炼 / 灵能 / 战斗与成长线稳定", ids: ["fullmetal", "mob-psycho"], terms: ["fullmetal alchemist", "鋼の錬金術師", "mob psycho", "モブサイコ", "bungou stray dogs"] },
      { key: "kyoto", name: "京都动画", desc: "紫罗兰 / CLANNAD / 情感质感突出", ids: ["violet", "clannad-after"], terms: ["violet evergarden", "ヴァイオレット", "clannad", "聲の形", "a silent voice", "dragon maid"] },
      { key: "ufotable", name: "ufotable", desc: "鬼灭 / Fate / 商业视听完成度高", ids: ["demon-slayer", "fate-zero"], terms: ["kimetsu", "鬼滅", "fate/stay", "fate/zero", "kara no kyoukai"] },
      { key: "trigger", name: "TRIGGER", desc: "天元突破 / 赛博朋克 / 风格冲击强", ids: ["gurren-lagann", "cyberpunk"], terms: ["gurren lagann", "グレンラガン", "cyberpunk", "edge runners", "promare", "kill la kill"] },
      { key: "a1", name: "A-1 Pictures", desc: "辉夜 / 86 / 商业番与青春线兼顾", ids: ["kaguya"], terms: ["kaguya-sama", "辉夜", "86", "sword art online", "sao", "your lie in april"] },
      { key: "clover", name: "CloverWorks", desc: "间谍过家家 / 孤独摇滚 / 节奏轻快", ids: ["spy-family", "bocchi"], terms: ["spy x family", "spy family", "ぼっち", "bocchi", "wonder egg", "dress-up darling"] },
      { key: "donghua", name: "国创工作室", desc: "国创动画 / 风格辨识度与题材差异化", ids: ["fog-hill", "link-click", "scissor-seven"], terms: ["雾山五行", "时光代理人", "刺客伍六七", "link click", "scissor seven", "全职高手", "狐妖小红娘", "soul land"] },
    ],
  },
  creator: {
    label: "创作者",
    summary: "按导演 / 原作 / 核心作者理解作品线索",
    items: [
      { key: "arakawa", name: "荒川弘", desc: "钢炼系世界观、伦理与兄弟叙事", ids: ["fullmetal"], terms: ["fullmetal alchemist", "鋼の錬金術師"] },
      { key: "shinkai", name: "新海诚", desc: "你的名字。到天气之子一脉的青春奇幻", ids: ["kimi-no-na-wa"], terms: ["your name", "君の名は", "weathering with you", "suzume", "新海诚"] },
      { key: "akasaka", name: "赤坂明", desc: "辉夜 / 我推的孩子的类型切换感", ids: ["oshi-no-ko", "kaguya"], terms: ["oshi no ko", "推しの子", "kaguya-sama", "赤坂明"] },
      { key: "anno", name: "庵野秀明", desc: "EVA 与心理末世表达", ids: ["eva"], terms: ["evangelion", "エヴァンゲリオン", "shin evangelion", "庵野"] },
      { key: "imaishi", name: "今石洋之", desc: "天元突破 / 赛博朋克的强烈风格", ids: ["gurren-lagann", "cyberpunk"], terms: ["gurren lagann", "グレンラガン", "cyberpunk", "promare", "kill la kill", "今石"] },
      { key: "one", name: "ONE", desc: "灵能 / 一拳超人的反套路成长感", ids: ["mob-psycho"], terms: ["mob psycho", "モブサイコ", "one punch man", "ワンパンマン"] },
      { key: "nagatsuki", name: "长月达平", desc: "Re:0 的轮回与情绪张力", ids: ["re-zero"], terms: ["re:zero", "rezero", "リゼロ", "长月达平"] },
      { key: "music-youth", name: "青春音乐系作者群", desc: "孤独摇滚 / MyGO 等乐队群像", ids: ["bocchi", "bang-dream"], terms: ["bocchi", "ぼっち", "mygo", "band dream", "bang dream"] },
    ],
  },
  publisher: {
    label: "出版社",
    summary: "按连载与出版系统快速了解来源",
    items: [
      { key: "jump", name: "集英社 Jump 系", desc: "咒术 / 鬼灭 / 海贼王 / 死神等王道向", ids: ["jujutsu", "demon-slayer", "one-piece"], terms: ["jujutsu", "呪術", "kimetsu", "鬼滅", "one piece", "bleach", "gintama", "hunter x hunter", "chainsaw man"] },
      { key: "kodansha", name: "讲谈社", desc: "巨人 / 排球外的青年与少年强作", ids: ["attack-on-titan"], terms: ["attack on titan", "進撃の巨人", "vinland saga", "ブルーロック", "blue lock", "monogatari"] },
      { key: "square", name: "SQUARE ENIX", desc: "钢炼与奇幻冒险系经典来源", ids: ["fullmetal"], terms: ["fullmetal alchemist", "鋼の錬金術師", "soul eater", "pandora hearts"] },
      { key: "kadokawa", name: "KADOKAWA", desc: "Re:0 / 素晴 / 异世界与轻改大户", ids: ["re-zero", "konosuba"], terms: ["re:zero", "konosuba", "このすば", "overlord", "date a live", "shield hero"] },
      { key: "dengeki", name: "电击文库系", desc: "命运石之门附近的轻改与科幻系", ids: ["steins-gate"], terms: ["steins;gate", "シュタインズ", "sword art online", "toradora", "railgun"] },
      { key: "houbunsha", name: "芳文社 / 日常系", desc: "孤独摇滚与轻松日常、音乐系", ids: ["bocchi"], terms: ["bocchi", "ぼっち", "k-on", "yuru camp", "new game"] },
      { key: "original", name: "原创 / 海外企划", desc: "Arcane、国创和原创企划入口", ids: ["arcane", "fog-hill", "link-click"], terms: ["arcane", "英雄联盟", "雾山五行", "link click", "scissor seven", "soul land"] },
    ],
  },
};

const routes = {
  fate: {
    summary: "以最常见也最容易接受的主流顺序切入，先懂圣杯战争，再看更黑暗的分支。",
    steps: [
      { title: "Fate/Zero", reason: "先理解圣杯战争背景、阵营逻辑和世界观骨架。" },
      { title: "Fate/stay night [Unlimited Blade Works]", reason: "再进入主线角色关系，接受度最高。" },
      { title: "Fate/stay night [Heaven's Feel]", reason: "最后看更黑暗、更私人化的一条故事线。" },
      { title: "Fate/hollow ataraxia / 外传", reason: "喜欢角色后再补日常向和外传体验会更顺。" },
      { title: "Fate/Grand Order 动画线", reason: "最后再扩展到更大的型月宇宙分支。" },
    ],
  },
  eva: {
    summary: "先看 TV 本篇建立角色关系，再接新剧场版这条更完整的现代观看线。",
    steps: [
      { title: "新世纪福音战士 TV", reason: "先建立角色关系、使徒结构和初版主题。" },
      { title: "Air / 真心为你", reason: "把旧版 TV 的终点完整看完。" },
      { title: "福音战士新剧场版：序", reason: "再从新版剧场版重新进入现代演出节奏。" },
      { title: "福音战士新剧场版：破 / Q", reason: "承接新版分歧与人物关系变化。" },
      { title: "新·福音战士剧场版", reason: "最后收在新版终章，会更完整。" },
    ],
  },
  gundam: {
    summary: "从现代入门作开始，再决定是继续宇宙世纪，还是分支世界观。",
    steps: [
      { title: "机动战士高达 水星的魔女", reason: "最容易进入的近年高达入口之一。" },
      { title: "机动战士高达 00", reason: "再看一部独立世界观、人物关系清晰的主流作。" },
      { title: "机动战士高达UC / 独角兽", reason: "开始接触宇宙世纪的核心气质。" },
      { title: "机动战士高达：逆袭的夏亚", reason: "如果喜欢 UC，就继续追到经典节点。" },
      { title: "初代高达 / Z 高达", reason: "最后再回头补源头，会更容易吸收。" },
    ],
  },
  jojo: {
    summary: "按动画分部顺序看最稳，每一部风格不同，越往后能力战越成熟。",
    steps: [
      { title: "幻影之血", reason: "先建立乔斯达家族和最初的宿命感。" },
      { title: "战斗潮流", reason: "看系列真正开始变得有趣和张扬。" },
      { title: "星尘斗士", reason: "替身系统正式登场，是 JOJO 的核心转折。" },
      { title: "不灭钻石", reason: "从公路战斗转入更生活化的群像。" },
      { title: "黄金之风 / 石之海", reason: "最后补成熟阶段的风格化巅峰。" },
    ],
  },
  science: {
    summary: "先看最成熟的一部，再决定是否往科学 ADV 其他线扩展。",
    steps: [
      { title: "命运石之门", reason: "先看系列完成度最高、最稳定的一部。" },
      { title: "命运石之门 0", reason: "接着补另一条时间线，情绪更重。" },
      { title: "混沌之子 / 混沌头", reason: "想继续就再补同世界观的悬疑向。" },
      { title: "机器人笔记", reason: "换到更偏青春和科技实现感的路线。" },
      { title: "Occultic;Nine", reason: "最后补风格更跳脱的分支作品。" },
    ],
  },
  monogatari: {
    summary: "物语系列按常见动画观看顺序会更轻松，不必一开始就追求小说时间轴。",
    steps: [
      { title: "化物语", reason: "先适应角色对话和怪异设定的节奏。" },
      { title: "伪物语 / 猫物语（黑）", reason: "继续熟悉角色关系和系列语感。" },
      { title: "物语系列 第二季", reason: "真正进入系列成熟阶段的高光部分。" },
      { title: "凭物语 / 终物语", reason: "把主线关系和角色问题继续推进。" },
      { title: "历物语 / 续·终物语", reason: "最后收尾补完，会更完整。" },
    ],
  },
};

const platforms = [
  ["哔哩哔哩", "国内动画番剧、国创和弹幕生态", "https://search.bilibili.com/all?keyword="],
  ["腾讯视频", "国产与引进动画片库", "https://v.qq.com/x/search/?q="],
  ["爱奇艺", "番剧、电影和国漫入口", "https://so.iqiyi.com/so/q_"],
  ["优酷", "动画、剧场版和国漫入口", "https://so.youku.com/search_video/q_"],
  ["Netflix", "全球片库和独占动画", "https://www.netflix.com/search?q="],
  ["Crunchyroll", "海外正版日漫平台", "https://www.crunchyroll.com/search?q="],
  ["Disney+", "部分动画电影与独占番剧", "https://www.disneyplus.com/search/"],
  ["YouTube", "官方频道、PV、免费播放集", "https://www.youtube.com/results?search_query="],
  ["Bangumi", "中文条目、评分和讨论", "https://bgm.tv/subject_search/"],
];

const savedKey = "acg-saved-v1";
const fallbackCover =
  "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=900&q=80";
const grid = document.querySelector("#animeGrid");
const pagination = document.querySelector("#pagination");
const onlineGrid = document.querySelector("#onlineGrid");
const seasonalGrid = document.querySelector("#seasonalGrid");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const moodFilter = document.querySelector("#moodFilter");
const searchSubmit = document.querySelector("#searchSubmit");
const clearSearch = document.querySelector("#clearSearch");
const yearFilter = document.querySelector("#yearFilter");
const sourceFilter = document.querySelector("#sourceFilter");
const scoreFilter = document.querySelector("#scoreFilter");
const sortFilter = document.querySelector("#sortFilter");
const characterGenderFilter = document.querySelector("#characterGenderFilter");
const characterClusterFilter = document.querySelector("#characterClusterFilter");
const characterSourceFilter = document.querySelector("#characterSourceFilter");
const matchCount = document.querySelector("#matchCount");
const savedCount = document.querySelector("#savedCount");

let saved = JSON.parse(localStorage.getItem(savedKey) || "[]");
let activeDetailId = "";
let activeCategoryView = "theme";
let activeCategoryKey = "";
const detailCache = new Map();
const characterCache = new Map();
const trailerCache = new Map();
let currentPage = 1;
const pageSize = 18;

const localDetailData = {
  frieren: {
    characters: ["芙莉莲", "菲伦", "修塔尔克", "辛美尔", "海塔"],
  },
  eva: {
    characters: ["碇真嗣", "绫波丽", "明日香", "葛城美里", "渚薰"],
  },
  jujutsu: {
    characters: ["虎杖悠仁", "伏黑惠", "钉崎野蔷薇", "五条悟", "两面宿傩"],
  },
  "spy-family": {
    characters: ["洛伊德", "约尔", "阿尼亚", "邦德"],
  },
  "kimi-no-na-wa": {
    characters: ["立花泷", "宫水三叶", "敕使河原", "奥寺前辈"],
  },
  "steins-gate": {
    characters: ["冈部伦太郎", "牧濑红莉栖", "椎名真由理", "桥田至"],
  },
  "demon-slayer": {
    characters: ["灶门炭治郎", "灶门祢豆子", "我妻善逸", "嘴平伊之助", "富冈义勇"],
  },
  bocchi: {
    characters: ["后藤一里", "伊地知虹夏", "山田凉", "喜多郁代"],
  },
  "fate-zero": {
    characters: ["卫宫切嗣", "Saber", "言峰绮礼", "远坂时臣", "征服王"],
  },
  nier: {
    characters: ["2B", "9S", "A2", "指挥官"],
  },
  "one-piece": {
    characters: ["路飞", "索隆", "娜美", "山治", "乔巴"],
  },
  madoka: {
    characters: ["鹿目圆", "晓美焰", "美树沙耶香", "巴麻美", "丘比"],
  },
  "attack-on-titan": {
    characters: ["艾伦", "三笠", "阿尔敏", "利威尔", "韩吉"],
  },
  fullmetal: {
    characters: ["爱德华", "阿尔冯斯", "罗伊", "温莉", "斯卡"],
  },
  haikyu: {
    characters: ["日向翔阳", "影山飞雄", "月岛萤", "西谷夕", "及川彻"],
  },
  violet: {
    characters: ["薇尔莉特", "霍金斯", "基尔伯特", "嘉德丽雅"],
  },
  "re-zero": {
    characters: ["菜月昴", "爱蜜莉雅", "雷姆", "拉姆", "贝蒂"],
  },
  konosuba: {
    characters: ["和真", "阿库娅", "惠惠", "达克妮斯"],
  },
  "clannad-after": {
    characters: ["冈崎朋也", "古河渚", "藤林杏", "一之濑琴美"],
  },
  kaguya: {
    characters: ["四宫辉夜", "白银御行", "藤原千花", "石上优"],
  },
  horimiya: {
    characters: ["堀京子", "宫村伊澄", "石川透", "吉川由纪"],
  },
  "cowboy-bebop": {
    characters: ["史派克", "杰特", "菲", "爱德", "艾因"],
  },
  "code-geass": {
    characters: ["鲁路修", "C.C.", "枢木朱雀", "娜娜莉", "卡莲"],
  },
  "psycho-pass": {
    characters: ["常守朱", "狡啮慎也", "槙岛圣护", "宜野座伸元"],
  },
  "gurren-lagann": {
    characters: ["西蒙", "卡米那", "优子", "妮娅"],
  },
  "gundam-witch": {
    characters: ["斯莱塔", "米奥莉奈", "古尔", "艾兰"],
  },
  "oshi-no-ko": {
    characters: ["星野爱", "阿库亚", "露比", "有马加奈", "黑川茜"],
  },
  "love-live": {
    characters: ["高坂穗乃果", "南小鸟", "园田海未", "西木野真姬"],
  },
  "bang-dream": {
    characters: ["高松灯", "千早爱音", "长崎爽世", "要乐奈"],
  },
  cyberpunk: {
    characters: ["大卫", "露西", "瑞贝卡", "曼恩"],
  },
  arcane: {
    characters: ["蔚", "金克丝", "凯特琳", "杰斯", "维克托"],
  },
  "fog-hill": {
    characters: ["闻人翊悬", "申屠子夜", "容成墨熙"],
  },
  "link-click": {
    characters: ["程小时", "陆光", "乔苓"],
  },
  "scissor-seven": {
    characters: ["伍六七", "鸡大保", "梅花十三"],
  },
  "made-in-abyss": {
    characters: ["莉可", "雷古", "娜娜奇", "黎明卿"],
  },
  "mob-psycho": {
    characters: ["影山茂夫", "灵幻新隆", "花泽辉气", "影山律"],
  },
  mushishi: {
    characters: ["银古", "淡幽"],
  },
  "death-note": {
    characters: ["夜神月", "L", "弥海砂", "夜神总一郎"],
  },
  "hunter-x-hunter": {
    characters: ["小杰", "奇犽", "酷拉皮卡", "雷欧力", "西索"],
  },
  "vinland-saga": {
    characters: ["托尔芬", "阿谢拉特", "克努特", "托尔兹"],
  },
  "one-punch-man": {
    characters: ["埼玉", "杰诺斯", "战栗的龙卷", "音速的索尼克"],
  },
  toradora: {
    characters: ["逢坂大河", "高须龙儿", "栉枝实乃梨", "川岛亚美"],
  },
  "k-on": {
    characters: ["平泽唯", "秋山澪", "田井中律", "琴吹䌷", "中野梓"],
  },
  railgun: {
    characters: ["御坂美琴", "白井黑子", "初春饰利", "佐天泪子"],
  },
  "fate-ubw": {
    characters: ["卫宫士郎", "远坂凛", "Saber", "Archer", "吉尔伽美什"],
  },
  "fate-heavens-feel": {
    characters: ["间桐樱", "卫宫士郎", "Saber Alter", "Rider"],
  },
  jojo: {
    characters: ["乔纳森", "空条承太郎", "乔瑟夫", "DIO", "乔鲁诺"],
  },
  "spirited-away": {
    characters: ["荻野千寻", "白龙", "汤婆婆", "无脸男"],
  },
  "monogatari-second": {
    characters: ["阿良良木历", "战场原黑仪", "羽川翼", "忍野忍", "千石抚子"],
  },
  naruto: {
    characters: ["漩涡鸣人", "宇智波佐助", "春野樱", "旗木卡卡西"],
  },
  bleach: {
    characters: ["黑崎一护", "朽木露琪亚", "石田雨龙", "井上织姬"],
  },
  conan: {
    characters: ["江户川柯南", "灰原哀", "毛利兰", "怪盗基德"],
  },
  apothecary: {
    characters: ["猫猫", "壬氏", "玉叶妃", "高顺"],
  },
  "slam-dunk": {
    characters: ["樱木花道", "流川枫", "赤木刚宪", "三井寿"],
  },
  "slam-dunk-movie": {
    characters: ["宫城良田", "樱木花道", "流川枫", "三井寿"],
  },
  "sailor-moon": {
    characters: ["月野兔", "地场卫", "水野亚美", "火野丽"],
  },
  "dragon-ball": {
    characters: ["孙悟空", "贝吉塔", "孙悟饭", "特兰克斯"],
  },
  "classroom-elite": {
    characters: ["绫小路清隆", "堀北铃音", "轻井泽惠", "龙园翔"],
  },
};

const characterRankings = [
  { name: "五条悟", animeId: "jujutsu", score: 99, cluster: "高智角色", source: "热血战斗", gender: "male" },
  { name: "雷姆", animeId: "re-zero", score: 98, cluster: "人气女主", source: "经典系列", gender: "female" },
  { name: "绫波丽", animeId: "eva", score: 97, cluster: "人气女主", source: "科幻机甲", gender: "female" },
  { name: "阿尼亚", animeId: "spy-family", score: 97, cluster: "治愈陪伴", source: "经典系列", gender: "female" },
  { name: "L", animeId: "death-note", score: 96, cluster: "高智角色", source: "经典系列", gender: "male" },
  { name: "芙莉莲", animeId: "frieren", score: 96, cluster: "治愈陪伴", source: "经典系列", gender: "female" },
  { name: "卫宫士郎", animeId: "fate-ubw", score: 95, cluster: "成长主角", source: "经典系列", gender: "male" },
  { name: "远坂凛", animeId: "fate-ubw", score: 95, cluster: "人气女主", source: "经典系列", gender: "female" },
  { name: "御坂美琴", animeId: "railgun", score: 95, cluster: "人气女主", source: "科幻机甲", gender: "female" },
  { name: "利威尔", animeId: "attack-on-titan", score: 94, cluster: "反英雄", source: "热血战斗", gender: "male" },
  { name: "空条承太郎", animeId: "jojo", score: 94, cluster: "反英雄", source: "经典系列", gender: "male" },
  { name: "影山茂夫", animeId: "mob-psycho", score: 93, cluster: "成长主角", source: "热血战斗", gender: "male" },
  { name: "后藤一里", animeId: "bocchi", score: 93, cluster: "反差喜剧", source: "恋爱青春", gender: "female" },
  { name: "阿良良木历", animeId: "monogatari-second", score: 92, cluster: "高智角色", source: "经典系列", gender: "male" },
  { name: "乔鲁诺", animeId: "jojo", score: 92, cluster: "成长主角", source: "经典系列", gender: "male" },
  { name: "埼玉", animeId: "one-punch-man", score: 92, cluster: "反差喜剧", source: "热血战斗", gender: "male" },
  { name: "程小时", animeId: "link-click", score: 91, cluster: "成长主角", source: "国创", gender: "male" },
  { name: "闻人翊悬", animeId: "fog-hill", score: 91, cluster: "成长主角", source: "国创", gender: "male" },
  { name: "薇尔莉特", animeId: "violet", score: 91, cluster: "治愈陪伴", source: "经典系列", gender: "female" },
  { name: "逢坂大河", animeId: "toradora", score: 90, cluster: "人气女主", source: "恋爱青春", gender: "female" },
  { name: "黑崎一护", animeId: "bleach", score: 90, cluster: "成长主角", source: "热血战斗", gender: "male" },
  { name: "猫猫", animeId: "apothecary", score: 90, cluster: "高智角色", source: "恋爱青春", gender: "female" },
  { name: "漩涡鸣人", animeId: "naruto", score: 89, cluster: "成长主角", source: "热血战斗", gender: "male" },
  { name: "灰原哀", animeId: "conan", score: 89, cluster: "高智角色", source: "经典系列", gender: "female" },
  { name: "樱木花道", animeId: "slam-dunk", score: 89, cluster: "成长主角", source: "经典系列", gender: "male" },
  { name: "月野兔", animeId: "sailor-moon", score: 89, cluster: "治愈陪伴", source: "恋爱青春", gender: "female" },
  { name: "奇犽", animeId: "hunter-x-hunter", score: 88, cluster: "反英雄", source: "热血战斗", gender: "male" },
  { name: "壬氏", animeId: "apothecary", score: 88, cluster: "高智角色", source: "恋爱青春", gender: "male" },
  { name: "明日香", animeId: "eva", score: 88, cluster: "人气女主", source: "科幻机甲", gender: "female" },
  { name: "三笠", animeId: "attack-on-titan", score: 88, cluster: "反英雄", source: "热血战斗", gender: "female" },
  { name: "阿库娅", animeId: "konosuba", score: 87, cluster: "反差喜剧", source: "经典系列", gender: "female" },
  { name: "贝吉塔", animeId: "dragon-ball", score: 87, cluster: "反英雄", source: "热血战斗", gender: "male" },
  { name: "流川枫", animeId: "slam-dunk", score: 87, cluster: "高智角色", source: "经典系列", gender: "male" },
  { name: "露琪亚", animeId: "bleach", score: 87, cluster: "人气女主", source: "热血战斗", gender: "female" },
  { name: "喜多郁代", animeId: "bocchi", score: 86, cluster: "治愈陪伴", source: "恋爱青春", gender: "female" },
  { name: "DIO", animeId: "jojo", score: 86, cluster: "反英雄", source: "经典系列", gender: "male" },
  { name: "宫城良田", animeId: "slam-dunk-movie", score: 86, cluster: "成长主角", source: "经典系列", gender: "male" },
  { name: "毛利兰", animeId: "conan", score: 85, cluster: "治愈陪伴", source: "恋爱青春", gender: "female" },
  { name: "约尔", animeId: "spy-family", score: 85, cluster: "反差喜剧", source: "经典系列", gender: "female" },
];

function searchUrl(platform, title) {
  const encoded = encodeURIComponent(title);
  return `${platform[2]}${encoded}`;
}

function wikiSearchUrl(query) {
  return `https://zh.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;
}

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function filmarksSearchUrl(query) {
  return `https://filmarks.com/search/animes?q=${encodeURIComponent(query)}`;
}

function animeHackSearchUrl(query) {
  return `https://anime.eiga.com/search/${encodeURIComponent(query)}/`;
}

function getMalId(item) {
  if (item.malId) return String(item.malId);
  const match = /^jikan-(\d+)$/.exec(item.id);
  if (match) return match[1];

  const normalizedTitle = item.title.toLowerCase();
  const matchedExternal = (window.externalAnimeData || []).find((entry) => {
    const titles = [entry.title, entry.englishTitle].filter(Boolean).map((title) => title.toLowerCase());
    return titles.includes(normalizedTitle);
  });
  if (matchedExternal?.malId) return String(matchedExternal.malId);
  const externalMatch = matchedExternal ? /^jikan-(\d+)$/.exec(matchedExternal.id) : null;
  return externalMatch ? externalMatch[1] : "";
}

function isMissingCover(cover) {
  return !cover || cover.includes("assets/anime-background.png");
}

function resolveCover(item) {
  if (!isMissingCover(item.cover)) return item.cover;
  const malId = getMalId(item);
  const externalMatch = malId
    ? (window.externalAnimeData || []).find((entry) => getMalId(entry) === malId)
    : null;
  return !isMissingCover(externalMatch?.cover) ? externalMatch.cover : fallbackCover;
}

function getCategoryViewItems(viewKey = activeCategoryView) {
  return categoryViews[viewKey]?.items || [];
}

function matchesCategoryItem(item, categoryItem) {
  if (!categoryItem) return true;
  if (typeof categoryItem.match === "function") return categoryItem.match(item);
  if (categoryItem.ids || categoryItem.terms) return matchesNamedCollection(item, categoryItem);
  if (categoryItem.ids) return categoryItem.ids.includes(item.id);
  return true;
}

function getNumericYear(item) {
  const year = Number(item.year);
  return Number.isFinite(year) ? year : 0;
}

function getNumericScore(item) {
  const score = Number(item.score);
  return Number.isFinite(score) ? score : 0;
}

function matchesYearFilter(item, yearFilterValue) {
  const year = getNumericYear(item);
  if (yearFilterValue === "all" || !year) return yearFilterValue === "all" || !!year;
  if (yearFilterValue === "2020s") return year >= 2020;
  if (yearFilterValue === "2010s") return year >= 2010 && year <= 2019;
  if (yearFilterValue === "2000s") return year >= 2000 && year <= 2009;
  if (yearFilterValue === "1990s") return year >= 1990 && year <= 1999;
  if (yearFilterValue === "classic") return year < 2000;
  return true;
}

function matchesSourceFilter(item, sourceValue) {
  if (sourceValue === "all") return true;
  if (sourceValue === "manga") return item.type === "Manga";
  if (sourceValue === "novel") return item.type === "Novel";
  if (sourceValue === "game") return item.type === "Game" || includesAnyTerm(item, ["游戏改", "game"]);
  if (sourceValue === "original") return item.type === "Original";
  if (sourceValue === "donghua") return item.type === "Donghua" || includesAnyTerm(item, ["国创", "donghua"]);
  if (sourceValue === "music") return item.type === "Idol" || includesAnyTerm(item, ["偶像", "音乐", "乐队", "idol", "music", "band"]);
  return true;
}

function sortAnimeList(items, sortValue) {
  const sorted = [...items];
  if (sortValue === "newest") {
    return sorted.sort((a, b) => getNumericYear(b) - getNumericYear(a) || getNumericScore(b) - getNumericScore(a));
  }
  if (sortValue === "oldest") {
    return sorted.sort((a, b) => getNumericYear(a) - getNumericYear(b) || getNumericScore(b) - getNumericScore(a));
  }
  if (sortValue === "title") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title, "zh-Hans-CN"));
  }
  return sorted.sort((a, b) => getNumericScore(b) - getNumericScore(a) || getNumericYear(b) - getNumericYear(a));
}

function getFilterState(options = {}) {
  const keyword = (options.keyword ?? searchInput.value).trim().toLowerCase();
  const type = options.type ?? typeFilter.value;
  const mood = options.mood ?? moodFilter.value;
  const year = options.year ?? yearFilter.value;
  const source = options.source ?? sourceFilter.value;
  const score = options.score ?? scoreFilter.value;
  const sort = options.sort ?? sortFilter.value;
  const activeCategory = options.ignoreCategory
    ? null
    : getCategoryViewItems().find((item) => item.key === activeCategoryKey);

  return { keyword, type, mood, year, source, score, sort, activeCategory };
}

function filterAnimeList(options = {}) {
  const { keyword, type, mood, year, source, score, sort, activeCategory } = getFilterState(options);
  const filtered = animeData.filter((item) => {
    const haystack = collectAnimeText(item);
    const keywordMatch = !keyword || haystack.includes(keyword);
    const typeMatch = type === "all" || item.type === type;
    const moodMatch = mood === "all" || item.moods.includes(mood);
    const yearMatch = matchesYearFilter(item, year);
    const sourceMatch = matchesSourceFilter(item, source);
    const scoreMatch = score === "all" || getNumericScore(item) >= Number(score);
    const categoryMatch = !activeCategory || matchesCategoryItem(item, activeCategory);
    return keywordMatch && typeMatch && moodMatch && yearMatch && sourceMatch && scoreMatch && categoryMatch;
  });
  return sortAnimeList(filtered, sort);
}

function renderCategories() {
  const currentView = categoryViews[activeCategoryView];
  const baseItems = filterAnimeList({ ignoreCategory: true });
  const categoryEntries = getCategoryViewItems()
    .map((categoryItem) => ({
      ...categoryItem,
      count: baseItems.filter((item) => matchesCategoryItem(item, categoryItem)).length,
    }))
    .filter((categoryItem) => categoryItem.count > 0 || categoryItem.key === activeCategoryKey);

  if (activeCategoryKey && !categoryEntries.some((item) => item.key === activeCategoryKey)) {
    activeCategoryKey = "";
  }

  document.querySelector("#categorySummary").textContent =
    `${currentView.summary} · 当前 ${categoryEntries.length} 类`;
  document.querySelector("#categoryModes").innerHTML = Object.entries(categoryViews)
    .map(
      ([key, view]) => `
      <button class="category-mode ${key === activeCategoryView ? "active" : ""}" data-category-view="${key}">
        ${view.label}
      </button>
    `,
    )
    .join("");

  document.querySelector("#categoryList").innerHTML = categoryEntries.length
    ? categoryEntries
        .map((categoryItem) => {
      return `
      <button class="category-item ${categoryItem.key === activeCategoryKey ? "active" : ""}" data-category-key="${categoryItem.key}">
        <span class="category-main">
          <strong>${categoryItem.name}</strong>
          <span>${categoryItem.desc}</span>
        </span>
        <span class="category-side">
          <em>${categoryItem.count}</em>
          <i data-lucide="chevron-right"></i>
        </span>
      </button>
    `;
        })
        .join("")
    : `<p class="category-empty">当前筛选下没有可用分类。</p>`;
  refreshIcons();
}

function renderPlatforms(activeTitle = "葬送的芙莉莲") {
  document.querySelector("#platformList").innerHTML = platforms
    .map(
      (platform) => `
      <a class="platform-item" href="${searchUrl(platform, activeTitle)}" target="_blank" rel="noreferrer">
        <span><strong>${platform[0]}</strong><span>${platform[1]}</span></span>
        <i data-lucide="external-link"></i>
      </a>
    `,
    )
    .join("");
}

function animateNumber(element, target) {
  const start = Number(element.textContent.replace(/\D/g, "")) || 0;
  const end = Number(target) || 0;
  const duration = 520;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(start + (end - start) * eased));
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function resetPage() {
  currentPage = 1;
}

function getFilteredAnime() {
  return filterAnimeList();
}

function renderAnime() {
  const items = getFilteredAnime();
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  const pageStart = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(pageStart, pageStart + pageSize);
  animateNumber(matchCount, items.length);

  grid.innerHTML = visibleItems
    .map(
      (item, index) => `
      <article class="anime-card" style="--card-index: ${index}">
        <div class="poster">
          <img src="${resolveCover(item)}" alt="${item.title} 海报" loading="lazy" onerror="this.onerror=null;this.src='${fallbackCover}'" />
          <span class="score">${item.score}</span>
        </div>
        <div class="card-body">
          <div class="card-head">
            <h3>${item.title}</h3>
            <div class="meta-row">
              <span class="pill rose">${item.type}</span>
              <span class="pill teal">${item.year}</span>
              <span class="pill gold">${item.moods[0]}</span>
            </div>
          </div>
          <div class="synopsis-block">
            <p>${item.summary.slice(0, 56)}${item.summary.length > 56 ? "..." : ""}</p>
          </div>
          <div class="tag-row">${item.genres.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-actions">
            <button class="primary-link" data-detail="${item.id}">查看途径</button>
            <button class="icon-button" data-save="${item.id}" title="收藏" aria-label="收藏 ${item.title}">
              <i data-lucide="${saved.includes(item.id) ? "bookmark-check" : "bookmark"}"></i>
            </button>
          </div>
        </div>
      </article>
    `,
    )
    .join("");

  if (!items.length) {
    grid.innerHTML = `<p class="saved-empty">没有匹配结果，可以换个关键词或重置筛选。</p>`;
  }
  renderPagination(items.length, totalPages);
  refreshIcons();
}

function renderTrailerFrame(target, trailer, title) {
  const embedUrl = trailer?.embedUrl || "";
  const watchUrl = trailer?.url || youtubeSearchUrl(`${title} anime trailer`);

  target.innerHTML = embedUrl
    ? `
      <div class="video-frame">
        <iframe
          src="${embedUrl}"
          title="${title} 预告片"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <a class="video-link" href="${watchUrl}" target="_blank" rel="noreferrer">打开视频页面</a>
    `
    : `
      <div class="video-empty with-poster">
        <img src="${fallbackCover}" alt="${title} 视频预览占位图" loading="lazy" />
        <div>
          <strong>暂无官方预告片</strong>
          <a href="${watchUrl}" target="_blank" rel="noreferrer">去 YouTube 搜索预告片</a>
        </div>
      </div>
    `;
}

async function getTrailer(item) {
  if (trailerCache.has(item.id)) return trailerCache.get(item.id);

  const malId = getMalId(item);
  if (!malId) {
    const fallbackTrailer = { embedUrl: "", url: youtubeSearchUrl(`${item.title} anime trailer`) };
    trailerCache.set(item.id, fallbackTrailer);
    return fallbackTrailer;
  }

  const response = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
  if (!response.ok) throw new Error("trailer");
  const payload = await response.json();
  const trailer = payload.data?.trailer || {};
  const detail = {
    embedUrl: trailer.embed_url || "",
    url: trailer.url || youtubeSearchUrl(`${item.englishTitle || item.title} anime trailer`),
  };
  trailerCache.set(item.id, detail);
  return detail;
}

async function loadTrailerForDetail(item) {
  const target = document.querySelector("#detailVideo");
  target.innerHTML = `<div class="video-empty"><span>正在加载预告片...</span></div>`;

  try {
    const trailer = await getTrailer(item);
    if (activeDetailId === item.id) {
      renderTrailerFrame(target, trailer, item.title);
    }
  } catch (error) {
    if (activeDetailId === item.id) {
      renderTrailerFrame(target, null, item.title);
    }
  }
}

function getPageNumbers(totalPages) {
  const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  if (currentPage <= 3) {
    pages.add(2);
    pages.add(3);
  }
  if (currentPage >= totalPages - 2) {
    pages.add(totalPages - 1);
    pages.add(totalPages - 2);
  }
  return [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
}

function renderPagination(totalItems, totalPages) {
  if (!pagination) return;
  if (totalItems <= pageSize) {
    pagination.innerHTML = "";
    return;
  }

  const pages = getPageNumbers(totalPages);
  let lastPage = 0;
  const pageButtons = pages
    .map((page) => {
      const gap = page - lastPage > 1 ? `<span class="page-ellipsis">...</span>` : "";
      lastPage = page;
      return `${gap}<button class="page-button ${page === currentPage ? "active" : ""}" data-page="${page}">${page}</button>`;
    })
    .join("");

  const from = (currentPage - 1) * pageSize + 1;
  const to = Math.min(totalItems, currentPage * pageSize);

  pagination.innerHTML = `
    <div class="pagination-meta">
      <strong>${totalItems}</strong>
      <span>部结果</span>
      <em>当前显示 ${from}-${to}</em>
    </div>
    <div class="pagination-nav">
      <button class="page-button page-arrow" data-page="${Math.max(1, currentPage - 1)}" ${currentPage === 1 ? "disabled" : ""}>上一页</button>
      ${pageButtons}
      <button class="page-button page-arrow" data-page="${Math.min(totalPages, currentPage + 1)}" ${currentPage === totalPages ? "disabled" : ""}>下一页</button>
    </div>
    <span class="page-status">第 ${currentPage} / ${totalPages} 页</span>
  `;
}

function renderSaved() {
  const savedItems = animeData.filter((item) => saved.includes(item.id));
  animateNumber(savedCount, savedItems.length);
  document.querySelector("#savedList").innerHTML = savedItems.length
    ? savedItems
        .map(
          (item) => `
        <button class="saved-item" data-detail="${item.id}">
          <span><strong>${item.title}</strong><span>${item.genres.slice(0, 2).join(" / ")}</span></span>
          <i data-lucide="chevron-right"></i>
        </button>
      `,
        )
        .join("")
    : `<p class="saved-empty">还没有收藏，看到想补的番可以点书签。</p>`;
  refreshIcons();
}

function renderSiteInfo() {
  const years = animeData
    .map((item) => Number(item.year))
    .filter((year) => Number.isFinite(year) && year > 1900);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  document.querySelector("#datasetCount").textContent = `${animeData.length} 部`;
  document.querySelector("#yearRange").textContent = `${minYear} - ${maxYear}`;
}

function renderCatalogCounts() {
  const catalog = [
    ["TV 动画", animeData.filter((item) => item.type === "TV").length],
    ["剧场版", animeData.filter((item) => item.type === "Movie").length],
    ["漫画改", animeData.filter((item) => item.type === "Manga").length],
    ["轻小说改", animeData.filter((item) => item.type === "Novel").length],
    ["游戏改", animeData.filter((item) => item.type === "Game").length],
    ["国创动画", animeData.filter((item) => item.type === "Donghua").length],
  ];

  document.querySelector("#catalogCounts").innerHTML = catalog
    .map(
      ([label, count]) => `
        <div class="catalog-item">
          <strong>${count}</strong>
          <span>${label}</span>
        </div>
      `,
    )
    .join("");
}

function renderRoute(routeName = "fate") {
  const route = routes[routeName] || routes.fate;
  document.querySelector("#routeSummary").textContent = `按系列顺序安排追番路线 · 共 ${route.steps.length} 步`;
  document.querySelector("#routeNote").textContent = route.summary;
  document.querySelector("#watchRoute").innerHTML = route.steps
    .map(
      (step, index) => `
        <li>
          <span class="route-index">${index + 1}</span>
          <div class="route-copy">
            <strong>${step.title}</strong>
            <span>${step.reason}</span>
          </div>
        </li>
      `,
    )
    .join("");
}

function renderCharacterRankings() {
  const gender = characterGenderFilter?.value || "all";
  const cluster = characterClusterFilter?.value || "all";
  const source = characterSourceFilter?.value || "all";
  const items = characterRankings
    .filter((item) => gender === "all" || item.gender === gender)
    .filter((item) => cluster === "all" || item.cluster === cluster)
    .filter((item) => source === "all" || item.source === source)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);

  const list = document.querySelector("#characterRankingList");
  list.innerHTML = items.length
    ? items
        .map((item, index) => {
          const anime = animeData.find((entry) => entry.id === item.animeId);
          const title = anime?.englishTitle || anime?.title || item.name;
          return `
            <button class="ranking-item" data-detail="${item.animeId}">
              <span class="ranking-order">${index + 1}</span>
              <span class="ranking-copy">
                <strong>${item.name}</strong>
                <span>${anime?.title || "未标注作品"} · ${item.cluster}</span>
                <span class="ranking-links">
                  <a href="${filmarksSearchUrl(title)}" target="_blank" rel="noreferrer">Filmarks 评价</a>
                  <a href="${animeHackSearchUrl(title)}" target="_blank" rel="noreferrer">Anime Hack 口碑</a>
                </span>
              </span>
              <span class="ranking-score">${item.score}</span>
            </button>
          `;
        })
        .join("")
    : `<p class="saved-empty">当前聚类下还没有角色条目。</p>`;
}

function renderPreview(images, title) {
  const uniqueImages = [...new Set(images.filter(Boolean))].slice(0, 5);
  document.querySelector("#detailPreview").innerHTML = uniqueImages
    .map(
      (image, index) => `
        <figure class="preview-tile">
          <img src="${image}" alt="${title} 预览图 ${index + 1}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackCover}'" />
          <span>${index === 0 ? "封面" : "预览"}</span>
        </figure>
      `,
    )
    .join("");
}

function renderCharacters(characters, title) {
  const list = characters.slice(0, 8);
  document.querySelector("#detailCharacters").innerHTML = list.length
    ? list
        .map(
          (character) => `
        <div class="character-card">
          <img src="${character.image || fallbackCover}" alt="${character.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackCover}'" />
          <div>
            <strong>${character.name}</strong>
            <span>${character.role || "角色"}</span>
            <a class="character-link" href="${wikiSearchUrl(`${character.name} ${title}`)}" target="_blank" rel="noreferrer">百科</a>
          </div>
        </div>
      `,
        )
        .join("")
    : `<p class="saved-empty">暂未获取到人物清单，可使用右侧百科入口继续查询。</p>`;
}

function renderWikiLinks(item) {
  const queryTitle = item.englishTitle || item.title;
  document.querySelector("#detailWikiLinks").innerHTML = `
    <a href="${wikiSearchUrl(`${item.title} 动画`)}" target="_blank" rel="noreferrer">中文百科</a>
    <a href="https://en.wikipedia.org/w/index.php?search=${encodeURIComponent(`${queryTitle} anime`)}" target="_blank" rel="noreferrer">英文百科</a>
    <a href="https://www.google.com/search?q=${encodeURIComponent(`${queryTitle} anime characters`) }" target="_blank" rel="noreferrer">人物检索</a>
  `;
}

async function loadDetailExtras(item) {
  const malId = getMalId(item);
  const fallbackImages = [resolveCover(item), fallbackCover];
  const fallbackCharacters = (localDetailData[item.id]?.characters || []).map((name) => ({
    name,
    role: "主要角色",
    image: "",
  }));

  if (!malId) {
    renderPreview(fallbackImages, item.title);
    renderCharacters(fallbackCharacters, item.title);
    return;
  }

  if (detailCache.has(malId)) {
    const cached = detailCache.get(malId);
    renderPreview(cached.images, item.title);
    renderCharacters(cached.characters, item.title);
    return;
  }

  renderCharacters(fallbackCharacters, item.title);

  try {
    const [picturesResponse, charactersResponse] = await Promise.all([
      fetch(`https://api.jikan.moe/v4/anime/${malId}/pictures`),
      fetch(`https://api.jikan.moe/v4/anime/${malId}/characters`),
    ]);

    const picturesPayload = picturesResponse.ok ? await picturesResponse.json() : { data: [] };
    const charactersPayload = charactersResponse.ok ? await charactersResponse.json() : { data: [] };
    const images = [
      resolveCover(item),
      ...(picturesPayload.data || []).map(
        (picture) => picture.jpg?.large_image_url || picture.jpg?.image_url,
      ),
    ];
    const characters = (charactersPayload.data || []).slice(0, 10).map((entry) => ({
      name: entry.character?.name || "未知角色",
      role: entry.role || "角色",
      image: entry.character?.images?.jpg?.image_url || "",
    }));

    const detail = { images, characters };
    detailCache.set(malId, detail);
    if (activeDetailId === item.id) {
      renderPreview(detail.images, item.title);
      renderCharacters(detail.characters, item.title);
    }
  } catch (error) {
    if (activeDetailId === item.id) {
      renderPreview(fallbackImages, item.title);
      renderCharacters(fallbackCharacters, item.title);
    }
  }
}

function openDetail(id) {
  const item = animeData.find((entry) => entry.id === id);
  if (!item) return;

  activeDetailId = item.id;
  document.querySelector("#detailMeta").textContent = `${item.type} / ${item.year} / ${item.moods.join("、")}`;
  document.querySelector("#detailTitle").textContent = item.title;
  document.querySelector("#detailSummary").textContent = item.summary;
  renderPreview([resolveCover(item)], item.title);
  document.querySelector("#detailVideo").innerHTML = "";
  renderCharacters([], item.title);
  renderWikiLinks(item);
  document.querySelector("#detailTags").innerHTML = item.genres
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  document.querySelector("#detailLinks").innerHTML = platforms
    .slice(0, 6)
    .map(
      (platform) =>
        `<a href="${searchUrl(platform, item.title)}" target="_blank" rel="noreferrer">${platform[0]}</a>`,
    )
    .join("");

  renderPlatforms(item.title);
  document.querySelector("#detailDialog").showModal();
  loadDetailExtras(item);
  loadTrailerForDetail(item);
}

function toggleSaved(id) {
  saved = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
  localStorage.setItem(savedKey, JSON.stringify(saved));
  renderAnime();
  renderSaved();
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getSearchTitle() {
  const typed = searchInput.value.trim();
  if (typed) return typed;
  const first = getFilteredAnime()[0];
  return first ? first.title : "anime";
}

function performSearch({ online = false } = {}) {
  resetPage();
  renderCategories();
  renderAnime();
  renderPlatforms(getSearchTitle());
  if (online) {
    runOnlineSearch();
  }
}

async function refreshSeasonalAnime() {
  if (!seasonalGrid) return;
  seasonalGrid.innerHTML = `<p class="saved-empty">正在更新本季新番...</p>`;

  try {
    const response = await fetch("https://api.jikan.moe/v4/seasons/now?limit=12");
    if (!response.ok) throw new Error("seasonal");
    const payload = await response.json();
    const results = payload.data || [];

    seasonalGrid.innerHTML = results.length
      ? results
          .map((item, index) => {
            const title = item.title_japanese || item.title;
            const cover = item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || "";
            const score = item.score ? item.score.toFixed(1) : "N/A";
            const genres = (item.genres || []).slice(0, 3).map((genre) => genre.name);
            return `
          <article class="anime-card" style="--card-index: ${index}">
            <div class="poster">
              <img src="${cover || fallbackCover}" alt="${title} 海报" loading="lazy" onerror="this.onerror=null;this.src='${fallbackCover}'" />
              <span class="score">${score}</span>
            </div>
            <div class="card-body">
              <div>
                <h3>${title}</h3>
                <div class="meta-row">
                  <span class="pill rose">${item.type || "Anime"}</span>
                  <span class="pill teal">${item.year || "新番"}</span>
                  <span class="pill gold">${item.status || "更新中"}</span>
                </div>
              </div>
              <p>${item.synopsis ? item.synopsis.slice(0, 130) : "本季新番条目，打开资料页可继续查看详情。"}</p>
              <div class="tag-row">${genres.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              <div class="card-actions">
                <a class="primary-link" href="${item.url}" target="_blank" rel="noreferrer">资料页</a>
                <a class="icon-button" href="${searchUrl(platforms[0], title)}" target="_blank" rel="noreferrer" title="平台搜索" aria-label="平台搜索 ${title}">
                  <i data-lucide="external-link"></i>
                </a>
              </div>
            </div>
          </article>
        `;
          })
          .join("")
      : `<p class="saved-empty">暂时没有获取到本季新番，可以稍后刷新。</p>`;
  } catch (error) {
    seasonalGrid.innerHTML = `<p class="saved-empty">本季新番实时更新暂时不可用，请稍后再试。</p>`;
  }
  refreshIcons();
}

async function runOnlineSearch() {
  const query = getSearchTitle();
  onlineGrid.innerHTML = `<p class="saved-empty">正在检索 ${query} 的公开资料...</p>`;
  const endpoint = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=6`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("network");
    const payload = await response.json();
    const results = payload.data || [];

    onlineGrid.innerHTML = results.length
      ? results
          .map((item) => {
            const title = item.title_japanese || item.title;
            const cover = item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || "";
            const score = item.score ? item.score.toFixed(1) : "N/A";
            const summary = item.synopsis ? item.synopsis.slice(0, 120) : "暂无简介，可打开资料页继续查看。";
            return `
          <article class="anime-card">
            <div class="poster">
              <img src="${cover || fallbackCover}" alt="${title} 海报" loading="lazy" onerror="this.onerror=null;this.src='${fallbackCover}'" />
              <span class="score">${score}</span>
            </div>
            <div class="card-body">
              <div>
                <h3>${title}</h3>
                <div class="meta-row">
                  <span class="pill rose">${item.type || "Anime"}</span>
                  <span class="pill teal">${item.year || "年份未知"}</span>
                </div>
              </div>
              <p>${summary}</p>
              <div class="card-actions">
                <a class="primary-link" href="${item.url}" target="_blank" rel="noreferrer">资料页</a>
                <a class="icon-button" href="${searchUrl(platforms[0], title)}" target="_blank" rel="noreferrer" title="平台搜索" aria-label="平台搜索 ${title}">
                  <i data-lucide="external-link"></i>
                </a>
              </div>
            </div>
          </article>
        `;
          })
          .join("")
      : `<p class="saved-empty">没有检索到结果，试试输入日文名、英文名或更短关键词。</p>`;
  } catch (error) {
    onlineGrid.innerHTML = `<p class="saved-empty">联网检索暂时不可用。你仍可使用右侧平台入口直接搜索 ${query}。</p>`;
  }
  refreshIcons();
}

document.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-detail]");
  const saveButton = event.target.closest("[data-save]");
  const categoryButton = event.target.closest("[data-category-key]");
  const categoryViewButton = event.target.closest("[data-category-view]");
  const routeButton = event.target.closest("[data-route]");
  const pageButton = event.target.closest("[data-page]");
  const statCard = event.target.closest("[data-jump]");

  if (detailButton) openDetail(detailButton.dataset.detail);
  if (saveButton) toggleSaved(saveButton.dataset.save);
  if (categoryViewButton) {
    activeCategoryView = categoryViewButton.dataset.categoryView;
    activeCategoryKey = "";
    resetPage();
    renderCategories();
    renderAnime();
  }
  if (categoryButton) {
    resetPage();
    activeCategoryKey = activeCategoryKey === categoryButton.dataset.categoryKey ? "" : categoryButton.dataset.categoryKey;
    renderCategories();
    renderAnime();
    const firstMatch = getFilteredAnime()[0];
    renderPlatforms(firstMatch ? firstMatch.title : getSearchTitle());
  }
  if (routeButton) {
    document.querySelectorAll(".route").forEach((button) => button.classList.remove("active"));
    routeButton.classList.add("active");
    renderRoute(routeButton.dataset.route);
  }
  if (pageButton && !pageButton.disabled) {
    currentPage = Number(pageButton.dataset.page);
    renderAnime();
    grid.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (statCard) {
    document.querySelector(`#${statCard.dataset.jump}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

searchInput.addEventListener("input", () => {
  resetPage();
  renderCategories();
  renderAnime();
  renderPlatforms(getSearchTitle());
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    performSearch({ online: true });
  }
});
searchSubmit.addEventListener("click", () => {
  performSearch({ online: true });
});
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  performSearch();
  searchInput.focus();
});
typeFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
  renderCategories();
});
moodFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
  renderCategories();
});
yearFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
  renderCategories();
});
sourceFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
  renderCategories();
});
scoreFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
  renderCategories();
});
sortFilter.addEventListener("change", () => {
  resetPage();
  renderAnime();
});
characterGenderFilter?.addEventListener("change", renderCharacterRankings);
characterClusterFilter?.addEventListener("change", renderCharacterRankings);
characterSourceFilter?.addEventListener("change", renderCharacterRankings);

document.querySelector("#resetFilters").addEventListener("click", () => {
  searchInput.value = "";
  typeFilter.value = "all";
  moodFilter.value = "all";
  yearFilter.value = "all";
  sourceFilter.value = "all";
  scoreFilter.value = "all";
  sortFilter.value = "score";
  resetPage();
  activeCategoryKey = "";
  activeCategoryView = "theme";
  renderCategories();
  renderAnime();
  renderPlatforms();
});

document.querySelector("#randomPick").addEventListener("click", () => {
  const item = animeData[Math.floor(Math.random() * animeData.length)];
  openDetail(item.id);
});

document.querySelector("#clearSaved").addEventListener("click", () => {
  if (!saved.length) return;
  const confirmed = window.confirm("确定要清空全部收藏吗？这个操作会移除当前保存的收藏列表。");
  if (!confirmed) return;
  saved = [];
  localStorage.setItem(savedKey, JSON.stringify(saved));
  renderAnime();
  renderSaved();
});

document.querySelector("#onlineSearch").addEventListener("click", runOnlineSearch);
document.querySelector("#refreshSeasonal").addEventListener("click", refreshSeasonalAnime);
document.querySelector("#closeDialog").addEventListener("click", () => {
  document.querySelector("#detailDialog").close();
});

document.addEventListener("keydown", (event) => {
  const statCard = event.target.closest?.("[data-jump]");
  if (statCard && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    document.querySelector(`#${statCard.dataset.jump}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

document.addEventListener("pointermove", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card) return;

  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
});

document.addEventListener("pointerout", (event) => {
  const card = event.target.closest(".anime-card");
  if (!card || card.contains(event.relatedTarget)) return;
  card.style.setProperty("--tilt-x", "0deg");
  card.style.setProperty("--tilt-y", "0deg");
});

function createMotionLayer() {
  const layer = document.querySelector("#motionLayer");
  if (!layer) return;

  const petals = Array.from({ length: 22 }, (_, index) => {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--petal-size", `${10 + Math.random() * 14}px`);
    petal.style.setProperty("--petal-duration", `${12 + Math.random() * 16}s`);
    petal.style.setProperty("--petal-delay", `${-(index * 0.8 + Math.random() * 8)}s`);
    petal.style.setProperty("--petal-drift", `${-120 + Math.random() * 240}px`);
    return petal;
  });

  const sparks = Array.from({ length: 34 }, () => {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.top = `${Math.random() * 82}%`;
    spark.style.setProperty("--spark-size", `${2 + Math.random() * 4}px`);
    spark.style.setProperty("--spark-duration", `${3 + Math.random() * 5}s`);
    spark.style.setProperty("--spark-delay", `${-Math.random() * 8}s`);
    return spark;
  });

  layer.replaceChildren(...petals, ...sparks);
}

createMotionLayer();
renderCategories();
renderPlatforms();
renderRoute();
renderAnime();
renderSaved();
renderCharacterRankings();
renderSiteInfo();
renderCatalogCounts();
refreshSeasonalAnime();
runOnlineSearch();
