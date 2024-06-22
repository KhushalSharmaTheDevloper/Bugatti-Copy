// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a timeline
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Animate the Bugatti text
    tl.fromTo("#bugatti-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    // Animate the tagline text
    tl.fromTo("#tagline-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

    // Add a color change effect to the Bugatti text
    tl.to("#bugatti-text", { duration: 1, color: "#00FFFF", repeat: 1, yoyo: true, ease: "power1.inOut" }, "-=0.5");

    // Add a slight scale effect to the Bugatti text for a cool look
    tl.to("#bugatti-text", { duration: 1.5, scale: 1.1, repeat: 1, yoyo: true, ease: "power1.inOut" }, "-=1");
});
