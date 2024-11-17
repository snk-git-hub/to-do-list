const addBTN=document.querySelector("#button");
const main = document.querySelector(".todo-list");

const nameInput = document.getElementById('input');




const add=(name)=>{
const note= document.createElement("div");
note.classList.add("note");
note.innerHTML=`
                    <div class="checkbox-label">
                        <input type="checkbox" id="task1">
                        <label for="task1">${name}</label>
                        <button class="dlt">delete</button>
                    </div>


`;
note.querySelector(".dlt").addEventListener("click",()=>{
    main.removeChild(note);
});

main.appendChild(note);
};



addBTN.addEventListener("click",function(){
    const name = nameInput.value.trim();
    if(name){
        add(name);
        nameInput.value="";
    }
    else{
        alert("plese enter a task!");
    }

});

