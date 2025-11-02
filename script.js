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