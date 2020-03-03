
//... ke bola hoy spread operator


const firstArray=[12,12,1,3,16,65,45,67,59];
const secondArray=[11,44,53,57,8,9,76,3]
const thirdArray={name:"Robin"};


const allTogether=firstArray.concat([44]).concat(secondArray);


console.log(allTogether);

const easyArray=[...firstArray, ...secondArray]; //spread operator
console.log(easyArray);

const ami=112;
const tumi=11;

const keBoro=Math.max(ami,tumi);
console.log(keBoro);





const taka=[12,22,32,11,23,566,77,345];
const sobCheyeBoro= Math.max(...taka);
console.log(sobCheyeBoro);
