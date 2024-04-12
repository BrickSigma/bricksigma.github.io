// Change icons in the navigation bar
function ChangeImage(id, image) {
    document.getElementById(id).src = image;
}

// Animation controls
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const containers = document.querySelectorAll(".hidden");
containers.forEach((el) => observer.observe(el));

// Send email function
function SendEmail() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    console.log(name);
    console.log(message);
    window.location.href = "mailto:jchaudhry05@gmail.com?subject="+message+"&body=Kind regards, "+name;
}