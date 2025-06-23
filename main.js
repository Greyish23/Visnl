// ====== Hamburger Menu Toggle ======

 // Hamburger toggle 
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideNav');

hamburger.addEventListener('click', () => {
if (sideMenu.style.right === '0px') {
  sideMenu.style.right = '-250px';
} else {
  sideMenu.style.right = '0px';
}
});

function goTo(page) {
  window.location.href = window.location.origin + '/' + page;
}

// ====== Contact Form Buttons ======
const sendBtn = document.querySelector("#sendMessage");
const bookBtn = document.querySelector("#bookCall");

sendBtn.addEventListener("click", () => {
  alert("Message Sent! ✅");
  // In future: validate + send to backend
});

bookBtn.addEventListener("click", () => {
  alert("Redirecting to calendar... 📅");
  // In future: integrate booking link
});