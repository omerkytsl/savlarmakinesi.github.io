document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const spinButton = document.getElementById('spin-button');
    const rangeInput = document.getElementById('range');
    const errorMessage = document.getElementById('error-message');
    const reel1 = document.getElementById('reel1').querySelector('.reel-inner');
    const reel2 = document.getElementById('reel2').querySelector('.reel-inner');
    const reel3 = document.getElementById('reel3').querySelector('.reel-inner');
    
    // Audio elements (optional)
    const spinSound = new Audio();
    spinSound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-slot-machine-spin-1014.mp3';
    spinSound.volume = 0.5;
    
    const winSound = new Audio();
    winSound.src = 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3';
    winSound.volume = 0.5;
    
    // Variables
    let isSpinning = false;
    
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const savedRange = urlParams.get('range');
    const autoSpin = urlParams.get('autospin') === 'true';
    
    // Set range from URL if available
    if (savedRange) {
        rangeInput.value = savedRange;
    }
    
    // Auto spin if requested
    if (autoSpin) {
        setTimeout(() => {
            startSpin();
        }, 500);
    }
    
    // Event Listeners
    spinButton.addEventListener('click', startSpin);
    
    // Functions
    function startSpin() {
        if (isSpinning) return;
        
        // Validate input
        const range = validateRange(rangeInput.value);
        if (!range) {
            errorMessage.textContent = 'Geçersiz aralık! Lütfen 1-999 arasında bir aralık girin (örn: 1-283)';
            return;
        }
        
        errorMessage.textContent = '';
        isSpinning = true;
        
        // Play spin sound
        try {
            spinSound.currentTime = 0;
            spinSound.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {
            console.log('Audio error:', e);
        }
        
        // Start spinning animation
        document.querySelectorAll('.reel').forEach(reel => {
            reel.classList.add('spinning');
        });
        
        // Generate random number within range
        const min = range.min;
        const max = range.max;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Convert to padded string (e.g., 1 -> "001")
        const paddedNumber = randomNumber.toString().padStart(3, '0');
        const digit1 = paddedNumber[0];
        const digit2 = paddedNumber[1];
        const digit3 = paddedNumber[2];
        
        // Set spin durations for each reel
        const spinDuration1 = 1000 + Math.random() * 500;
        const spinDuration2 = 1500 + Math.random() * 500;
        const spinDuration3 = 2000 + Math.random() * 500;
        
        // Stop reels one by one
        setTimeout(() => {
            stopReel(reel1, digit1);
            
            setTimeout(() => {
                stopReel(reel2, digit2);
                
                setTimeout(() => {
                    stopReel(reel3, digit3);
                    
                    // All reels stopped
                    setTimeout(() => {
                        isSpinning = false;
                        
                        // Play win sound
                        try {
                            winSound.currentTime = 0;
                            winSound.play().catch(e => console.log('Audio play failed:', e));
                        } catch (e) {
                            console.log('Audio error:', e);
                        }
                        
                        // Redirect to proverb page
                        setTimeout(() => {
                            window.location.href = `proverb.html?id=${randomNumber}&range=${rangeInput.value}`;
                        }, 1000);
                    }, 500);
                }, spinDuration3 - spinDuration2);
            }, spinDuration2 - spinDuration1);
        }, spinDuration1);
    }
    
    function stopReel(reel, digit) {
        reel.parentElement.classList.remove('spinning');
        reel.querySelector('.number').textContent = digit;
        
        // Add a quick shake effect
        reel.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            reel.style.transform = 'translateY(0)';
        }, 50);
    }
    
    function validateRange(rangeStr) {
        // Check format: start-end
        const match = rangeStr.match(/^(\d+)-(\d+)$/);
        if (!match) return null;
        
        const min = parseInt(match[1]);
        const max = parseInt(match[2]);
        
        // Validate range values
        if (isNaN(min) || isNaN(max) || min < 1 || max > 999 || min > max) {
            return null;
        }
        
        return { min, max };
    }
});