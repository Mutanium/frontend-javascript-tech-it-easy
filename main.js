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

console.log("opdracht 1");

const tvsTeVerkopen = inventory.map((tv) => {
  return tv.originalStock - tv.sold;
});
console.log(tvsTeVerkopen.reduce((a, b) => a + b)
);

console.log("opdracht 2a");

const tvTypeName =inventory.map((tvt) =>{
  return tvt.brand +" - "+ tvt.type + " - " + tvt.screenQuality;
});
console.log(tvTypeName);

console.log("opdracht 2b");

const notAvailable = inventory.filter((tv) => {
  return tv.originalStock === tv.sold;
})
console.log(notAvailable);

console.log("opdracht 2c");

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

console.log("opdracht 3b ----------------------------------------------------------------------")

let turnover = 0;
inventory.map((inventory) => {
  if(inventory.sold > 0) {
turnover = turnover + inventory.sold * inventory.price;
  }
  return turnover;
});
console.log(turnover);

console.log("opdracht 4 ----------------------------------------------------------------------")


