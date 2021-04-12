import hangHoa from "./Bai2HangHoa.js";
export default class doGiaDung extends hangHoa{
    doBen;
    constructor(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,ngayNhap,doBen){
        super(dinhDanh,tenMatHang,giaThanh,nhaSanXuat,10,ngayNhap);
        this.doBen = doBen;
    }
}