import khoHang from "./Bai2KhoHang.js";
import hangHoa from"./Bai2HangHoa.js";
import doGiaDung from "./Bai2DoGiaDung.js";
import quanAo from "./Bai2QuanAo.js";
import doAn from "./Bai2DoAn.js";
let table = new doGiaDung(100,"bàn gỗ",200,"Kim Đan","22/10");
let ao = new quanAo(101,"Áo ba lỗ",100,"Văn Phú","23/10");
let hambuger = new doAn(102,"Hambuger",300,"KFC","26/10");
let listKhoHang = new khoHang([table,hambuger]);
console.log(listKhoHang); 
//listKhoHang.nhaphangHoa(ao);
listKhoHang.banHang(100);
listKhoHang.banHang(102);
listKhoHang.doanhThu();

