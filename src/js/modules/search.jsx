document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("catalogInput");
    const cards = document.querySelectorAll(".col-xxl-3");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();

        cards.forEach(function (card) {
            const cardname = card.querySelector('.catalog__name').textContent.trim().toLowerCase();
            if (cardname.includes(searchTerm)) {
                card.style.display = "block";

                // Удаляем атрибут data-aos="fade-up", если он присутствует
                if (card.hasAttribute("data-aos")) {
                    card.removeAttribute("data-aos");
                }
                
            } else {
                card.style.display = "none";
            }
        });
    });
});
