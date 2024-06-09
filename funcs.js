//change image src
function newImg(id, newImg){
    let e = document.getElementById(id) 
    e.src = newImg
}

//show one component and hide 3 components for "navigation"
function navigate(show, hide1, hide2, hide3){
    let s = document.getElementById(show)
    let hi1 = document.getElementById(hide1)
    let hi2 = document.getElementById(hide2)
    let hi3 = document.getElementById(hide3)

    s.style.display = "flex"
    hi1.style.display = "none"
    hi2.style.display = "none"
    hi3.style.display = "none"
}

function replay(comp, animName){

    comp.className = ""
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
          comp.className = animName;
        });
      });
}

//change dialogue on navigate
function changeDialogue(page){
    let text = document.getElementById("dialogueContent")
    let portrait = document.getElementById("me")

    //re-trigger avatar animation
    replay(portrait, "talksprite")
    //re-trigger text animation  
    replay(text, "dtext type")


    if(page === "home"){
        
        portrait.style.setProperty('--n', '5s')
        text.style.setProperty('--n', '80')
        text.innerHTML = "Hi, I'm John Vergil Aparri. Welcome to my portfolio website!"
    }
    else if(page === "project"){
        portrait.style.setProperty('--n', '13s')
        text.style.setProperty('--n', '77')
        text.innerHTML = "These are the projects I've worked on, it's not much but it's an honest work."
    }
    else if(page === "about"){
        portrait.style.setProperty('--n', '15s')
        text.style.setProperty('--n', '88')
        text.innerHTML = "Who am I? You sure you want to know? The story of my life is not for the faint of heart."
    }
    else if(page === "contact"){
        portrait.style.setProperty('--n', '9s')
        text.style.setProperty('--n', '53')
        text.innerHTML = "This is crazy, so here's my email and hire me maybe?"
    }
    else{ 
        portrait.style.setProperty('--n', '15s')
        text.style.setProperty('--n', '119')
        text.innerHTML = "Ok...this is not supposed to happen. You either did something or this is on me..."
    }
}

function closeDialogueBox(){
    let box = document.getElementById("dialogueBox")
    let icon = document.getElementById("SideIcon")
    let home = document.getElementById("homeContent")

    icon.style.display = "block"
    box.style.display = "none"    
}

function openDialogueBox(){
    let box = document.getElementById("dialogueBox")
    let icon = document.getElementById("SideIcon")
    let home = document.getElementById("homeContent")

    icon.style.display = "none"
    box.style.display = "flex"    
}

function checkform(form) {
    // get all the inputs within the submitted form
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                return false;
            }
        }
    }
    return true;
}

function closeMessage(){
    let msg = document.getElementById("ty")
    
    msg.style.display = "none"    
}

function openMessage(){
    let msg = document.getElementById("ty")
    let frm = document.getElementById("msgForm")

    console.log("checking", checkform(frm));
    if(checkform(frm)){
        frm.submit();
        frm.reset();
        navigate('homeContent', 'projectContent', 'aboutContent', 'contactContent')
		changeDialogue('home')
        msg.style.display = "block"
    } else{
        alert("Please fill in all the fields");
    }
}
