fetch("/uiComponents/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        const currentPage = window.location.pathname.split("/").pop();

        document.querySelectorAll(".sidebar a")
            .forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                }
            });
        

        document.querySelectorAll(".dropdown-button")
            .forEach(button => {
                button.addEventListener("click", function () {
                    const dropdownMenu = button.nextElementSibling;
                    const dropdownArrow = button.querySelector(".dropdown-arrow");

                    if (dropdownMenu.style.display === "flex") {
                        dropdownMenu.style.display = "none";
                        dropdownArrow.textContent = "▼";
                    } else {
                        dropdownMenu.style.display = "flex";
                        dropdownArrow.textContent = "◀";
                    }
                });
            });
    });