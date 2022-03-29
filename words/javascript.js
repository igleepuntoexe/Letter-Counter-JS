document.addEventListener("DOMContentLoaded", start)
let cont = 0

function start(){
    let btnSocial = document.getElementById("btnSocial")
    btnSocial.addEventListener("click", socialNetworks)

    let btncont = document.getElementById("contletter")
    btncont.addEventListener("click", contletter)
}

function socialNetworks(){
    let instatext = document.getElementById("insta")
    instatext.setAttribute("href", "https://www.instagram.com/igle.exe/")
    instatext.textContent = "Instagram"
    let githubtext = document.getElementById("github")
    githubtext.setAttribute("href", "https://github.com/igleepuntoexe")
    githubtext.textContent = "Github"
    let twittertext = document.getElementById("twitter")
    twittertext.setAttribute("href", "https://twitter.com/igleepuntoexe")
    twittertext.textContent = "Twitter"
}

function contletter(){
    let phrase = document.getElementById("inputphrase").value
    if (phrase == "" || phrase == null){
        document.getElementById("phrase").innerText = "Enter a phrase"
        document.getElementById("phrase").style.color = "red"
    }

    let letter = document.getElementById("inputletter").value
    if (letter == "" || letter == null){
        document.getElementById("letter").innerText = "Please enter a letter"
        document.getElementById("letter").style.color = "red"
    }

    for (i=0;i < phrase.length;i++){
        if (letter.includes(phrase[i])){
            cont += 1
        }
    }

    document.getElementById("result").innerText = "You have a total of " + cont + " " + letter
    document.getElementById("result").style.color = "green"
}