


function dissapear(){
    let no = document.querySelector(".no")
    no.style.display = 'none'

}

function appear(){
    let no = document.querySelector(".no")
    no.style.display = 'block'

}

let yes = document.querySelector(".yes")
yes.addEventListener("click",()=>{
    let text = document.querySelector(".sal")
    text.innerHTML = 'ვაშაააააააა'

    let sec_img = document.querySelector(".sal_img")
    sec_img.src = './423221125_299776886449150_8150577354702939986_n.jpg'
})