import { Authors, Author } from "../../../interfaces/author/author.interface"

const authors: Authors =
  [
    { id: 5, name: "ツルゲーネフ イワン" },
    { id: 6, name: "二葉亭 四迷" },
    { id: 7, name: "藤下 真潮" },
    { id: 8, name: "島木 健作" },
    { id: 9, name: "ドイル アーサー・コナン" },
    { id: 10, name: "大久保 ゆう" },
    { id: 11, name: "立原 道造" },
    { id: 12, name: "素木 しづ" },
    { id: 13, name: "八木 重吉" },
    { id: 14, name: "村山 槐多" },
    { id: 16, name: "小中 千昭" },
    { id: 17, name: "ウィード グスターフ" },
    { id: 19, name: "アンデルセン ハンス・クリスチャン" },
    { id: 20, name: "渡辺 温" },
    { id: 21, name: "白田 秀彰" },
    { id: 22, name: "三島 霜川" },
    { id: 23, name: "徳田 秋声" },
    { id: 25, name: "有島 武郎" },
    { id: 26, name: "中原 中也" },
    { id: 27, name: "小島 烏水" },
    { id: 28, name: "早見 秋" },
    { id: 29, name: "レイモンド  エリック" },
    { id: 30, name: "山形 浩生" },
    { id: 31, name: "葉山 嘉樹" },
    { id: 32, name: "植松 真人" },
    { id: 34, name: "内村 鑑三" },
    { id: 35, name: "太宰 治" },
    { id: 37, name: "黒島 伝治" },
    { id: 38, name: "国木田 独歩" },
    { id: 40, name: "織田 作之助" },
    { id: 41, name: "徳永 真一" },
    { id: 42, name: "寺田 寅彦" },
    { id: 43, name: "吉行 エイスケ" },
    { id: 46, name: "鈴木 行三" },
    { id: 47, name: "長尾 高弘" },
    { id: 48, name: "南部 修太郎" },
    { id: 50, name: "泉 鏡花" },
    { id: 51, name: "幸田 露伴" },
    { id: 52, name: "紫式部 " },
    { id: 54, name: "佐野 良二" },
    { id: 55, name: "富田 倫生" },
    { id: 56, name: "平田 剛士" },
    { id: 57, name: "福田 英子" },
    { id: 58, name: "伊藤 左千夫" },
    { id: 59, name: "高橋 悠治" },
    { id: 61, name: "橋本 進吉" },
    { id: 62, name: "西川 光男" },
    { id: 63, name: "宮武 外骨" },
    { id: 64, name: "樋口 一葉" },
    { id: 65, name: "九鬼 周造" },
    { id: 66, name: "束原 和多志" },
    { id: 67, name: "萩原 朔太郎" },
    { id: 69, name: "高野 敦志" },
    { id: 71, name: "立花 実" },
    { id: 72, name: "山中 貞雄" },
    { id: 74, name: "梶井 基次郎" },
    { id: 75, name: "リルケ ライネル・マリア" },
    { id: 76, name: "岡本 かの子" },
    { id: 77, name: "押川 春浪" },
    { id: 79, name: "森野 光" },
    { id: 80, name: "平出 修" },
    { id: 81, name: "宮沢 賢治" },
    { id: 82, name: "岡本 綺堂" },
    { id: 83, name: "菊池 寛" },
    { id: 84, name: "清水 哲男" },
    { id: 87, name: "綱島 梁川" },
    { id: 88, name: "長谷川 集平" },
    { id: 89, name: "北 一輝" },
    { id: 90, name: "清水 鱗造" },
    { id: 91, name: "尾崎 紅葉" },
    { id: 92, name: "鈴木 志郎康" },
    { id: 93, name: "南方 熊楠" },
    { id: 94, name: "ポー エドガー・アラン" },
    { id: 95, name: "佐々木 直次郎" },
    { id: 96, name: "夢野 久作" },
    { id: 97, name: "オー・ヘンリー " },
    { id: 98, name: "結城 浩" },
    { id: 99, name: "菊池 美範" },
    { id: 100, name: "山本 ゆうじ" },
    { id: 101, name: "田宮 まや" },
    { id: 102, name: "石橋 忍月" },
    { id: 103, name: "松平 維秋" },
    { id: 104, name: "松永 延造" },
    { id: 106, name: "北原 白秋" },
    { id: 107, name: "鈴木 三重吉" },
    { id: 108, name: "小泉 英政" },
    { id: 109, name: "冬 佳彰" },
    { id: 110, name: "藤井 貞和" },
    { id: 111, name: "佐々木 味津三" },
    { id: 112, name: "水野 仙子" },
    { id: 113, name: "鶴岡 雄二" },
    { id: 114, name: "キプリング ラデャード" },
    { id: 115, name: "ブレイク ウィリアム" },
    { id: 116, name: "鷹野 つぎ" },
    { id: 117, name: "津野 海太郎" },
    { id: 118, name: "長塚 節" },
    { id: 119, name: "中島 敦" },
    { id: 120, name: "木下 杢太郎" },
    { id: 121, name: "新美 南吉" },
    { id: 122, name: "桑原 一世" },
    { id: 124, name: "小熊 秀雄" },
    { id: 125, name: "小栗 虫太郎" },
    { id: 126, name: "田中 英光" },
    { id: 127, name: "藤本 和子" },
    { id: 128, name: "長谷 悟" },
    { id: 129, name: "森 鴎外" },
    { id: 130, name: "秋野 平" },
    { id: 133, name: "菅原孝標女 " },
    { id: 134, name: "佐左木 俊郎" },
    { id: 136, name: "山村 暮鳥" },
    { id: 137, name: "岩野 泡鳴" },
    { id: 138, name: "翡翠 " },
    { id: 139, name: "朝倉 克彦" },
    { id: 140, name: "テニソン アルフレッド" },
    { id: 141, name: "坪内 逍遥" },
    { id: 142, name: "関 富士子" },
    { id: 143, name: "浜野 サトル" },
    { id: 144, name: "畑仲 哲雄" },
    { id: 146, name: "種田 山頭火" },
    { id: 147, name: "三浦 久" },
    { id: 148, name: "夏目 漱石" },
    { id: 149, name: "富岡 誠" },
    { id: 150, name: "薄田 泣菫" },
    { id: 151, name: "西府 章" },
    { id: 153, name: "石川 啄木" },
    { id: 154, name: "田中 貢太郎" },
    { id: 155, name: "紀 貫之" },
    { id: 156, name: "小林 多喜二" },
    { id: 157, name: "北村 透谷" },
    { id: 158, name: "島崎 藤村" },
    { id: 159, name: "辻 潤" },
    { id: 160, name: "海野 十三" },
    { id: 162, name: "若山 牧水" },
    { id: 163, name: "若松 賤子" },
    { id: 164, name: "堺 利彦" },
    { id: 165, name: "内田 魯庵" },
    { id: 166, name: "サマン アルベール" },
    { id: 167, name: "町野 修三" },
    { id: 168, name: "横光 利一" },
    { id: 169, name: "大杉 栄" },
    { id: 179, name: "黒岩 涙香" },
    { id: 180, name: "ヴォルテール " },
    { id: 181, name: "能美 武功" },
    { id: 182, name: "西田 幾多郎" },
    { id: 183, name: "牧野 信一" },
    { id: 189, name: "武田 麟太郎" },
    { id: 190, name: "大手 拓次" },
    { id: 191, name: "山本 光夫" },
    { id: 193, name: "久森 謙二" },
    { id: 195, name: "尾崎 放哉" },
    { id: 196, name: "鴨 長明" },
    { id: 198, name: "山本 洋" },
    { id: 200, name: "岩本 良子" },
    { id: 201, name: "グリーン ジェイムズ" },
    { id: 206, name: "小沢 真理子" },
    { id: 207, name: "ゴーゴリ ニコライ" },
    { id: 208, name: "平井 肇" },
    { id: 210, name: "シュヴァルツ エフゲーニイ" },
    { id: 212, name: "竹久 夢二" },
    { id: 214, name: "田山 花袋" },
    { id: 215, name: "栗林 元" },
    { id: 216, name: "直木 三十五" },
    { id: 218, name: "三木 清" },
    { id: 219, name: "里村 欣三" },
    { id: 220, name: "吉江 喬松" },
    { id: 221, name: "平林 初之輔" },
    { id: 223, name: "カワード ノエル" },
    { id: 224, name: "小泉 節子" },
    { id: 225, name: "阿部 徳蔵" },
    { id: 226, name: "アレニウス スヴァンテ" },
    { id: 227, name: "生田 春月" },
    { id: 228, name: "井沢 衣水" },
    { id: 229, name: "石田 孫太郎" },
    { id: 230, name: "石原 莞爾" },
    { id: 231, name: "伊丹 万作" },
    { id: 232, name: "伊波 普猷" },
    { id: 234, name: "今井 邦子" },
    { id: 235, name: "上田 敏" },
    { id: 236, name: "大阪 圭吉" },
    { id: 237, name: "大町 桂月" },
    { id: 238, name: "岡倉 天心" },
    { id: 239, name: "岡本 一平" },
    { id: 240, name: "荻原 守衛" },
    { id: 241, name: "小栗 風葉" },
    { id: 242, name: "尾崎 秀実" },
    { id: 243, name: "小野 賢一郎" },
    { id: 244, name: "梶井 久" },
    { id: 245, name: "加藤 文太郎" },
    { id: 246, name: "金子 ふみ子" },
    { id: 247, name: "加能 作次郎" },
    { id: 248, name: "上司 小剣" },
    { id: 249, name: "嘉村 礒多" },
    { id: 250, name: "河上 肇" },
    { id: 251, name: "岸田 劉生" },
    { id: 252, name: "金 史良" },
    { id: 253, name: "陸 羯南" },
    { id: 255, name: "国枝 史郎" },
    { id: 256, name: "倉田 百三" },
    { id: 257, name: "黒田 清輝" },
    { id: 258, name: "小泉 八雲" },
    { id: 259, name: "小出 楢重" },
    { id: 260, name: "甲賀 三郎" },
    { id: 261, name: "幸徳 秋水" },
    { id: 262, name: "小酒井 不木" },
    { id: 263, name: "佐々木 喜善" },
    { id: 264, name: "シェークスピア ウィリアム" },
    { id: 265, name: "島木 赤彦" },
    { id: 268, name: "関根 金次郎" },
    { id: 269, name: "高神 覚昇" },
    { id: 270, name: "高村 光雲" },
    { id: 271, name: "高山 樗牛" },
    { id: 272, name: "谷 譲次" },
    { id: 273, name: "田畑 修一郎" },
    { id: 274, name: "談洲楼 燕枝　二代" },
    { id: 275, name: "近松 秋江" },
    { id: 276, name: "知里 幸恵" },
    { id: 277, name: "辻村 伊助" },
    { id: 278, name: "津村 信夫" },
    { id: 279, name: "徳冨 健次郎" },
    { id: 280, name: "徳冨 蘆花" },
    { id: 281, name: "戸坂 潤" },
    { id: 282, name: "富ノ沢 麟太郎" },
    { id: 283, name: "中里 介山" },
    { id: 284, name: "内藤 湖南" },
    { id: 286, name: "野口 雨情" },
    { id: 287, name: "野呂 栄太郎" },
    { id: 288, name: "ハイヤーム オマル" },
    { id: 289, name: "浜尾 四郎" },
    { id: 290, name: "林 不忘" },
    { id: 291, name: "林 芙美子" },
    { id: 292, name: "原田 皐月" },
    { id: 293, name: "原 民喜" },
    { id: 294, name: "平野 万里" },
    { id: 295, name: "広津 柳浪" },
    { id: 296, name: "福沢 諭吉" },
    { id: 298, name: "藤島 武二" },
    { id: 301, name: "穂積 陳重" },
    { id: 302, name: "堀口 九万一" },
    { id: 303, name: "本庄 陸男" },
    { id: 304, name: "牧 逸馬" },
    { id: 305, name: "正岡 子規" },
    { id: 307, name: "松濤 明" },
    { id: 308, name: "松本 泰" },
    { id: 309, name: "真山 青果" },
    { id: 310, name: "三上 於菟吉" },
    { id: 311, name: "宮本 百合子" },
    { id: 312, name: "村井 政善" },
    { id: 315, name: "森 林太郎" },
    { id: 317, name: "矢田 津世子" },
    { id: 318, name: "山川 登美子" },
    { id: 319, name: "山本 宣治" },
    { id: 320, name: "与謝野 寛" },
    { id: 321, name: "与謝野 礼厳" },
    { id: 322, name: "吉江 孤雁" },
    { id: 323, name: "吉野 作造" },
    { id: 325, name: "蘭 郁二郎" },
    { id: 326, name: "ルヴェル モーリス" },
    { id: 329, name: "楠山 正雄" },
    { id: 330, name: "青木 栄瞳" },
    { id: 331, name: "若杉 鳥子" },
    { id: 332, name: "ワイルド オスカー" },
    { id: 335, name: "ストールマン リチャード" },
    { id: 336, name: "ラティガン テレンス" },
    { id: 338, name: "フランス アナトール" },
    { id: 339, name: "ルター マルチン" },
    { id: 340, name: "ガールシン フセヴォロド・ミハイロヴィチ" },
    { id: 342, name: "柴田 流星" },
    { id: 343, name: "平田 禿木" },
    { id: 344, name: "土田 杏村" },
    { id: 346, name: "村岡 博" },
    { id: 347, name: "小川 亮作" },
    { id: 348, name: "范 曄" },
    { id: 351, name: "増田 雅子" },
    { id: 352, name: "田中 早苗" },
    { id: 354, name: "勝 海舟" },
    { id: 355, name: "上村 松園" },
    { id: 356, name: "レニエ アンリ・ド" },
    { id: 357, name: "クラルテ ジュール" },
    { id: 358, name: "ルモンニエー カミーユ" },
    { id: 359, name: "ヒルシュフェルド ゲオルヒ" },
    { id: 360, name: "シュニッツレル アルツール" },
    { id: 361, name: "トルストイ レオ" },
    { id: 362, name: "コロレンコ ウラジミール・ガラクティオノヴィチ" },
    { id: 363, name: "ドストエフスキー フィヨードル・ミハイロヴィチ" },
    { id: 364, name: "ゴーリキー マクシム" },
    { id: 365, name: "チリコフ オイゲン" },
    { id: 366, name: "アルチバシェッフ ミハイル・ペトローヴィチ" },
    { id: 367, name: "クスミン ミカイル・アレクセーヴィチ" },
    { id: 368, name: "添田 唖蝉坊" },
    { id: 369, name: "川端 茅舎" },
    { id: 370, name: "横瀬 夜雨" },
    { id: 371, name: "細井 和喜蔵" },
    { id: 372, name: "桑原 隲蔵" },
    { id: 373, name: "北畠 尊也" },
    { id: 374, name: "饗庭 篁村" },
    { id: 380, name: "浅井 洌" },
    { id: 388, name: "淡島 寒月" },
    { id: 392, name: "生田 葵山" },
    { id: 393, name: "生田 長江" },
    { id: 398, name: "池谷 信三郎" },
    { id: 412, name: "市島 春城" },
    { id: 416, name: "伊藤 野枝" },
    { id: 420, name: "井上 哲次郎" },
    { id: 430, name: "伊良子 清白" },
    { id: 435, name: "上田 万年" },
    { id: 448, name: "江見 水蔭" },
    { id: 457, name: "大槻 文彦" },
    { id: 467, name: "岡倉 由三郎" },
    { id: 474, name: "小川 正子" },
    { id: 479, name: "小山内 薫" },
    { id: 483, name: "乙骨 三郎" },
    { id: 488, name: "小柳 司気太" },
    { id: 491, name: "片岡 鉄兵" },
    { id: 492, name: "片上 伸" },
    { id: 493, name: "加藤 朝鳥" },
    { id: 506, name: "河合 栄治郎" },
    { id: 507, name: "川上 眉山" },
    { id: 510, name: "河東 碧梧桐" },
    { id: 514, name: "菊池 幽芳" },
    { id: 525, name: "木下 尚江" },
    { id: 526, name: "木下 利玄" },
    { id: 535, name: "桐生 悠々" },
    { id: 537, name: "久保 良英" },
    { id: 542, name: "桑木 厳翼" },
    { id: 553, name: "児玉 花外" },
    { id: 564, name: "斎藤 秀三郎" },
    { id: 565, name: "斎藤 緑雨" },
    { id: 575, name: "佐藤 紅緑" },
    { id: 577, name: "佐藤 惣之助" },
    { id: 585, name: "三文字屋 金平" },
    { id: 594, name: "芝 不器男" },
    { id: 595, name: "島田 清次郎" },
    { id: 599, name: "島村 抱月" },
    { id: 601, name: "十一谷 義三郎" },
    { id: 603, name: "白鳥 庫吉" },
    { id: 606, name: "杉田 久女" },
    { id: 608, name: "杉村 楚人冠" },
    { id: 617, name: "千家 元麿" },
    { id: 621, name: "高垣 松雄" },
    { id: 634, name: "田口 卯吉" },
    { id: 636, name: "竹内 勝太郎" },
    { id: 649, name: "田中 正造" },
    { id: 655, name: "田村 俊子" },
    { id: 660, name: "塚原 渋柿園" },
    { id: 669, name: "戸川 秋骨" },
    { id: 677, name: "富田 木歩" },
    { id: 678, name: "富永 太郎" },
    { id: 684, name: "内藤 鳴雪" },
    { id: 690, name: "中沢 臨川" },
    { id: 692, name: "中島 孤島" },
    { id: 697, name: "中戸川 吉二" },
    { id: 702, name: "中村 憲吉" },
    { id: 712, name: "成島 柳北" },
    { id: 718, name: "新渡戸 稲造" },
    { id: 723, name: "芳賀 矢一" },
    { id: 725, name: "萩原 恭次郎" },
    { id: 726, name: "長谷川 時雨" },
    { id: 740, name: "原口 統三" },
    { id: 748, name: "平田 晋策" },
    { id: 754, name: "福士 幸次郎" },
    { id: 765, name: "逸見 猶吉" },
    { id: 788, name: "三浦 環" },
    { id: 792, name: "三木 竹二" },
    { id: 793, name: "三沢 勝衛" },
    { id: 800, name: "水上 滝太郎" },
    { id: 801, name: "三宅 幾三郎" },
    { id: 802, name: "三宅 花圃" },
    { id: 804, name: "三宅 やす子" },
    { id: 805, name: "宮崎 湖処子" },
    { id: 809, name: "宮原 晃一郎" },
    { id: 810, name: "村井 弦斎" },
    { id: 815, name: "村上 浪六" },
    { id: 826, name: "森田 草平" },
    { id: 827, name: "森本 薫" },
    { id: 831, name: "柳川 春葉" },
    { id: 837, name: "山路 愛山" },
    { id: 843, name: "山田 美妙" },
    { id: 863, name: "大島 亮吉" },
    { id: 864, name: "板倉 勝宣" },
    { id: 866, name: "狩野 亨吉" },
    { id: 868, name: "池宮城 積宝" },
    { id: 869, name: "永崎 貢" },
    { id: 870, name: "山本 勝治" },
    { id: 871, name: "小野 浩" },
    { id: 872, name: "木内 高音" },
    { id: 873, name: "金田 千鶴" },
    { id: 874, name: "尾形 亀之助" },
    { id: 879, name: "芥川 竜之介" },
    { id: 880, name: "枯葉 " },
    { id: 881, name: "ブウテ フレデリック" },
    { id: 882, name: "プレヴォー マルセル" },
    { id: 883, name: "モルナール フェレンツ" },
    { id: 884, name: "ディモフ オシップ" },
    { id: 885, name: "与謝野 晶子" },
    { id: 886, name: "泉 鏡太郎" },
    { id: 887, name: "ピランデルロ ルイジ" },
    { id: 888, name: "スティーブンソン ロバート・ルイス" },
    { id: 891, name: "加福 均三" },
    { id: 900, name: "橋本 五郎" },
    { id: 903, name: "モーパッサン ギ・ド" },
    { id: 904, name: "田沢 稲舟" },
    { id: 905, name: "ホーソーン ナサニエル" },
    { id: 906, name: "豊島 与志雄" },
    { id: 907, name: "アンドレーエフ レオニード・ニコラーエヴィチ" },
    { id: 908, name: "坂本 竜馬" },
    { id: 911, name: "ささき ふさ" },
    { id: 912, name: "スウィフト ジョナサン" },
    { id: 913, name: "sogo " },
    { id: 914, name: "ディケンズ チャールズ" },
    { id: 915, name: "プラトン " },
    { id: 919, name: "加藤 一夫" },
    { id: 920, name: "金子 薫園" },
    { id: 922, name: "末弘 厳太郎" },
    { id: 923, name: "朝永 三十郎" },
    { id: 924, name: "永井 隆" },
    { id: 927, name: "穂積 重遠" },
    { id: 928, name: "前田 夕暮" },
    { id: 929, name: "宮島 資夫" },
    { id: 930, name: "山本 禾太郎" },
    { id: 933, name: "折口 信夫" },
    { id: 934, name: "塚原 蓼洲" },
    { id: 938, name: "観世 左近　二十四世" },
    { id: 939, name: "野口 米次郎" },
    { id: 940, name: "別所 梅之助" },
    { id: 941, name: "水野 葉舟" },
    { id: 956, name: "白柳 秀湖" },
    { id: 957, name: "鈴木 梅太郎" },
    { id: 959, name: "相馬 御風" },
    { id: 960, name: "山川 丙三郎" },
    { id: 961, name: "ダンテ アリギエリ" },
    { id: 963, name: "野上 豊一郎" },
    { id: 965, name: "丘 丘十郎" },
    { id: 966, name: "海若 藍平" },
    { id: 967, name: "香倶土 三鳥" },
    { id: 968, name: "かぐつち みどり" },
    { id: 969, name: "杉山 萠円" },
    { id: 970, name: "とだ けん" },
    { id: 971, name: "萠円 " },
    { id: 972, name: "萠円山人 " },
    { id: 973, name: "三鳥山人 " },
    { id: 974, name: "黒木 舜平" },
    { id: 975, name: "薄田 淳介" },
    { id: 977, name: "竹越 三叉" },
    { id: 978, name: "竹越 与三郎" },
    { id: 981, name: "巌谷 小波" },
    { id: 984, name: "葛西 善蔵" },
    { id: 989, name: "三遊亭 円朝" },
    { id: 997, name: "北条 民雄" },
    { id: 1008, name: "中浜 哲" },
    { id: 1011, name: "波多野 精一" },
    { id: 1017, name: "三上 義夫" },
    { id: 1021, name: "井上 円了" },
    { id: 1025, name: "ゲーテ ヨハン・ヴォルフガング・フォン" },
    { id: 1026, name: "関 寛" },
    { id: 1028, name: "イプセン ヘンリック" },
    { id: 1029, name: "デカルト ルネ" },
    { id: 1030, name: "堀 辰雄" },
    { id: 1034, name: "浅野 和三郎" },
    { id: 1035, name: "モーゼス ウィリアム・ステイントン" },
    { id: 1036, name: "フィッツジェラルド フランシス・スコット" },
    { id: 1037, name: "原 勝郎" },
    { id: 1044, name: "ド・ラ・ラメー マリー・ルイーズ" },
    { id: 1045, name: "バーネット フランシス・ホジソン・エリザ" },
    { id: 1047, name: "マロ エクトール・アンリ" },
    { id: 1048, name: "アミーチス エドモンド・デ" },
    { id: 1049, name: "ファーブル ジャン・アンリ" },
    { id: 1051, name: "蒲  松齢" },
    { id: 1052, name: "久坂 葉子" },
    { id: 1053, name: "峠 三吉" },
    { id: 1054, name: "浜田 青陵" },
    { id: 1055, name: "蒲原 有明" },
    { id: 1057, name: "陳 玄祐" },
    { id: 1058, name: "ホフマン エルンスト・テオドーア・アマーデウス" },
    { id: 1059, name: "斎藤 茂吉" },
    { id: 1061, name: "中山 省三郎" },
    { id: 1062, name: "ストリンドベリ アウグスト" },
    { id: 1065, name: "高田 力" },
    { id: 1066, name: "ビアス アンブローズ" },
    { id: 1068, name: "釈 迢空" },
    { id: 1070, name: "神吉 三郎" },
    { id: 1072, name: "和田 万吉" },
    { id: 1073, name: "高田 保" },
    { id: 1074, name: "水谷 まさる" },
    { id: 1075, name: "タゴール ラビンドラナート" },
    { id: 1076, name: "高良 とみ" },
    { id: 1077, name: "郡 虎彦" },
    { id: 1078, name: "瞿 佑" },
    { id: 1080, name: "藪野 椋十" },
    { id: 1081, name: "土井 晩翠" },
    { id: 1082, name: "相馬 泰三" },
    { id: 1083, name: "矢崎 嵯峨の舎" },
    { id: 1084, name: "寺島 柾史" },
    { id: 1085, name: "イエイツ ウィリアム・バトラー" },
    { id: 1086, name: "ゴーチェ テオフィル" },
    { id: 1087, name: "デフォー ダニエル" },
    { id: 1088, name: "プーシキン アレクサンドル・セルゲーヴィチ" },
    { id: 1089, name: "リットン エドワード・ジョージ・アール・ブルワー" },
    { id: 1090, name: "オルコット ルイーザ・メイ" },
    { id: 1091, name: "グリム ヤーコプ・ルートヴィッヒ・カール" },
    { id: 1092, name: "グリム ヴィルヘルム・カール" },
    { id: 1093, name: "ロラン ロマン" },
    { id: 1094, name: "ユゴー ヴィクトル" },
    { id: 1095, name: "坂口 安吾" },
    { id: 1096, name: "榊 亮三郎" },
    { id: 1097, name: "下村 湖人" },
    { id: 1099, name: "ホーマー " },
    { id: 1101, name: "ミルトン ジョン" },
    { id: 1111, name: "ブロンテ シャーロット" },
    { id: 1117, name: "マクドナルド ジョージ" },
    { id: 1119, name: "岩波 茂雄" },
    { id: 1120, name: "須川 邦彦" },
    { id: 1121, name: "ルブラン モーリス" },
    { id: 1122, name: "戸川 明三" },
    { id: 1123, name: "チェスタートン ギルバート・キース" },
    { id: 1124, name: "魯迅 " },
    { id: 1125, name: "井上 紅梅" },
    { id: 1127, name: "狩野 直喜" },
    { id: 1128, name: "文部省 " },
    { id: 1131, name: "新青年編輯局 " },
    { id: 1132, name: "平山 蘆江" },
    { id: 1133, name: "三田村 鳶魚" },
    { id: 1134, name: "ペロー シャルル" },
    { id: 1135, name: "ド・ヴィルヌーヴ ガブリエル=シュザンヌ・バルボ" },
    { id: 1137, name: "婦人文化研究会 " },
    { id: 1138, name: "マルクス カール・ハインリッヒ" },
    { id: 1139, name: "エンゲルス フリードリッヒ" },
    { id: 1141, name: "沢田 正二郎" },
    { id: 1142, name: "酒井 嘉七" },
    { id: 1143, name: "西尾 正" },
    { id: 1144, name: "クラウフォード フランシス・マリオン" },
    { id: 1145, name: "ストックトン フランシス・リチャード" },
    { id: 1146, name: "清水 紫琴" },
    { id: 1147, name: "相馬 愛蔵" },
    { id: 1148, name: "相馬 黒光" },
    { id: 1149, name: "マルサス トマス・ロバート" },
    { id: 1150, name: "吉田 秀夫" },
    { id: 1151, name: "久米 正雄" },
    { id: 1153, name: "長岡 半太郎" },
    { id: 1154, name: "岸田 国士" },
    { id: 1155, name: "チェーホフ アントン" },
    { id: 1156, name: "ルナール ジュール" },
    { id: 1157, name: "神西 清" },
    { id: 1158, name: "ビョルンソン ビョルンステェルネ" },
    { id: 1159, name: "佐野 昌一" },
    { id: 1160, name: "池田 菊苗" },
    { id: 1161, name: "鳥谷部 春汀" },
    { id: 1162, name: "秋田 滋" },
    { id: 1163, name: "仁科 芳雄" },
    { id: 1164, name: "リカード デイヴィッド" },
    { id: 1166, name: "中井 正一" },
    { id: 1167, name: "日野 強" },
    { id: 1168, name: "高村 光太郎" },
    { id: 1170, name: "石川 三四郎" },
    { id: 1171, name: "日本童話研究会 " },
    { id: 1172, name: "村山 籌子" },
    { id: 1175, name: "槙本 楠郎" },
    { id: 1176, name: "シェリー メアリー・ウォルストンクラフト" },
    { id: 1177, name: "吉田 絃二郎" },
    { id: 1178, name: "テーラー ジェーン" },
    { id: 1179, name: "土田 耕平" },
    { id: 1180, name: "沖野 岩三郎" },
    { id: 1181, name: "ドーデ アルフォンス" },
    { id: 1184, name: "手塚 寿郎" },
    { id: 1185, name: "ワルラス マリー・エスプリ・レオン" },
    { id: 1186, name: "宍戸 儀一" },
    { id: 1188, name: "野中 至" },
    { id: 1189, name: "ジェファーソン トマス" },
    { id: 1190, name: "アルテンベルク ペーター" },
    { id: 1191, name: "高木 敏雄" },
    { id: 1192, name: "ホーフマンスタール フーゴー・フォン" },
    { id: 1193, name: "オイレンベルク ヘルベルト" },
    { id: 1194, name: "シュミットボン ウィルヘルム" },
    { id: 1195, name: "ダビット ヤーコプ・ユリウス" },
    { id: 1196, name: "ランド ハンス" },
    { id: 1197, name: "伊東 静雄" },
    { id: 1198, name: "土井 八枝" },
    { id: 1199, name: "ソログープ フョードル" },
    { id: 1201, name: "小舟 勝二" },
    { id: 1203, name: "ワタナベ オン" },
    { id: 1205, name: "下村 千秋" },
    { id: 1206, name: "石河 幹明" },
    { id: 1207, name: "木村 芥舟" },
    { id: 1208, name: "山下 利三郎" },
    { id: 1209, name: "ソロー ヘンリー・デイビッド" },
    { id: 1210, name: "違星 北斗" },
    { id: 1211, name: "清沢 満之" },
    { id: 1212, name: "中江 兆民" },
    { id: 1213, name: "瀬沼 夏葉" },
    { id: 1216, name: "井原 西鶴" },
    { id: 1217, name: "ヴァレリー ポール" },
    { id: 1221, name: "荻原 雲来" },
    { id: 1222, name: "高楠 順次郎" },
    { id: 1224, name: "久生 十蘭" },
    { id: 1225, name: "村山 俊太郎" },
    { id: 1226, name: "田村 松魚" },
    { id: 1227, name: "佐野 友三郎" },
    { id: 1228, name: "辻村 もと子" },
    { id: 1229, name: "クロポトキン ピョートル・アレクセーヴィチ" },
    { id: 1231, name: "松本 文三郎" },
    { id: 1232, name: "伊東 忠太" },
    { id: 1233, name: "福永 渙" },
    { id: 1234, name: "愛知 敬一" },
    { id: 1235, name: "カフカ フランツ" },
    { id: 1236, name: "チャペック カレル" },
    { id: 1237, name: "ニューヨーク・サン紙 " },
    { id: 1238, name: "ボーム ライマン・フランク" },
    { id: 1239, name: "ラング アンドルー" },
    { id: 1240, name: "加藤 道夫" },
    { id: 1241, name: "ゴルドン エリザベス、アンナ" },
    { id: 1242, name: "坪井 正五郎" },
    { id: 1243, name: "木村 小舟" },
    { id: 1245, name: "会津 八一" },
    { id: 1246, name: "恩地 孝四郎" },
    { id: 1247, name: "小金井 喜美子" },
    { id: 1248, name: "佐藤 垢石" },
    { id: 1250, name: "ケイ エレン" },
    { id: 1251, name: "ゴールドマン エマ" },
    { id: 1252, name: "石井 研堂" },
    { id: 1256, name: "小林 一三" },
    { id: 1257, name: "アーヴィング ワシントン" },
    { id: 1258, name: "吉田 甲子太郎" },
    { id: 1261, name: "邦枝 完二" },
    { id: 1262, name: "土原 耕作" },
    { id: 1263, name: "服部 之総" },
    { id: 1264, name: "榎本 武揚" },
    { id: 1265, name: "サン＝テグジュペリ アントワーヌ・ド" },
    { id: 1266, name: "牧野 富太郎" },
    { id: 1268, name: "小村 雪岱" },
    { id: 1272, name: "溝口 健二" },
    { id: 1277, name: "ガンジー マハトマ" },
    { id: 1279, name: "ミドルトン リチャード・バラム" },
    { id: 1280, name: "hiro " },
    { id: 1285, name: "慶應義塾 " },
    { id: 1286, name: "桂 小南" },
    { id: 1288, name: "宮城 道雄" },
    { id: 1289, name: "犬田 卯" },
    {
      id: 1290, name: "見 鈍太郎"
    },
    { id: 1292, name: "平山 千代子" },
    { id: 1293, name: "小野 佐世男" },
    { id: 1294, name: "兼常 清佐" },
    { id: 1295, name: "レスコーフ ニコライ・セミョーノヴィチ" },
    { id: 1296, name: "ランボー ジャン・ニコラ・アルチュール" },
    { id: 1297, name: "前田河 広一郎" },
    { id: 1299, name: "ハイド ダグラス" },
    { id: 1300, name: "ケネディ パトリック" },
    { id: 1305, name: "羽志 主水" },
    { id: 1306, name: "川田 功" },
    { id: 1307, name: "久保 栄" },
    { id: 1308, name: "徳永 直" },
    { id: 1310, name: "高浜 虚子" },
    { id: 1311, name: "三好 十郎" },
    { id: 1312, name: "木村 荘八" },
    { id: 1313, name: "正岡 容" },
    { id: 1314, name: "青柳 喜兵衛" },
    { id: 1315, name: "井上 良夫" },
    { id: 1316, name: "大庭 武年" },
    { id: 1317, name: "加藤 弘之" },
    { id: 1320, name: "西郷 隆盛" },
    { id: 1321, name: "江南 文三" },
    { id: 1322, name: "津田 真道" },
    { id: 1323, name: "西 周" },
    { id: 1325, name: "上村 経吉" },
    { id: 1326, name: "小笠原 長生" },
    { id: 1327, name: "肝付 兼行" },
    { id: 1328, name: "吉井 幸蔵" },
    { id: 1329, name: "ウォルトン みちよ" },
    { id: 1331, name: "秋月 種樹" },
    { id: 1332, name: "佐藤 一斎" },
    { id: 1334, name: "山田 済斎" },
    { id: 1336, name: "伊庭 心猿" },
    { id: 1337, name: "阪井 久良伎" },
    { id: 1338, name: "羽仁 もと子" },
    { id: 1339, name: "岡本 帰一" },
    { id: 1340, name: "ブラウニング ロバート" },
    { id: 1341, name: "永井 荷風" },
    { id: 1344, name: "喜田 貞吉" },
    { id: 1345, name: "川合 貞一" },
    { id: 1346, name: "片山 広子" },
    { id: 1347, name: "岡倉 覚三" },
    { id: 1349, name: "武田 祐吉" },
    { id: 1350, name: "鈴木 鼓村" },
    { id: 1351, name: "池田 蕉園" },
    { id: 1352, name: "池田 輝方" },
    { id: 1353, name: "岩村 透" },
    { id: 1354, name: "岡崎 雪声" },
    { id: 1355, name: "岡田 三郎助" },
    { id: 1356, name: "尾上 梅幸" },
    { id: 1357, name: "北村 四海" },
    { id: 1358, name: "関根 黙庵" },
    { id: 1359, name: "沼田 一雅" },
    { id: 1360, name: "平井 金三" },
    { id: 1361, name: "本田 親二" },
    { id: 1362, name: "豊田 喜一郎" },
    { id: 1364, name: "ニューコム シモン" },
    { id: 1367, name: "嶋中 雄作" },
    { id: 1368, name: "山本 実彦" },
    { id: 1369, name: "徳富 蘇峰" },
    { id: 1370, name: "豊田 三郎" },
    { id: 1371, name: "高頭 仁兵衛" },
    { id: 1372, name: "柴崎 芳太郎" },
    { id: 1373, name: "木暮 理太郎" },
    { id: 1374, name: "大下 藤次郎" },
    { id: 1375, name: "鵜殿 正雄" },
    { id: 1376, name: "百瀬 慎太郎" },
    { id: 1377, name: "細井 吉造" },
    { id: 1378, name: "平野 長蔵" },
    { id: 1379, name: "小川 登喜男" },
    { id: 1380, name: "石川 欣一" },
    { id: 1381, name: "石井 柏亭" },
    { id: 1383, name: "谷崎 潤一郎" },
    { id: 1388, name: "新島 襄" },
    { id: 1389, name: "シュウォッブ マルセル" },
    { id: 1390, name: "金剛 巌" },
    { id: 1391, name: "山下 博章" },
    { id: 1392, name: "長谷 健" },
    { id: 1393, name: "キャロル ルイス" },
    { id: 1394, name: "丸山 英観" },
    { id: 1395, name: "和辻 哲郎" },
    { id: 1396, name: "原田 義人" },
    { id: 1397, name: "橘 外男" },
    { id: 1398, name: "高木 貞治" },
    { id: 1399, name: "マクラウド フィオナ" },
    { id: 1400, name: "松村 みね子" },
    { id: 1402, name: "関口 存男" },
    { id: 1403, name: "北大路 魯山人" },
    { id: 1404, name: "河口 慧海" },
    { id: 1407, name: "ストレイチー リットン" },
    { id: 1408, name: "松浦 武四郎" },
    { id: 1409, name: "菅野 徳助" },
    { id: 1410, name: "奈倉 次郎" },
    { id: 1411, name: "ロティ ピエール" },
    { id: 1412, name: "林田 清明" },
    { id: 1413, name: "池田 亀鑑" },
    { id: 1416, name: "田山 録弥" },
    { id: 1417, name: "中江 篤介" },
    { id: 1420, name: "中山 太郎" },
    { id: 1421, name: "阿部 次郎" },
    { id: 1425, name: "小寺 菊子" },
    { id: 1427, name: "田部 隆次" },
    { id: 1428, name: "アインシュタイン アルベルト" },
    { id: 1429, name: "石原 純" },
    { id: 1430, name: "ウェルズ ハーバート・ジョージ" },
    { id: 1434, name: "松本 幸四郎" },
    { id: 1435, name: "黒部 溯郎" },
    { id: 1436, name: "中山 啓" },
    { id: 1446, name: "宮地 嘉六" },
    { id: 1447, name: "松崎 天民" },
    { id: 1454, name: "伊藤 永之介" },
    { id: 1455, name: "登張 竹風" },
    { id: 1460, name: "尾佐竹 猛" },
    { id: 1464, name: "クラーク ヘンリ・サヴィル" },
    { id: 1465, name: "東 健而" },
    { id: 1468, name: "賀川 豊彦" },
    { id: 1469, name: "河野 常吉" },
    { id: 1471, name: "今野 大力" },
    { id: 1472, name: "松井 須磨子" },
    { id: 1474, name: "丘 浅次郎" },
    { id: 1475, name: "小川 未明" },
    { id: 1476, name: "大鹿 卓" },
    { id: 1477, name: "陳 寿" },
    { id: 1478, name: "石川 千代松" },
    { id: 1479, name: "風巻 景次郎" },
    { id: 1481, name: "三木 貞一" },
    { id: 1484, name: "魏 徴" },
    { id: 1485, name: "沈 約" },
    { id: 1486, name: "佐藤 緑葉" },
    { id: 1487, name: "浅沼 稲次郎" },
    { id: 1488, name: "火野 葦平" },
    { id: 1490, name: "額田 六福" },
    { id: 1492, name: "シゲリスト ヘンリー・Ｅ" },
    { id: 1493, name: "ジンサー ハンス" },
    { id: 1494, name: "水上 茂樹" },
    { id: 1497, name: "吉井 勇" },
    { id: 1499, name: "外村 繁" },
    { id: 1500, name: "総生 寛" },
    {
      id: 1501, name: "若林 蔵"
    },
    { id: 1505, name: "ポター ビアトリクス" },
    { id: 1506, name: "片岡 義男" },
    { id: 1516, name: "草野 天平" },
    { id: 1518, name: "太 安万侶" },
    { id: 1519, name: "稗田 阿礼" },
    { id: 1520, name: "柳 宗悦" },
    { id: 1521, name: "長与 善郎" },
    { id: 1526, name: "島袋 源一郎" },
    { id: 1527, name: "栗島 山之助" },
    { id: 1528, name: "日本国 " },
    { id: 1529, name: "作者不詳 " },
    { id: 1532, name: "川田 瑞穂" },
    { id: 1533, name: "宇野 浩二" },
    { id: 1534, name: "岩本 素白" },
    { id: 1535, name: "津田 左右吉" },
    { id: 1536, name: "桂 三木助" },
    { id: 1537, name: "喜多村 緑郎" },
    { id: 1538, name: "矢内原 忠雄" },
    { id: 1539, name: "片山 敏彦" },
    { id: 1540, name: "知里 真志保" },
    { id: 1541, name: "高山 毅" },
    { id: 1542, name: "青野 季吉" },
    { id: 1543, name: "犬養 健" },
    { id: 1548, name: "シェーンハイマー ルドルフ" },
    { id: 1551, name: "条野 採菊" },
    { id: 1555, name: "本多 静六" },
    { id: 1556, name: "松村 任三" },
    { id: 1557, name: "丹波 敬三" },
    { id: 1558, name: "古川 緑波" },
    { id: 1559, name: "村越 三千男" },
    { id: 1561, name: "ギャロッド アーチボルド" },
    { id: 1562, name: "吉川 英治" },
    { id: 1563, name: "グルモン レミ・ドゥ" },
    { id: 1566, name: "柳田 国男" },
    { id: 1567, name: "橘 樸" },
    { id: 1568, name: "妹尾 アキ夫" },
    { id: 1569, name: "中谷 宇吉郎" },
    { id: 1570, name: "小倉 金之助" },
    { id: 1574, name: "オスラー ウイリアム" },
    { id: 1575, name: "上漁史" },
    { id: 1577, name: "服部 宇之吉" },
    { id: 1578, name: "今村 明恒" },
    { id: 1579, name: "室生 犀星" },
    { id: 1581, name: "正宗 白鳥" },
    { id: 1582, name: "宇田川 文海" },
    { id: 1584, name: "秋田 雨雀" },
    { id: 1585, name: "槙村 浩" },
    { id: 1587, name: "楢崎 竜" },
    { id: 1588, name: "川田 雪山" },
    { id: 1589, name: "落合 ユキ子" },
    { id: 1591, name: "ジェンナー エドワード" },
    { id: 1595, name: "井上 準之助" },
    { id: 1597, name: "李 箱" },
    { id: 1600, name: "スノウ ジョン" },
    { id: 1602, name: "金 鍾漢" },
    { id: 1604, name: "桜間 中庸" },
    { id: 1606, name: "世礼 国男" },
    { id: 1607, name: "末吉 安持" },
    { id: 1610, name: "田辺 孝次" },
    { id: 1611, name: "徳永 保之助" },
    { id: 1612, name: "江森 盛弥" },
    { id: 1613, name: "後藤 謙太郎" },
    { id: 1614, name: "佐藤 武夫" },
    { id: 1615, name: "下川 儀太郎" },
    { id: 1617, name: "西村 陽吉" },
    { id: 1618, name: "根岸 正吉" },
    { id: 1619, name: "野村 吉哉" },
    { id: 1620, name: "波立 一" },
    { id: 1622, name: "松本 淳三" },
    { id: 1623, name: "百田 宗治" },
    { id: 1624, name: "陀田 勘助" },
    { id: 1626, name: "猪狩 満直" },
    { id: 1627, name: "今村 恒夫" },
    { id: 1628, name: "上田 進" },
    { id: 1630, name: "榎南 謙一" },
    { id: 1631, name: "大石 喜幸" },
    { id: 1632, name: "大江 鉄麿" },
    { id: 1633, name: "国見 善弘" },
    { id: 1634, name: "田村 乙彦" },
    { id: 1635, name: "丹沢 明" },
    { id: 1636, name: "中島 葉那子" },
    { id: 1637, name: "中野 鈴子" },
    { id: 1638, name: "平林 彪吾" },
    { id: 1639, name: "広海 大治" },
    { id: 1640, name: "森 竹夫" },
    { id: 1641, name: "藪田 忠夫" },
    { id: 1642, name: "伊藤 信二" },
    { id: 1643, name: "木村 好子" },
    { id: 1645, name: "倉橋 潤一郎" },
    { id: 1648, name: "土谷 麓" },
    { id: 1651, name: "古川 アヤ" },
    { id: 1652, name: "森川 義信" },
    { id: 1654, name: "濤音 " },
    { id: 1655, name: "長沢 佑" },
    { id: 1656, name: "矢田部 達郎" },
    { id: 1657, name: "アークム フレデリック" },
    { id: 1658, name: "渡久山 水鳴" },
    { id: 1659, name: "吉本 明光" },
    { id: 1660, name: "中島 徳蔵" },
    { id: 1661, name: "増田 惟茂" },
    { id: 1662, name: "山口 芳光" },
    { id: 1663, name: "上里 春生" },
    { id: 1665, name: "泉 芳朗" },
    { id: 1666, name: "漢那 浪笛" },
    { id: 1667, name: "仲村 渠" },
    { id: 1668, name: "西東 三鬼" },
    { id: 1669, name: "大倉 �Y子" },
    { id: 1670, name: "野村 胡堂" },
    { id: 1671, name: "津田 黄昏" },
    { id: 1672, name: "小竹 主" },
    { id: 1674, name: "鶴 彬" },
    { id: 1675, name: "竹内 浩三" },
    { id: 1676, name: "正木 不如丘" },
    { id: 1677, name: "河野 広道" },
    { id: 1685, name: "井上 貞治郎" },
    { id: 1686, name: "グリーナウェイ ケイト" },
    { id: 1687, name: "ブリュノフ ジャン・ド" },
    { id: 1688, name: "リヴィングストン・ジュニア ヘンリー" },
    { id: 1689, name: "大木 頭" },
    { id: 1690, name: "高橋 竜雄" },
    { id: 1691, name: "佐佐木 信綱" },
    { id: 1692, name: "久保田 万太郎" },
    { id: 1693, name: "山之口 貘" },
    { id: 1695, name: "飯田 蛇笏" },
    { id: 1696, name: "下村 海南" },
    { id: 1697, name: "高野 六郎" },
    { id: 1698, name: "光田 健輔" },
    { id: 1699, name: "ラヴクラフト ハワード・フィリップス" },
    { id: 1702, name: "ベートーヴェン ルートヴィヒ・ヴァン" },
    { id: 1703, name: "ヴェーゲラー フランツ・ゲルハルト" },
    { id: 1704, name: "ブロイニング エレオノーレ・フォン" },
    { id: 1705, name: "ヴェルハーレン エミール" },
    { id: 1706, name: "ネグリ アダ" },
    { id: 1707, name: "クローデル ポール" },
    { id: 1708, name: "マラルメ ステファヌ" },
    { id: 1709, name: "ベルトラン ルイ" },
    { id: 1710, name: "プラーテン アウグスト" },
    { id: 1713, name: "サッフォ " },
    { id: 1714, name: "平野 零児" },
    { id: 1715, name: "富沢 赤黄男" },
    { id: 1716, name: "アラルコン ペドロ・アントニオ" },
    { id: 1717, name: "ミュッセ アルフレッド" },
    { id: 1719, name: "前田 普羅" },
    { id: 1720, name: "松本 たかし" },
    { id: 1721, name: "ハッサル アーサー・ヒル" },
    { id: 1722, name: "ダンセイニ ロード" },
    { id: 1723, name: "斎藤 三郎" },
    { id: 1725, name: "ハバード エルバート" },
    { id: 1726, name: "長谷川 伸" },
    { id: 1727, name: "オルファース ジビュレ・フォン" },
    { id: 1728, name: "ベスコフ エルサ" },
    { id: 1731, name: "神田 左京" },
    { id: 1732, name: "ボードレール シャルル・ピエール" },
    { id: 1733, name: "フリーマン リチャード オースティン" },
    { id: 1734, name: "石波 杏" },
    { id: 1735, name: "ベルトラン アロイジウス" },
    { id: 1736, name: "庄野 健" },
    { id: 1739, name: "野口 英司" },
    { id: 1740, name: "宮川 典子" },
    { id: 1741, name: "吉田 松陰" },
    { id: 1742, name: "石原 忍" },
    { id: 1748, name: "武者 金吉" },
    { id: 1749, name: "三好 達治" },
    { id: 1750, name: "佐々木 邦" },
    { id: 1751, name: "北尾 亀男" },
    { id: 1752, name: "橋本 多佳子" },
    { id: 1753, name: "尾崎 士郎" },
    { id: 1756, name: "コールデコット ランドルフ" },
    { id: 1758, name: "マン パウル・トーマス" },
    { id: 1759, name: "実吉 捷郎" },
    { id: 1761, name: "小津 安二郎" },
    { id: 1762, name: "内山 完造" },
    { id: 1763, name: "佐藤 春夫" },
    { id: 1764, name: "モース エドワード・シルヴェスター" },
    { id: 1765, name: "田辺 竜子" },
    { id: 1767, name: "サキ " },
    { id: 1769, name: "ゲラン シャルル" },
    { id: 1774, name: "高祖 保" },
    { id: 1776, name: "蜷川 新" },
    { id: 1777, name: "山崎 富栄" },
    { id: 1778, name: "薄田 斬雲" },
    { id: 1779, name: "江戸川 乱歩" },
    { id: 1780, name: "高群 逸枝" },
    { id: 1781, name: "金田 鬼一" },
    { id: 1782, name: "辰野 九紫" },
    { id: 1783, name: "エリオット ジェイムズ・サンヅ" },
    { id: 1784, name: "ノイバーガー マクス" },
    { id: 1788, name: "十返 肇" },
    { id: 1789, name: "日本経済新聞社 " },
    { id: 1790, name: "青空文庫 " },
    { id: 1794, name: "幣原 喜重郎" },
    { id: 1796, name: "辰野 隆" },
    { id: 1797, name: "河本 大作" },
    { id: 1798, name: "梅崎 春生" },
    { id: 1799, name: "中 勘助" },
    { id: 1800, name: "米川 正夫" },
    { id: 1801, name: "山川 方夫" },
    { id: 1802, name: "野村 あらえびす" },
    { id: 1803, name: "小杉 放庵" },
    { id: 1804, name: "三枝 博音" },
    { id: 1805, name: "三遊亭 金馬" },
    { id: 1806, name: "斉藤 弘吉" },
    { id: 1808, name: "村松 梢風" },
    { id: 1809, name: "人見 絹枝" },
    { id: 1813, name: "石塚 浩之" },
    { id: 1816, name: "浅野 正恭" },
    { id: 1821, name: "蔵原 伸二郎" },
    { id: 1822, name: "中村 地平" },
    { id: 1823, name: "高見 順" },
    { id: 1824, name: "大坪 砂男" },
    { id: 1826, name: "森下 雨村" },
    { id: 1832, name: "柴田 宵曲" },
    { id: 1833, name: "鈴木 大拙" },
    { id: 1834, name: "The Creative CAT " },
    { id: 1835, name: "石川 成章" },
    { id: 1839, name: "荒木 光二郎" },
    { id: 1841, name: "カーペンター ケニス・Ｊ" },
    { id: 1842, name: "アレン ジェームズ" },
    { id: 1843, name: "アレン リリー・Ｌ" },
    { id: 1844, name: "ミーゼス ルートヴィヒ・フォン" },
    { id: 1845, name: "村田 稔雄" },
    { id: 1846, name: "小泉 信三" },
    { id: 1847, name: "ヘミングウェイ アーネスト・ミラー" },
    { id: 1848, name: "モンテーニュ ミシェル・エケム・ド" },
    { id: 1849, name: "関根 秀雄" },
    { id: 1850, name: "バルザック オノレ・ド" },
    { id: 1851, name: "中島 英之" },
    { id: 1859, name: "レ・ファニュ ジョゼフ・シェリダン" },
    { id: 1861, name: "河井 酔茗" },
    { id: 1862, name: "式場 隆三郎" },
    { id: 1863, name: "安西 冬衛" },
    { id: 1864, name: "森田 正馬" },
    { id: 1865, name: "大堀 竜太郎" },
    { id: 1866, name: "楠田 匡介" },
    { id: 1867, name: "小山 清" },
    { id: 1869, name: "山本 周五郎" },
    { id: 1870, name: "亀井 勝一郎" },
    { id: 1871, name: "三宅 周太郎" },
    { id: 1872, name: "大下 宇陀児" },
    { id: 1875, name: "壺井 栄" },
    { id: 1876, name: "塚原 健二郎" },
    { id: 1877, name: "シガーヨンスソン フロスティ" },
    { id: 1878, name: "早川 健治" },
    { id: 1879, name: "大隈 重信" },
    { id: 1882, name: "キングスフォード アンナ" },
    { id: 1884, name: "小宮 豊隆" },
    { id: 1885, name: "藤野 古白" },
    { id: 1886, name: "藤井 英男" },
    { id: 1887, name: "小野 梓" },
    { id: 1889, name: "山中 峯太郎" },
    { id: 1891, name: "矢崎 源九郎" },
    { id: 1892, name: "ラーゲルレーヴ セルマ" },
    { id: 1894, name: "木村 荘十" },
    { id: 1900, name: "ドロステ＝ヒュルスホフ アネッテ・フォン" },
    { id: 1901, name: "番匠谷 英一" },
    { id: 1902, name: "新井 紀一" },
    { id: 1903, name: "上田 広" },
    { id: 1904, name: "佐佐木 茂索" },
    { id: 1905, name: "中野 秀人" },
    { id: 1906, name: "河井 寛次郎" },
    { id: 1907, name: "窪田 空穂" },
    { id: 1908, name: "小穴 隆一" },
    { id: 1909, name: "安倍 能成" },
    { id: 1910, name: "中島 哀浪" },
    { id: 1911, name: "川田 順" },
    { id: 1912, name: "野間 清六" },
    { id: 1913, name: "深瀬 基寛" },
    { id: 1916, name: "円城 塔" },
    { id: 1917, name: "福永 信" },
    { id: 1918, name: "澤西 祐典" },
    { id: 1919, name: "シェミン マーガレット" },
    { id: 1920, name: "宝 探子" },
    { id: 1924, name: "吉田 茂" },
    { id: 1925, name: "シートン アーネスト・トンプソン" },
    { id: 1927, name: "野上 彰" },
    { id: 1930, name: "鈴木 牧之" },
    { id: 1931, name: "岡田 武松" },
    { id: 1932, name: "山東 京山" },
    { id: 1934, name: "柳原 白蓮" },
    { id: 1937, name: "笠 信太郎" },
    { id: 1938, name: "新村 出" },
    { id: 1939, name: "恒藤 恭" },
    { id: 1940, name: "小倉 右一郎" },
    { id: 1943, name: "成沢 玲川" },
    { id: 1948, name: "鮎川 義介" },
    { id: 1949, name: "山浦 貫一" },
    { id: 1950, name: "クロッサー マイラ・ジョー" },
    { id: 1951, name: "ブラックウッド アルジャーノン" },
    { id: 1952, name: "チェンバース ロバート・Ｗ" },
    { id: 1954, name: "中村 清太郎" },
    { id: 1955, name: "太田 健一" },
    { id: 1956, name: "金森 徳次郎" },
    { id: 1958, name: "富田 常雄" },
    { id: 1960, name: "ミルン アラン・アレクザンダー" },
    { id: 1961, name: "稲垣 巌" },
    { id: 1963, name: "信時 潔" },
    { id: 1964, name: "天川 恵三郎" },
    { id: 1968, name: "時枝 誠記" },
    { id: 1969, name: "矢部 貞治" },
    { id: 1970, name: "島 秋人" },
    { id: 1972, name: "林 譲治" },
    { id: 1974, name: "吉野 秀雄" },
    { id: 1976, name: "三木 露風" },
    { id: 1977, name: "森 於菟" },
    { id: 1978, name: "勝本 清一郎" },
    { id: 1979, name: "菱山 修三" },
    { id: 1983, name: "淀野 隆三" },
    { id: 1984, name: "金沢 庄三郎" },
    { id: 1985, name: "薄田 太郎" },
    { id: 1986, name: "秘田 余四郎" },
    { id: 1989, name: "早川 鮎子" },
    { id: 1990, name: "芥川 紗織" },
    { id: 1992, name: "森 律子" },
    { id: 1994, name: "森 郁夫" },
    { id: 1995, name: "ジェイコブス ウイリアム・ワイマーク" },
    { id: 1996, name: "中村 研一" },
    { id: 1997, name: "三岸 好太郎" },
    { id: 1999, name: "菱田 春草" },
    { id: 2003, name: "藤村 操" },
    { id: 2007, name: "山東 京伝" },
    { id: 2008, name: "平光 吾一" },
    { id: 2009, name: "マッケナ リチャード・ミルトン" },
    { id: 2010, name: "スミス コードウェイナー" },
    { id: 2013, name: "吉岡 禅寺洞" },
    { id: 2016, name: "ダ・ヴィンチ レオナルド" },
    { id: 2033, name: "ヒューム デイヴィッド" },
    { id: 2034, name: "井上 基志" },
    { id: 2035, name: "オーウェル ジョージ" },
    { id: 2036, name: "パイパー ヘンリー・ビーム" },
    { id: 2038, name: "大谷 正信" },
    { id: 2043, name: "ホワイト フレッド・Ｍ" },
    { id: 2044, name: "奥 増夫" },
    { id: 2045, name: "中村 喜治" },
    { id: 2048, name: "小西 茂也" },
    { id: 2050, name: "古賀 春江" },
    { id: 2051, name: "松本 竣介" },
    { id: 2052, name: "プリリュー エドゥアール・エルネ" },
    { id: 2053, name: "竹本 周平" },
    { id: 2085, name: "間所 紗織" },
    { id: 2086, name: "藤原 咲平" },
    { id: 2089, name: "板谷 波山" },
    { id: 2091, name: "青木 正児" },
    { id: 2123, name: "安井 曽太郎" },
    { id: 2130, name: "ダンバー オリヴィア・ハワード" },
    { id: 2134, name: "クレイン ウォルター" }
  ]