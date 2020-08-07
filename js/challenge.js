const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const likes = document.querySelector(".likes")
const counterNumLike = {}
const likesArray = []
let countGo = true

const commentsDiv = document.getElementById("list")
const form = document.getElementById("comment-form")

document.addEventListener("DOMContentLoaded", function(){
    const ul = document.createElement('ul')
    commentsDiv.appendChild(ul)

    setInterval(function(){if (countGo){counter.innerText = parseInt(counter.textContent) + 1}}, 1000)
    pause.addEventListener('click', function(){
        if (countGo === true ){
            countGo = false
            pause.innerText = 'resume'
        } else{
        countGo = true
        pause.innerText = 'pause'
        }
    })

    form.addEventListener("click", function(e){
        e.preventDefault()
        if(form.children[0].value){
        const li = document.createElement('li')
        li.innerText = form.children[0].value
        commentsDiv.firstChild.appendChild(li)
        form.children[0].value = ''
        }
    })

    minus.addEventListener("click", function(e){
        counter.innerText = parseInt(counter.textContent) - 1
    })

    plus.addEventListener("click", function(){
        counter.innerText = parseInt(counter.textContent) + 1
    })

    heart.addEventListener("click", function(){
        const likesHTMLCollection = likes.children;
        for(let i = 0; i < likesHTMLCollection.length; i++){
            likesArray.push(likesHTMLCollection[i].innerText)
        }
        const counterValue = counter.innerText;
        if (counterValue in counterNumLike){
            let li = document.getElementById(counterValue)
            counterNumLike[counterValue] = parseInt(counterNumLike[counterValue]) + 1
            li.innerText = `${counterValue} has ${counterNumLike[counterValue]} likes`
        }else {
            const li = document.createElement("li")
            li.innerHTML = `${counterValue} has 1 like`
            li.setAttribute('id', counterValue)
            likes.appendChild(li)
            counterNumLike[counterValue] = 1
        }
        console.log(counterNumLike)
    })
})
