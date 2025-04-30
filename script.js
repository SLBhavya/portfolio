/* for the menu bar*/
function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");


}
/* for contact section*/
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Message sent successfully!");
    return true;
}
const hobbyCards = document.querySelectorAll('.hobby-card');

        hobbyCards.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.1)';
                card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            });

            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
        });
