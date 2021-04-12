import Meme from "./Bai1Meme.js";
 export default class MemeCollection extends Meme{
    owner;
    memes;
    constructor(id,name,owner,memes){
        super(id,name);
        this.owner = owner;
        this.memes = memes;
    }
    add(data){
        if(data instanceof Meme){
            this.memes.push(data);
        }
    }
    delete(x){
        let ViTri = -1;
       for(let i = 0; i < this.memes.length;i++){
           if(this.memes[i].id === x){
               ViTri = i;
               break;
           }
       }
       if(ViTri == - 1) console.log("kkhong có id đó");
       else{
           this.memes.splice(ViTri,1);
       }

    }
    update(x,data){
        if(data instanceof Meme){
            let ViTri = -1;
            for(let i = 0; i < this.memes.length;i++){
                if(this.memes[i].id === x){
                    ViTri = i;
                    break;
            }
            this.memes.splice(ViTri,1,data);
       }
        }
        else {
            console.log("data khong tương thích");
        }
    }
    show(){
        console.log(this.memes);
    }
};