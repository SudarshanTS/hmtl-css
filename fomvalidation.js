function checkValidation() {
   var firstnameId=document.getElementById("firstName").value;
   var lastnameId=document.getElementById("lastName").value;
   var emailId=document.getElementById("Email").value;
   var userID=document.getElementById("userID").value;
   var validPassword=document.getElementById('password').value;
   var validconfirmPassword=document.getElementById('confirmpassword').value;
   var nameRegex=/^[a-zA-Z]+$/;
   var validationEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   var validuserID=/^[a-z0-9]+$/i;
   var regPass =/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/;
   
     if(!firstnameId.match(nameRegex)){
      document.getElementById("errfn").style.display='inline';
      document.getElementById("errfn").innerHTML="Fill the firstName";
      }
      else
      	document.getElementById('errfn').innerHTML="";
      if(!lastnameId.match(nameRegex)){
      document.getElementById("errln").style.display='inline';
      document.getElementById("errln").innerHTML="Fill the lastName";
      }
      else
      document.getElementById('errln').innerHTML="";
      if(!validationEmail.test(emailId)){
      document.getElementById("erremail").style.display='inline';
      document.getElementById("erremail").innerHTML="Invalid Email address";	
      }
      else
      	document.getElementById("erremail").innerHTML="";	
      if(!validuserID.test(userID)){
      document.getElementById("erruserid").style.display='inline';
      document.getElementById("erruserid").innerHTML="Invalid UserId address";	
      }
      else
      	document.getElementById("erruserid").innerHTML="";	
     if(validPassword!=""){
     	 if (validPassword.length >7) {
						        if(!regPass.test(validPassword)) {
								      document.getElementById('errpwd').innerHTML="Include a special character and at least one capital letter";
								      document.getElementById('errpwd').style.display="inline";
						           } 
							      else {
							      document.getElementById('errpwd').innerHTML="";
							     }
			}
		       else {
		      		document.getElementById('errpwd').innerHTML="Password to be a minimum of 8 characters";
		      		}
     }
     else{
     	document.getElementById('errpwd').innerHTML="Password cannot be empty";
        document.getElementById('errpwd').style.display="inline";
     } 
     if(validconfirmPassword!=""){
      if(validPassword!=validconfirmPassword){
      	document.getElementById('errconfirmpwd').innerHTML="Password does not match ";
      } 
     }
     else{
     	document.getElementById('errconfirmpwd').innerHTML="Confirm Password cannot be empty";
        document.getElementById('errconfirmpwd').style.display="inline";
     }
     
  }  
