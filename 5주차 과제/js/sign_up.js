document.querySelector("#email").classList.remove("NO");
document.querySelector("#email").classList.remove("OK");

document.querySelector("#name").classList.remove("OK");

document.querySelector("#user_name").classList.remove("OK");

document.querySelector("#password").classList.remove("NO");
document.querySelector("#password").classList.remove("OK");

let Email;
let Name;
let User_name;

function CheckEmail(str){                                                 

    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

     if(!reg_email.test(str)) {                            

          return false;         

     }                            

     else {                       

          return true;         

     }                            

}   


function GoToEnroll() {                                          
	let obEmail = document.getElementById("email");

	if (!obEmail.value) {             

        document.querySelector("#email").classList.add("NO");

		obEmail.focus();	

		return false; 

	}               

	else   {          

		if(!CheckEmail(obEmail.value))	{

            document.querySelector("#email").classList.add("NO");

			obEmail.focus();

			return false;

		}   
        else{
            document.querySelector("#email").classList.add("OK");
            Email=obEmail.value;
            return true;
        }             

	}                      

} 



function OK_name(){
    let obname = document.getElementById("name");
   
    if(obname.value==""){
        document.querySelector("#name").classList.remove("OK");
        return false;
    }
    else{
        document.querySelector("#name").classList.add("OK");
        Name=obname.value;
        return true;
    }
}



function OK_user_name(){
    let obname = document.getElementById("user_name");
    
    if(obname.value==""){
        document.querySelector("#user_name").classList.remove("OK");
        return false;
    }
    else{
        document.querySelector("#user_name").classList.add("OK");
        User_name=obname.value;
        return true;

    }
}



function isJobPassword(str){                                                 

    let regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/; //  8 ~ 10자 영문, 숫자 조합


    if(!regExp.test(str)){
        return false;
    }
    else{
        return true;
    }          

}   


function GoToPW(){
    let obPW = document.getElementById("password");

	if (obPW.value=="") {             

        document.querySelector("#password").classList.add("NO");

		obPW.focus();	

		return false;

	}               

	else   {          

		if(!isJobPassword(obPW.value))	{

            document.querySelector("#password").classList.add("NO");

			obPW.focus();

			return false;

		}   
        else{
            document.querySelector("#password").classList.add("OK");
            return true;
        }             

	}
}

function change_link(){
    if(GoToEnroll()==true && OK_name()==true && OK_user_name()==true && GoToPW()==true){
        alert("로그인 되었습니다.\n\n휴대폰 및 이메일: "+Email+"\n성명: "+Name+"\n사용자 이름: "+User_name);
        location.href="index.html";
    }
    else{
        alert("다시 입력하세요");
    }

}