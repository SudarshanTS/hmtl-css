var number=1;
function createTable() {
     var rowsValue=document.getElementById("Rows").value;
	var colnumsValue=document.getElementById("Colnums").value;
	var mutiplicationValue=document.getElementById("Value").value;	
  for(var rows=0;rows<parseInt(rowsValue,10);rows++)
  {
   var rowId=document.getElementById("myTable").insertRow(rows);
   for(var colnums=0;colnums<parseInt(colnumsValue,10);colnums++)  
    {
      var ColnumId=  rowId.insertCell(colnums);
      ColnumId.innerHTML= mutiplicationValue + "*"+ number + "=" + number*mutiplicationValue;
      number++;
    }
   }
    number=1;
}
