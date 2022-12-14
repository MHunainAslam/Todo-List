// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let titlevar = title.value
//     let descvar = desc.value

//     localStorage.setItem(titlevar, descvar)


//     console.log(e)
//     todooutput.innerHTML += `

//     <div class="col-sm-1 text-center" id="outputtext">
//                             <p class="font-weight-bold">1</p>
//                         </div>
//                         <div class="col-sm-2  text-center" id="outputtext">
//                             <p class="font-weight-bold">${titlevar}</p>
//                         </div>
//                         <div class=" col-sm-6 col-md-6 col-lg-7 text-center" id="outputtext">
//                             <p class="font-weight-bold">${descvar}</p>
//                         </div>
//                         <div class="col-sm-1 text-center" id="outputtext">
//                             <button type="button" class="btn btn-danger" style=" height: 40px; width: auto; margin-left:-3px; ">
//                                 <img src="./img/edit.png"  style=" height: 100%; width: auto;  margin-top:-3px;" alt=""> 
//                             </a>
//                         </div>

//                         <div class="col-sm-1 text-center" id="outputtext">
//                             <button type="button" class="btn btn-danger" style=" height: 40px; width: auto; margin-left:-3px; ">
//                                 <img src="./img/39-trash-outline.gif"  style=" height: 100%; width: auto;  margin-top:-3px;" alt=""> 
//                             </button>
//                         </div>

//     ` 
//     title.value = ""
//     desc.value = ""
// })
submit.addEventListener("click", savetodo)
function savetodo(e) {
    let titlevar = document.getElementById('title').value
    let descvar = document.getElementById('desc').value

    let todooutput = {
        titlevar,
        descvar
    }

    if (localStorage.getItem("todo") === null) {
        let addtodoinnull = []
        addtodoinnull.push(todooutput)
        localStorage.setItem('todo', JSON.stringify(addtodoinnull))
    } else {
        let addtodoinlist = JSON.parse(localStorage.getItem('todo'))
        addtodoinlist.push(todooutput)
        localStorage.setItem('todo', JSON.stringify(addtodoinlist))
    }

    document.getElementById("title").value = ""
    document.getElementById("desc").value = ""
    e.preventDefault()

    showtodo();
}

function deleteTask (a){
    let dlt = JSON.parse(localStorage.getItem('todo'))
    for (let i=0; i<dlt.length; i++){
        if (dlt[i].titlevar === a) {
            dlt.splice(i, 1)
        }
    }
    localStorage.setItem('todo', JSON.stringify(dlt))
    showtodo()
}
   

function showtodo() {

    
   

    let show = JSON.parse(localStorage.getItem('todo'))
    let outputdiv = document.getElementById('todooutput')
    outputdiv.innerHTML = "";


    for (let i = 1; i < show.length ; i++) {
        let sno = i
        let titlevar = show[i].titlevar
        let descvar = show[i].descvar
        outputdiv.innerHTML += `

                        <div class="col-sm-1 text-center sno" id="outputtext" >
                            <p class="font-weight-bold">${sno}</p>
                        </div>
                        <div class="col-sm-2  text-center" id="outputtext">
                            <p class="font-weight-bold">${titlevar}</p>
                        </div>
                        <div class=" col-sm-7  text-center" id="outputtext">
                            <p class="font-weight-bold">${descvar}</p>
                        </div>
                        <div class="col-sm-2 text-center" id="outputtext">
                            <button type="button" onclick="deleteTask('${titlevar}')"  id="dltbtn" class="btn btn-danger" style=" height: 40px; width: auto; margin-left:-3px; ">
                                <img src="./img/39-trash-outline.gif"  style=" height: 100%; width: auto;  margin-top:-3px;" alt=""> 
                            </button>
                        </div>
             
                   
        `
       
    }
    
}
showtodo();
