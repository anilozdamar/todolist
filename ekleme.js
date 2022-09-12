// html idlerin getirilmesi

let listesay = document.getElementsByTagName("li")
let eklebuton = document.querySelector("#liveToastBtn")
let maddeler = document.querySelector("#task")
let list = document.querySelector("#list")


// çarpı oluşturma

for(let i = 0; i < listesay.length; i++) {
    let butonkapat = document.createElement("span")
    butonkapat.textContent = "\u00D7"
    butonkapat.classList.add("close")
    butonkapat.onclick = butonsil;
    listesay[i].append(butonkapat)
    listesay[i].onclick = check;
}


// FONKSİYONLAR //

function butonsil(){
    this.parentElement.remove();
}

function check() {
    this.classList.toggle("checked")
}

eklebuton.addEventListener("click", elemanEkle)




// YENİ MADDE EKLEME //

function elemanEkle() {
    if(maddeler.value == "") {
        $(".error").toast("show");
    } 
    else {
        $(".success").toast("show");

        let yenilist = document.createElement("li");
       
        list.appendChild(yenilist);
        yenilist.innerHTML = task.value;
        maddeler.value == ""


    let btnkapat = document.createElement("span");
    btnkapat.textContent = "\u00D7";
    btnkapat.classList.add("close");
    btnkapat.onclick = butonsil;
    yenilist.append(btnkapat);
    yenilist.onclick = check;
    }
}