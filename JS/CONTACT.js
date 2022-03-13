const formSubmit = document.getElementById("form");
formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    Swal.fire("Success!", "Your message was sent!", "success");
});