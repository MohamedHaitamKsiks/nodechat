

let app = document.getElementById("app");
let sendButton = document.getElementById("send");
sendButton.addEventListener('click', send);

let messageText = document.getElementById("message");
let listMessages = document.getElementById("listMessages");

let lastMessage = '';

const HTTP = new XMLHttpRequest();
const SEND_HTTP = new XMLHttpRequest();

//alert("das")
function refresh (){
    const url = '/messages';
    HTTP.open("GET", url);
    HTTP.send();
    
    HTTP.onreadystatechange = (err)=>{
        if (HTTP.status == 200){
            let messages = JSON.parse(HTTP.response);
            listMessages.innerHTML = "";
            for (let i = 0; i < messages.length; i+=1){
                listMessages.innerHTML += "<li>" + messages[i] + '</li>';
            }
            setTimeout('refresh()', 100)
        }
    };

    
    
}
refresh()



function send() {
    //alert("dsad");
    const url = '/send?message=' + messageText.value;
    SEND_HTTP.open("GET", url);
    SEND_HTTP.send();
    messageText.value = ""

}