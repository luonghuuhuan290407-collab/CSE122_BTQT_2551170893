function HienThiDongHo(){
    var d=new Date();
    var gio=d.getHours();
    var phut=d.getMinutes();
    var giay=d.getSecond();
    var h1=Math.floor(gio/10);
    var h2=gio%10;
    var m1=Math.floor(phut/10);
    var m2=phut%10;
    var s1=Math.floor(giay/10);
    var s2=giay%10;


}