function showPopUp(){
    // console.log("Function Called"); 
    let box = document.getElementById('popupBox')
    // console.log(box); 
    if(box.style.display == 'none'){
        box.style.display = 'block'; 
    }
    else{
        box.style.display = 'none'; 
    }
}