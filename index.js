// BT01: Tính tiền lương
/** Sơ đồ 3 khối:
 * Đầu vào: 
 * Lương 1 ngày: 100.000đ (cố định)
 * Số ngày (do user nhập)
 * 
 * Các bước xử lí: Lương 1 ngày x Số ngày
 * 
 * Đầu ra: Hiển thị lương nhân viên
 */

document.getElementById("ketQua1").onclick = function () {
    let luongMotNgay = document.getElementById("luongMotNgay").value * 1;
    let soNgayCong = document.getElementById("soNgayCong").value * 1;
    let tienLuong = luongMotNgay * soNgayCong;
    console.log(luongMotNgay);
    console.log(soNgayCong);
    console.log(tienLuong);
    document.querySelector("#thongBao1").innerHTML =
      '<i class="fa-solid fa-hand-point-right"></i>' +
      " Tiền lương nhân viên thực nhận là: " +
      tienLuong.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
}



// BT02: Tính giá trị trung bình
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Nhập 5 số bất kì
 * 
 * Các bước xử lí:
 * Tạo biến cho 5 số người dùng nhập
 * Tạo biến tính tổng 5 số
 * Lấy tổng chia 5 để tính giá trị trung bình
 * 
 * Đầu ra: Xuất ra giá trị trung bình của 5 số người dùng nhập
 */ 

document.getElementById("ketQua2").onclick = function () {
    let soThuNhat = document.getElementById("soThuNhat").value * 1;
    let soThuHai = document.getElementById("soThuHai").value * 1;
    let soThuBa = document.getElementById("soThuBa").value * 1;
    let soThuTu = document.getElementById("soThuTu").value * 1;
    let soThuNam = document.getElementById("soThuNam").value * 1;
    let tong = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
    console.log(tong);
    let trungBinh = tong / 5;
    document.querySelector("#thongBao2").innerHTML = '<i class="fa-solid fa-hand-point-right"></i>' + " Giá trị trung bình của 5 số trên là: " + trungBinh;
}



// BT03: Quy đổi tiền
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Số tiền USD
 * 
 * Các bước xử lí:
 * Tạo biến cho tiền đô mà người dùng nhập
 * VND = USD * 23500
 * 
 * Đầu ra: Xuất ra giá trị tiền VND có format VND
 */ 

document.getElementById("ketQua3").onclick = function () {
    let tienDo = document.getElementById("tienDo").value * 1;
    let tienViet = tienDo * 23500;
    document.getElementById("thongBao3").innerHTML = `<i class="fa-solid fa-hand-point-right"></i> ${tienViet.toLocaleString(
      "vi",
      {
        style: "currency",
        currency: "VND",
      }
    )}`;
}


// BT04: Tính chu vi, diện tích hình chữ nhật
/** Sơ đồ 3 khối:
 * Đầu vào:
 * chiều dài
 * chiều rộng
 * 
 * Các bước xử lí:
 * tạo biến chu vi = (dài + rộng)*2
 * tại biến diện tích = dài * rộng
 * 
 * Đầu ra: Xuất ra giá trị chu vi, diện tích của hình chữ nhật
 */ 


document.getElementById("ketQua4").onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;
    let chuVi = (chieuDai + chieuRong) * 2;
    let dienTich = chieuDai * chieuRong;
    document.getElementById(
      "thongBao4"
    ).innerHTML = `<i class="fa-solid fa-hand-point-right"></i> Chu vi: ${chuVi}; Diện tích: ${dienTich}`;
}




// BT05: Tính tổng 2 ký số
/** Sơ đồ 3 khối:
 * Đầu vào:
 * Nhập 1 số có 2 chữ số
 * 
 * Các bước xử lí:
 * lấy ký số đầu
 * lấy ký số thứ hai
 * tính tổng 2 ký số
 * 
 * Đầu ra: Xuất ra giá trị tổng 2 ký số
 */ 

document.getElementById("ketQua5").onclick = function () {
    let soDuocNhap = document.getElementById("soDuocNhap").value * 1;
    let soHangChuc = Math.floor(soDuocNhap / 10);
    let soHangDonVi = soDuocNhap % 10;
    console.log(soHangChuc)
    console.log(soHangDonVi)
    console.log(soDuocNhap)
    let tong = soHangChuc + soHangDonVi;
    console.log(tong)
    document.getElementById(
      "thongBao5"
    ).innerHTML = `<i class="fa-solid fa-hand-point-right"></i> ${tong}`;
}