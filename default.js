
function add(num1,num2=90){ //Evabe default parameter dwa jay

    num2=num2 || 132; //Jodi parameter na thake call korar somoy,num2=132 nibe
    return num1+num2;
}

const total= add(12);
console.log(total);