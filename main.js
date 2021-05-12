// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

console.log("opdracht 1---------------------------------------------------------------------");

//dit is een arrow functie dus geen function voorafgaand aan de declaratie, functie is herkenbaar aan de return value
const tvsTeVerkopen = inventory.map((tv) => {
  return tv.originalStock - tv.sold;});
const totalTvToSell = (tvsTeVerkopen.reduce((a, b) => a + b));
console.log(totalTvToSell);


const container = document.getElementById("opdracht1"); // target een html element via id
const message = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
message.setAttribute('class','aantalTeKoop'); // ken een css klasse toe aan dit element
message.textContent = (tvsTeVerkopen.reduce((a, b) => a + b)); // declareer welke javascript output gebruikt gaat worden
container.appendChild(message);





console.log("opdracht 2a----------------------------------------------------------------");

const tvTypeName =inventory.map((tvt) =>{
  return tvt.brand +" - "+ tvt.type + " - " + tvt.screenQuality;
});
console.log(tvTypeName);

console.log("opdracht 2b-------------------------------------------------------------------");

const notAvailable = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
})
console.log(notAvailable);

console.log("opdracht 2c--------------------------------------------------------------------");

const hasAmbiLight = inventory.filter((tv) => {
  return tv.options.ambiLight === true;

})
console.log(hasAmbiLight);

console.log("opdracht 2d--------------------------------------------------------------------");

//als een prijs lager is dan de vorige prijs wissel dan van plek

inventory.sort((a,b) => {
  if (a.price < b.price) {
    return -1
  }
  if (a.price > b.price) {
    return 1
  }
  return 0;
});
console.log(inventory);

console.log("opdracht 3a---------------------------------------------------------------------");

//targetTurnover

//inventory  (voorraad+sold)*prijs
// let targetTurnover = 0
// for(let i = 0; i = inventory.type.length; i++) {
//   targetTurnover = targetTurnover + (inventory.originalstock * inventory.price);
// }
// console.log(targetTurnover);

let targetTurnover = 0;
inventory.map((inventory) => {
  targetTurnover = inventory.price * inventory.originalStock;
  return targetTurnover;
});
console.log(targetTurnover);


const container2 = document.getElementById("opdracht3a"); // target een html element via id
const message2 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
message2.setAttribute('class','doelomzet'); // ken een css klasse toe aan dit element
message2.textContent = (targetTurnover); // declareer welke javascript output gebruikt gaat worden
container2.appendChild(message2); // voeg toe "append"

console.log("opdracht 3b ----------------------------------------------------------------------")

let turnover = 0;
inventory.map((inventory) => {
  if(inventory.sold > 0) {
turnover = turnover + inventory.sold * inventory.price;
  }
  return turnover;
});
console.log(turnover);

const container3 = document.getElementById("opdracht3b"); // target een html element via id
const message3 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
message3.setAttribute('class','gemaakteomzet'); // ken een css klasse toe aan dit element
message3.textContent = (turnover); // declareer welke javascript output gebruikt gaat worden
container3.appendChild(message3); // voeg toe "append"

console.log("opdracht 4 ----------------------------------------------------------------------")

// geef van twee tvs de types weer:
const container4 = document.getElementById("tv1"); // target een html element via id
const message4 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
message4.setAttribute('class','tvtype'); // ken een css klasse toe aan dit element
message4.textContent = (inventory[4].type); // declareer welke javascript output gebruikt gaat worden
container4.appendChild(message4); // voeg toe "append"

const container5 = document.getElementById("tv2"); // target een html element via id
const message5 = document.createElement('p'); // creëer een html element, paragraaf in dit geval.
message5.setAttribute('class','tvtype'); // ken een css klasse toe aan dit element
message5.textContent = (inventory[2].type); // declareer welke javascript output gebruikt gaat worden
container5.appendChild(message5); // voeg toe "append"

console.log("opdracht 5 ----------------------------------------------------------------------");
// genereer een string voor een mooie weergave van een tv
// omkatten van de screensizes
// let screensizes = "";
// for (let i = 0; i < inventory[5].availableSizes.length; i++) {
//   screensizes = screensizes + inventory[5].availableSizes[i] + "inch" + " (" + (inventory[5].availableSizes[i]/2.54).toFixed(2) +"cm) | ";
//}

// const tvPitch = (inventory[5].brand + " - " +inventory[5].type + " - " + inventory[5].name + " - " + "€"
//     +inventory[5].price+",-" + "\n" + screensizes);

//als functie:
function tvTextLine(itemno) {
  let screensizes = "";
  for (let i = 0; i < inventory[itemno].availableSizes.length; i++) {
    screensizes = screensizes + inventory[itemno].availableSizes[i] + "inch" + " (" + (inventory[itemno].availableSizes[i] / 2.54).toFixed(2) + "cm) | ";
  }

  return (inventory[itemno].brand + " - " +inventory[itemno].type + " - " + inventory[itemno].name + " - " + "€"
      +inventory[itemno].price+",-" + "\n" + screensizes);
}


const container6 = document.getElementById("tv6"); // target een html element via id
const message6 = document.createElement('textarea'); // creëer een html element, texstarea in dit geval.
message6.setAttribute('class','textarea'); // ken een css klasse toe aan dit element
message6.textContent = tvTextLine(7); // declareer welke javascript output gebruikt gaat worden
container6.appendChild(message6); // voeg toe "append"

//tv generator die alle aanwezige modellen uitprint
//let allModels = "";
// function tvGenerator(i){
//   let allModels = "";
//   for (let i = 0; i < inventory.type.length; i++) {
//     allModels = allModels + tvTextLine(i);
//   }
//   return allModels;
// }

// eerdere functie nesten:
function tvGenerator() {
  let allTvs ="";
  for (let i = 0; i < inventory.length; i++) {
    tvTextLine(i);
    allTvs = allTvs + tvTextLine(i);
  }
  return allTvs;
}

console.log("test"+tvGenerator())
const container7 = document.getElementById("tvgenerator"); // target een html element via id
const message7 = document.createElement('textarea'); // creëer een html element, paragraaf in dit geval.
message7.setAttribute('class','textarea'); // ken een css klasse toe aan dit element
message7.textContent = tvGenerator(); // declareer welke javascript output gebruikt gaat worden
container7.appendChild(message7); // voeg toe "append"





