//GLOBAL
let getELE = (id) => document.querySelector(id);
let getArrayELE = (id) => document.querySelectorAll(id);


getELE("#btnTinhLuong").addEventListener("click", () => {

    let NhanVien = {};
    let arrayTitle = [];

    //Get input value from user and assign into NhanVien and arrayTitle 
    getArrayELE("form [title]").forEach(item => {
        let { id, value, title } = item;
        NhanVien = { ...NhanVien, [id]: value };
        arrayTitle = [...arrayTitle, title];
    });

    NhanVien = { ...NhanVien, tongLuong: (NhanVien.luongCB * NhanVien.hSLuong) + " VNĐ" };
    arrayTitle = [...arrayTitle, "Tổng Lương"];

    // show title information of staff on website
    let contentTitle = ``;
    arrayTitle.forEach(item => {
        contentTitle += `<tr><td class="text-white">${item} :</td>
                        </tr>`;
    })

    getELE("#hienThiThongTin").innerHTML = contentTitle;

    // show detailed information of staff on website
    let i = 0;
    for (let thongtinNV in NhanVien) {
        let content = `<td  class="text-white">${NhanVien[thongtinNV]}</td>  
            `;
        getArrayELE("#hienThiThongTin tr")[i].innerHTML += content;
        i++;
    }

});
