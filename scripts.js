document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('message').textContent = "Yay! I'm so happy! 💖";
    document.getElementById('yes-button').disabled = true;
    document.getElementById('no-button').disabled = true;
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('no-button').style.display = 'none';
});