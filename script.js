document.addEventListener('DOMContentLoaded', function() {
    const coinsContainer = document.getElementById('coins-container');
    
    function createCoin() {
        const coin = document.createElement('div');
        coin.classList.add('coin');
        
        const left = Math.random() * window.innerWidth;
        coin.style.left = `${left}px`;
        
        const duration = 5 + Math.random() * 10;
        coin.style.animationDuration = `${duration}s`;
        
        const rotationDirection = Math.random() > 0.5 ? 1 : -1;
        const rotations = 1 + Math.floor(Math.random() * 3);
        const rotateDeg = 360 * rotations * rotationDirection;
        
        coin.style.animation = `fall ${duration}s linear infinite`;
        coin.style.setProperty('--rotate-end', `${rotateDeg}deg`);
        
        coinsContainer.appendChild(coin);
        
        setTimeout(() => {
            coin.remove();
        }, duration * 1000);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(calc(100vh + 100px)) rotate(var(--rotate-end, 360deg));
            }
        }
    `;
    document.head.appendChild(style);
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createCoin();
        }, Math.random() * 3000);
    }
    
    setInterval(createCoin, 300);
});