var password = "SmartWavesAdministrator"

function passcheck(){
    if(document.getElementById('pass1').value != password){
        alert('Wrong Password!');
        return false
    }

    if(document.getElementById('pass1').value == password){
        alert('Verifying passed! Click OK to enter Moderation Section.');
    }
}