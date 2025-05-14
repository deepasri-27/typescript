export class Points{
    // private x:number;
    // public y:number;
    // public z:number;
    //If i use '?' then i don't get error eventhough i haven't provide the argument.
    //eventhough it is public asscess modififier mention it explicitly
    constructor(private x?:number,public y?:number,public z?:number){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    public get X(){
        return this.x;
    }
    public set X(value){
        this.x= value;
    }

    private draw =():any=>{
        console.log('X: '+this.x+' Y: '+this.y+' Z: '+this.z);
    }
    drawRec= ():any=>{
        this.draw();
        console.log("Draw Rectangle");
    }

}
