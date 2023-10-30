// function ReadMore() {
//     let read_more = document.querySelector("#read_more");

//     //
//     (read_more.style.display != "block") ? read_more.style.display = "block" : read_more.style.display = "none";


// }

document, addEventListener("DOMContentLoaded", function () {
    let btn_read = document.querySelector("#btn_read");
    let read_more = document.querySelector("#read_more");
    btn_read.addEventListener('click', function(){
        if (read_more.style.display != "block") {
            read_more.style.display = "block";
            btn_read.textContent = "Read less"
        } 
        else {
    
            read_more.style.display = "none";
            btn_read.innerHTML = "Read more"
        }
    })
    
})