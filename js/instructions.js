setTimeout(() => {
    if (localStorage.getItem("instructions") === "false") return;
    Swal.fire({
        background: "black",
        color: "white",
        title: "Instructions",
        imageUrl: "images/instructions.png",
        imageWidth: window.innerWidth * 0.6,
        imageHeight: window.innerWidth * 0.814738 * 0.6,
        imageAlt: "Custom image",
        width: window.innerWidth * 0.8,
        confirmButtonText: "Got it!",
    });
    localStorage.setItem("instructions", "false");
}, 1000);
