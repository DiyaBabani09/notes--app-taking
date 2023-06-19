// const my =document.getElementsByClassName('addnote');
const my=document.querySelector(".addnote")
const main=document.getElementById('main')

//save the note function
const notesave=()=>{
    const nooo=document.querySelectorAll(".note textarea");
    const data=[];
    nooo.forEach((note)=>{
data.push(note.value)
    })
    console.log(data);
    if(data.length===0){
        localStorage.removeItem("nooo")
    }
    else{

        localStorage.setItem("nooo",JSON.stringify(data))
    }
    
    
}
//this function add note box on clicking addnote buttom
const addNote=(text="")=>{
    const note=document.createElement('div');
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool">
    <i class=" trash fa-solid fa-trash"></i>
    <i class=" save fa fa-bookmark" aria-hidden="true"></i>
    
    </div>
    <textarea>${text}</textarea>
</div>`
main.appendChild(note)
notesave();
//this is used for delete option
note.querySelector(".trash").addEventListener("click",function () {
    note.remove();
    notesave();
    
})
note.querySelector(".save").addEventListener("click",function () {
    
    notesave();
    
})



}
//this is self calling function which call itself when refresh
(
function() {
    const lsnote=JSON.parse(localStorage.getItem("nooo"));
    if(lsnote===null){
        addNote()
    }
    else{

        lsnote.forEach((lsnote )=> {
            addNote(lsnote)
            
        }
        )
    }
}

   
)()



my.addEventListener("click", function () {

    addNote();
//    alert("heell")
})
// btn.addEventListener("click",addnote())
