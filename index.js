

//add page
const addBtn=document.getElementsByClassName('add')[0]

addBtn.addEventListener('click',addPage)
function addPage(){
    let adding=document.createElement('div')


    adding.innerHTML=` <div class="page">
    <div class="logos">
        <button class="edit logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
        </button>
        <button class="save logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg></button>
        <button class="remove logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg></button>
    </div>
    <div class="text">
        <form action="">
            <textarea name="" class="text" cols="0" rows="30"></textarea>
        </form>
    </div>
</div>`
const container=document.getElementsByClassName('container')[0]
const textarea=document.getElementsByClassName('text')


//edit page
const editBtn= document.getElementsByClassName('edit')
for(let i=0;i<editBtn.length;i++){
    editBtn[i].addEventListener('click',editPage)
}
function editPage(event){
   if(event.target){
         for(let i=0;i<textarea.length;i++){
            textarea[i].disabled=false
        }
    }
}

//delete page
const removeBtn= document.getElementsByClassName('remove')
for(let i=0;i<removeBtn.length;i++)
removeBtn[i].addEventListener('click',removePage)
function removePage(event){
    let close=event.target
    close.parentElement.parentElement.parentElement.remove()
}

//save
const saveBtn= document.getElementsByClassName('save')
for(let i=0;i<saveBtn.length;i++){
    saveBtn[i].addEventListener('click',savePage)
}
function savePage(event){
    if(event.target){
        for(let i=0;i<textarea.length;i++){
           textarea[i].disabled=true
       }
   }
}








container.appendChild(adding)
adding.getElementsByClassName('remove')[0].addEventListener('click',removePage)
adding.getElementsByClassName('save')[0].addEventListener('click',savePage)
adding.getElementsByClassName('edit')[0].addEventListener('click',editPage)
}