var addBtn = document.getElementById("addBtn")
var btnDelete = document.getElementById("delete")
var delAll = document.getElementById("deleteBtn")
arr = [];

function getUpdate (){
   var text =  document.getElementById("addTxt").value
   var title =  document.getElementById("title").value
   
   arr.push([title,text]);
   console.log(arr)
   update();
}

function update (){
    str = '';
    arr.forEach((element,index) => {
        str = str + 
        `  <div class="my-2 mx-2  card" style="width: 18rem;">
        <div class="card-body">
          <h4 class="card-title">${element[0]}</h4>
          <p class="card-text">${element[1]}</p>
          <button onclick="deleted(${index})"  id="delete" class="btn btn-primary">Delete</button>
        
        </div>
      </div>`
        
    });
    document.getElementById("notes").innerHTML = str ;
}

function deleted(itemIndex){
    arr.splice(itemIndex,1)
    console.log(arr)
    update()
}

function deleteAll (){
    arr = []
    update()
}
// var editTask=function(){
//     console.log("Edit Task...");
//     console.log("Change 'edit' to 'save'");
    
    
//     var listItem=this.parentNode;
    
//     var editInput=listItem.querySelector('input[type=text]');
//     var label=listItem.querySelector("label");
//     var containsClass=listItem.classList.contains("editMode");
//             //If class of the parent is .editmode
//             if(containsClass){
    
//             //switch to .editmode
//             //label becomes the inputs value.
//                 label.innerText=editInput.value;
//             }else{
//                 editInput.value=label.innerText;
//             }
    
//             //toggle .editmode on the parent.
//             listItem.classList.toggle("editMode");
//     }
    

function edit (e){
    console.log("ad")
    var text =  document.getElementById("addTxt").value
   var title =  document.getElementById("title").value
    var input = document.createElement('input');
    input.type = 'text'
    input.value = text.textContent;
    update()
   


}


function show (){
    getUpdate()
}
