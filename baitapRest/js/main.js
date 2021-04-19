let getELE = id => document.querySelector(id);



const sum = (...sumArray) => {
    let sum = 0;
    sumArray.forEach(Diem => {
        return sum += Diem;
    });
    return sum / sumArray.length;
}


getELE("#btnKhoi1").addEventListener("click", function () {
    let diemToan = parseFloat(getELE("#inpToan").value);
    let diemLy = parseFloat(getELE("#inpLy").value);
    let diemHoa = parseFloat(getELE("#inpHoa").value);

    let tongDiem = sum(diemToan, diemHoa, diemLy).toFixed(2);
    getELE("#tbKhoi1").innerHTML = tongDiem;
});


getELE("#btnKhoi2").addEventListener("click", function () {
    let diemVan = parseFloat(getELE("#inpVan").value);
    let diemSu = parseFloat(getELE("#inpSu").value);
    let diemDia = parseFloat(getELE("#inpDia").value);
    let diemEng = parseFloat(getELE("#inpEnglish").value);


    let tongDiem = sum(diemVan, diemSu, diemDia, diemEng).toFixed(2);
    getELE("#tbKhoi2").innerHTML = tongDiem;
});