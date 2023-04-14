document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', openModal);
    });
});

function openModal(event) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <img src="${event.currentTarget.querySelector('img').src}" alt="Larger image">
    </div>
    `;
    
    document.querySelector('body').appendChild(modal);

    modal.querySelector('.close').addEventListener('click', () => {
    modal.remove();
    });

    window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.remove();
    }
    });
}
