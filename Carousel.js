document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const arrows = document.querySelectorAll(".wrapper i");

    const firstTile = carousel.querySelector(".tile");
    const firstTileWidth = firstTile.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;

        const newScrollLeft = startScrollLeft - (e.pageX - startX);

        if (newScrollLeft <= 0 || newScrollLeft >=
            carousel.scrollWidth - carousel.offsetWidth) {

            isDragging = false;
            return;
        }

        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    arrows.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ?
                -firstTileWidth : firstTileWidth;
        });
    });
});
