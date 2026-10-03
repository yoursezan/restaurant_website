// Display Current Date & Time
function updateDateTime() {
    const now = new Date();
    const dateTimeStr = now.toLocaleString();
    const element = document.getElementById('current-date-time');
    if (element) {
        element.innerText = dateTimeStr;
    }
}

// jQuery Dish Image Zoom Trigger
$(document).ready(function () {
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Dish Image Zoom functionality
    $('#zoom-img').on('mouseenter', function () {
        $(this).parent('.zoom-container').addClass('zoomed');
    }).on('mouseleave', function () {
        $(this).parent('.zoom-container').removeClass('zoomed');
    });
});

// Login Form Confirmation Popup
function handleLoginSubmit(event) {
    event.preventDefault();
    alert("Login Successful! Welcome back.");
    return true;
}

// Reservation Form Confirmation Popup
function handleReservationSubmit(event) {
    event.preventDefault();
    alert("Reservation Request Submitted Successfully! We will confirm shortly.");
    return true;
}