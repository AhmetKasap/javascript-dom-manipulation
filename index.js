let gorevListesi = [
    { "id": 1, "gorevAdi": "Görev 1" },
    { "id": 2, "gorevAdi": "Görev 2" },
    { "id": 7, "gorevAdi": "Görev 3" },
    { "id": 4, "gorevAdi": "Görev 4" },
];

function listele() {

    var ul = document.getElementById("task-list");   // * task-list id li elementi seç.
    ul.innerHTML = "";
    for (var gorev of gorevListesi) {
        let li = `
        <li class="task list-group-item">
            <div class="form-check">
                <input type="checkbox" id="${gorev.id}" class="form-check-input">
                <label id="chek" for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
            </div>
            <div class="card">
                <a onclick="gorevSilme(${gorev.id})" href="#" class="btn btn-outline-danger text-dark font-weight-bold text-decoration-none" > Sil</a>
            </div>
        </li>
    `;

        ul.insertAdjacentHTML("beforeend", li);   //* son eleman olarak ekle

    }
}

listele();

document.querySelector("#btnAddNewTask").addEventListener("click", gorevEkeleme);
function gorevEkeleme() {
    var input = document.querySelector("#txtTaskName")
    if (input.value == "") {
        alert("Görev kutusu boş bırakılamaz");
    }
    else {
        gorevListesi.push({ "id": gorevListesi.length + 1, "gorevAdi": input.value });
        input.value = "";  //* bir görev eklendikten sonra input kutusu boşalsın.
        listele();       //* yeni görev eklediğimiz için tekrar listele fonksiyonunu çağırıyoruz.
    }

}

function gorevSilme(id) {
    var silinecekIndex;
    for (var i = 0; i < gorevListesi.length; i++) {
        if (id == gorevListesi[i].id) {
            silinecekIndex = i;
        }
    }
    gorevListesi.splice(silinecekIndex, 1);
    listele(); //* görev silindikten sonra tekrar listele

}

document.querySelector("#btnClear").addEventListener("click",fullSil);
function fullSil() {
    gorevListesi.splice(0,gorevListesi.length);
    listele();

}