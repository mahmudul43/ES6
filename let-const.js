const myConstant="This is Constant";

/*myConstant="Hello";Not Possible. Bcz this isn't a variable.This 
is constant and we can't replace this
*/

console.log(myConstant);

/* Akhon,jodi amra constant array declare kori,tahle oi arrayr element amra 
   change korte parbo,push ba pop o korte parbo but oi array te sompurno new element
   set rakhte parbo na
 */

 let ami="robin";
 console.log(ami);

 /*Let kokhn o scope er baire access pay na */

 var sum;
 for(let i=0;i<10;i++){
     sum=sum+i;
 }
 console.log(i); //Ekhane bracket er vitor let diye dec kora i er value print hbena,scope sesh