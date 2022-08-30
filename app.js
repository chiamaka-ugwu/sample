var menuIcon = document.getElementById("menu-icon")
    var dropDown = document.getElementById("dropdown")
    
    var getStartedOpen = document.getElementById("get-started-open")
    var getStartedClose = document.getElementById("get-started-close")
    var modalBackground = document.getElementById("modal-background")

    var open = false

    menuIcon.addEventListener("click", function(){
        if(open == false){
            dropdown.style.display = "block"
            open = true
        }
        else{
            dropdown.style.display = "none"
            open = false
        }
    })
