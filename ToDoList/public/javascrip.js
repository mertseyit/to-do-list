let taskList = [];
var AddCounter=0;
let ClickCounter = 2
let gostergesayac = 1
let gizlemegesayac = 1
let j = 0

//görev listesi görüntüleme kısmı
function ClickOn() {
    ClickCounter++;
    if(ClickCounter%2 == 0) {
        document.querySelector("#txt").classList.remove("hidden");
    }

    if(ClickCounter%2 == 1) {
        document.querySelector("#txt").classList.add("hidden");
    }
}
//inputtan alınan verileri tasklist üzerine ekleme
function InputValueRead() {
    let AddTask = document.querySelector("#text").value
    if(AddTask == "") {
        alert("Task listesi boş olmamalı")
    } else {
        AddCounter++;
        taskList.push({task:`${AddTask}`, id:`${AddCounter}`, clas: `d-none`}); 
    }

    document.querySelector("#text").value = ""
    DisplayView()
}

//tasklist elemetlerini ekrana yazdırma fonksiyounu
function DisplayView() {
    //hangi görev başlığında olduğunun gösterilmesi
    document.querySelector("#alltask").classList.add("bg-info")
    document.querySelector("#compatetask").classList.remove("bg-info")
    document.querySelector("#waitingtask").classList.remove("bg-info")

    let ul = document.querySelector("#task");
    ul.innerHTML = ""
    for(let a of taskList) {
        let li = `<li id="${a.id}" class="d-flex align-items-center h-5 list-group-item w-100">
        <span class="bg-success ${a.clas} rounded-circle me-2 text-white material-symbols-outlined">
        done
        </span>
        <a onclick="Checked((${a.id}))" id="TaskComplate" class="text-dark text-capitalize fw-bold">${a.task}</a>
        
        <button onclick="DeleteButton(${a.id})" class="ms-auto btn btn-danger ">Delete</button> 
        </li>` 
        ul.insertAdjacentHTML("beforeend",li);
    }
    if(ul.innerHTML == "") {
        ul.innerHTML = '<p class="text-center fw-bold w-100">Bu liste boş.</p>'
    }
}

//görevin yapılıp yapılmadığı kontrolü 
function Checked(id) {
    
    let UpdateIndex
    
    for(let index in taskList) {
        if(taskList[index].id == id) {
            UpdateIndex = index
        }
    }
    if(taskList[UpdateIndex].clas == "display-on") {
        taskList[UpdateIndex].clas = "d-none" //gösterme display-on classı varsa gizle
    } else {
        taskList[UpdateIndex].clas = "display-on" //gizleme d-none classı varsa göster
    }
    document.querySelector("#text").value = ""
    DisplayView()   
    
}

//tasklist üzerinden element silme 
function DeleteButton(id) {
    let DeleteIndex
    for(let index in taskList) {
        if(taskList[index].id == id) {
            DeleteIndex = index
        }
    }

    taskList.splice(DeleteIndex, 1)
    document.querySelector("#text").value = ""
    DisplayView()
}

//tüm görevlerin gösterilmesi
function AllTaskView() {
    let ul = document.querySelector("#task");
    ul.innerHTML = ""
    DisplayView()
}

//tamamlanan görevlerin gösterilmesi
function ComplateTaskView() {
    //hangi görev başlığında olduğunun gösterilmesi
    document.querySelector("#alltask").classList.remove("bg-info")
    document.querySelector("#compatetask").classList.add("bg-info")
    document.querySelector("#waitingtask").classList.remove("bg-info")
    let index = []
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].clas == "display-on") {
            index[j] = i
            j++
        }
    }
   
    j=0
    let ul = document.querySelector("#task");
    ul.innerHTML = ""
    for(let i=0; i<index.length; i++) {
        let li = `<li id="${taskList[index[i]].id}" class="d-flex align-items-center h-5 list-group-item w-100">
        <span class="bg-success ${taskList[index[i]].clas} rounded-circle me-2 text-white material-symbols-outlined">
        done
        </span>
        <a onclick="Checked((${taskList[index[i]].id}))" id="TaskComplate" class="text-dark text-capitalize fw-bold">${taskList[index[i]].task}</a>
        
        <button onclick="DeleteButton(${taskList[index[i]].id})" class="ms-auto btn btn-danger d-none">Delete</button> 
        </li>` 
        ul.insertAdjacentHTML("beforeend",li);
    }
    if(ul.innerHTML == "") {
        ul.innerHTML = '<p class="text-center fw-bold w-100">Bu liste boş.</p>'
    }
}

//tamamlanmayan görevlerin gösterilmesi
function WaitingTaskView() {
    //hangi görev başlığında olduğunun gösterilmesi
    document.querySelector("#alltask").classList.remove("bg-info")
    document.querySelector("#compatetask").classList.remove("bg-info")
    document.querySelector("#waitingtask").classList.add("bg-info")

    let index = []
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].clas == "d-none") {
            index[j] = i
            j++
        }
    }

    j=0
    let ul = document.querySelector("#task");
    ul.innerHTML = ""
    for(let i=0; i<index.length; i++) {
        let li = `<li id="${taskList[index[i]].id}" class="d-flex align-items-center h-5 list-group-item w-100">
        <span class="bg-success ${taskList[index[i]].clas} rounded-circle me-2 text-white material-symbols-outlined">
        done
        </span>
        <a onclick="Checked((${taskList[index[i]].id}))" id="TaskComplate" class="text-dark text-capitalize fw-bold">${taskList[index[i]].task}</a>
        
        <button onclick="DeleteButton(${taskList[index[i]].id})" class="ms-auto btn btn-danger d-none">Delete</button> 
        </li>` 
        ul.insertAdjacentHTML("beforeend",li);
        if(document.querySelector("#task") === ' ') {
            //ul.innerHTML = '<p class="text-center fw-bold">Bu liste boş</p>'
            console.log("sdjlfksjdlfk")
        }
    }
    if(ul.innerHTML == "") {
        ul.innerHTML = '<p class="text-center fw-bold w-100">Bu liste boş.</p>'
    }
}







