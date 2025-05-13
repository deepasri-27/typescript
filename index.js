// let a:number;
// let b:string;
// let c:boolean;
// let d:any;
// let e:number[]=[1,2,3];
// let f:any[] = [1,'a',true];
var someFunction = function () {
};
var drawRec = function (point) {
    point.draw();
};
drawRec({ x: 1, y: 2, z: 3, draw: someFunction });
