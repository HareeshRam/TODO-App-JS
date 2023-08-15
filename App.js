let ram=document.getElementById("ram");
let btn=document.getElementById("btn");
let output=document.getElementById("output");

btn.addEventListener('click',function(){
    let innerValue=ram.value;
    // output.innerHTML=innerValue
    let InputValue=innerValue.trim();
    if(InputValue !=""){
    let list=document.createElement("li");
    let store=document.createTextNode(InputValue);
    list.appendChild(store);
    // -------Edit Button--------------
    let editButton=document.createElement("button")
    editButton.innerText="Edit"
    // editButton.style.height="30px"
    editButton.style.width="100px"
    editButton.style.border="none"
    editButton.style.borderRadius="10px"
    editButton.style.backgroundColor="white"
    editButton.style.marginLeft="30px"
    editButton.style.fontWeight="550"
    editButton.style.padding="15px"
    list.appendChild(editButton)
    editButton.addEventListener('click',function(){
        let edit=prompt("Edit Your Text",InputValue);
        if(edit!=null){
        InputValue=edit.trim();
        store.nodeValue=InputValue
        }
    })
// -------------------deleteButton------------------------
    let deleteButton=document.createElement("button")
    deleteButton.innerText="Delete"
    // deleteButton.style.height="30px"
    deleteButton.style.width="100px"
    deleteButton.style.marginLeft="20px"
    deleteButton.style.border="none"
    deleteButton.style.borderRadius="10px"
    deleteButton.style.backgroundColor="white"
    deleteButton.style.fontWeight="550"
    deleteButton.style.padding="15px"
    list.appendChild(deleteButton)
  deleteButton.addEventListener('click',function(){
    list.remove();
  })

    output.appendChild(list)
    ram.value="";





    }
    
})
