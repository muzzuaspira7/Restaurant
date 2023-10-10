// Nav Starts
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})
const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        nav.style.maxHeight = nav.scrollHeight + "px"
    } else {
        nav.removeAttribute("style")
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observer(el));
// Nav End



// // Reservation Starts--
function validateForm() {
    let fullName = document.forms["reservationForm"]["fullName"].value;
    let email = document.forms["reservationForm"]["email"].value;
    let date = document.forms["reservationForm"]["date"].value;
    let time = document.forms["reservationForm"]["time"].value;
    let number =document.forms["reservationForm"]["members"].value

    if (fullName === "") {
        alert("Please enter your full name");
        return false;
    }

    if (email === "") {
        alert("Please enter your email");
        return false;
    } else {
        // Basic email validation
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailRegex)) {
            alert("Please enter a valid email address");
            return false;
        }
    }

    if (date === "") {
        alert("Please select a date");
        return false;
    }

    if (time === "") {
        alert("Please select a time");
        return false;
    }
        if (number === "") {
        alert("Please select number of people");
        return false;
    }

    // If all validations pass, show a confirmation message
    let confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = "Your reservation has been done! Thanks for booking here.";
    confirmationMessage.style.color = "green";

    setTimeout(function() {
        document.forms["reservationForm"].reset();
        confirmationMessage.textContent = "";
    }, 5000);
    return true;
}





// Reservation End

// Gallery 
// Perfect code
// Get Elements from DOM

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

// Function to set the active button
function setActiveBtn(e) {
    // Remove active class from all buttons
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    // Add Active class to clicked button
    e.target.classList.add('btn-clicked');
}

// Function to filter images
function filterImg(e) {
    // Run the setActiveBtn function
    setActiveBtn(e);

    // Get data from the clicked button
    const btnType = parseInt(e.target.getAttribute('data-btn'));

    // Loop through all images
    imgs.forEach(img => {
        const imgType = parseInt(img.getAttribute('data-img'));

        if (btnType === 0 || imgType === btnType) {
            // Show the image
            img.classList.remove('img-shrink');
            img.classList.add('img-expand');
        } else {
            // Hide the image
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

// Adding click event to all buttons
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        filterImg(e);
    });
});

// Initialize by triggering a click event on the "All" button
btns[0].click();




