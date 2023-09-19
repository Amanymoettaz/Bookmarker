var bookmarkInput=document.getElementById("UserName")
var siteUrlInput=document.getElementById("userUrl")


var allData=[] ;


allData=JSON.parse(localStorage.getItem("clientData"))
displayData()



function addData(){
    
        var clientData={
            name: bookmarkInput.value,
            url: siteUrlInput.value,
        } ;
      
        allData.push(clientData) ;
      
        console.log(allData)  ;
    
        localStorage.setItem("clientData",JSON.stringify(allData)) ;
        displayData() ;
        clearForm() ;
         
    }


function clearForm(){

    bookmarkInput.value="";
    siteUrlInput.value="";
}


function displayData(){
  var box="";
      for(i=0; i<allData.length ; i++){
  box+=`
  <tr>
          <td>${i}</td>
          <td>${allData[i].name}</td>
          <td> <button class="btn btn-success"  onclick="visitData( ${i})";> <i class="fa-regular fa-eye"></i>  Visit </button> </td>
          <td> <button class="btn btn-danger"    onclick="deleteData( ${i};)"><i class="fa-solid fa-trash-can"></i> Delete</button> </td>
    
          </tr>
  
  `
      }
  
      document.getElementById("tableData") .innerHTML=box
  }

function deleteData(indexNumber) {

    allData.splice(indexNumber,1) ;
 
    localStorage.setItem("clientData" , JSON.stringify(allData)) ;
    displayData();
   
}


function visitData(i){

window.open(allData[i].url); 
 
}





