// let a:number;
// let b:string;
// let c:boolean;
// let d:any;
// let e:number[]=[1,2,3];
// let f:any[] = [1,'a',true];

// enum color{red,blue,green};
// let backgroundColor = color.green;
// console.log(backgroundColor);

// let shade;
// shade = "red";
// let endWithD= (<string> shade).endsWith('d');
// let endWithd=(shade as string ).endsWith('d');

//custom function creation using interface
interface Point{
    x:number;
    y:number;
    z:number;
    draw:()=>void;
}
let someFunction = ()=>{
   
}

let drawRec = (point:Point)=>{
    point.draw();
}
drawRec({x:1,y:2,z:3,draw:someFunction});