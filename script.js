function toggleNavClass() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('nav-active');
    
}

function hideNav() {
    var nav = document.querySelector('.nav');
    nav.style.display = 'none';
}

function showNav() {
    var nav = document.querySelector('.nav');
    nav.style.display = 'flex'; // Set the appropriate display property (e.g., flex, block, etc.)
}

function closeModal(modalType) {
    const modal = document.querySelector(`.modal-${modalType}`);
    modal.classList.remove('active');
}