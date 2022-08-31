const listText=document.querySelector(".listForm");
const sortAZ=document.querySelector(".sort-AZ");
const sortZA=document.querySelector(".sort-ZA");
let sortText=document.querySelectorAll("add-text");
let table=document.querySelector("table")

listText.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(event.target);


    let addElement= document.getElementById('table-list');


    let newTr=document.createElement('tr');
    let newTd=document.createElement('td');
    let newIcon=document.createElement('i');
    
    newTd.innerHTML=data.get("listText");
    newTd.classList.add("list-content")
    newTr.classList.add("add-text");
    newIcon.classList.add('far', 'fa-times-circle', 'delete-task');
    table.append(newTr);
    newTr.append(newTd);
    newTr.append(newIcon);


    
    const deleteTask=document.querySelectorAll('.delete-task');
    deleteTask.forEach(element => {
        element.addEventListener('click',function(){ 
         element.parentElement.remove();
         
        });
    });

    
 

sortAZ.addEventListener('click',(e)=>{
    let sortedRows = Array.from(addElement.rows) 
    .slice().sort((rowA, rowB) => 
    rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1); 
    console.log(...sortedRows)
    addElement.tBodies[0].append(...sortedRows);    
   
    sortAZ.style.opacity="0";
    sortZA.style.opacity="1";
    

})
sortZA.addEventListener('click', (e)=>{
    let sortedRows = Array.from(addElement.rows) 
    .slice().sort((rowA, rowB) => 
    rowA.cells[0].innerHTML < rowB.cells[0].innerHTML ? 1 : -1); 
    console.log(...sortedRows)
    addElement.tBodies[0].append(...sortedRows);    
   
    sortAZ.style.opacity="1";
    sortZA.style.opacity="0";
    })
clearInput();

});
         
    


function clearInput(){
    let input=document.getElementById('input');
    input.value="";
}


//     function sortTable(colNames, asc) { 
//         for (let i=0;i<colNames.length;i++) {
//             var columnName = colNames[i];
//             console.log(columnName)
//             sortText= sortText.sort(function(a,b){
//                 if(asc){
//                     return a.columnName>b.columnName ? 1:-1;
//                 }
//                 else{
//                     return a.columnName<b.columnName ? 1:-1;
//                 }

//             })


//     }
// } 
    