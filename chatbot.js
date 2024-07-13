function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const inputLower = userInput.toLowerCase();
    // const chatDisplay = document.getElementById("quest1");
    // const chatDisplay1 = document.getElementById("quest2");



    // //display user message 
    if (userInput.trim() !== "") {
        const taskList = document.getElementById("chatbot-message");
        const listItem = document.createElement("li");
        listItem.className = "userList";
        // chatDisplay.innerHTML=userInput;
        listItem.textContent = userInput;
        taskList.appendChild(listItem);
        userInput.value = "";
    }

    //display chatBot message
    if (inputLower.includes("hii") || inputLower.includes("hello") || inputLower.includes("hello")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong> How can I assist you today regarding online courses?</p>";;
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("who are u")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>I'm a chatbot.I try to answer questions.Sometimes I get them right,but sometimes I need additonal help.How can I help u today?</p>";
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("i have a question") || inputLower.includes("can i ask some questions")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>Please select one of the two options below<hr>Free courses<hr>Paid courses</p>";
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("free courses") || inputLower.includes("courses for free")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>The Free courses we offer are :<br>C,C++ programming<br>Web development<br>Database Management</p>";
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("paid courses") || inputLower.includes("courses that are paid")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>The Paid courses we offer are :<br>Full Stack<br>Cyber Security<br>Data Science</p>";
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("what about your refund policy") || inputLower.includes("what about refund policy")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>Sorry i don't have an answer for this.please try again with just one keyword to see if i can find something</p>";
        taskList.appendChild(listItem);
    }
    else if (inputLower.includes("refund policy") || inputLower.includes("is there any refund policy")) {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>A full refund is available for requests made in the first 24 hours of the purchase.Please email your order number to ------.com  and we wwill provide u the full refund.</p>";
        taskList.appendChild(listItem);
    }
    else {
        taskList = document.getElementById("chatbot-message");
        listItem = document.createElement("li");
        listItem.innerHTML += "<p><strong>chatbot:</strong>My apologies.I didn't understand the question. </p>";
        taskList.appendChild(listItem);
    }
    //clear user's input
    document.getElementById("user-input").value = "";
}
