import { Points } from "./Point";

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
// interface Point{
//     x:number;
//     y:number;
//     z:number;
//     draw:()=>void;
// }
// let someFunction = ()=>{
   
// }

// let drawRec = (point:Point)=>{
//     point.draw();
// }
// drawRec({x:1,y:2,z:3,draw:someFunction});


let Shape = new Points(1,2,3);
//therefore the value of x,y,x is passed as an argument this can be modified by anyone so make them as private..therefore Shape.x(we cannot access it so use getter and setter method)

// Shape.x = 2;
// Shape.y = 4;
// Shape.z = 10;//the value of x,y,z =undefined

Shape.drawRec();