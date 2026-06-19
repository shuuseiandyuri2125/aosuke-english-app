const WORDS = [
  { grade: 1, unit: "はじめの10語", word: "I", meaning: "私は", image: "I", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "you", meaning: "あなたは", image: "YOU", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "he", meaning: "彼は", image: "HE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "she", meaning: "彼女は", image: "SHE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "it", meaning: "それは", image: "IT", kind: "人・もの" },
  { grade: 1, unit: "はじめの10語", word: "we", meaning: "私たちは", image: "WE", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "they", meaning: "彼らは", image: "THEY", kind: "人を表す" },
  { grade: 1, unit: "はじめの10語", word: "am", meaning: "です・います", image: "am", kind: "動き・状態" },
  { grade: 1, unit: "はじめの10語", word: "is", meaning: "です・います", image: "is", kind: "動き・状態" },
  { grade: 1, unit: "はじめの10語", word: "are", meaning: "です・います", image: "are", kind: "動き・状態" },

  { grade: 1, unit: "動きのことば", word: "like", meaning: "好き", image: "LIKE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "play", meaning: "遊ぶ・する", image: "PLAY", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "go", meaning: "行く", image: "GO", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "come", meaning: "来る", image: "COME", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "have", meaning: "持っている", image: "HAVE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "study", meaning: "勉強する", image: "STUDY", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "read", meaning: "読む", image: "READ", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "write", meaning: "書く", image: "WRITE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "eat", meaning: "食べる", image: "EAT", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "drink", meaning: "飲む", image: "DRINK", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "see", meaning: "見る・会う", image: "SEE", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "look", meaning: "見る", image: "LOOK", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "want", meaning: "ほしい", image: "WANT", kind: "動き" },
  { grade: 1, unit: "動きのことば", word: "can", meaning: "できる", image: "CAN", kind: "助けることば" },
  { grade: 1, unit: "動きのことば", word: "do", meaning: "する", image: "DO", kind: "動き" },

  { grade: 1, unit: "学校・持ち物", word: "student", meaning: "生徒", image: "STU", kind: "もの・人" },
  { grade: 1, unit: "学校・持ち物", word: "teacher", meaning: "先生", image: "TCH", kind: "もの・人" },
  { grade: 1, unit: "学校・持ち物", word: "school", meaning: "学校", image: "SCH", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "classroom", meaning: "教室", image: "ROOM", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "desk", meaning: "机", image: "DESK", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "chair", meaning: "いす", image: "CHAIR", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "book", meaning: "本", image: "BOOK", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "pen", meaning: "ペン", image: "PEN", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "pencil", meaning: "えんぴつ", image: "PCL", kind: "もの" },
  { grade: 1, unit: "学校・持ち物", word: "bag", meaning: "かばん", image: "BAG", kind: "もの" },

  { grade: 1, unit: "食べ物・生活", word: "apple", meaning: "りんご", image: "APPLE", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "orange", meaning: "オレンジ", image: "ORNG", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "milk", meaning: "牛乳", image: "MILK", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "water", meaning: "水", image: "WATER", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "rice", meaning: "ご飯・米", image: "RICE", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "bread", meaning: "パン", image: "BREAD", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "breakfast", meaning: "朝食", image: "AM", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "lunch", meaning: "昼食", image: "NOON", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "dinner", meaning: "夕食", image: "PM", kind: "もの" },
  { grade: 1, unit: "食べ物・生活", word: "house", meaning: "家", image: "HOME", kind: "もの" },

  { grade: 1, unit: "人・場所・曜日", word: "friend", meaning: "友だち", image: "FRND", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "family", meaning: "家族", image: "FAM", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "mother", meaning: "母", image: "MOM", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "father", meaning: "父", image: "DAD", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "sister", meaning: "姉・妹", image: "SIS", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "brother", meaning: "兄・弟", image: "BRO", kind: "人" },
  { grade: 1, unit: "人・場所・曜日", word: "park", meaning: "公園", image: "PARK", kind: "場所" },
  { grade: 1, unit: "人・場所・曜日", word: "Monday", meaning: "月曜日", image: "MON", kind: "曜日" },
  { grade: 1, unit: "人・場所・曜日", word: "Sunday", meaning: "日曜日", image: "SUN", kind: "曜日" },
  { grade: 1, unit: "人・場所・曜日", word: "English", meaning: "英語", image: "ENG", kind: "もの" },

  { grade: 2, unit: "中2 基礎動詞", word: "make", meaning: "作る", image: "MAKE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "use", meaning: "使う", image: "USE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "live", meaning: "住む・生きる", image: "LIVE", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "know", meaning: "知っている", image: "KNOW", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "speak", meaning: "話す", image: "TALK", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "learn", meaning: "学ぶ", image: "LEARN", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "try", meaning: "試す", image: "TRY", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "visit", meaning: "訪れる", image: "VISIT", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "enjoy", meaning: "楽しむ", image: "ENJOY", kind: "動き" },
  { grade: 2, unit: "中2 基礎動詞", word: "need", meaning: "必要とする", image: "NEED", kind: "動き" },

  { grade: 2, unit: "中2 くらし", word: "city", meaning: "市・都会", image: "CITY", kind: "場所" },
  { grade: 2, unit: "中2 くらし", word: "country", meaning: "国・田舎", image: "CNTRY", kind: "場所" },
  { grade: 2, unit: "中2 くらし", word: "weather", meaning: "天気", image: "WTHR", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "season", meaning: "季節", image: "SEASN", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "summer", meaning: "夏", image: "SUMR", kind: "季節" },
  { grade: 2, unit: "中2 くらし", word: "winter", meaning: "冬", image: "WNTR", kind: "季節" },
  { grade: 2, unit: "中2 くらし", word: "music", meaning: "音楽", image: "MUSIC", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "picture", meaning: "絵・写真", image: "PIC", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "question", meaning: "質問", image: "Q", kind: "もの" },
  { grade: 2, unit: "中2 くらし", word: "answer", meaning: "答え", image: "A", kind: "もの" },

  { grade: 3, unit: "中3 基礎動詞", word: "become", meaning: "なる", image: "BECM", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "bring", meaning: "持ってくる", image: "BRNG", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "build", meaning: "建てる", image: "BLD", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "change", meaning: "変える", image: "CHG", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "choose", meaning: "選ぶ", image: "CHS", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "finish", meaning: "終える", image: "FIN", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "remember", meaning: "覚えている", image: "REM", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "understand", meaning: "理解する", image: "UNDR", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "practice", meaning: "練習する", image: "PRAC", kind: "動き" },
  { grade: 3, unit: "中3 基礎動詞", word: "decide", meaning: "決める", image: "DCDE", kind: "動き" },

  { grade: 3, unit: "中3 考えることば", word: "important", meaning: "重要な", image: "IMP", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "different", meaning: "違った", image: "DIFF", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "favorite", meaning: "お気に入りの", image: "FAV", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "interesting", meaning: "おもしろい", image: "INTR", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "beautiful", meaning: "美しい", image: "BEAU", kind: "ようす" },
  { grade: 3, unit: "中3 考えることば", word: "future", meaning: "未来", image: "FUTR", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "world", meaning: "世界", image: "WRLD", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "language", meaning: "言語", image: "LANG", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "culture", meaning: "文化", image: "CLTR", kind: "もの" },
  { grade: 3, unit: "中3 考えることば", word: "experience", meaning: "経験", image: "EXPR", kind: "もの" }
];

const EXTRA_WORD_SETS = [
  {
    grade: 1,
    unit: "色と数",
    kind: "色・数",
    entries: `
red|赤|RED
blue|青|BLUE
green|緑|GREEN
yellow|黄色|YEL
black|黒|BLACK
white|白|WHITE
brown|茶色|BROWN
pink|ピンク|PINK
purple|むらさき|PURP
orange|オレンジ色|ORNG
one|1|1
two|2|2
three|3|3
four|4|4
five|5|5
six|6|6
seven|7|7
eight|8|8
nine|9|9
ten|10|10
    `,
  },
  {
    grade: 1,
    unit: "動物",
    kind: "動物",
    entries: `
cat|ねこ|CAT
dog|犬|DOG
bird|鳥|BIRD
fish|魚|FISH
rabbit|うさぎ|RAB
bear|くま|BEAR
lion|ライオン|LION
tiger|トラ|TIGR
horse|馬|HORS
cow|牛|COW
pig|ぶた|PIG
sheep|羊|SHEP
duck|アヒル|DUCK
chicken|にわとり|CHKN
monkey|さる|MONK
elephant|ゾウ|ELPH
giraffe|キリン|GIRF
mouse|ねずみ|MOUS
panda|パンダ|PNDA
koala|コアラ|KOA
    `,
  },
  {
    grade: 1,
    unit: "体と気持ち",
    kind: "人・気持ち",
    entries: `
head|頭|HEAD
face|顔|FACE
eye|目|EYE
ear|耳|EAR
nose|鼻|NOSE
mouth|口|MOUTH
hand|手|HAND
foot|足|FOOT
leg|脚|LEG
arm|腕|ARM
happy|うれしい|HAPPY
sad|悲しい|SAD
tired|疲れた|TIRD
hungry|おなかがすいた|HUN
thirsty|のどがかわいた|THIR
sleepy|眠い|SLPY
sick|具合が悪い|SICK
angry|怒った|ANGR
fine|元気な|FINE
strong|強い|STRG
    `,
  },
  {
    grade: 1,
    unit: "家と生活",
    kind: "もの",
    entries: `
bed|ベッド|BED
door|ドア|DOOR
window|窓|WINDW
table|テーブル|TABL
room|部屋|ROOM
kitchen|台所|KITCH
bath|お風呂|BATH
toilet|トイレ|TOIL
garden|庭|GARDN
box|箱|BOX
cup|コップ|CUP
plate|皿|PLATE
spoon|スプーン|SPON
fork|フォーク|FORK
shirt|シャツ|SHRT
shoes|くつ|SHOE
cap|ぼうし|CAP
clock|時計|CLOCK
key|かぎ|KEY
doorbell|チャイム|BELL
    `,
  },
  {
    grade: 1,
    unit: "動きの練習",
    kind: "動き",
    entries: `
run|走る|RUN
walk|歩く|WALK
jump|跳ぶ|JUMP
swim|泳ぐ|SWIM
sing|歌う|SING
dance|踊る|DANCE
listen|聞く|LSTN
hear|聞こえる|HEAR
open|開ける|OPEN
close|閉める|CLOSE
wash|洗う|WASH
help|手伝う|HELP
stop|止まる|STOP
start|始める|START
sit|座る|SIT
stand|立つ|STND
sleep|眠る|SLEEP
smile|ほほえむ|SMIL
cry|泣く|CRY
draw|描く|DRAW
    `,
  },
  {
    grade: 1,
    unit: "自然",
    kind: "自然",
    entries: `
sky|空|SKY
sun|太陽|SUN
moon|月|MOON
star|星|STAR
tree|木|TREE
flower|花|FLWR
grass|草|GRAS
rain|雨|RAIN
snow|雪|SNOW
wind|風|WIND
river|川|RIVR
sea|海|SEA
mountain|山|MTN
lake|湖|LAKE
cloud|雲|CLOUD
beach|浜辺|BEACH
morning|朝|MORN
night|夜|NIGHT
forest|森|FRST
rock|岩|ROCK
    `,
  },
  {
    grade: 2,
    unit: "人と仕事",
    kind: "人・仕事",
    entries: `
doctor|医者|DOC
nurse|看護師|NURSE
police officer|警察官|POL
farmer|農家|FARM
singer|歌手|SINGR
player|選手|PLAYR
writer|作家|WRTR
artist|芸術家|ART
worker|働く人|WORKR
driver|運転手|DRIVR
cook|料理人|COOK
clerk|店員|CLRK
actor|俳優|ACTR
actress|女優|ACTRS
pilot|パイロット|PLOT
dentist|歯医者|DENT
scientist|科学者|SCI
engineer|技術者|ENGR
guide|案内人|GUID
leader|リーダー|LEAD
    `,
  },
  {
    grade: 2,
    unit: "学校と活動",
    kind: "学校・活動",
    entries: `
club|部活|CLUB
team|チーム|TEAM
sport|スポーツ|SPRT
soccer|サッカー|SOCC
baseball|野球|BASE
basketball|バスケットボール|BASK
tennis|テニス|TENN
piano|ピアノ|PIANO
guitar|ギター|GUIT
camera|カメラ|CAM
computer|コンピューター|PC
phone|電話|PHON
letter|手紙|LETR
e-mail|メール|MAIL
map|地図|MAP
ticket|チケット|TICK
bus|バス|BUS
train|電車|TRAIN
bike|自転車|BIKE
car|車|CAR
    `,
  },
  {
    grade: 2,
    unit: "時間",
    kind: "時間",
    entries: `
today|今日|TODAY
tomorrow|明日|TMRW
yesterday|昨日|YDAY
morning|朝|MORN
afternoon|午後|AFTN
evening|夕方|EVEN
week|週|WEEK
month|月|MONTH
year|年|YEAR
Tuesday|火曜日|TUE
Wednesday|水曜日|WED
Thursday|木曜日|THU
Friday|金曜日|FRI
Saturday|土曜日|SAT
holiday|休日|HOL
birthday|誕生日|BDAY
time|時間|TIME
hour|1時間|HOUR
minute|分|MIN
weekend|週末|WKND
    `,
  },
  {
    grade: 2,
    unit: "ようす",
    kind: "ようす",
    entries: `
big|大きい|BIG
small|小さい|SML
long|長い|LONG
short|短い|SHRT
new|新しい|NEW
old|古い|OLD
young|若い|YNG
fast|速い|FAST
slow|遅い|SLOW
hot|暑い・熱い|HOT
cold|寒い・冷たい|COLD
warm|暖かい|WARM
cool|涼しい|COOL
easy|簡単な|EASY
difficult|難しい|DIFF
clean|きれいな|CLEAN
dirty|汚れた|DIRTY
quiet|静かな|QUIET
busy|忙しい|BUSY
kind|親切な|KIND
    `,
  },
  {
    grade: 2,
    unit: "食べ物",
    kind: "もの",
    entries: `
egg|卵|EGG
meat|肉|MEAT
vegetable|野菜|VEG
fruit|果物|FRUIT
banana|バナナ|BANA
grape|ぶどう|GRAPE
potato|じゃがいも|POTA
tomato|トマト|TOMA
carrot|にんじん|CARR
cake|ケーキ|CAKE
soup|スープ|SOUP
juice|ジュース|JUICE
tea|お茶|TEA
coffee|コーヒー|COF
pizza|ピザ|PIZZA
curry|カレー|CURRY
salad|サラダ|SALAD
cheese|チーズ|CHEE
sugar|砂糖|SUGR
salt|塩|SALT
    `,
  },
  {
    grade: 2,
    unit: "よく使う動詞",
    kind: "動き",
    entries: `
buy|買う|BUY
sell|売る|SELL
cook|料理する|COOK
clean|掃除する|CLEAN
wait|待つ|WAIT
call|電話する|CALL
ask|たずねる|ASK
show|見せる|SHOW
move|動く|MOVE
turn|曲がる・回す|TURN
work|働く|WORK
carry|運ぶ|CARRY
find|見つける|FIND
take|取る・連れていく|TAKE
give|与える|GIVE
tell|伝える|TELL
catch|捕まえる|CATCH
throw|投げる|THROW
meet|会う|MEET
join|参加する|JOIN
    `,
  },
  {
    grade: 3,
    unit: "考えを表す",
    kind: "考えることば",
    entries: `
think|考える|THINK
believe|信じる|BLV
hope|望む|HOPE
feel|感じる|FEEL
mean|意味する|MEAN
explain|説明する|EXPL
describe|描写する|DESC
compare|比べる|COMP
agree|賛成する|AGREE
disagree|反対する|DIS
reason|理由|RSN
idea|考え|IDEA
opinion|意見|OPIN
example|例|EX
fact|事実|FACT
point|要点|POINT
topic|話題|TOPIC
message|伝言・主旨|MSG
voice|声|VOICE
choice|選択|CHOI
    `,
  },
  {
    grade: 3,
    unit: "学校と学習",
    kind: "学校・学習",
    entries: `
subject|教科|SUBJ
science|理科|SCI
history|歴史|HIST
math|数学|MATH
notebook|ノート|NOTE
dictionary|辞書|DICT
homework|宿題|HW
lesson|授業|LESS
test|テスト|TEST
score|点数|SCORE
page|ページ|PAGE
sentence|文|SENT
story|物語|STORY
word|単語|WORD
grammar|文法|GRAM
pronunciation|発音|PRON
conversation|会話|CONV
speech|スピーチ|SPCH
report|レポート|RPT
project|課題・企画|PROJ
    `,
  },
  {
    grade: 3,
    unit: "世界と社会",
    kind: "社会・世界",
    entries: `
earth|地球|EARTH
nature|自然|NATR
environment|環境|ENV
energy|エネルギー|ENRG
problem|問題|PROB
solution|解決策|SOL
peace|平和|PEACE
volunteer|ボランティア|VOL
festival|祭り|FEST
tradition|伝統|TRAD
communication|コミュニケーション|COMM
technology|技術|TECH
information|情報|INFO
community|地域社会|COMU
society|社会|SOCI
population|人口|POP
future|未来|FUTR
global|世界的な|GLOB
local|地元の|LOCAL
planet|惑星|PLAN
    `,
  },
  {
    grade: 3,
    unit: "発展動詞",
    kind: "動き",
    entries: `
receive|受け取る|RCV
send|送る|SEND
invite|招待する|INVT
protect|守る|PROT
save|救う・保存する|SAVE
improve|改善する|IMPR
continue|続ける|CONT
happen|起こる|HAPPN
appear|現れる|APPR
disappear|消える|DISAP
grow|育つ|GROW
travel|旅行する|TRVL
arrive|到着する|ARRV
leave|去る・残す|LEAV
collect|集める|COLL
share|共有する|SHAR
return|戻る|RTRN
borrow|借りる|BORR
lend|貸す|LEND
prepare|準備する|PREP
    `,
  },
  {
    grade: 3,
    unit: "発展形容詞",
    kind: "ようす",
    entries: `
careful|注意深い|CAREF
useful|役に立つ|USEF
famous|有名な|FAM
popular|人気のある|POP
special|特別な|SPEC
natural|自然な|NATL
possible|可能な|POSS
simple|簡単な|SIMP
enough|十分な|ENUF
early|早い|EARLY
late|遅い|LATE
together|一緒に|TOG
alone|一人で|ALON
clear|はっきりした|CLEAR
safe|安全な|SAFE
dangerous|危険な|DANG
modern|現代的な|MOD
traditional|伝統的な|TRAD
healthy|健康な|HLTH
friendly|親しみやすい|FRND
    `,
  },
];

addExtraWords();

const state = {
  grade: 1,
  unit: "はじめの10語",
  size: 5,
  mode: "learn",
  session: [],
  index: 0,
  correct: 0,
  answered: false,
  progress: loadProgress()
};

const area = document.querySelector("#practiceArea");
const unitSelect = document.querySelector("#unitSelect");
const todayCount = document.querySelector("#todayCount");
const toast = document.querySelector("#toast");

let toastTimer = 0;
let voices = [];

const SPEECH_OVERRIDES = {
  live: "to live",
  read: "to read",
  use: "to use",
  close: "to close",
  wind: "the wind",
  minute: "one minute",
  "e-mail": "email",
};

init();
registerServiceWorker();

function addExtraWords() {
  const seen = new Set(WORDS.map((item) => `${item.grade}:${item.word.toLowerCase()}`));
  EXTRA_WORD_SETS.forEach((set) => {
    parseWordEntries(set.entries).forEach(([word, meaning, image]) => {
      const key = `${set.grade}:${word.toLowerCase()}`;
      if (seen.has(key)) return;
      seen.add(key);
      WORDS.push({
        grade: set.grade,
        unit: set.unit,
        word,
        meaning,
        image,
        kind: set.kind,
      });
    });
  });
}

function parseWordEntries(entries) {
  return entries
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split("|").map((part) => part.trim()));
}

function init() {
  bindControls();
  refreshUnits();
  startSession();
  updateTodayCount();
  loadVoices();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function bindControls() {
  document.querySelector("#gradeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-grade]");
    if (!button) return;
    state.grade = Number(button.dataset.grade);
    activateButtonGroup("#gradeTabs", button);
    refreshUnits();
    startSession();
  });

  document.querySelector("#sizeTabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-size]");
    if (!button) return;
    state.size = Number(button.dataset.size);
    activateButtonGroup("#sizeTabs", button);
    startSession();
  });

  document.querySelector(".mode-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    activateButtonGroup(".mode-tabs", button);
    startSession();
  });

  unitSelect.addEventListener("change", () => {
    state.unit = unitSelect.value;
    startSession();
  });
}

function activateButtonGroup(selector, activeButton) {
  document.querySelectorAll(`${selector} button`).forEach((button) => {
    button.classList.toggle("is-active", button === activeButton);
  });
}

function refreshUnits() {
  const units = [...new Set(WORDS.filter((item) => item.grade === state.grade).map((item) => item.unit))];
  unitSelect.innerHTML = "";
  units.forEach((unit) => {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit;
    unitSelect.append(option);
  });
  state.unit = units.includes(state.unit) ? state.unit : units[0];
  unitSelect.value = state.unit;
}

function startSession() {
  const pool = WORDS.filter((item) => item.grade === state.grade && item.unit === state.unit);
  state.session = chooseSession(pool, state.size);
  state.index = 0;
  state.correct = 0;
  state.answered = false;
  render();
}

function chooseSession(pool, size) {
  return [...pool]
    .sort((a, b) => masteryScore(a) - masteryScore(b) || a.word.localeCompare(b.word))
    .slice(0, Math.min(size, pool.length));
}

function masteryScore(item) {
  const record = state.progress.words[item.word.toLowerCase()] || { correct: 0, wrong: 0, seen: 0 };
  return record.correct * 2 + record.seen - record.wrong * 3;
}

function render() {
  if (state.index >= state.session.length) {
    renderResult();
    return;
  }
  if (state.mode === "quiz") renderQuiz();
  if (state.mode === "spell") renderSpell();
  if (state.mode === "learn") renderLearn();
}

function renderLearn() {
  const item = currentItem();
  area.innerHTML = `
    <article class="word-card">
      ${sessionLine()}
      <div class="illustration" aria-hidden="true">${item.image}</div>
      <h2 class="word">${item.word}</h2>
      <p class="meaning">${item.meaning}</p>
      <span class="kind">${item.kind}</span>
      <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
      <div class="action-row">
        <button class="icon-button" type="button" data-action="prev" aria-label="前の単語" ${state.index === 0 ? "disabled" : ""}>‹</button>
        <button class="main-button" type="button" data-action="known">覚えた</button>
        <button class="icon-button" type="button" data-action="next" aria-label="次の単語">›</button>
      </div>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item));
  area.querySelector("[data-action='known']").addEventListener("click", () => {
    mark(item, true);
    showToast(randomPraise());
    nextQuestion();
  });
  area.querySelector("[data-action='next']").addEventListener("click", () => {
    mark(item, false, true);
    nextQuestion();
  });
  const prev = area.querySelector("[data-action='prev']");
  if (prev) {
    prev.addEventListener("click", () => {
      state.index = Math.max(0, state.index - 1);
      render();
    });
  }
}

function renderQuiz() {
  const item = currentItem();
  const options = makeOptions(item);
  area.innerHTML = `
    <article class="quiz-card">
      ${sessionLine()}
      <div class="quiz-prompt">
        <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
        <h2 class="quiz-word">${item.word}</h2>
        <p class="quiz-hint">意味を選ぼう</p>
      </div>
      <div class="answer-visual-slot" id="answerVisual"></div>
      <div class="choices">
        ${options.map((option) => `<button class="choice" type="button" data-answer="${escapeHtml(option.meaning)}">${option.meaning}</button>`).join("")}
      </div>
      <p class="feedback" id="feedback"></p>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item));
  area.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => answerMeaning(button, item));
  });
}

function renderSpell() {
  const item = currentItem();
  area.innerHTML = `
    <article class="quiz-card">
      ${sessionLine()}
      <div class="quiz-prompt">
        <div class="illustration" aria-hidden="true">${item.image}</div>
        <p class="meaning">${item.meaning}</p>
        <button class="speak-button" type="button" aria-label="${item.word}の音声を聞く" data-action="speak">♪</button>
      </div>
      <div class="answer-visual-slot" id="answerVisual"></div>
      <form class="spell-form" autocomplete="off">
        <input class="spell-input" id="spellInput" inputmode="latin" autocapitalize="none" spellcheck="false" placeholder="英語で書く">
        <button class="main-button" type="submit">答える</button>
      </form>
      <p class="feedback" id="feedback"></p>
    </article>
  `;
  area.querySelector("[data-action='speak']").addEventListener("click", () => speak(item));
  area.querySelector(".spell-form").addEventListener("submit", (event) => {
    event.preventDefault();
    answerSpell(item);
  });
  setTimeout(() => area.querySelector("#spellInput")?.focus({ preventScroll: true }), 80);
}

function renderResult() {
  const total = state.session.length;
  const title = state.correct === total ? "ナイス！" : "よくできました";
  area.innerHTML = `
    <article class="result-card">
      <div>
        <h2>${title}</h2>
        <p>${total}語の小さな練習が終わりました。</p>
        <div class="mini-stats">
          <div class="mini-stat">
            <strong>${state.correct}</strong>
            <span>できた</span>
          </div>
          <div class="mini-stat">
            <strong>${total - state.correct}</strong>
            <span>もう一回</span>
          </div>
        </div>
        <button class="main-button" type="button" data-action="again">もう一度</button>
      </div>
    </article>
  `;
  area.querySelector("[data-action='again']").addEventListener("click", startSession);
}

function sessionLine() {
  const total = state.session.length;
  const count = Math.min(state.index + 1, total);
  const width = total ? Math.round((state.index / total) * 100) : 0;
  return `
    <div class="session-line">
      <span>${count}/${total}</span>
      <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width: ${width}%"></div></div>
      <span>${state.unit}</span>
    </div>
  `;
}

function currentItem() {
  return state.session[state.index];
}

function answerMeaning(button, item) {
  if (state.answered) return;
  state.answered = true;
  const isCorrect = button.dataset.answer === item.meaning;
  const feedback = area.querySelector("#feedback");
  area.querySelectorAll(".choice").forEach((choice) => {
    if (choice.dataset.answer === item.meaning) choice.classList.add("is-correct");
    if (choice === button && !isCorrect) choice.classList.add("is-wrong");
    choice.disabled = true;
  });
  feedback.textContent = isCorrect ? randomPraise() : `正解は「${item.meaning}」`;
  feedback.className = `feedback ${isCorrect ? "good" : "retry"}`;
  mark(item, isCorrect);
  if (isCorrect) {
    showCorrectVisual(item);
    speak(item);
  }
  setTimeout(nextQuestion, isCorrect ? 1800 : 1400);
}

function answerSpell(item) {
  if (state.answered) return;
  const input = area.querySelector("#spellInput");
  const feedback = area.querySelector("#feedback");
  const answer = normalize(input.value);
  const correct = normalize(item.word);
  const isCorrect = answer === correct;
  state.answered = true;
  feedback.textContent = isCorrect ? randomPraise() : `正解は ${item.word}`;
  feedback.className = `feedback ${isCorrect ? "good" : "retry"}`;
  input.disabled = true;
  mark(item, isCorrect);
  speak(item);
  if (isCorrect) showCorrectVisual(item);
  setTimeout(nextQuestion, isCorrect ? 1900 : 1500);
}

function showCorrectVisual(item) {
  const slot = area.querySelector("#answerVisual");
  if (!slot) return;
  slot.innerHTML = renderWordVisual(item);
  slot.classList.add("is-visible");
}

function renderWordVisual(item) {
  const visual = visualFor(item);
  return `
    <div class="answer-visual">
      <div class="visual-scene visual-${visual.type}" aria-hidden="true">
        ${visual.svg}
      </div>
      <div class="visual-copy">
        <strong>${escapeHtml(item.word)}</strong>
        <span>${escapeHtml(item.meaning)}</span>
        <small>${escapeHtml(visual.caption)}</small>
      </div>
    </div>
  `;
}

function visualFor(item) {
  const word = item.word.toLowerCase();
  const meaning = item.meaning;
  const kind = item.kind;

  if (/(apple|orange|banana|grape|tomato|carrot|fruit|vegetable|egg|meat|bread|rice|milk|water|juice|tea|coffee|pizza|cake|soup|salad|cheese|sugar|salt|curry)/.test(word)) {
    return {
      type: "food",
      caption: "食べ物の絵で覚える",
      svg: `<svg viewBox="0 0 120 90"><circle cx="48" cy="48" r="25"></circle><path d="M50 24 C62 17 72 22 75 34"></path><rect x="70" y="46" width="28" height="24" rx="6"></rect><line x1="76" y1="56" x2="92" y2="56"></line></svg>`,
    };
  }

  if (/(cat|dog|bird|fish|rabbit|bear|lion|tiger|horse|cow|pig|sheep|duck|chicken|monkey|elephant|giraffe|mouse|panda|koala)/.test(word)) {
    return {
      type: "animal",
      caption: "動物の形とセット",
      svg: `<svg viewBox="0 0 120 90"><circle cx="58" cy="45" r="25"></circle><circle cx="40" cy="22" r="11"></circle><circle cx="76" cy="22" r="11"></circle><circle cx="50" cy="43" r="3"></circle><circle cx="66" cy="43" r="3"></circle><path d="M54 56 Q58 61 62 56"></path><path d="M83 57 Q100 52 104 68"></path></svg>`,
    };
  }

  if (/(school|classroom|student|teacher|book|pen|pencil|notebook|dictionary|homework|lesson|test|page|sentence|word|grammar|pronunciation|conversation|speech|report|project|desk|chair|club|team|subject|science|history|math)/.test(word) || /学校|学習/.test(kind)) {
    return {
      type: "school",
      caption: "学校の場面で覚える",
      svg: `<svg viewBox="0 0 120 90"><path d="M24 74 L24 34 L60 18 L96 34 L96 74 Z"></path><rect x="36" y="48" width="18" height="26"></rect><rect x="66" y="48" width="18" height="16"></rect><line x1="24" y1="74" x2="96" y2="74"></line><path d="M42 34 H78"></path></svg>`,
    };
  }

  if (/(mother|father|sister|brother|family|friend|boy|girl|man|woman|baby|child|children|people|doctor|nurse|farmer|singer|player|writer|artist|worker|driver|cook|clerk|actor|actress|pilot|dentist|scientist|engineer|guide|leader|police officer|i|you|he|she|we|they)/.test(word) || /人|仕事/.test(kind)) {
    return {
      type: "person",
      caption: "人のカードで覚える",
      svg: `<svg viewBox="0 0 120 90"><circle cx="60" cy="30" r="15"></circle><path d="M34 76 C38 55 82 55 86 76"></path><circle cx="33" cy="41" r="10"></circle><circle cx="87" cy="41" r="10"></circle><path d="M18 76 C21 61 44 61 47 76"></path><path d="M73 76 C76 61 99 61 102 76"></path></svg>`,
    };
  }

  if (/(run|walk|jump|swim|sing|dance|listen|hear|open|close|wash|help|stop|start|sit|stand|sleep|smile|cry|draw|make|use|live|know|speak|learn|try|visit|enjoy|need|buy|sell|wait|call|ask|show|move|turn|work|carry|find|take|give|tell|catch|throw|meet|join|think|believe|hope|feel|mean|explain|describe|compare|agree|disagree|receive|send|invite|protect|save|improve|continue|happen|appear|disappear|grow|travel|arrive|leave|collect|share|return|borrow|lend|prepare|play|go|come|have|study|read|write|eat|drink|see|look|want|can|do|become|bring|build|change|choose|finish|remember|understand|practice|decide)/.test(word) || /動き/.test(kind)) {
    return {
      type: "action",
      caption: "動きの線で覚える",
      svg: `<svg viewBox="0 0 120 90"><circle cx="34" cy="28" r="10"></circle><path d="M40 40 L58 52 L78 38"></path><path d="M56 52 L45 76"></path><path d="M58 52 L76 76"></path><path d="M24 72 C45 58 72 58 96 32"></path><path d="M88 32 L96 32 L94 40"></path></svg>`,
    };
  }

  if (/(park|city|country|station|library|hospital|restaurant|shop|store|museum|airport|street|road|bridge|farm|forest|beach|home|house|room|garden|zoo|river|mountain|sea|lake|earth|world|planet|community|society)/.test(word) || /場所|社会|世界/.test(kind)) {
    return {
      type: "place",
      caption: "場所の図で覚える",
      svg: `<svg viewBox="0 0 120 90"><path d="M20 76 H100"></path><path d="M30 76 V38 L58 22 L86 38 V76"></path><rect x="50" y="54" width="16" height="22"></rect><circle cx="88" cy="32" r="13"></circle><path d="M88 45 V76"></path></svg>`,
    };
  }

  if (/(sky|sun|moon|star|tree|flower|grass|rain|snow|wind|cloud|weather|season|summer|winter|nature|environment|energy|natural|morning|night|afternoon|evening)/.test(word) || /自然|季節|時間/.test(kind)) {
    return {
      type: "nature",
      caption: "自然のイメージで覚える",
      svg: `<svg viewBox="0 0 120 90"><circle cx="34" cy="30" r="14"></circle><path d="M65 40 C70 28 92 30 94 46 C106 48 106 66 91 68 H58 C45 67 45 48 58 46 C59 43 61 41 65 40 Z"></path><path d="M58 76 L66 62 L74 76"></path></svg>`,
    };
  }

  if (/(red|blue|green|yellow|black|white|brown|pink|purple|orange|one|two|three|four|five|six|seven|eight|nine|ten|today|tomorrow|yesterday|week|month|year|monday|tuesday|wednesday|thursday|friday|saturday|sunday|holiday|birthday|time|hour|minute|weekend)/.test(word) || /色|数|曜日|時間/.test(kind)) {
    return {
      type: "symbol",
      caption: "色・数・時間の記号で覚える",
      svg: `<svg viewBox="0 0 120 90"><rect x="24" y="22" width="72" height="48" rx="10"></rect><circle cx="42" cy="46" r="8"></circle><circle cx="60" cy="46" r="8"></circle><circle cx="78" cy="46" r="8"></circle><path d="M35 74 H85"></path></svg>`,
    };
  }

  return {
    type: "idea",
    caption: "意味のまとまりで覚える",
    svg: `<svg viewBox="0 0 120 90"><path d="M60 18 C42 18 30 31 30 47 C30 61 41 72 60 72 C79 72 90 61 90 47 C90 31 78 18 60 18 Z"></path><path d="M46 46 H74"></path><path d="M60 32 V60"></path></svg>`,
  };
}

function makeOptions(item) {
  const others = WORDS
    .filter((word) => word.grade === state.grade && word.meaning !== item.meaning)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  return shuffle([item, ...others]);
}

function nextQuestion() {
  state.index += 1;
  state.answered = false;
  render();
}

function mark(item, isCorrect, seenOnly = false) {
  const key = item.word.toLowerCase();
  const record = state.progress.words[key] || { correct: 0, wrong: 0, seen: 0 };
  record.seen += 1;
  if (!seenOnly) {
    if (isCorrect) {
      record.correct += 1;
      state.correct += 1;
    } else {
      record.wrong += 1;
    }
  }
  state.progress.words[key] = record;
  bumpToday();
  saveProgress();
  updateTodayCount();
}

function bumpToday() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.progress.today.date !== today) {
    state.progress.today = { date: today, count: 0 };
  }
  state.progress.today.count += 1;
}

function updateTodayCount() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.progress.today.date !== today) {
    state.progress.today = { date: today, count: 0 };
    saveProgress();
  }
  todayCount.textContent = state.progress.today.count;
}

function speak(itemOrWord) {
  if (!("speechSynthesis" in window)) {
    showToast("この端末では音声が使えません");
    return;
  }
  window.speechSynthesis.cancel();
  const word = typeof itemOrWord === "string" ? itemOrWord : itemOrWord.word;
  const speechText = typeof itemOrWord === "string" ? itemOrWord : itemOrWord.speech || SPEECH_OVERRIDES[word.toLowerCase()] || word;
  const utterance = new SpeechSynthesisUtterance(speechText);
  utterance.lang = "en-US";
  utterance.rate = 0.72;
  utterance.pitch = 1;
  const voice = pickVoice();
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = window.speechSynthesis.getVoices();
}

function pickVoice() {
  const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
  return englishVoices.find((voice) => /samantha|daniel|google us english|microsoft aria|premium/i.test(voice.name))
    || englishVoices.find((voice) => /en-US/i.test(voice.lang))
    || englishVoices[0];
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1100);
}

function randomPraise() {
  return shuffle(["ナイス！", "いいね！", "できた！", "その調子！"])[0];
}

function normalize(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function loadProgress() {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const saved = JSON.parse(localStorage.getItem("ototan-word-progress") || "null");
    if (saved && saved.words && saved.today) return saved;
  } catch {
    // Broken local data should not stop practice.
  }
  return { words: {}, today: { date: today, count: 0 } };
}

function saveProgress() {
  localStorage.setItem("ototan-word-progress", JSON.stringify(state.progress));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(window.location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
