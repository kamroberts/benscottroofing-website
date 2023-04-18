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
    var subject = document.getElementById('subject').value;
    var phone = 'Phone: ' + document.getElementById('phone').value;
    var email = 'Email: ' + document.getElementById('email').value;
    var message = 'Message: ' + document.getElementById('message').value;

    window.location = "mailto:ben__scott1@hotmail.ca?subject=" + subject + '&body=' + body + '%0D%0A' + email + '%0D%0A' + phone + '%0D%0A' + '%0D%0A' + message;
}

document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById('menu-toggle');
	const navMenu = document.querySelector('header nav ul');

	menuToggle.addEventListener('click', function () {
		navMenu.classList.toggle('header-nav');
	});
});

// Quote form
function initAutocomplete() {
    var autocomplete;
    var addressInput = document.querySelector('#address');
    autocomplete = new google.maps.places.Autocomplete(addressInput);

    autocomplete.addListener('place_changed', fillInAddress);
};

function fillInAddress() {
    const place = autocomplete.getPlace();
};

function sendQuote() {
    var subject = document.getElementById('subject').value;
    var body = 'Name: ' + document.getElementById('name').value;
    var address = 'Address: ' + details.value;
    var phone = 'Phone: ' + document.getElementById('phone').value;
    var email = 'Email: ' + document.getElementById('email').value;

    window.location = "mailto:ben__scott1@hotmail.ca?subject=" + subject + '&body=' + body + '%0D%0A' + email + '%0D%0A' + phone + '%0D%0A' + '%0D%0A' + address;
}










