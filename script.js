var btnCheck = document.getElementById('checkOnline');
btnCheck.addEventListener("click", 
    function test(){
        if(window.navigator.onLine === true){
            alert('Online');
        }
        else{
            alert('Offline');
        }
        
    }
);