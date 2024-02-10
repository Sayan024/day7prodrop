let submenu = document.getElementById("submenuwrap")
let f=0
function toggle(){
    if(f===0){
        submenu.style.maxHeight = "400px"
        f=1
    }
    else{
        submenu.style.maxHeight = "0px"
        f=0
    }
    
}
