function requiredField(id,err)
{
  let flag = false;
  if(id.value =="")
  {
   $(id).css("border" , "2px solid red");
    $(err).text("** Required  Cannot be null");
    flag = false;
  }
  else
  {
    $(id).css("border" , "2px solid green");
    $(err).text("");
    flag =true;
  }
  return flag;
}

function validateName(id,err)
{ 
  flag= false;
  var pattern =/^[a-zA-Z]*$/;
  if(pattern.test(id.value) &&  id.value.length >=7 &&  id.value.length<=16  &&   requiredField(id,err))
  {
  $(id).css("border" , "2px solid green");
  $(err).text("");
  flag = true;
  }else{
    $(id).css("border" , "2px solid red");
    $(err).text("** Please Input Proper Name : min char = 7  &  max char = 16");
    flag = false;
  }
  return flag;
}

function validateEmail(id,err)
{
  flag= false;
  var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(pattern.test(id.value) && requiredField(id,err))
  {
      $(id).css("border" , "2px solid green");
      $(err).text("");
      flag = true; 
  }else
  {
    $(id).css("border" , "2px solid red");
    $(err).text("** Please Input Proper Email");
    flag = false;
  }
  return flag;
}

function validateMobile(id,err)
{
  flag=false;
  var pattern=/^[0-9]+$/;
  if(pattern.test(id.value) && id.value.length ==10  && requiredField(id,err) )
  { $(id).css("border" , "2px solid green");
  $(err).text("");
  flag = true; 
}else
{
  $(id).css("border" , "2px solid red");
  $(err).text("** Please Input Proper Mobile no.");
  flag = false;
}
return flag;
}

function validateAddr(id,err)
{
  flag = false;
  var pattern= /^[0-9a-zA-Z]+$/;
  if(pattern.test(id.value) && requiredField(id,err) )
  { $(id).css("border" , "2px solid green");
  $(err).text("");
  flag = true; 
}else
{
  $(id).css("border" , "2px solid red");
  $(err).text("** Please Input Proper Address");
  flag = false;
}
return flag;
}

function validateCity(id,err)
{
  flag = false;
  if(id.value=="Select City" )
  {
  $(id).css("border" , "2px solid red");
  $(err).text("** Please Select City");
  flag = true; 
}else
{
  $(id).css("border" , "2px solid green");
  $(err).text("");
  flag = false;
}
return flag;
}

/*function validateGender(id,err)
{
  flag= false;
  if($('input[type=radio][name=Gender]:checked').length == 0)
  {
      
    $(err).text("Please select your gender ");
         flag = false;
    
  }else{
    $(err).text("");
    flag=true;
  }
  return flag;
}*/

function validateForm()
{
       var ename = document.getElementById("fname");
       var err1 = document.getElementById("nameErr"); 
        validateName(ename,err1);

       var email = document.getElementById("email");
       var err2 = document.getElementById("emailErr");
        validateEmail(email,err2);

       var emob = document.getElementById("mobile");
       var err3 = document.getElementById("mobileErr");
       validateMobile(emob,err3);

      /* var egender = document.getElementsById("gen");
       var err7 = document.getElementById("genderErr");
       validateGender(egender,err7);*/

       var edob = document.getElementById("dob");
       var err4 = document.getElementById("dobErr");
       requiredField(edob,err4);

       var eaddr = document.getElementById("addr");
       var err5 = document.getElementById("addrErr");
       validateAddr(eaddr,err5);

       var ecity = document.getElementById("city");
       var err6 = document.getElementById("cityErr");
       validateCity(ecity,err6);
    
}
