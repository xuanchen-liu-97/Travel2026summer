// 2026Summer-trip 城市数据
// 新增城市：在数组末尾添加一个新对象，id 递增即可
// 字段说明：
//   spotsPreview : 卡片默认显示的 2-3 个代表性景点（带 emoji）
//   spotsDetail  : 展开后显示的完整景点列表，每项包含 name（景点名）和 note（一句说明）

const DATA = [
  // ── 英国 ──────────────────────────────────────────────
  {
    id: 1, city: "爱丁堡", cityEn: "Edinburgh",
    country: "英国", countryEn: "UK", region: "英国",
    days: 3, cats: ["历史","自然"], pri: "A",
    unique: "中世纪古堡矗立城中心、亚瑟王座死火山步行可达、苏格兰威士忌文化；英国境内最具异域感的城市",
    spotsPreview: ["🏰 爱丁堡城堡", "🌋 亚瑟王座", "🏛 卡尔顿山"],
    spotsDetail: [
      { name: "爱丁堡城堡", note: "苏格兰王权象征，王冠珠宝所在地，制高点俯瞰全城" },
      { name: "亚瑟王座", note: "死火山，市中心徒步45分钟可登顶，免费且视野绝佳" },
      { name: "卡尔顿山", note: "城市最佳全景观景点，日落时分尤为壮观" },
      { name: "皇家英里大道", note: "连接城堡与荷里路德宫的历史主轴，两侧布满博物馆与酒吧" },
      { name: "苏格兰国家博物馆", note: "免费入场，展览涵盖整个苏格兰历史与文化" },
    ]
  },
  {
    id: 2, city: "科茨沃尔德", cityEn: "Cotswolds",
    country: "英国", countryEn: "UK", region: "英国",
    days: 2, cats: ["自然","乡村"], pri: "B",
    unique: "蜂蜜色石灰石村庄，英格兰最典型的田园牧歌景观，伦敦开车2小时可达",
    spotsPreview: ["🌿 拜伯里村", "🏘 水上伯顿", "🌸 博顿昂西山"],
    spotsDetail: [
      { name: "拜伯里 Bibury", note: "阿灵顿排屋是英格兰最常被拍摄的村景之一" },
      { name: "水上伯顿 Bourton-on-the-Water", note: "小溪穿越村中央，有「英格兰小威尼斯」之称" },
      { name: "查平卡姆登 Chipping Campden", note: "保存最完好的科茨沃尔德集市小镇" },
      { name: "百老汇塔 Broadway Tower", note: "山顶瞭望塔，晴天可眺望13个郡" },
    ]
  },
  {
    id: 3, city: "巴斯", cityEn: "Bath",
    country: "英国", countryEn: "UK", region: "英国",
    days: 1, cats: ["历史","建筑"], pri: "B",
    unique: "全英唯一保存完好的罗马浴场遗址 + 乔治亚风格新月形建筑，可与科茨沃尔德联排",
    spotsPreview: ["🛁 罗马浴场", "🌙 皇家新月楼", "⛩ 巴斯修道院"],
    spotsDetail: [
      { name: "罗马浴场 Roman Baths", note: "公元1世纪建造，全球保存最完好的罗马温泉遗址" },
      { name: "皇家新月楼 Royal Crescent", note: "30栋联排乔治亚建筑围成弧形，UNESCO世界遗产" },
      { name: "巴斯修道院 Bath Abbey", note: "哥特式大窗，被称为「西部明灯」" },
      { name: "珀尔特尼桥 Pulteney Bridge", note: "桥上有商铺，与佛罗伦萨的旧桥同类型，英国仅此一处" },
      { name: "Thermae Bath Spa", note: "现代温泉中心，可在天台泡温泉俯瞰城市" },
    ]
  },
  {
    id: 4, city: "湖区", cityEn: "Lake District",
    country: "英国", countryEn: "UK", region: "英国",
    days: 2, cats: ["自然"], pri: "B",
    unique: "英格兰最美湖山风光，华兹华斯与彼得兔的故乡",
    spotsPreview: ["🏔 温德米尔湖", "🐰 山丘农场", "⛰ 斯科菲尔峰"],
    spotsDetail: [
      { name: "温德米尔湖 Windermere", note: "英格兰最大天然湖泊，可乘船游览" },
      { name: "山丘农场 Hill Top", note: "彼得兔作者毕翠克丝·波特的故居，国家名胜古迹" },
      { name: "斯科菲尔峰 Scafell Pike", note: "英格兰最高峰，登顶徒步约5-6小时" },
      { name: "葛拉斯米尔 Grasmere", note: "华兹华斯故居所在地，宁静的湖边小镇" },
    ]
  },
  {
    id: 5, city: "康沃尔", cityEn: "Cornwall",
    country: "英国", countryEn: "UK", region: "英国",
    days: 2, cats: ["自然","海岸"], pri: "C",
    unique: "英格兰最西端的荒野悬崖海岸，锡矿遗址UNESCO，凯尔特文化",
    spotsPreview: ["🌊 圣迈克尔山", "🌿 伊甸园项目", "🏖 圣艾夫斯"],
    spotsDetail: [
      { name: "圣迈克尔山 St Michael's Mount", note: "潮落时步行、潮涨时乘船才能抵达的海中城堡" },
      { name: "伊甸园项目 Eden Project", note: "世界最大温室花园，坐落于废弃锡矿坑中" },
      { name: "圣艾夫斯 St Ives", note: "艺术家聚居的渔村，白沙滩与清澈海水" },
      { name: "利泽德半岛 Lizard Peninsula", note: "英国本土最南端，荒野悬崖徒步" },
    ]
  },

  // ── 伊比利亚 ─────────────────────────────────────────
  {
    id: 6, city: "波尔图", cityEn: "Porto",
    country: "葡萄牙", countryEn: "Portugal", region: "伊比利亚",
    days: 3, cats: ["文化","建筑","美食"], pri: "A",
    unique: "葡式彩色瓷砖立面、杜罗河酒庄、世界最美书店之一Livraria Lello，浓郁南欧市井气息",
    spotsPreview: ["📚 莱罗书店", "🚂 圣本托车站", "🍷 加亚酒庄"],
    spotsDetail: [
      { name: "莱罗书店 Livraria Lello", note: "新哥特式旋转楼梯，据说是哈利·波特的灵感来源之一，需提前购票" },
      { name: "圣本托车站 São Bento", note: "车站内部覆盖两万块手绘蓝白瓷砖，描绘葡萄牙历史" },
      { name: "加亚新城酒庄 Vila Nova de Gaia", note: "杜罗河对岸，波特酒仓库集中地，可品酒参观" },
      { name: "里贝拉区 Ribeira", note: "河岸老城区，彩色楼房倒映杜罗河，UNESCO世界遗产" },
      { name: "路易一世大桥 Ponte Luís I", note: "铁桥上层步行可俯瞰整个老城，视野极佳" },
    ]
  },
  {
    id: 7, city: "里斯本", cityEn: "Lisbon",
    country: "葡萄牙", countryEn: "Portugal", region: "伊比利亚",
    days: 3, cats: ["文化","音乐","建筑"], pri: "A",
    unique: "全球仅存的城市叮当车爬坡系统、Fado忧郁民谣文化、贝伦塔与大航海时代历史",
    spotsPreview: ["🚃 28号叮当车", "🏰 贝伦塔", "🎵 Fado表演"],
    spotsDetail: [
      { name: "28号叮当车 Tram 28", note: "穿越阿尔法玛老城区爬坡，是交通也是景点" },
      { name: "贝伦塔 Torre de Belém", note: "16世纪大航海时代标志性建筑，UNESCO世界遗产" },
      { name: "热罗尼莫斯修道院 Jerónimos", note: "曼努埃尔式建筑巅峰，葡萄牙最壮观的宗教建筑" },
      { name: "阿尔法玛区 Alfama", note: "里斯本最古老的摩尔式街区，迷宫般的石板小巷" },
      { name: "Fado现场表演", note: "葡萄牙忧郁民谣，UNESCO非遗，阿尔法玛区酒馆林立" },
    ]
  },
  {
    id: 8, city: "巴塞罗那", cityEn: "Barcelona",
    country: "西班牙", countryEn: "Spain", region: "伊比利亚",
    days: 4, cats: ["建筑","艺术","海滩"], pri: "A",
    unique: "高迪建筑宇宙（圣家堂/米拉之家/桂尔公园）——全球唯一，加泰罗尼亚文化与地中海海滩并存",
    spotsPreview: ["⛪ 圣家堂", "🌿 桂尔公园", "🏠 米拉之家"],
    spotsDetail: [
      { name: "圣家堂 Sagrada Família", note: "高迪毕生之作，预计2026年完工，须提前数周购票" },
      { name: "桂尔公园 Park Güell", note: "彩色马赛克露台可俯瞰全城，部分区域需购票" },
      { name: "米拉之家 Casa Milà", note: "UNESCO，波浪形石材立面，屋顶烟囱造型奇特可上" },
      { name: "巴特略之家 Casa Batlló", note: "高迪最华丽的室内空间，骨骼与鳞片造型外立面" },
      { name: "巴塞罗内塔海滩 Barceloneta", note: "步行可达的地中海海滩，傍晚人气最旺" },
    ]
  },
  {
    id: 9, city: "塞维利亚", cityEn: "Seville",
    country: "西班牙", countryEn: "Spain", region: "伊比利亚",
    days: 3, cats: ["历史","文化","音乐"], pri: "A",
    unique: "弗拉门戈发源地、摩尔风格阿尔卡萨尔宫殿、欧洲最大哥特式大教堂",
    spotsPreview: ["🏯 阿尔卡萨尔", "💃 弗拉门戈", "⛪ 塞维利亚大教堂"],
    spotsDetail: [
      { name: "阿尔卡萨尔 Real Alcázar", note: "仍在使用的摩尔式王宫，UNESCO，《权游》多恩城取景地" },
      { name: "塞维利亚大教堂", note: "欧洲最大哥特式教堂，哥伦布长眠于此" },
      { name: "希拉尔达塔 Giralda", note: "原为清真寺宣礼塔，可登顶俯瞰全城" },
      { name: "圣克鲁斯区 Barrio Santa Cruz", note: "白墙窄巷的犹太老区，弗拉门戈酒吧云集" },
      { name: "西班牙广场 Plaza de España", note: "半圆形宏伟广场，瓷砖装饰展示西班牙各省" },
    ]
  },
  {
    id: 10, city: "马德里", cityEn: "Madrid",
    country: "西班牙", countryEn: "Spain", region: "伊比利亚",
    days: 3, cats: ["艺术","文化"], pri: "A",
    unique: "普拉多博物馆 + 索菲亚王后艺术中心（毕加索《格尔尼卡》原作），世界顶级艺术轴线",
    spotsPreview: ["🖼 普拉多博物馆", "✊ 格尔尼卡", "🌳 丽池公园"],
    spotsDetail: [
      { name: "普拉多博物馆 Prado", note: "委拉斯凯兹、哥雅、提香原作荟萃，世界最重要的艺术馆之一" },
      { name: "索菲亚王后艺术中心", note: "毕加索《格尔尼卡》唯一陈列地，馆藏20世纪西班牙艺术" },
      { name: "丽池公园 Retiro", note: "城市绿洲，水晶宫、划船湖，周末马德里人的聚集地" },
      { name: "马约尔广场 Plaza Mayor", note: "17世纪巴洛克广场，周边小酒馆是体验马德里夜生活的入口" },
      { name: "蒂森·博内米萨博物馆", note: "普拉多旁，从中世纪到当代一线贯穿，与普拉多互补" },
    ]
  },
  {
    id: 11, city: "格拉纳达", cityEn: "Granada",
    country: "西班牙", countryEn: "Spain", region: "伊比利亚",
    days: 2, cats: ["历史","建筑"], pri: "A",
    unique: "阿尔罕布拉宫——全球保存最完好的伊斯兰宫殿，摩尔文明遗珠",
    spotsPreview: ["🏯 阿尔罕布拉宫", "🌺 赫内拉利费花园", "🕌 阿尔拜辛区"],
    spotsDetail: [
      { name: "阿尔罕布拉宫 Alhambra", note: "14世纪摩尔王宫，精细灰泥雕刻无与伦比，须提前数周购票" },
      { name: "赫内拉利费花园 Generalife", note: "宫殿夏宫，水渠与花园的伊斯兰天堂意象" },
      { name: "阿尔拜辛区 Albaicín", note: "山坡上的摩尔式老城区，UNESCO，可俯瞰阿尔罕布拉宫全景" },
      { name: "萨克罗蒙特 Sacromonte", note: "洞穴弗拉门戈表演聚集地，格拉纳达独有的吉普赛文化区" },
    ]
  },

  // ── 西欧 ─────────────────────────────────────────────
  {
    id: 12, city: "巴黎", cityEn: "Paris",
    country: "法国", countryEn: "France", region: "西欧",
    days: 5, cats: ["艺术","文化","建筑","美食"], pri: "A",
    unique: "卢浮宫/奥赛博物馆/塞纳河/蒙马特——文明的蒸馏，无论去多少次层次感都挖不完",
    spotsPreview: ["🖼 卢浮宫", "🎨 奥赛博物馆", "⛪ 圣母院"],
    spotsDetail: [
      { name: "卢浮宫 Louvre", note: "世界最大博物馆，蒙娜丽莎与米洛的维纳斯的家，至少预留半天" },
      { name: "奥赛博物馆 Musée d'Orsay", note: "印象派圣殿，莫奈、雷诺阿、梵高最集中的馆藏" },
      { name: "蒙马特 Montmartre", note: "艺术家聚居的山丘，圣心堂与小咖啡馆，巴黎最有波西米亚气息之处" },
      { name: "塞纳河游船 Seine Cruise", note: "傍晚出发，铁塔亮灯一刻是巴黎最浪漫的时刻" },
      { name: "圣日耳曼德佩区", note: "左岸文人咖啡馆传统（花神、双叟），书店与精品画廊混杂" },
    ]
  },
  {
    id: 13, city: "科尔马", cityEn: "Colmar",
    country: "法国", countryEn: "France", region: "西欧",
    days: 1, cats: ["建筑","文化"], pri: "B",
    unique: "阿尔萨斯中世纪木框架小镇，宫崎骏《哈尔的移动城堡》灵感原型之一",
    spotsPreview: ["🏘 小威尼斯", "🎨 翁德林登博物馆", "🍷 阿尔萨斯葡萄酒"],
    spotsDetail: [
      { name: "小威尼斯 Petite Venise", note: "运河穿越彩色半木结构房屋，科尔马最具代表性的景观" },
      { name: "翁德林登博物馆 Unterlinden", note: "馆藏格吕内瓦尔德《伊森海姆祭坛画》，中世纪绘画杰作" },
      { name: "圣马丁教堂 Collegiate Church", note: "哥特式红砂岩教堂，俯瞰整个老城" },
      { name: "商人街 Rue des Marchands", note: "最完整的中世纪商业街，两侧全是彩色木框架建筑" },
    ]
  },
  {
    id: 14, city: "普罗旺斯", cityEn: "Provence",
    country: "法国", countryEn: "France", region: "西欧",
    days: 2, cats: ["自然","文化"], pri: "B",
    unique: "7月薰衣草花海正值旺季！罗马遗址与法式乡村市集，梵高的色彩灵感之地",
    spotsPreview: ["💜 瓦朗索尔花田", "🏛 嘉德水道桥", "🌻 阿尔勒梵高之路"],
    spotsDetail: [
      { name: "瓦朗索尔 Valensole", note: "7月是薰衣草最盛期，最大最纯粹的花田，摄影圣地" },
      { name: "嘉德水道桥 Pont du Gard", note: "罗马时代三层石拱桥，UNESCO，保存最完好的古罗马工程之一" },
      { name: "阿尔勒 Arles", note: "梵高居住两年，画了《星月夜》草稿，古罗马圆形剧场仍在使用" },
      { name: "戈尔德 Gordes", note: "悬崖边的石砌村庄，普罗旺斯最美村庄之一" },
      { name: "埃克斯昂普罗旺斯 Aix", note: "塞尚的故乡，优雅的大学城，周二、四、六有农贸市集" },
    ]
  },
  {
    id: 15, city: "卢瓦尔河谷", cityEn: "Loire Valley",
    country: "法国", countryEn: "France", region: "西欧",
    days: 2, cats: ["历史","建筑"], pri: "B",
    unique: "欧洲最密集的文艺复兴城堡群（UNESCO），骑行穿越城堡体验独一无二",
    spotsPreview: ["🏰 香波尔城堡", "🏰 舍农索城堡", "🚴 河谷骑行"],
    spotsDetail: [
      { name: "香波尔城堡 Chambord", note: "法国最大城堡，达芬奇参与设计的双螺旋楼梯" },
      { name: "舍农索城堡 Chenonceau", note: "横跨谢尔河的水上城堡，「六位女性的城堡」" },
      { name: "昂布瓦斯城堡 Amboise", note: "达芬奇长眠于此（克洛吕塞城堡），俯瞰卢瓦尔河" },
      { name: "河谷骑行路线", note: "沿河有专属自行车道，以骑行方式串联城堡是最地道的体验" },
    ]
  },
  {
    id: 16, city: "阿姆斯特丹", cityEn: "Amsterdam",
    country: "荷兰", countryEn: "Netherlands", region: "西欧",
    days: 3, cats: ["艺术","建筑","文化"], pri: "A",
    unique: "梵高博物馆+国立博物馆，17世纪黄金时代运河屋，全球最有特色的都市骑行文化",
    spotsPreview: ["🌻 梵高博物馆", "🏛 国立博物馆", "🚲 运河骑行"],
    spotsDetail: [
      { name: "梵高博物馆 Van Gogh Museum", note: "全球梵高原作最密集之处，需提前数周购票" },
      { name: "国立博物馆 Rijksmuseum", note: "伦勃朗《夜巡》、维米尔《倒牛奶的女仆》，荷兰黄金时代全貌" },
      { name: "安妮之家 Anne Frank House", note: "犹太少女安妮弗兰克藏身处，历史震撼感极强，须提前购票" },
      { name: "运河环带 Canal Ring", note: "UNESCO，乘船或骑车穿越17世纪运河屋是阿姆斯特丹最地道的体验" },
      { name: "约旦区 Jordaan", note: "最有生活气息的老街区，独立咖啡馆、画廊与集市" },
    ]
  },
  {
    id: 17, city: "布鲁日", cityEn: "Bruges",
    country: "比利时", countryEn: "Belgium", region: "西欧",
    days: 2, cats: ["历史","建筑"], pri: "B",
    unique: "比阿姆斯特丹更原始的中世纪运河城市（UNESCO），比利时啤酒与巧克力文化",
    spotsPreview: ["🏛 钟楼", "⛵ 运河游船", "🍺 半月啤酒厂"],
    spotsDetail: [
      { name: "钟楼 Belfry of Bruges", note: "366级台阶登顶，俯瞰布鲁日中世纪全景，UNESCO" },
      { name: "运河游船", note: "30分钟水上游览，从水面视角看中世纪建筑倒影" },
      { name: "半月啤酒厂 Halve Maan", note: "1856年创立的家族啤酒厂，有地下输酒管道横穿整个城市" },
      { name: "格罗宁格博物馆 Groeningemuseum", note: "弗拉芒原始派绘画（凡艾克、梅姆灵），全球馆藏最集中之处" },
    ]
  },

  // ── 意大利 ───────────────────────────────────────────
  {
    id: 18, city: "罗马", cityEn: "Rome",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 4, cats: ["历史","建筑","艺术"], pri: "A",
    unique: "斗兽场/罗马广场/梵蒂冈——人类文明两千年最密集的露天博物馆",
    spotsPreview: ["🏟 斗兽场", "🕍 梵蒂冈博物馆", "⛲ 特莱维喷泉"],
    spotsDetail: [
      { name: "斗兽场 Colosseum", note: "公元72年建造，全球保存最完好的古罗马建筑，需提前购票" },
      { name: "梵蒂冈博物馆 & 西斯廷礼拜堂", note: "米开朗基罗天顶画，需提前购票，人流极大" },
      { name: "罗马广场 Roman Forum", note: "古罗马政治中心遗址，与斗兽场联票" },
      { name: "特莱维喷泉 Trevi Fountain", note: "巴洛克式喷泉，投币许愿的传统源自费里尼电影" },
      { name: "万神殿 Pantheon", note: "公元125年建造，穹顶无钢筋承重，建筑工程奇迹" },
    ]
  },
  {
    id: 19, city: "威尼斯", cityEn: "Venice",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 3, cats: ["建筑","文化"], pri: "A",
    unique: "118个小岛、无汽车的水上城市，这件事在地球上只有这一处",
    spotsPreview: ["🚤 贡多拉", "🏛 圣马可广场", "🌉 叹息桥"],
    spotsDetail: [
      { name: "圣马可大教堂 St Mark's Basilica", note: "拜占庭金色马赛克覆盖内部，视觉震撼" },
      { name: "大运河 Grand Canal", note: "乘1号公交船从头到尾，两岸全是文艺复兴宫殿" },
      { name: "里亚托桥 Rialto Bridge", note: "大运河上的商业中心桥梁，桥上有市集" },
      { name: "穆拉诺岛 Murano", note: "玻璃工艺岛，可观看现场吹制玻璃表演" },
      { name: "总督宫 Doge's Palace", note: "哥特式宫殿，叹息桥连通其地牢，卡萨诺瓦曾越狱于此" },
    ]
  },
  {
    id: 20, city: "多洛米蒂", cityEn: "Dolomites",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 4, cats: ["自然"], pri: "A",
    unique: "白云石垂直峭壁+高山牧场（UNESCO）——与普通阿尔卑斯山完全不同的外星地貌，徒步天堂",
    spotsPreview: ["⛰ 三峰山", "🌄 塞塞达山脊", "🏔 布莱斯湖"],
    spotsDetail: [
      { name: "三峰山 Tre Cime di Lavaredo", note: "三根垂直岩柱，多洛米蒂最具代表性地标，环形徒步约3小时" },
      { name: "塞塞达山脊 Seceda", note: "缆车直达，尖耸山脊配高山牧场，摄影构图极佳" },
      { name: "布莱斯湖 Lago di Braies", note: "翡翠绿湖泊配峭壁倒影，日出时分是最佳拍摄时间" },
      { name: "阿尔佩迪西乌西 Alpe di Siusi", note: "欧洲最大高山牧场，7月满是野花" },
      { name: "科尔蒂纳 Cortina d'Ampezzo", note: "多洛米蒂最优雅的山镇，各条徒步路线的出发基地" },
    ]
  },
  {
    id: 21, city: "佛罗伦萨", cityEn: "Florence",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 3, cats: ["艺术","建筑","历史"], pri: "A",
    unique: "文艺复兴发源地：乌菲兹美术馆（波提切利）、米开朗基罗《大卫》原作",
    spotsPreview: ["🖼 乌菲兹美术馆", "💪 大卫像", "🌅 米开朗基罗广场"],
    spotsDetail: [
      { name: "乌菲兹美术馆 Uffizi", note: "波提切利《维纳斯诞生》《春》原作所在地，需提前购票" },
      { name: "学院美术馆 Accademia", note: "米开朗基罗《大卫》真迹，必须提前预约，雕像震撼程度远超图片" },
      { name: "米开朗基罗广场", note: "傍晚观日落俯瞰整个佛罗伦萨，百合城最佳全景点" },
      { name: "圣玛利亚大教堂 Duomo", note: "布鲁内莱斯基穹顶是文艺复兴工程的起点，可爬顶俯瞰" },
      { name: "旧桥 Ponte Vecchio", note: "桥上全是珠宝金匠店，是中世纪以来的传统" },
    ]
  },
  {
    id: 22, city: "五渔村", cityEn: "Cinque Terre",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 2, cats: ["自然","海岸","建筑"], pri: "A",
    unique: "利古里亚海崖上五座彩色渔村（UNESCO），只可步行或乘船，地中海最原始海岸面貌",
    spotsPreview: ["🌈 马纳罗拉", "🥾 蔚蓝步道", "🍋 柠檬酒"],
    spotsDetail: [
      { name: "马纳罗拉 Manarola", note: "五村中色彩最鲜艳，傍晚夕阳打在彩房上是经典画面" },
      { name: "韦尔纳扎 Vernazza", note: "有小港湾，被认为是五村中保存最完好的渔村" },
      { name: "蔚蓝步道 Sentiero Azzurro", note: "串联五村的海岸步道，里奥马焦雷至马纳罗拉段最经典" },
      { name: "蒙泰罗索 Monterosso", note: "五村中最大、唯一有宽阔沙滩的渔村，适合休闲" },
    ]
  },
  {
    id: 23, city: "阿马尔菲海岸", cityEn: "Amalfi Coast",
    country: "意大利", countryEn: "Italy", region: "意大利",
    days: 2, cats: ["自然","海岸"], pri: "B",
    unique: "悬崖与地中海之间最戏剧性的海岸线（UNESCO），波西塔诺小镇视觉冲击极强",
    spotsPreview: ["🏘 波西塔诺", "🛵 SS163海岸公路", "🍋 柠檬园"],
    spotsDetail: [
      { name: "波西塔诺 Positano", note: "粉彩房屋叠落悬崖，游轮中能看到的典型意大利南部画面" },
      { name: "阿马尔菲镇 Amalfi", note: "中世纪造纸传统，大教堂庭院值得一看" },
      { name: "拉维洛 Ravello", note: "悬崖顶端的小镇，卢福洛别墅花园可俯瞰整段海岸" },
      { name: "众神之路 Path of the Gods", note: "最著名的徒步路线，悬崖边行走俯瞰蔚蓝海岸" },
    ]
  },

  // ── 中欧 ─────────────────────────────────────────────
  {
    id: 24, city: "布拉格", cityEn: "Prague",
    country: "捷克", countryEn: "Czech Republic", region: "中欧",
    days: 3, cats: ["历史","建筑","文化"], pri: "A",
    unique: "保存最完好的中世纪城市核心（二战几乎未受损），哥特/巴洛克/新艺术风格并存",
    spotsPreview: ["🏰 布拉格城堡", "🌉 查理大桥", "🕐 天文钟"],
    spotsDetail: [
      { name: "布拉格城堡 Prague Castle", note: "世界最大城堡建筑群，内含圣维特大教堂，俯瞰全城" },
      { name: "查理大桥 Charles Bridge", note: "30座巴洛克圣徒雕像守护的石桥，日出时分最无游客打扰" },
      { name: "天文钟 Astronomical Clock", note: "每小时整点有骷髅机械表演，1410年建造至今仍在运转" },
      { name: "约瑟夫区 Josefov", note: "中欧保存最完好的犹太老区，六座犹太会堂集中于此" },
      { name: "马拉斯特拉纳 Malá Strana", note: "小城区，巴洛克宫殿与花园，捷克精酿啤酒馆聚集地" },
    ]
  },
  {
    id: 25, city: "布达佩斯", cityEn: "Budapest",
    country: "匈牙利", countryEn: "Hungary", region: "中欧",
    days: 3, cats: ["建筑","文化","温泉"], pri: "A",
    unique: "多瑙河两岸壮丽建筑（UNESCO）、塞切尼温泉浴场——泡温泉文化在欧洲独一份",
    spotsPreview: ["🏛 国会大厦", "♨️ 塞切尼温泉", "🌉 链桥"],
    spotsDetail: [
      { name: "匈牙利国会大厦", note: "多瑙河畔的新哥特式建筑，全球第三大议会大厦，内部可参观" },
      { name: "塞切尼温泉 Széchenyi", note: "1913年建造的巴洛克温泉浴场，户外泡池全年开放" },
      { name: "链桥 Chain Bridge", note: "连接布达与佩斯，1849年建造，布达佩斯统一的象征" },
      { name: "渔人堡 Fisherman's Bastion", note: "新罗曼式城墙塔楼，俯瞰多瑙河与国会大厦全景的最佳点" },
      { name: "废墟酒吧 Ruin Bars", note: "废弃建筑改造的文化夜店，Szimpla Kert是最知名的一家" },
    ]
  },
  {
    id: 26, city: "哈尔施塔特", cityEn: "Hallstatt",
    country: "奥地利", countryEn: "Austria", region: "中欧",
    days: 1, cats:["自然","建筑"], pri: "B",
    unique: "阿尔卑斯湖畔盐矿小镇（UNESCO），中国某省曾原样复制此地，一天足矣",
    spotsPreview: ["🏘 湖畔村景", "⛏ 盐矿参观", "🏔 达赫施泰因"],
    spotsDetail: [
      { name: "哈尔施塔特村", note: "湖畔彩色房屋与倒影，从湖上拍摄是最经典的构图" },
      { name: "盐矿 Salt Mine", note: "人类最古老的盐矿之一，有世界最古老木质水管道" },
      { name: "达赫施泰因冰洞 Dachstein", note: "冰川内部洞穴，缆车可达，温度年均零下" },
      { name: "Skywalk观景台", note: "悬空玻璃观景台，可俯瞰整个哈尔施塔特湖" },
    ]
  },
  {
    id: 27, city: "萨尔茨堡", cityEn: "Salzburg",
    country: "奥地利", countryEn: "Austria", region: "中欧",
    days: 2, cats: ["音乐","历史","建筑"], pri: "B",
    unique: "莫扎特出生地、《音乐之声》拍摄地，可与哈尔施塔特联排",
    spotsPreview: ["🎵 莫扎特故居", "🎬 音乐之声取景地", "🏰 霍亨萨尔茨堡"],
    spotsDetail: [
      { name: "霍亨萨尔茨堡 Hohensalzburg", note: "中欧保存最完好的中世纪城堡之一，缆车可上" },
      { name: "莫扎特出生地", note: "莫扎特1756年出生于此，现为博物馆，格特莱迪街9号" },
      { name: "米拉贝尔花园 Mirabell", note: "《音乐之声》中多处场景取景地，花圃与喷泉" },
      { name: "萨尔茨堡音乐节", note: "7月底至8月下旬举办，是欧洲最重要的古典音乐节之一，需提前订票" },
    ]
  },
  {
    id: 28, city: "少女峰地区", cityEn: "Jungfrau Region",
    country: "瑞士", countryEn: "Switzerland", region: "中欧",
    days: 2, cats: ["自然"], pri: "B",
    unique: "欧洲屋脊（3454m），登山列车直达冰川，格林德瓦尔德峡谷观景台极为震撼",
    spotsPreview: ["🏔 少女峰顶", "🚂 登山火车", "🌄 格林德瓦尔德"],
    spotsDetail: [
      { name: "少女峰顶 Jungfraujoch", note: "欧洲最高火车站（3454m），冰川全景，需一整天，提前购票可省钱" },
      { name: "格林德瓦尔德 Grindelwald First", note: "First Cliff Walk玻璃悬空步道，缆车直达，近年最受欢迎的新景观" },
      { name: "劳特布鲁嫩 Lauterbrunnen", note: "72条瀑布的山谷，被认为是托尔金创作精灵之林的灵感原型之一" },
      { name: "曼里兴全景步道 Männlichen", note: "缆车上山，沿脊步行俯瞰整个少女峰群" },
    ]
  },

  // ── 南欧 ─────────────────────────────────────────────
  {
    id: 29, city: "梅黛奥拉", cityEn: "Meteora",
    country: "希腊", countryEn: "Greece", region: "南欧",
    days: 1, cats: ["自然","历史","宗教"], pri: "A",
    unique: "修道院建在垂直岩柱顶端（UNESCO）——地球上存在感最强的建筑之一，值得专程前往",
    spotsPreview: ["⛪ 大气象修道院", "🌅 日落观景点", "🧗 岩柱步道"],
    spotsDetail: [
      { name: "大气象修道院 Great Meteoron", note: "六座开放修道院中最大最古老的，14世纪建于最高岩柱顶端" },
      { name: "瓦尔拉姆修道院 Varlaam", note: "壁画保存最精美，仅有143级台阶，相对容易攀登" },
      { name: "卢萨努修道院 Roussanou", note: "仅由修女驻守，悬崖边缘位置视角最为戏剧性" },
      { name: "日落观景点", note: "从卡兰巴卡镇附近山道可拍到修道院与橙色天空的经典画面" },
    ]
  },
  {
    id: 30, city: "雅典", cityEn: "Athens",
    country: "希腊", countryEn: "Greece", region: "南欧",
    days: 3, cats: ["历史","建筑"], pri: "A",
    unique: "帕特农神庙、古阿哥拉——西方文明发源地，两千五百年文明活遗址",
    spotsPreview: ["🏛 帕特农神庙", "🏺 国家考古博物馆", "🌆 普拉卡老城"],
    spotsDetail: [
      { name: "卫城 Acropolis & 帕特农神庙", note: "公元前447年建造，西方文明最具象征意义的建筑，清晨人少" },
      { name: "国家考古博物馆", note: "全球最重要的古希腊文物馆，阿伽门农黄金面具馆藏于此" },
      { name: "古代阿哥拉 Ancient Agora", note: "古希腊城邦的政治与商业中心，苏格拉底曾在此论道" },
      { name: "普拉卡区 Plaka", note: "卫城山脚的新古典主义老城区，石板路与小餐厅" },
      { name: "蒙纳斯提拉基 Monastiraki", note: "跳蚤市场与街头小吃，雅典最接地气的区域" },
    ]
  },
  {
    id: 31, city: "圣托里尼", cityEn: "Santorini",
    country: "希腊", countryEn: "Greece", region: "南欧",
    days: 3, cats: ["自然","建筑","海岸"], pri: "B",
    unique: "火山口内白蓝建筑+爱琴海日落，全球最具辨识度的景观之一",
    spotsPreview: ["🌅 伊亚日落", "🏊 红沙滩", "🍷 火山葡萄酒"],
    spotsDetail: [
      { name: "伊亚 Oia 日落", note: "全球最知名日落观景地，日落前2小时卡位，蓝顶教堂配橙色天空" },
      { name: "菲拉 Fira", note: "悬崖上的首府，缆车下至老港，骑驴上山是传统体验" },
      { name: "红沙滩 Red Beach", note: "火山岩形成的红色砾石海滩，需步行15分钟才能抵达" },
      { name: "阿克罗蒂里 Akrotiri", note: "被火山灰掩埋的青铜时代城市遗址，「爱琴海的庞贝」" },
    ]
  },
  {
    id: 32, city: "杜布罗夫尼克", cityEn: "Dubrovnik",
    country: "克罗地亚", countryEn: "Croatia", region: "南欧",
    days: 2, cats: ["历史","建筑","海岸"], pri: "B",
    unique: "完整中世纪城墙环绕的老城（UNESCO），亚得里亚海的珍珠，《权游》君临城取景地",
    spotsPreview: ["🏰 城墙步道", "🚡 山顶缆车", "🎬 权游取景地"],
    spotsDetail: [
      { name: "城墙步道 City Walls", note: "2公里完整城墙环绕老城，步行约2小时，俯瞰亚得里亚海" },
      { name: "斯特拉顿大道 Stradun", note: "老城中央大道，石灰岩地面因百年踩踏已光滑如镜" },
      { name: "缆车 Cable Car", note: "上山观景台俯瞰老城与海岛全景，是理解城市格局的最快方式" },
      { name: "权游取景地", note: "明切塔堡（龙石宫）、洛夫里耶纳茨堡（红堡）均可参观" },
    ]
  },
  {
    id: 33, city: "普利特维采湖", cityEn: "Plitvice Lakes",
    country: "克罗地亚", countryEn: "Croatia", region: "南欧",
    days: 1, cats: ["自然"], pri: "B",
    unique: "16个梯级瀑布与翡翠湖泊（UNESCO），自然界最像幻境的景色",
    spotsPreview: ["💧 大瀑布", "🟢 翡翠湖泊", "🚤 湖上渡船"],
    spotsDetail: [
      { name: "大瀑布 Veliki Slap", note: "克罗地亚最高瀑布（78m），下湖区核心景观" },
      { name: "上湖区", note: "较宁静，大片翡翠湖泊连缀，木栈道穿行水面之上" },
      { name: "下湖区", note: "瀑布最密集，游客最多，湖水因矿物质呈现蓝绿渐变色" },
      { name: "湖上渡船", note: "免费摆渡船串联上下湖区，节省体力" },
    ]
  },
];
