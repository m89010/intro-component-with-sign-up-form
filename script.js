
function alertfunction(){
    if(document.getElementById("name").value==""){
            var elm1=document.getElementById("name");
            elm1.style.border="2px solid #FF7979";
            elm1.style.backgroundImage="url('images/icon-error.svg')";
            elm1.setAttribute('placeholder','');
            document.getElementById("namealert").innerHTML="First Name cannot be empty";
          
    }
    if(document.getElementById("lastName").value==""){
            var elm1=document.getElementById("lastName");
            elm1.style.border="2px solid #FF7979";
            elm1.style.backgroundImage="url('images/icon-error.svg')";
            elm1.setAttribute('placeholder','');
            document.getElementById("lnamealert").innerHTML="Last Name cannot be empty";
    }
    if(document.getElementById("email").value==""){
            var elm1=document.getElementById("email");
            elm1.style.border="2px solid #FF7979";
            elm1.style.backgroundImage="url('images/icon-error.svg')";
            
            elm1.setAttribute('placeholder','email@examle/com');
          
            document.getElementById("emailalert").innerHTML="Looks like this is not an email";
    }
    if(document.getElementById("password").value==""){
        var elm1=document.getElementById("password");
            elm1.style.border="2px solid #FF7979";
            elm1.setAttribute('placeholder','');
            elm1.style.backgroundImage="url('images/icon-error.svg')";
            document.getElementById("passalert").innerHTML="Password cannot be empty";
    }
    
}


function alertblock(elementx,elementy){
    document.getElementById(elementx).innerHTML="";
    var brdr=document.getElementById(elementy);
    brdr.style.border="1px solid  #DEDEDE ";
    brdr.style.backgroundImage="";
                             
} 



