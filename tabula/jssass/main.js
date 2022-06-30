function closEl(){
    document.getElementById("sideEl").style.display = "none"
    console.log('àafafafaf')
}

function opEl(){
    document.getElementById("sideEl").style.display = "block"
    console.log('àafafafaf')
}
main();
function main() {
  apiGetteacher().then(function (result) {
    console.log(result.data);
    const teachers = result.data;
    for (var i = 0; i < teachers.length; i++) {
      const teacher = teachers[i];
      teachers[i] = new Teacher(
        teacher.id,
        teacher.taiKhoan,
        teacher.hoTen,
        teacher.matKhau,
        teacher.email,
        teacher.loaiND,
        teacher.ngonNgu,
        teacher.moTa,
        teacher.hinhAnh
      );
    }
    console.log(teachers);
    displaysass(teachers);
  }).catch(function (error) {
    console.log(error);
  });;
}
function displaysass(teachers) {
  let html = "";
  for (var i = 0; i < teachers.length; i++) {
    const teacher = teachers[i];
    console.log(teacher);
    if (teacher.loaiND === "GV") {
      html += `<div class="col-sm-3">
            <div class="item">
              <div class="thumb">
                <img src="${teacher.hinhAnh}" alt="" />
              </div>
              <div class="text">
                <h6>${teacher.ngonNgu}</h6>
                <h3>${teacher.hoTen}</h3>
                <p>
                  ${teacher.moTa}
                </p>
              </div>
            </div>
          </div>`;
    }
  }
  document.getElementById("teachList").innerHTML =html
}
// apiGetteacher()

