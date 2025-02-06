document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    setTimeout(() => {
        card.classList.add('visible');
    }, 500);
});

document.getElementById('yesBtn').addEventListener('click', function() {
    showConfetti();
});

document.getElementById('noBtn').addEventListener('click', function() {
    this.style.display = 'none';
});

function showConfetti() {
    const confettiWrapper = document.getElementById('confetti-wrapper');
    confettiWrapper.style.display = 'block';
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiWrapper.appendChild(confetti);
    }
}