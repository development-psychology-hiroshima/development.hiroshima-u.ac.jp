# Maintenance Manual for development.hiroshima-u.ac.jp

[日本語](https://github.com/development-psychology-hiroshima/development.hiroshima-u.ac.jp/blob/master/README_JP.md)

This manual is purposed to give proper instructions on maintaining webpage(s) hosted on [development.hiroshima-u.ac.jp](https://development.hiroshima-u.ac.jp). For any question or bug report, please feel free to [contact the author](mailto:chenzhaolu_deer@outlook.com).

## Editing page configuration files

Most of the page contents can be found at `main.yml` in the `/(public)/configs` directory. (Professors' research activity page, and annual schedule page are excluded)

When editing the file, **DO USE ENGLISH HALF-WIDTH SPACE " " and keep indents consistent with other contexts.** Don't use Japanese full-width space "　". This will raise errors and all site contents will fallback to an initial state. All your modifications will not be shown.

You can examine whether the configuration has been successfully loaded and interpreted in this way:

1. Access [website homepage](https://development.hiroshima-u.ac.jp) **with a computer or tablet (not mobile)**;
2. In menu items, check if the first english letter is `Capital letter` or not.
3. If is capital letter, then te config file has been successfully loaded. Otherwise check the web console (`F12`) for errors.

<details>
<summary>This is a sample configuration file:</summary>

> configs/main.yml

```yaml
# 「研究室の話題」の部分
# 内容の前のスペース数を、必ず前文と一致にしてください。
# 必ず英語の半角スペースを使用してください。
# DO KEEP WHITESPACE COUNT CONSISTENT
# DO USE ENGLISH HALF-WIDTH spaces!
awards:
  - year: 2022
    text: 杉村和美が共同執筆した『アイデンティティ 時間と関係を生きる』が出版されました。
    url: null
  - year: 2022
    text: 岩佐康弘・日原尚吾・杉村和美の研究発表が，中国四国心理学会第77回大会の大会優秀発表賞を受賞しました(2022.2)。
    url: https://cspa.hiroshima-u.ac.jp/award.html
  - year: 2021
    text: 杉村和美・日原尚吾の論文がDevelopmental Psychologyに採択されました(2021.11)。
  - year: 2021
    text: 日原尚吾が分担執筆した『新・教職課程演習 第8巻 特別活動・生徒指導・キャリア教育』が出版されました。
  - year: 2021
    text: 岩佐康弘・杉村和美の論文が，第10回青年心理学会学会賞を受賞しました(2021.10)。
  - year: 2021
    text: 日原尚吾・梅村比丘・岩佐康弘・雜賀智子・杉村和美の論文がDevelopmental Psychologyに掲載されました(2021.8)。
    url: https://doi.apa.org/doiLanding?doi=10.1037%2Fdev0001275
  - year: 2021
    text: 岩佐康弘・日原尚吾・梅村比丘・杉村和美の論文 がIdentityに掲載されました(2021.7)。
    url: https://www.tandfonline.com/doi/full/10.1080/15283488.2021.1954520
  - year: 2021
    text: 杉村和美の論文が Identityに掲載されました(2021.7)。
    url: https://www.tandfonline.com/doi/full/10.1080/15283488.2021.1947819
  - year: 2021
    text: 繁田京ノ輔が国際Identity学会 (ISRI) でStudent Research Awardを受賞しました(2021.6)。
  - year: 2021
    text: 日原尚吾の研究が，2020年度 小貫英教育賞を受賞しました(2021.5)。
  - year: 2021
    text: 梅村比丘・杉村和美の論文が Attachment & Human Developmentに掲載されました(2021.4)。
    url: https://www.tandfonline.com/doi/abs/10.1080/14616734.2021.1881134?journalCode=rahd20
  - year: 2021
    text: 日原尚吾・杉村和美・梅村比丘・岩佐康弘の論文が Development and Psychopathology に掲載されました (2021.03)。
    url: https://www.cambridge.org/core/journals/development-and-psychopathology/article/abs/positive-and-negative-valences-of-identities-longitudinal-associations-of-identity-content-valences-with-adaptive-and-maladaptive-functioning-among-japanese-young-adults/F957592F6CEE82FAD1F2DC75A8BD7572
  - year: 2021
    text: 梅村比丘の論文が Current Psychologyに掲載されました(2021.01)。
    url: https://link.springer.com/article/10.1007/s12144-020-01297-9
  - year: 2021
    text: 梅村比丘の論文が PLoS ONEに掲載されました(2021.01)。
    url: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0244278
  - year: 2020
    text: 梅村比丘の論文が Journal of Early Adolescenceに掲載されました(2020.12)。
    url: https://www.sciencedirect.com/science/article/abs/pii/S092523122020000X
  - year: 2020
    text: 杉村和美・岩佐康弘(認知心理学研究室との共同研究) の論文がScientific Reportsに掲載されました(2020.12)。
    url: https://www.nature.com/articles/s41598-020-79444-2
  - year: 2020
    text: 日原尚吾・雜賀智子・杉村和美の論文がIdentityに掲載されました(2020.11)。
    url: https://doi.org/10.1080/15283488.2020.1839757
  - year: 2020
    text: 梅村比丘がHIRAKU-Global選抜教員に就任しました(2020.10)。
    url: https://www.hiroshima-u.ac.jp/hiraku-g
  - year: 2020
    text: 杉村和美・日原尚吾の論文がJournal of Adolescence に掲載されました(2020.09)。
    url: https://www.sciencedirect.com/science/article/pii/S0140197120301408?via%3Dihub
  - year: 2020
    text: 杉村和美・日原尚吾の論文がJournal of Social and Personal Relationships に掲載されました(2020.08)。
    url: https://journals.sagepub.com/doi/10.1177/0265407520948621
  - year: 2020
    text: 日原尚吾が助教に就任しました(2020.04.01)。
  - year: 2020
    text: 岩佐康弘が日本学術振興会特別研究員（DC2）に採用されました (2020.04.01)。
  - year: 2019
    text: 杉村和美の論文がJournal of Youth and Adolescenceに採択されました。
    url: https://link.springer.com/article/10.1007/s10964-019-01182-0
  - year: 2019
    text: 杉村和美の論文がChild Development Perspectives に採択されました。
    url: https://srcd.onlinelibrary.wiley.com/doi/full/10.1111/cdep.12359
  - year: 2019
    text: 梅村比丘が三原市で児童思春期の愛着に関する講演を12月12日に行いました。
    url: https://development.hiroshima-u.ac.jp/ad/20191212_miharakouen.pdf
  - year: 2019
    text: 徳岡大が日本パーソナリティ心理学会第28回大会で優秀発表賞を受賞しました。
  - year: 2019
    text: 梅村比丘が日本心理学会第83回大会でアタッチメントのシンポジウムを行いました。
    url: https://development.hiroshima-u.ac.jp/rese/Tomotaka_Umemura/Nissinsinpo.pdf
  - year: 2019
    text: Masaryk UniversityのDr. Lukas BlinkaとDr. Anna Sevcikovaが講演を行いました。
    url: https://development.hiroshima-u.ac.jp/ad/Addiction%20Research%20Poster.pdf
  - year: 2019
    text: 日原尚吾・石橋彩波・梅村比丘・杉村和美の論文がEmerging Adulthoodに掲載されました。
    url: https://journals.sagepub.com/doi/full/10.1177/2167696819858457

# HPのイメージの部分
# 写真をいくつに入れても大丈夫。
# 必ず英語の半角スペースを使用してください。
# Homepage Image banner.
# Can add as many images as required.
# please DO USE ENGLISH HALF-WIDTH spaces!
bannerImages:
  - images/syugo/sugimuraken_syugo202203.jpeg
  - images/syugo/umemuraken_syugo202203.jpeg
  - images/2019_aki_sinkan.jpeg
  - https://development.hiroshima-u.ac.jp/images/sche/201804shinkan.jpg

# 「卒業生の進路」の部分
# 内容の前のスペース数を、必ず前文と一致にしてください。
# 必ず英語の半角スペースを使用してください。
# DO KEEP WHITESPACE COUNT CONSISTENT
# DO USE ENGLISH HALF-WIDTH spaces!
graduates:
  - year: 2021
    undergrad: 学部生(3名)：大学院進学(2名)，民間企業(1名)
    grad: 院生(4名)：梅光学院大学講師(1名)，大学院進学(1名)，公務員(2名)
  - year: 2020
    undergrad: 学部生(3名)：大学院進学(2名)，民間(1名：児童発達支援)
    grad: 院生(1名)：医療機関(1名：一般病院)
  - year: 2019
    undergrad: 学部生(2名)：大学院進学(1名)
    grad: 院生(3名)：広島大学助教(1名)，公務員(1名)，公益財団法人(1名)
  - year: 2018
    undergrad: 学部生(2名)：民間企業(2名,：製薬，放送)
    grad: 院生(1名)：民間企業(1名：ウェディング)
  - year: 2017
    undergrad: 学部生(2名)：大学院進学(2名)
  - year: 2016
    undergrad: 学部生(2名)：大学院進学(2名)
  - year: 2015
    undergrad: 学部生(2名)：家庭裁判所調査官(1名)，公務員(1名：県警)，民間企業(1名：SE)
    grad: 院生(3名)：博士課程進学(1名)，家庭裁判所調査官(1名)，民間企業(1名：貿易)
  - year: 2014
    undergrad: 学部生(3名)：大学院進学(2名)，民間企業(1名：食品)
  - year: 2013
    undergrad: 学部生(3名)：大学院進学(2名)，公務員(1名：児童厚生施設)

# 「メンバー紹介」の部分
# 内容の前のスペース数を、必ず前文と一致にしてください。
# 必ず英語の半角スペースを使用してください。
# DO KEEP WHITESPACE COUNT CONSISTENT
# DO USE ENGLISH HALF-WIDTH spaces!
# DO KEEP WHITESPACE COUNT CONSISTENT
# DO USE ENGLISH HALF-WIDTH spaces!
members:
  - name: 杉村 和美
    position: 教授
    image: https://development.hiroshima-u.ac.jp/images/people/Kazumi_Sugimura.jpg
    intro: 東京生まれ、名古屋育ち。教員になってからは愛知学泉女子短期大学、追手門学院大学、名古屋大学、広島大学の４つを経験していますので，多様な背景を持つ学生・院生の指導ができると思います。一緒にアイデンティティの発達を研究したい人は、ぜひ来てください。
    interest: アイデンティティ理論，自律，大人への移行，親子関係，仲間関係，文化の中での発達
    others:
      - title: 連絡先
        content: <a href="mailto:ksugimura@hiroshima-u.ac.jp">ksugimura@hiroshima-u.ac.jp</a>
      - title: 研究者総覧
        content: <a href="https://goo.gl/HG59FA" target="_blank"> https://goo.gl/HG59FA</a>
  - name: 梅村 比丘
    position: 准教授
    image: https://development.hiroshima-u.ac.jp/images/people/Tomo_Umemura.jpg
    intro: アメリカの大学（<a href="https://www.stonybrook.edu/psychology/" target="_blank">Stony Brook University</a>）･大学院（<a href="https://he.utexas.edu/hdfs" target="_blank">University of Texas at Austin</a>）で勉強した後、チェコ共和国の大学（<a href="http://vsichnimojiblizci.fss.muni.cz/en/o-nas" target="_blank">Masaryk University</a>）で4年間ポスドク研究員をしました。アタッチメント理論を軸に、人間関係の発達について幼児期から成人期以降までの包括的な理解を目指して研究しています。広島大学では、特にアタッチメントとアイデンティティの関連について探求していく予定です。一緒にアタッチメントの研究をしたい人も、ぜひ来てください！
    interest: アタッチメント理論、親子関係、社会性の発達、生涯発達
    others:
      - title: 連絡先
        content: <a href="mailto:umemura@hiroshima-u.ac.jp">umemura@hiroshima-u.ac.jp</a>
      - title: Research Gate
        content: <a href="https://www.researchgate.net/profile/Tomo_Umemura" target="_blank">https://www.researchgate.net/profile/Tomo_Umemura</a>
      - title: Google Scholar
        content: <a href="https://goo.gl/qEyz2M" target="_blank">https://goo.gl/qEyz2M</a>
      - title: 広島大学研究者総覧
        content: <a href="https://goo.gl/KWbZy5" target="_blank">https://goo.gl/KWbZy5</a>
      - title: HIRAKU-Globalプログラム
        content: <a href="https://www.hiroshima-u.ac.jp/hiraku-g">https://www.hiroshima-u.ac.jp/hiraku-g</a>
  - name: 雑賀 智子
    position: 博士課程後期1年
    image: https://development.hiroshima-u.ac.jp/images/people/saiga.JPG
    interest: 中年期のアイデンティティ，親子関係，発達心理学
    teacher: 杉村和美
  - name: 徐 煜
    position: 博士課程後期1年
    image: https://development.hiroshima-u.ac.jp/images/people/jo.jpg
    interest: アタッチメント階層性，インターネット依存，思春期
    teacher: 梅村比丘
  - name: 東 智美
    position: 博士課程前期2年
    image: https://development.hiroshima-u.ac.jp/images/people/azuma.jpg
    interest: 愛着，親子関係，発達心理学
    teacher: 梅村比丘
  - name: 上野 実希恵
    position: 博士課程前期2年
    image: https://development.hiroshima-u.ac.jp/images/people/Ueno.jpg
    interest: 発達心理学、臨床心理学、青年期、アイデンティティ
    teacher: 杉村和美
  - name: 繁田 京ノ輔
    position: 博士課程前期2年
    image: https://development.hiroshima-u.ac.jp/images/Handa.jpeg
    interest: 愛着，親子関係，アイデンティティ
    teacher: 梅村比丘
  - name: 陳 朝鹿
    position: 博士課程前期1年
    image: https://development.hiroshima-u.ac.jp/images/people/chen.jpg
    interest: 機械学習と心理学の応用
    teacher: 梅村比丘
  - name: 石崎和也
    position: 博士課程前期1年
    image: https://development.hiroshima-u.ac.jp/images/people/isaizaki.jpg
    interest: アイデンティティ，青年期，対人関係，発達心理学
    teacher: 杉村和美
  - name: 廣 真琴
    position: 博士課程前期1年
    image: https://development.hiroshima-u.ac.jp/images/people/hiro.jpg
    interest: ジェンダーアイデンティティ、性別違和、質的研究
    teacher: 杉村和美
  - name: 安居元紀
    position: 博士課程前期1年
    image: https://development.hiroshima-u.ac.jp/images/people/Yasui.jpg
    interest: アイデンティティ，青年期，マスターナラティブ
    teacher: 杉村和美
  - name: 高嶋修平
    position: 学部4年
    image: https://development.hiroshima-u.ac.jp/images/people/takashima5.jpg
    interest: acculturation (文化変容)/アイデンティティ形成/留学・移民
    teacher: 杉村和美
  - name: 砂川亜美
    position: 学部4年
    image: https://development.hiroshima-u.ac.jp/images/people/sunagawa3.jpg
    interest: アイデンティティ・ステイタス，発達心理学，社会心理学
    teacher: 杉村和美
  - name: 増田百香
    position: 学部4年
    image: https://development.hiroshima-u.ac.jp/images/people/masuda3.jpg
    interest: 発達心理学，家族関係，きょうだい関係，愛着
    teacher: 梅村比丘

obog:
  - name: 徳岡 大
    position: 高松大学 講師(2020年度博士号取得)
    intro: 明るく前向きに，日々やる気のことについて考え，研究活動と教育活動にいそしんでおります。DARMという統計の勉強会も細々とやっているので，興味のある方は下記のホームページを覗いてみて下さい。現在，高松大学で助教やってます。
    interest: 動機づけ，達成目標理論，非社会的遊び，ベイズ推定
    others:
      - title: 連絡先
        content: <a href="mailto:mtokuoka37@hiroshima-u.ac.jp">mtokuoka37@hiroshima-u.ac.jp</a>
      - title: 個人web page
        content: <a href=" http://mtokuoka.net/" target="_blank"> http://mtokuoka.net/</a>
      - title: DARM web page
        content: <a href="https://sites.google.com/site/studygroup13csrm/" target="_blank">https://sites.google.com/site/studygroup13csrm/</a>
  - name: 西田 若葉
    position: 宮崎産業経営大学 講師（2019年度博士課程後期満期退学）
    intro: 青年が重要な選択をえらぶときに悩んだ場合、どのように対処したらいいかを解 明していきたいです。特に進路決定の場面（就職活動での悩みや就活うつなど）にも興味があります。
    interest: 青年期以降のアイデンティティ形成，青年心理学，認知心理学，発達心理学
  - name: 日原 尚吾
    position: 松山大学経営学部 准教授（2019年度博士号取得）
    image: https://development.hiroshima-u.ac.jp/images/people/Shougo_Hihara.jpg
    intro: なぜ青年は社会的に望ましくない生き方を自ら選びとることがあるのか，否定的アイデンティティという観点から研究しています。現在は，否定的アイデンティティに関する大規模縦断調査に取り組んでいます。人生を振り返る語り (self-narrative) のデータを用いた研究も少しずつ進めています。また，European Association for Research on Adolescenceが主催する若手研究者の会 The Student and Early Career Networkの委員 (日本代表) を務めています。
    interest: 否定的アイデンティティ，精神病理，文化の中での発達，混合研究法，発達心理学
    others:
      - title: 連絡先
        content: <a href="mailto:hiharashogo@gmail.com">hiharashogo@gmail.com</a>
      - title: Research Gate
        content: <a href="https://www.researchgate.net/profile/Shogo_Hihara2" target="_blank">https://www.researchgate.net/profile/Shogo_Hihara2</a>
      - title: European Association for Research on Adolescence
        content: <a href="https://www.earaonline.org/" target="_blank">https://www.earaonline.org/</a>
      - title: 教育・研究業績一覧 (Curriculum vitae)
        content: <a href="rese/Shogo_Hihara/教育・研究業績書_20210817.pdf" download="教育・研究業績書_20210817.pdf" target="教育・研究業績書_20210817.pdf">日本語</a>／<a href="rese/Shogo_Hihara/CV_Shogo Hihara _20210817.pdf" download="CV_Shogo Hihara _20210817.pdf" target="CV_Shogo Hihara _20210817.pdf">English</a>
  - name: 岩佐 康弘
    position: 梅光学院大学 講師（2021年度博士号取得）
    image: https://development.hiroshima-u.ac.jp/images/people/iwasa.JPG
    intro: 博士論文では，教員養成課程の大学生がどのような生き方を形成しているのか，アイデンティティ発達の観点から量的・質的に検討しました。 これからは，学校から社会への移行過程（例：学生から教員など）における青年のアイデンティティ発達と心理的適応の関連や，学校教員が児童・青年のアイデンティティ発達や自律にどのような影響をもたらしているのか，などの研究を計画しています。
    interest: アイデンティティ発達，学校から社会への移行，職場適応，学校適応，教員養成課程，教員の自律性支援
    others:
      - title: researchmap
        content: <a href="https://researchmap.jp/yasuhiro_iwasa">https://researchmap.jp/yasuhiro_iwasa</a>
      - title: 連絡先
        content: yasuhiroiwasa1357[at]gmail.com (atを@に変換してください)
  - name: 浅井 拓人
    position: （2018年度博士課程前期修了生）
    image: https://development.hiroshima-u.ac.jp/images/people/Takuto_Asai.JPG
    others:
      - title: 修士論文題目
        content: <a href="rese/rese/abstract/ryousin_asai2018.pdf" target="ryousin_asai2018" download="両親間葛藤のある青年の情緒的自立と適応の観点">両親間葛藤のある青年の情緒的自立と適応の観点</a>
      - title: 進路
        content: 民間企業（ウェディング）
# メニューの部分
# Menu items to show in the navigation menu.
# please DO USE ENGLISH HALF-WIDTH spaces!
menuItems:
  - name: ホーム
    english: Home
    url: index.html
    show: true
  - name: メンバー紹介
    english: Members
    url: members.html
    show: true
  - name: 杉村和美の研究活動
    english: Sugimura's activities
    url: research_activity_sugimura.html
    show: true
  - name: 梅村比丘の研究活動
    english: Umemura's activities
    url: research_activity_umemura.html
    show: true
  - name: 一例
    english: An example
    url: path_to_webpage.html
    show: false
  - name: 学生の研究活動
    english: Students' activities
    url: research_activity_students.html
    show: true
  - name: 年間スケジュール
    english: Annual schedule
    url: annual_schedule.html
    show: true
```

</details>

## Continuing development

### Set up the Vite server

This site is based on [Vue 3](https://v3.ja.vuejs.org/) and built with [Vite](https://ja.vitejs.dev/). Full source code can be forked on https://github.com/development-psychology-hiroshima/development.hiroshima-u.ac.jp. You may need to [contact the author](mailto:chenzhaolu_deer@outlook.com) to be granted read/write permission.

To run a test site on your local machine, you may need the basic knowledge of configuring a [Node.js](https://nodejs.org/ja/) project, with npm as its default package manager.

Once you have installed Node, you can run the following commands in your terminal to run a test site at `localhost:3000` :

```sh
git clone https://github.com/development-psychology-hiroshima/development.hiroshima-u.ac.jp.git
cd development.hiroshima-u.ac.jp
npm install
npm install -g vite@latest
vite
```

If you want to expose your development server to the local network, try `vite --host` instead.

When you finish editing the source code, run `vite build` to build a production site at `/dist` path.

### Basic HTML DOM structure used in this project

#### Layout

##### Desktop Layout

![image](/document/image/desktop-layout.jpg)

Please note that the `Navigation` component has not been worked on yet. I don't think it necessary, but if anyone wants to implement it, I have reserved a `grid` area for it.

The grid area is defined in `index.css` as follows:

```css
.container-index-contents {
  display: grid;
  margin: 0 clamp(2rem, calc((100vw - 1500px) / 2), 50vw);
  grid-template-areas: "navigation main-content contact";
  grid-template-columns: 0.4fr 2.3fr 1fr;
  grid-column-gap: 2rem;
  max-width: 1500px;
}
```

##### Mobile Layout

![image](/document/image/mobile-layout.jpg)

The mobile layout is defined in `index.css` as follows:

```css
@media screen and (max-width: 425px) {
  /* some other code */
  .container-index-contents {
    margin: 1.5rem;
    grid-template-areas:
      "main-content"
      "contact" !important;
    grid-template-columns: 1fr !important;
    grid-template-rows: max-content;
  }
}
```

#### Common components

These components are universal and is used in every page:
- Banner (specifically, mobile menu)
- Image showreel
- Desktop menu

These components are mounted onto their specific `div` containers:
- #mobile-menu
- #container-desktop-menu
- #vue-carousel

You can find the example code in `/src/common.js`:
  
```js
import { createApp } from "vue";
import bannerCarousel from "./components/bannerCarousel.vue";
import mobileMenu from "./components/mobileMenu.vue";
import desktopMenu from "./components/desktopMenu.vue";
import { getConfig } from "./getConfig";

const config = await getConfig();

createApp(bannerCarousel).provide("config", config).mount("#vue-carousel");
createApp(mobileMenu).provide("config", config).mount("#mobile-menu");
createApp(desktopMenu)
  .provide("config", config)
  .mount("#container-desktop-menu");
```

The corresponding HTML structures are:

```html
<div id="container-banner">
  <div id="banner-contents" role="banner">
    <div id="lab-title" role="banner">広島大学 発達心理学研究室</div>
    <div id="mobile-menu" role="menu"></div>
  </div>
</div>
<div id="container-banner-carousel" role="widget">
  <div id="welcome">
    <p class="welcome-1" role="heading">ようこそ</p>
    <p class="welcome-2" role="heading">発達研へ</p>
  </div>
  <div id="vue-carousel" role="widget"></div>
</div>

<div id="container-desktop-menu" role="menubar"></div>
```

#### Header

Header tags used in this project are `h2`, `h3` and `h4`. You may have noticed that almost all header tags have a `<span>` tag. This is due to a workaround that `<hn>` tags could only be defined as block, breaking the decoration line effect. If you also want the decoration line to appear on your header, you must mention a `<span>` tag in the header.

Also, in order to comply with the WAI-ARIA standard, you should add the `role="heading" aria-level="n"` attribute to the header tag.

An example would look like this:

```html
<h2 class="contact-title">
  <span role="heading" aria-level="2">広島大学発達心理学研究室</span>
</h2>
```

This style is defined in the `index.css` as follows:

```css
h2 span,
h3 span,
h3 span a,
h4 span {
  background: linear-gradient(
    to top,
    transparent 5%,
    #bfd08c 5%,
    #bfd08c 10%,
    #bfd08c 40%,
    transparent 0%
  );
}
```

Also, if you want your following contents to keep some distance from the header, you could add another wrapper `<div class="split-line" role="heading" aria-level="n"></div>` to the `<hn>` tag.

An example would look like this:

```html
<div class="split-line" role="heading">
  <h2 id="top-target">
    <span role="heading" aria-level="1">研究室の話題</span>
  </h2>
</div>
```
This style is defined in the `index.css` as follows:

```css
.split-line {
  margin-bottom: 2rem;
}
```

#### Card 

The webpages' design is heavily inspired by
[neumorphism](https://hype4.academy/articles/design/neumorphism-in-user-interfaces)
design heavily. Thus, the content block is basically surrounded by a card container `<div class="card"></div>`. 

The card's style is defined in index.css as follows: 
```css 
.card {
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  border-radius: 10px;
  box-shadow: 6px 6px 12px #cccccc, -6px -6px 12px #ffffff;
  background-color: #f2f2f2;
  padding: 1.5rem;
  margin-bottom: 2rem;
  max-width: calc(100vw - 4rem);
  word-break: break-word;
}
```

#### Contact card

Each page should contain a contact card. You can directly copy&paste the following HTML structure:

```html
<div id="container-misc-info">
  <div class="card" id="container-contact-info">
    <img class="logo" src="/images/logo.png" alt="発達研ロゴ" />
    <h2 class="contact-title">
      <span role="heading" aria-level="2"
        >広島大学発達心理学研究室</span
      >
    </h2>
    <h2 class="contact-title">
      <span role="heading" aria-level="2">お問い合わせ</span>
    </h2>
    <div class="container-personal-contact">
      <img
        class="contact-avatar"
        src="/images/avatar_sugimura.jpg"
        alt="杉村先生"
      />
      <p class="personal-contact-name">杉村和美</p>
      <a
        class="email-hyperlink"
        href="mailto:ksugimura@hiroshima-u.ac.jp"
        >ksugimura@hiroshima-u.ac.jp</a
      >
    </div>
    <div class="container-personal-contact">
      <img
        class="contact-avatar"
        src="/images/avatar_umemura.jpg"
        alt="梅村先生"
      />
      <p class="personal-contact-name">梅村比丘</p>
      <a class="email-hyperlink" href="mailto:umemura@hiroshima-u.ac.jp"
        >umemura@hiroshima-u.ac.jp</a
      >
    </div>
  </div>
  <div class="copyright">
    <p id="copyright-year">copyright© 2012</p>
    <p>Developmental psychology Hiroshima.</p>
    <p>All Right Reserved.</p>
  </div>
</div>

<script async>
  const year = new Date().getFullYear();
  document.getElementById(
    "copyright-year"
  ).innerHTML = `copyright© 2012-${year}`;

  const topButton = document.getElementById("top-button");
  let previousPosition = 0;

  console.log(
    window.screen.width / window.devicePixelRatio +
      ", " +
      window.screen.height +
      ", " +
      window.devicePixelRatio
  );

  if (window.screen.width / window.devicePixelRatio <= 1024) {
    window.addEventListener("scroll", () => {
      if (window.scrollY < previousPosition && window.scrollY > 100) {
        topButton.classList.remove("hidden");
        topButton.classList.add("show");
      } else {
        topButton.classList.remove("show");
        topButton.classList.add("hidden");
      }

      previousPosition = window.scrollY;
    });
  }
</script>
```

The `<script>` tag is used to load the scripts to automatically update the copyright year and determine when the top button should pop up on mobile devices.

I think that's enough to get you started. If you have any questions, please feel free to [contact me](mailto:chenzhaolu_deer@outlook.com).