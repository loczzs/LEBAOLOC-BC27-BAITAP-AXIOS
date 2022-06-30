const baseUrl = "https://62a694e897b6156bff7bc30e.mockapi.io/api/teachers";

function apiGetteacher(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params: {
        hoTen: search // products?name = "Xiaomi"
    },
  });
}

// if (!isRequired(taiKhoan)) {
//   // kiểm tr nếu isREquired là false
//   isValid = false;
//   document.getElementById("sptaiKhoan").style.display = "block";
//   document.getElementById("sptaiKhoan").innerHTML =
//     "Tên tài khoản không được để trống";
// } else if (accountz == sos) {
//   isValid = false;
//   console.log(isValid)
//   document.getElementById("sptaiKhoan").style.display = "block";
//   document.getElementById("sptaiKhoan").innerHTML =
//     "tên tài khoản đã được sử dụng";
// } else {
//   document.getElementById("sptaiKhoan").innerHTML = "";
// }