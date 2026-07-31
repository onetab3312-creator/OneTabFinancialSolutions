// ==========================================
// ONE TAB FINANCIAL SOLUTIONS
// Version 1.0
// ==========================================

window.addEventListener("load", () => {

    const splash = document.getElementById("splash-screen");
    const main = document.getElementById("main-content");

    // Zoom effect on splash image
    const splashImage = splash.querySelector("img");

        splashImage.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(1.08)" }
            ],
        {
            duration: 2000,
            fill: "forwards",
            easing: "ease-in-out"
        });

    // Wait 2 seconds
    setTimeout(() => {

        splash.style.transition = "opacity 0.8s ease";
        splash.style.opacity = "0";

        setTimeout(() => {

            splash.style.display = "none";

            main.style.display = "block";

            main.animate(
                [
                    { opacity: 0, transform: "translateY(20px)" },
                    { opacity: 1, transform: "translateY(0px)" }
                ],
                {
                    duration: 900,
                    fill: "forwards",
                    easing: "ease"
                }
            );

        }, 800);

    }, 4000);

});