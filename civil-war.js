const timelineItems = document.querySelectorAll(".timeline-item");
const timelineSummary = document.querySelector(".timeline-summary");

window.addEventListener("scroll", () => {
const windowHeight = window.innerHeight;
const summaryTop = timelineSummary.getBoundingClientRect().top;

timelineItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop > windowHeight * 0.2 && itemTop < summaryTop - windowHeight * 0.2) {
    item.style.opacity = 0;
    } else {
    item.style.opacity = 1;
    }
});
});
