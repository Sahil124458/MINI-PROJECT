function openModal(id){document.getElementById(id).style.display="flex";}
  function closeModal(id){document.getElementById(id).style.display="none";}
  window.onclick=function(e){
    document.querySelectorAll('.modal').forEach(m=>{
      if(e.target==m)m.style.display='none';
    });
  }

  // Google Sheet API integration placeholder
  const form=document.getElementById('contact-form');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const scriptURL="YOUR_GOOGLE_SCRIPT_WEBAPP_URL";
    fetch(scriptURL,{method:"POST",body:JSON.stringify(data)})
    .then(()=>{alert("Message sent successfully!");form.reset();})
    .catch(()=>alert("Error sending message!"));
  });
const answers = {
  "What is this website?": "This is our Team Portfolio website.",
  "Who created it?": "Created by Sahil Khanna, Sarthak Bhardwaj, and Samarth Srivastav.",
  "Which technologies used?": "HTML, CSS, JavaScript & Google Sheets API.",
  "Where is it hosted?": "Hosted using GitHub Pages.",
  "Purpose of website?": "To showcase our work, team members, and skills.",
  "How to contact?": "Use the Contact Form — connected directly with Google Sheets.",
  "Tools used?": "VS Code, GitHub, Google Sheets Script.",
  "Main goal?": "To learn, build, and present a real-world project."
};

/* OPEN BOT */
document.getElementById("floatingBotBtn").onclick = () => {
  document.getElementById("botPanel").style.display = "flex";
};

/* CLOSE BOT */
document.getElementById("closeBot").onclick = () => {
  document.getElementById("botPanel").style.display = "none";
};

/* HANDLE QUESTION CLICK */
document.querySelectorAll(".question").forEach(q => {
  q.onclick = () => {
    const chat = document.getElementById("chatArea");

    chat.innerHTML += `
      <div class="msg-user">${q.innerText}</div>
      <div class="msg-bot">${answers[q.innerText]}</div>
    `;

    chat.scrollTop = chat.scrollHeight;
  };
});