//change image src
function newImg(id, newImg){
    let e = document.getElementById(id) 
    e.src = newImg
}

//show one component and hide 3 components for "navigation"
function navigate(show, hide1, hide2, hide3){
    console.log("values are: ", show, hide1, hide2, hide3)
    let s = document.getElementById(show)
    let hi1 = document.getElementById(hide1)
    let hi2 = document.getElementById(hide2)
    let hi3 = document.getElementById(hide3)
    console.log("values are: ", s, hi1, hi2, hi3)

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
        
        portrait.style.setProperty('--n', '21s')
        text.style.setProperty('--n', '119')
        text.innerHTML = "Hi, I'm John Vergil Aparri, a web developer and game dev hobbyist. Welcome to my portfolio website! How can I help you?"
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

    box.style.display = "none"
}



