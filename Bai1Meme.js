export default class Meme{
    id;
    name;
    // image là url của meme
    image;
    // dataModified là ngày tạo
    dataModified;
    constructor(id,name,image,dataModified){
        this.name = name;
        this.id = id;
        this.image = image;
        this.dataModified = dataModified;
    }
    show(){
        let x = document.createElement("img");
        x.setAttribute("src",this.image);
        x.setAttribute("height","200");
        x.setAttribute("width","300");
        x.setAttribute("alt","ảnh lỗi rồi");
        document.getElementById("hung-2").appendChild(x);
        document.getElementById("hung-1").innerHTML = "Tên ảnh: " + this.name + ".Ngày tạo: " + this.dataModified;
    }
    update(data){
        this.name = data.name;
        this.id = data.id;
        this.image = data.image;
        this.dataModified = data.dataModified;
    }
};