// const btn = document.getElementById('btn')

// btn.addEventListener('click', load)

// function load(){
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET','ajax.text')
//     xhr.onload = function(){
//         // console.log(this.response)
//         console.log(this.response);

//     }
    
//     xhr.send();
// }


// document.getElementById('submitForm').addEventListener('submit', loadEmail)
// function loadEmail(e){
//     e.preventDefult();
//     var email = docmuent.getElementById('email').value
//     const xhr = new XMLHttpRequest()
//     xhr.open ('GET' , 'sub.php?email='+email)
//     xhr.onload = function(){
//         console.log(this.response)
//         console.log('hi')

//     }
//     xhr.send();

// }

document.getElementById('submitform').addEventListener('submit',storeSubEmails);
functiom storeSubEmails(e){
    e.preventDefult();

    const email = document.getElementById('email').value;

    var params = "email="+email;

    const xhr = new XMLHttpRequest()

    xhr.open('POST','sub.php')

    xhr.setRequestHeader('Content-type', 'aplication/x-www-form-urlencoded')

    xhr.onload = function(){
        console.log(this.response)
    }
    xhr.send(params)
}