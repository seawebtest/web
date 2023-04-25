function navBar() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const cards = $('.flip-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});


function showPopup() {
  document.getElementById("popup").style.display = "block";
}
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}