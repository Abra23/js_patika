const button = document.querySelector("#liveToastBtn")
const task = document.querySelector("#task")
const list = document.querySelector("#list")
const liveToast = document.querySelector("#liveToast")

const AllList = document.querySelectorAll("li")


AllList.forEach(e =>{
    e.addEventListener('click',selectElement)

    function selectElement(){
        e.classList.toggle("checked")
    }

    let removeBtn = document.createElement("span")
    removeBtn.classList.add("close")

    let txt = document.createTextNode("\u00D7")
    removeBtn.appendChild(txt)
    e.appendChild(removeBtn)

    removeBtn.addEventListener("click",removeElement)

    function removeElement(){

       let alert = window.confirm("Silmek İstediğinizden Emin misiniz?")

       if(alert){
        e.remove();
       }
       else{
        e.classList.toggle("checked")
       }
    }

})

function newElement() {
    if (task.value == "" || !task.value.trim() ) {
        $(`.error`).toast("show")
    }
    else {
        let newli = document.createElement("li")
        newli.innerHTML = task.value;
        $(`.success`).toast("show")
        list.appendChild(newli)
        let removeBtn = document.createElement("span");
        removeBtn.classList.add("close");
        let txt = document.createTextNode("\u00D7");
        
        removeBtn.appendChild(txt)
        newli.appendChild(removeBtn);


        removeBtn.addEventListener("click", removeItem);
        
        function removeItem() {
            let answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
            if (answer) {
                newli.remove();
            }
        }
        
        newli.addEventListener("click", selectItem);
        function selectItem(){
            newli.classList.toggle("checked");
        }
    }
    task.value = ""
}