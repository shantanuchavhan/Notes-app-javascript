 


const add=document.querySelector("#add")
const main=document.querySelector("#main")
add.addEventListener('click',
    function(){
        addNote()
    }

    
)

function notesave(){
    const text=document.querySelectorAll(".notes textarea")
    const data=[]
    text.forEach(
        (note)=>{
            if (note.value!=''){
                data.push(note.value)
            }
                
        }
    )
    localStorage.setItem("notes",JSON.stringify(data))
}





function addNote(text=''){
    const note=document.createElement("div")
    note.classList.add("notes")
    console.log(note)
    
    note.innerHTML=
    `
    <div id="toolbar">
        <i class="trash fa-solid fa-trash"></i>
        <i class="save fa-solid fa-floppy-disk"></i>
    </div>
    <textarea >${text}</textarea>
     `;

     note.querySelector('.trash').addEventListener("click",
        function(){
            note.remove()
            notesave()
        }
    )

    note.querySelector('.save').addEventListener("click",
        function(){
            console.log("a")
            notesave()
        }
    )
    


    


    
    

    console.log(note)
    main.appendChild(note)
    
}

(function()
{
    const lsnotes =JSON.parse(localStorage.getItem("notes"));
    length=0
    lsnotes.forEach(element => {
        length+=1     
    });
    if (length===0){
        addNote()
    }
    else{
        lsnotes.forEach(
            (lsnotes)=>{
                addNote(lsnotes)
            }
        )
    
    }
    
})()