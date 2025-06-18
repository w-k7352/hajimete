const quotes = [
    "明日死ぬかのように生きよ。永遠に生きるかのように学べ。 - ガンジー",
    "人生とは自分を見つけることではない。人生とは自分を創ることである。 - バーナード・ショー",
    "できると思えばできる、できないと思えばできない。これは、ゆるぎない絶対的な法則である。 - パブロ・ピカソ",
    "成功の秘訣は、目的に向かって絶えず前進することである。 - ベンジャミン・ディズレーリ",
    "人生で最も重要なことは、遠くにある目標を見据えることではなく、目の前にある義務を果たすことだ。 - トーマス・カーライル",
    "夢を見ることができれば、それは実現できる。 - ウォルト・ディズニー",
    "人生における大きな喜びは、君にはできないと世間が言うことをやることである。 - ウォルター・バジョット",
    "失敗は成功のもと。 - 日本のことわざ",
    "千里の道も一歩から。 - 老子",
    "為せば成る、為さねば成らぬ何事も。 - 上杉鷹山"
];

const quoteElement = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    quoteElement.textContent = quote;
}

quoteBtn.addEventListener('click', displayQuote);