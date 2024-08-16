const nam = new Date().getFullYear();
const namsinh = prompt("Nhập năm sinh của bạn:");
const tuoi = nam - namsinh;
alert(`Bạn ${tuoi} tuổi.`);
if (tuoi >= 18) {
    alert("Bạn đã đủ tuổi lái xe 4 bánh.");
} else {
    alert("Bạn chưa đủ tuổi lái xe 4 bánh.");
}
