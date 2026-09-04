function donate() {
    document.getElementById('donateModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('donateModal').classList.remove('active');
    document.body.style.overflow = '';
}

function submitDonation(e) {
    e.preventDefault();
    closeModal();
    e.target.reset();
    showToast('Thank you for your donation! It means a lot to us. ❤️');
}

function toggleFaq(btn) {
    const item = btn.parentElement;
    const wasActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    if (!wasActive) {
        item.classList.add('active');
    }
}

function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
}

document.getElementById('donateModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Particles
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 8 + 6) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = p.style.height = (Math.random() * 3 + 2) + 'px';
        container.appendChild(p);
    }
}

createParticles();
