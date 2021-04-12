
import Meme from "./Bai1Meme.js";
import MemeCollection from "./Bai1MemeCollection.js";
let meme_1 = new Meme(100,"phong cảnh","https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-dien-thoai.jpg","22/10");
//meme_1.show();
let meme_2 = new Meme(101,"dog","https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900","1/5");
let meme_3 = new Meme(102,"cat","https://timesofindia.indiatimes.com/photo/67586673.cms",12/6);
// meme_1.update(meme_2);
// meme_1.show();
let memes_1 = new MemeCollection(10,"phong canh","hưng",[meme_1,meme_2]);
console.log(memes_1);
memes_1.show();
memes_1.add(meme_3);
memes_1.delete(101);
memes_1.update(102,meme_2);