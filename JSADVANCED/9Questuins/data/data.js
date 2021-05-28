const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Sun',
    discount: 0.2,
    type: 'Cash'
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '01-01-2021',
    customer: 'Tle',
    type: 'Credit'
  },
  {
    id: 3,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '01-01-2021',
    customer: 'Jit',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 5,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Palm',
    type: 'Cash'
  },
  {
    id: 6,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Top',
    type: 'Credit'
  },
  {
    id: 7,
    product: {
      id: 4,
      name: 'Oppo',
      model: 'A15',
      unitPrice: 4299
    },
    saleDate: '02-01-2021',
    customer: 'Sun',
    type: 'Credit'
  },
  {
    id: 8,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '02-01-2021',
    customer: 'Snap',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 9,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 10,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 11,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Tle',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 12,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 13,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '02-01-2021',
    customer: 'Boss',
    type: 'Cash'
  },
  {
    id: 14,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '02-01-2021',
    customer: 'Sila',
    type: 'Airpay'
  },
  {
    id: 15,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '02-01-2021',
    customer: 'Top',
    type: 'Cash'
  },
  {
    id: 16,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 17,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 18,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '03-01-2021',
    customer: 'Sine',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 19,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '03-01-2021',
    customer: 'Note',
    type: 'Credit'
  },
  {
    id: 20,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '03-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 21,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 22,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 23,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '04-01-2021',
    customer: 'Leo',
    type: 'Cash'
  },
  {
    id: 24,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '04-01-2021',
    customer: 'Game',
    type: 'Cash'
  },
  {
    id: 25,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '04-01-2021',
    customer: 'U',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 26,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '05-01-2021',
    customer: 'Boy',
    type: 'Credit'
  },
  {
    id: 27,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 28,
    product: {
      id: 12,
      name: 'Vivo',
      model: 'V20',
      unitPrice: 10999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 29,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '05-01-2021',
    customer: 'Am',
    type: 'Cash'
  },
  {
    id: 30,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '06-01-2021',
    customer: 'Um',
    type: 'True Wallet'
  },
  {
    id: 31,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '06-01-2021',
    customer: 'Win',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 32,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '06-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 33,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Palm',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 34,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '07-01-2021',
    customer: 'Dom',
    discount: 0.15,
    type: 'Credit'
  },
  {
    id: 35,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '07-01-2021',
    customer: 'Sern',
    type: 'True Wallet'
  },
  {
    id: 36,
    product: {
      id: 13,
      name: 'iPhone',
      model: 'SE2000',
      unitPrice: 14900
    },
    saleDate: '07-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 37,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Game',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 38,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Sun',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 39,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Tom',
    type: 'Cash'
  },
  {
    id: 40,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '08-01-2021',
    customer: 'Ham',
    type: 'Cash'
  },
  {
    id: 41,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '08-01-2021',
    customer: 'Dom',
    type: 'Credit'
  },
  {
    id: 42,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Cin',
    type: 'True Wallet'
  },
  {
    id: 43,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Tle',
    type: 'Cash'
  },
  {
    id: 44,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '09-01-2021',
    customer: 'U',
    type: 'Cash'
  },
  {
    id: 45,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '09-01-2021',
    customer: 'Am',
    discount: 0.35,
    type: 'Airpay'
  },
  {
    id: 46,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '10-01-2021',
    customer: 'Sern',
    type: 'Cash'
  },
  {
    id: 47,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '10-01-2021',
    customer: 'Game',
    discount: 0.3,
    type: 'Credit'
  },
  {
    id: 48,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '10-01-2021',
    customer: 'Jit',
    type: 'Cash'
  },
  {
    id: 49,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '10-01-2021',
    customer: 'Snap',
    type: 'True Wallet'
  },
  {
    id: 50,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '10-01-2021',
    customer: 'Micky',
    type: 'Cash'
  },
  {
    id: 51,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '11-01-2021',
    customer: 'Boss',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 52,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '11-01-2021',
    customer: 'Leo',
    discount: 0.05,
    type: 'Credit'
  },
  {
    id: 53,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '11-01-2021',
    customer: 'Sine',
    discount: 0.15,
    type: 'True Wallet'
  },
  {
    id: 54,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Um',
    discount: 0.1,
    type: 'Cash'
  },
];

//1. จำนวน transaction ทั้งหมดที่ขายไปกี่รายการ (ต่อเครื่อง/ต่อ id)
//2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง และ แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
//3. ยอดขาดทั้งหมด (หลังหัก discount)
//4. สินค้าที่ถูกขายมีกี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
//6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
//7. หายอดรวมในแต่ละวัน
//8. เรียงยอดขายของแต่ละรุ่น
//9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

//-------------------------------------------------------------------

// 1
// const sumTransaction = sales.length;
// console.log("Transaction:" + " " + sumTransaction);

// 1 ANSWER
// Transaction: 54

//-------------------------------------------------------------------

//2
// const customerName = sales.reduce((acc, value) => {
//   let obj = acc.find(acc => {
//     return acc.nameCustomer === value.customer;
//   });
//   let sumPrice;
//   if (!obj) {
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }
//     let tmp = {
//       nameCustomer: value.customer,
//       amount: sumPrice,
//       order: 1
//     }
//     acc.push(tmp);
//   } else {
//     if (value.discount) {
//       obj.amount = obj.amount + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//     } else {
//       obj.amount = obj.amount + (value.product.unitPrice)
//     }
//     obj.order += 1;
//   }
//   return acc;
// }, []);
// console.log(customerName);

// 2 ANSWER
// [
//   { nameCustomer: 'Sun', amount: 68094, order: 3 },
//   { nameCustomer: 'Tle', amount: 95030, order: 3 },
//   { nameCustomer: 'Beer', amount: 51800, order: 2 },
//   { nameCustomer: 'Jit', amount: 34310, order: 2 },
//   { nameCustomer: 'Palm', amount: 66510, order: 2 },
//   { nameCustomer: 'Top', amount: 52299, order: 2 },
//   { nameCustomer: 'Snap', amount: 51010, order: 2 },
//   { nameCustomer: 'Ham', amount: 59574.25, order: 3 },
//   { nameCustomer: 'Micky', amount: 109700, order: 3 },
//   { nameCustomer: 'Boss', amount: 55220, order: 2 },
//   { nameCustomer: 'Sila', amount: 19990, order: 1 },
//   { nameCustomer: 'Cin', amount: 67879, order: 4 },
//   { nameCustomer: 'Sine', amount: 38579.15, order: 2 },
//   { nameCustomer: 'Note', amount: 32900, order: 1 },
//   { nameCustomer: 'Bank', amount: 29998, order: 2 },
//   { nameCustomer: 'Leo', amount: 23219.05, order: 2 },
//   { nameCustomer: 'Game', amount: 66940, order: 3 },
//   { nameCustomer: 'U', amount: 25589.3, order: 2 },
//   { nameCustomer: 'Boy', amount: 48900, order: 1 },
//   { nameCustomer: 'Boom', amount: 30998, order: 2 },
//   { nameCustomer: 'Am', amount: 24989.35, order: 2 },
//   { nameCustomer: 'Um', amount: 56210, order: 2 },
//   { nameCustomer: 'Win', amount: 20925, order: 1 },
//   { nameCustomer: 'Dom', amount: 64265, order: 2 },
//   { nameCustomer: 'Sern', amount: 42899, order: 2 },
//   { nameCustomer: 'Tom', amount: 32900, order: 1 }
// ]

//-------------------------------------------------------------------

//3
// const sumPrice = sales.reduce((acc, value) => {
//   let sumPrice;
//   if (value.discount != null) {
//     sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//   } else {
//     sumPrice = value.product.unitPrice;
//   }

//   return acc + sumPrice;
// }, 0);
// console.log("Sumprice:" + " " + sumPrice);

// 3 ANSWER
// Sumprice: 1270728.1

//-------------------------------------------------------------------

//4
// const sumBrand = sales.reduce((acc, value) => {
//   let obj = acc.find(val => {
//     return val.brand == value.product.name;
//   })
//   let sumPrice;
//   if (!obj) {

//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }

//     let tmp = {
//       brand: value.product.name,
//       amount: 1,
//       sumPrice: sumPrice
//     }
//     acc.push(tmp);
//   } else {
//     obj.amount += 1;

//     if (value.discount) {
//       obj.sumPrice = obj.sumPrice + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//     } else {
//       obj.sumPrice = obj.sumPrice + value.product.unitPrice
//     }

//   }
//   return acc;
// }, [])
// console.log(sumBrand);

// 4 ANSWER
// [
//   { brand: 'iPhone', amount: 25, sumPrice: 808265 },
//   { brand: 'Samsung', amount: 15, sumPrice: 269832.55 },
//   { brand: 'Oppo', amount: 5, sumPrice: 84259 },
//   { brand: 'Xiaomi', amount: 2, sumPrice: 6628.05 },
//   { brand: 'Vivo', amount: 7, sumPrice: 101743.5 }
// ]

//-------------------------------------------------------------------

//5
// const listProduct = sales.reduce((acc, value) => {
//   let brand = acc[value.product.name];
//   let sumPrice;
//   if (!brand) {
//     acc[value.product.name] = [];
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }
//     const model = {
//       model: value.product.model,
//       amount: 1,
//       sumPrice
//     };
//     acc[value.product.name].push(model);
//   } else {
//     let model = brand.find(b => {
//       return value.product.model === b.model
//     });
//     if (!model) {
//       if (!value.product.unitPrice) {
//         sumPrice = 0;
//       }
//       if (value.discount != null) {
//         sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//       } else {
//         sumPrice = value.product.unitPrice
//       }
//       brand.push({
//         model: value.product.model,
//         amount: 1,
//         sumPrice
//       });
//     } else {
//       if (value.discount) {
//         model.sumPrice = model.sumPrice + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//       } else {
//         model.sumPrice = model.sumPrice + value.product.unitPrice
//       }
//       model['amount'] += 1;
//     }
//   }
//   return acc;
// }, {})
// console.log(listProduct);

// 5 ANSWER
// {
//   iPhone: [
//     { model: '12 Pro', amount: 9, sumPrice: 353910 },
//     { model: '12', amount: 9, sumPrice: 284585 },
//     { model: '11 Pro', amount: 2, sumPrice: 59040 },
//     { model: 'SE2000', amount: 1, sumPrice: 14900 },
//     { model: '12 Mini', amount: 4, sumPrice: 95830 }
//   ],
//   Samsung: [
//     { model: 'S21', amount: 8, sumPrice: 202275 },
//     { model: 'A31', amount: 3, sumPrice: 19597.55 },
//     { model: 'A42', amount: 4, sumPrice: 47960 }
//   ],
//   Oppo: [
//     { model: 'A15', amount: 1, sumPrice: 4299 },
//     { model: 'Reno5', amount: 4, sumPrice: 79960 }
//   ],
//   Xiaomi: [ { model: 'Redmi 9C', amount: 2, sumPrice: 6628.05 } ],
//   Vivo: [
//     { model: 'V20 Pro', amount: 4, sumPrice: 57746.15 },
//     { model: 'X50 Pro', amount: 2, sumPrice: 32998.35 },
//     { model: 'V20', amount: 1, sumPrice: 10999 }
//   ]
// }

//-------------------------------------------------------------------

//6
// const sumPayment = sales.reduce((acc, value) => {
//   let obj = acc.find(val => {
//     return val.paymentType == value.type;
//   })
//   let sumPrice;
//   if (!obj) {
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }
//     tmp = {
//       paymentType: value.type,
//       sumPrice
//     }
//     acc.push(tmp)
//   } else {
//     if (value.discount) {
//       obj.sumPrice = obj.sumPrice + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//     } else {
//       obj.sumPrice = obj.sumPrice + value.product.unitPrice
//     }
//   }

//   return acc;
// }, [])
// console.log(sumPayment)

// 6 ANSWER
// [
//   { paymentType: 'Cash', sumPrice: 467955 },
//   { paymentType: 'Credit', sumPrice: 500177.3 },
//   { paymentType: 'Airpay', sumPrice: 144248.65 },
//   { paymentType: 'True Wallet', sumPrice: 158347.15 }
// ]

//-------------------------------------------------------------------

//7
// const sumPayment_Date = sales.reduce((acc, value) => {
//   let obj = acc.find(val => {
//     return val.orderDate == value.saleDate;
//   })
//   let sumPrice;
//   if (!obj) {
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }
//     tmp = {
//       orderDate: value.saleDate,
//       totalPrice: sumPrice
//     }
//     acc.push(tmp);
//   } else {
//     if (value.discount) {
//       obj.totalPrice = obj.totalPrice + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//     } else {
//       obj.totalPrice = obj.totalPrice + value.product.unitPrice
//     }
//   }
//   return acc;
// }, [])
// console.log(sumPayment_Date);

// 7 ANSWER
// [
//   { orderDate: '01-01-2021', totalPrice: 217040 },
//   { orderDate: '02-01-2021', totalPrice: 202502.25 },
//   { orderDate: '03-01-2021', totalPrice: 106619 },
//   { orderDate: '04-01-2021', totalPrice: 67577.3 },
//   { orderDate: '05-01-2021', totalPrice: 91888 },
//   { orderDate: '06-01-2021', totalPrice: 73815 },
//   { orderDate: '07-01-2021', totalPrice: 205380 },
//   { orderDate: '08-01-2021', totalPrice: 114600 },
//   { orderDate: '09-01-2021', totalPrice: 32989.35 },
//   { orderDate: '10-01-2021', totalPrice: 120019 },
//   { orderDate: '11-01-2021', totalPrice: 38298.2 }
// ]

//-------------------------------------------------------------------

//8
// const listSales = sales.reduce((acc, value) => {
//   let obj = acc.find(val => {
//     return val.phonModel == value.product.model;
//   })
//   let sumPrice;
//   if (!obj) {
//     if (!value.product.unitPrice) {
//       sumPrice = 0;
//     }
//     if (value.discount != null) {
//       sumPrice = value.product.unitPrice - (value.product.unitPrice * value.discount);
//     } else {
//       sumPrice = value.product.unitPrice
//     }
//     tmp = {
//       phonModel: value.product.model,
//       totalPrice: sumPrice
//     }
//     acc.push(tmp);
//   } else {
//     if (value.discount) {
//       obj.totalPrice = obj.totalPrice + (value.product.unitPrice - (value.product.unitPrice * value.discount))
//     } else {
//       obj.totalPrice = obj.totalPrice + value.product.unitPrice
//     }
//   }

//   return acc;
// }, [])
// listSales.sort((a, b) => b.totalPrice - a.totalPrice);
// console.log(listSales);

// 8 ANSWER
// [
//   { phonModel: '12 Pro', totalPrice: 353910 },
//   { phonModel: '12', totalPrice: 284585 },
//   { phonModel: 'S21', totalPrice: 202275 },
//   { phonModel: '12 Mini', totalPrice: 95830 },
//   { phonModel: 'Reno5', totalPrice: 79960 },
//   { phonModel: '11 Pro', totalPrice: 59040 },
//   { phonModel: 'V20 Pro', totalPrice: 57746.15 },
//   { phonModel: 'A42', totalPrice: 47960 },
//   { phonModel: 'X50 Pro', totalPrice: 32998.35 },
//   { phonModel: 'A31', totalPrice: 19597.55 },
//   { phonModel: 'SE2000', totalPrice: 14900 },
//   { phonModel: 'V20', totalPrice: 10999 },
//   { phonModel: 'Redmi 9C', totalPrice: 6628.05 },
//   { phonModel: 'A15', totalPrice: 4299 }
// ]

//-------------------------------------------------------------------

//9
// const topCustomer = sales.reduce((acc, value) => {
//   let obj = acc.find(val => {
//     return val.nameCustomer == value.customer;
//   })

//   if (!obj) {
//     tmp = {
//       nameCustomer: value.customer,
//       numberOfPurchases: 1
//     }
//     acc.push(tmp)
//   } else {
//     obj.numberOfPurchases += 1
//   }
//   return acc;
// }, [])
// topCustomer.sort((a, b) => b.numberOfPurchases - a.numberOfPurchases);
// console.log(topCustomer);

// 9 ANSWER
// [
//   { nameCustomer: 'Cin', numberOfPurchases: 4 },
//   { nameCustomer: 'Sun', numberOfPurchases: 3 },
//   { nameCustomer: 'Tle', numberOfPurchases: 3 },
//   { nameCustomer: 'Ham', numberOfPurchases: 3 },
//   { nameCustomer: 'Micky', numberOfPurchases: 3 },
//   { nameCustomer: 'Game', numberOfPurchases: 3 },
//   { nameCustomer: 'Beer', numberOfPurchases: 2 },
//   { nameCustomer: 'Jit', numberOfPurchases: 2 },
//   { nameCustomer: 'Palm', numberOfPurchases: 2 },
//   { nameCustomer: 'Top', numberOfPurchases: 2 },
//   { nameCustomer: 'Snap', numberOfPurchases: 2 },
//   { nameCustomer: 'Boss', numberOfPurchases: 2 },
//   { nameCustomer: 'Sine', numberOfPurchases: 2 },
//   { nameCustomer: 'Bank', numberOfPurchases: 2 },
//   { nameCustomer: 'Leo', numberOfPurchases: 2 },
//   { nameCustomer: 'U', numberOfPurchases: 2 },
//   { nameCustomer: 'Boom', numberOfPurchases: 2 },
//   { nameCustomer: 'Am', numberOfPurchases: 2 },
//   { nameCustomer: 'Um', numberOfPurchases: 2 },
//   { nameCustomer: 'Dom', numberOfPurchases: 2 },
//   { nameCustomer: 'Sern', numberOfPurchases: 2 },
//   { nameCustomer: 'Sila', numberOfPurchases: 1 },
//   { nameCustomer: 'Note', numberOfPurchases: 1 },
//   { nameCustomer: 'Boy', numberOfPurchases: 1 },
//   { nameCustomer: 'Win', numberOfPurchases: 1 },
//   { nameCustomer: 'Tom', numberOfPurchases: 1 }
// ]

//-------------------------------------------------------------------
















