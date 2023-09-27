var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

function validateForm() {
    const name = document.forms["message-form"]["your-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const interest = document.forms["message-form"]["interest"].value;

    if (name == "") {
        alert("Nama tidak boleh kosong");
        return false;
    }

    else if (email == ""){
        alert("Email tidak boleh kosong");
        return false;
    }

    else if (interest == "") {
        alert("Interest tidak boleh kosong");
        return false;
    }

    else {
        alert("Terima kasih telah mengisi data");
    }
    
    setSenderUI(name, birthDate, gender, messages);
    
    return false
}
