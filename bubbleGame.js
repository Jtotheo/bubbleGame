
// this makes the sound
const audio = new Audio('Audio/mixkit-long-pop-2358.wav'); 
// some "variabled" selectors
const gamefield = document.querySelector('div.bubbleholder')
const clickcounter = document.querySelector('h2')
let bubbles = document.querySelectorAll('p');
// counter for successfully popped bubbles.
let clickcount = 0;

// the eventlistener 1) removes the target of the click 
// (this is why the game breaks when the gamefield is clicked)
// 2) creates a new <p>-tag with a randomized class name:
// bubbles0-bubbles9.

    gamefield.addEventListener('click', e => {
        e.target = bubbles 
        e.target.remove();
        audio.play();
        let randomizeBubbles = (Math.floor(Math.random() * 10));
        gamefield.innerHTML += `<p class = bubbles${randomizeBubbles}></p>`;
        clickcount++;
        console.log(clickcount);
        clickcounter.innerHTML = `You got ${clickcount} successfully popped bubbles!`;
        }
        
    )

    
                
        
