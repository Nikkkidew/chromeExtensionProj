const motivationalSayings = [
	'https://pics.me.me/programmers-while-coding-ndianfunnypcture-com-indtan-m-indian-oindianfunnypicture-com-i-dont-35571594.png',
	'https://2.bp.blogspot.com/-IpWBrLhAB6w/XMaWK4Z5KDI/AAAAAAAAAJA/10joEkrrAYYUdQhVOeqTrIyElNkhccA7ACLcBGAs/s1600/IMG_20190427_201318_572.jpg',
	'https://i.pinimg.com/originals/de/f5/2f/def52fe41d695d8feebd2cdc194da929.png',
	'https://i.chzbgr.com/original/6349573/hB0DE8033/funny-programming-memes',
	'https://what.thedailywtf.com/assets/uploads/files/1507231553286-22141062_870865696416398_8985114777431226442_n.png',
	'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg',
	'https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg',
	'https://res.cloudinary.com/practicaldev/image/fetch/s--MOKp0Jew--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.probytes.net/wp-content/uploads/2018/01/4-1.png',
	'https://iq.opengenus.org/content/images/2020/03/human_interaction_opengenus.jpg',
	'https://miro.medium.com/max/792/1*anhgwPSlWe9C2P1aFTL85Q.jpeg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUxtAGA0yH4UQu1SfOO-XrDikiQG8yw2v4Cg&usqp=CAU',
	'https://qph.fs.quoracdn.net/main-qimg-15f6531ad57e691ab365a5ca9ab0e130',
	'https://i.redd.it/hr2hee6bphc51.jpg',
	'https://i.redd.it/kpleg3iyaec51.jpg',
	'https://i.redd.it/e66irw5unfc51.jpg',
	'https://i.redd.it/i6j5jno3kgc51.jpg',
	'https://i.redd.it/oah8udwsvdc51.jpg',
	'https://v.redd.it/7bl526l65hc51',
	'https://v.redd.it/21ygg6km3fc51',
	'https://i.redd.it/xjg4n4pu2jc51.jpg',
	'https://i.redd.it/qbpo4bn7hfc51.jpg',
	'https://i.redd.it/c8cw76gmohy11.jpg',
	'https://i.redd.it/hzcskt57ohc51.jpg',
	'https://i.redd.it/56egy7ha7fc51.jpg',
	'https://i.redd.it/nwf79u04wec51.png',
	'https://i.redd.it/ze40sbe6lec51.jpg',
	'https://i.redd.it/f8l2gh045hc51.png',
	'https://i.redd.it/m0zarxm8uhc51.jpg',
	'https://i.redd.it/emrfplob0ec51.png',
	'https://i.redd.it/1vn6ue376jc51.jpg',
	'https://i.redd.it/wgnzif8aahc51.png',
	'https://i.redd.it/89px21m5xhc51.jpg',
	'https://i.redd.it/ecmpxws5wcc51.jpg',
	'https://i.redd.it/fbfiip2wzfc51.jpg',
	'https://i.redd.it/xjyr50i9djc51.jpg',
	'https://i.redd.it/1blnaqi8mic51.png',
	'https://i.redd.it/vmksmki0jic51.jpg',
];

console.log(motivationalSayings);

const app = document.getElementById('app');
const img = document.createElement('img');

const memeSrc = motivationalSayings[randomGen()];
img.src = memeSrc;
app.appendChild(img);

function randomGen(num = motivationalSayings.length) {
	let num1 = Math.floor(Math.random() * num);
	console.log(num1);
	return num1;
}

// const sources = [];

// $.getJSON('http://www.reddit.com/r/ProgrammerHumor/.json?jsonp=?', function (data) {
// 	$.each(data.data.children, function (i, item) {
// 		// let stringToParse = item.data.url;
// 		// let final = stringToParse.replace(/"/g, '\\"');
// 		// console.log(typeof final);
// 		sources.push(item.data.url);
// 	});
// });

// sources.forEach((source) => {
// 	source = JSON.parse(source);
// });

// const app = document.getElementById('app');
// const img = document.createElement('img');

// const memeSrc = sources[randomGen()];
// img.src = memeSrc;
// app.appendChild(img);

// function randomGen(num = sources.length) {
// 	let num1 = Math.floor(Math.random() * num);
// 	return num1;
// }

// console.log(sources);
