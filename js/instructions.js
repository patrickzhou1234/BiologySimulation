function showInstructions() {
    Swal.fire({
        background: "black",
        color: "white",
        title: "Instructions",
        imageUrl: "images/instructions.png",
        imageWidth: window.innerWidth * 0.4,
        imageHeight: window.innerWidth * 0.920775 * 0.4,
        imageAlt: "Custom image",
        width: window.innerWidth * 0.5,
        confirmButtonText: "Got it!",
    });
}

setTimeout(() => {
    if (localStorage.getItem("instructions") === "false") return;
    showInstructions();
    localStorage.setItem("instructions", "false");
}, 1000);