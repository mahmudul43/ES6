class myclass{
    constructor(){
        this.id=25;
        this.name="Mahmudul Hasan";
    }
}

const object1=new myclass();
const object2=new myclass();

//console.log(object1,object2);


class tomarClass{
    constructor(id,name){
        this.id=id;
        this.name=name;
        this.school="ABC High School";
    }
}

const objectT=new tomarClass(120,"Robin");
const objectT2=new tomarClass(20,"Sadik");
const objectT3=new tomarClass(12,"Nilaya");

//console.log(objectT,objectT2,objectT3);

console.log(objectT.name);