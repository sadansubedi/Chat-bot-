const forms = document.getElementById('input');
//console.log(forms);
const text = document.getElementById('text');
const messages= document.getElementById('chat-messages');

function firstmessage(){
    let firstMessage ="Hii !! How can i help you ??";
    messages.innerHTML = `<span class="bot-messages"> ${firstMessage}</span>`;
}
firstmessage();

//helped by chatgpt
forms.addEventListener("submit", async (e) => {
    e.preventDefault();
    const textsvalue = text.value;
    text.value = "";
    const userMessageContainer = document.createElement("div");

    userMessageContainer.setAttribute("id", "user-message-"+ Date.now());

    userMessageContainer.classList.add("user-messages");

    userMessageContainer.innerHTML = `<span>${textsvalue}</span>`;

    messages.appendChild(userMessageContainer);

    let botresponse = await getBotResponse(textsvalue);
    
    const botMessageContainer = document.createElement("div");
    botMessageContainer.classList.add("bot-messages");
    botMessageContainer.innerHTML = `<span>${botresponse}</span>`;
    messages.appendChild(botMessageContainer);
  });
  
/*Here, we're creating a new div element for the user's message using document.createElement("div"). We're setting its ID to a unique value by appending the current timestamp using Date.now(). We're also adding the user-messages class to the container and setting its innerHTML to the user's message.

After that, we're appending the user's message container to the messages element using messages.appendChild(userMessageContainer).

Finally, we're creating a new div element for the bot's message, adding the bot-messages class to it, setting its innerHTML to the bot's response, and appending it to the messages element as well.

With this modification, each message (user or bot) will have its own container with a unique ID, which will prevent the messages from being appended to the previous ones */


/*LOGICAL ERROR 
forms.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const textsvalue = text.value;
   // console.log(textsvalue);
   text.value ='';
    messages.innerHTML += `<div class="user-messages">
    <span>${textsvalue}</span></div>`;
    let botresponse= await getBotResponse(textsvalue);
    reply.innerHTML += `<span class="bot-messages"> ${botresponse}</span>`;
})*/