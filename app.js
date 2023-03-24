//animate on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// email form
function sendMail() {
    var body = 'Name: ' + document.getElementById('name').value;
    var subject = 'Subject: ' + document.getElementById('subject').value;
    var phone = 'Phone: ' + document.getElementById('phone').value;
    var email = 'Email: ' + document.getElementById('email').value;
    var message = 'Message: ' + document.getElementById('message').value;

    window.location = "mailto:ben__scott1@hotmail.ca?subject=" + subject + '&body=' + body + '%0D%0A' + email + '%0D%0A' + phone + '%0D%0A' + message;
}

















