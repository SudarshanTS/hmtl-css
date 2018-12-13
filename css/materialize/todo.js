var count=0;
var exp=[""];
var inc=[""];
function Expenses() {
	  var tt=parseInt(document.getElementById("expenses").value) + parseInt(document.getElementById("amount").value);
      document.getElementById("expenses").value=parseInt(tt);

      document.getElementById("expenses").name=(document.getElementById("name").value);
      a=document.getElementById("editname");
      d=document.getElementById("editamount")
      f=document.getElementById("editsave");
      b=document.createElement("input");
	  b.setAttribute("type","text");
 	  b.setAttribute("id","val"+count);
 	  b.setAttribute("value",document.getElementById("amount").value);                              
 	  c=document.createElement("input");
      c.setAttribute("type","text");
 	  c.setAttribute("id","nme"+count);
 	  c.setAttribute("value",document.getElementById("expenses").name);
 	   e=document.createElement("input");
 	   e.setAttribute("type","button");
 	   e.setAttribute("id","btn"+count);
 	   e.setAttribute("value","save");
 	   e.setAttribute("style","margin:28px; display:flex;");
 	   e.setAttribute("onclick","save("+count+")");
 	  a.appendChild(c);
 	  d.appendChild(b);
 	  f.appendChild(e);
    	  exp[count]=document.getElementById("expenses").value;
      count++;
            document.getElementById("total").value=parseInt(document.getElementById("income").value)-parseInt(document.getElementById("expenses").value);
 	 }   
function Income() {
	 document.getElementById("income").value=parseInt(document.getElementById("amount").value)+parseInt(document.getElementById("income").value);
	 document.getElementById("total").value=parseInt(document.getElementById("income").value)-parseInt(document.getElementById("expenses").value);
	 document.getElementById("income").name=(document.getElementById("name").value);
      a=document.getElementById("editname");
      d=document.getElementById("editamount")
      f=document.getElementById("editsave");
      c=document.createElement("input");
      c.setAttribute("type","text");
 	  c.setAttribute("id","nme"+count);
 	  c.setAttribute("value",document.getElementById("income").name);
 	  b=document.createElement("input"); 
 	  b.setAttribute("type","text");
 	  b.setAttribute("id","val1"+count);
 	  b.setAttribute("value",document.getElementById("amount").value);    
 	   e=document.createElement("input");
 	   e.setAttribute("type","button");
 	   e.setAttribute("id","btn"+count);
 	   e.setAttribute("value","save");
 	   e.setAttribute("style","margin:28px; display:flex;");
 	   e.setAttribute("onclick","save1("+count+")");
 	  a.appendChild(c);
 	  d.appendChild(b);
 	  f.appendChild(e);


	 
}
function save(cn){
	var total=0;
	exp[cn]=document.getElementById("val"+cn).value;
for(var i=0;i<exp.length;i++)
{
   total=total+parseInt(exp[i]);
}
       document.getElementById("expenses").value=parseInt(total);	
      document.getElementById("total").value=parseInt(document.getElementById("income").value)-parseInt(document.getElementById("expenses").value);

}
function save1(cn){
	var total=0;
	inc[cn]=document.getElementById("val1"+cn).value;
for(var i=0;i<inc.length;i++)
{
   total=total+parseInt(inc[i]);
}
document.getElementById("income").value=parseInt(total);	
      document.getElementById("total").value=parseInt(document.getElementById("income").value)-parseInt(document.getElementById("expenses").value);

}

