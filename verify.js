module.exports = validate; // module Method #1

function validate(user){
  if(user.email == "abc@com" && user.password == "123" || user.email == "xyz@com" && user.password == "123" || user.email == "qwe@com" && user.password == "123"){
    user.valid = true;
  }else{
    user.valid = false;
  }

  return user
}
