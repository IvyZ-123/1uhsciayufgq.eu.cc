// Function that runs when the website first loads
document.addEventListener('DOMContentLoaded', () => {
    // We start on the first question screen.
});

// 1. Handle the Initial Question
function handleQuestion(answer) {
    const screen1 = document.getElementById('screen-question');
    const screenResponse = document.getElementById('screen-response');
    const responseMessage = document.getElementById('response-message');
    
    // Hide question screen
    screen1.style.display = 'none';
    // Show response/login screen
    screenResponse.style.display = 'flex';

    // Generate a random-looking password (for visual effect)
    const randomKey = 'IVY-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    document.getElementById('generated-key').innerText = randomKey;

    // Change the message based on which "yes" they clicked
    if (answer === 'YES') {
        responseMessage.innerHTML = "<h2>Excellent. You passed.</h2><p>Here are your access keys. Unlock the site below.</p>";
    } else if (answer === 'yes') {
        responseMessage.innerHTML = "<h2>Well... not confident.</h2><p>You will get to know her better with these keys. Try unlocking below.</p>";
    }
}

// 2. Handle the "Login" (The Unlock Simulation)
function handleLogin() {
    // In a real app, we would verify the password here.
    // For now, we simulate success regardless of what they typed.

    const screenResponse = document.getElementById('screen-response');
    const screenUnboxing = document.getElementById('screen-unboxing');
    const screenMain = document.getElementById('screen-main-content');

    // Hide response screen
    screenResponse.style.display = 'none';
    // Show unboxing animation screen
    screenUnboxing.style.display = 'flex';

    // Start unboxing animation (CSS)
    const box = document.querySelector('.box-visual');
    box.classList.add('open');

    // Wait 3 seconds (duration of the animation) then show the main page
    setTimeout(() => {
        screenUnboxing.style.display = 'none';
        screenMain.style.display = 'block';
        // Optional: Trigger a fade-in of the main content
        screenMain.style.opacity = 1;
    }, 3000); 
}
