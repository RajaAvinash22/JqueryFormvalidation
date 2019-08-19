function requiredField(id,err)
{
  let flag = false;
  if($(id).val() == "")
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
  var pattern =/^[a-zA-Z\s]*$/;
  if(pattern.test($(id).val()) &&  $(id).val().length >=7 &&  $(id).val().length<=20  &&   requiredField(id,err))
  {
  $(id).css("border" , "2px solid green");
  $(err).text("");
  flag = true;
  }else{
    $(id).css("border" , "2px solid red");
    $(err).text("** Please Input Proper Name : min char = 7  &  max char = 20");
    flag = false;
  }
  return flag;
}

function validateEmail(id,err)
{
  flag= false;
  var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(pattern.test($(id).val()) && requiredField(id,err))
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
  if(pattern.test($(id).val()) && $(id).val().length ==10  && requiredField(id,err) )
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
  var pattern= /[a-zA-Z0-9_+-,\s]*$/;
  if(pattern.test($(id).val()) && $(id).val().length >10 && requiredField(id,err) )
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
  if($(id).val() == "Select City" )
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

function validateGender(err)
{
  flag= false;
  if($('input[type=radio][name=Gender]:checked').length == 0)
  {  
    $(err).text("Please select your gender ");
         flag = false;
    
    
  }else
  {
    $(err).text("");
    flag=true;
    
  }
  return flag;
}

function validateForm()
{
        validateName("#fname","#nameErr");

        validateEmail("#email","#emailErr");

        validateMobile("#mobile","#mobileErr");
    
        validateGender("#genderErr");

        requiredField("#dob","#dobErr");

        validateAddr("#addr","#addrErr");

        validateCity("#city","#cityErr");
    
}
