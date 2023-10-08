const options = {
    strings: [
        '[Square](Round){Curly}',
        'src',
        'Seriously Really Cool',
        '[](){} = λ',
        'Secretly Ruling Cyberspace',
		'SouRCe',
        'Simply Really Clever',
        'Surreal Reality, Captured',
        'Shaping Radical Changes',
        'Selectively Refined Curiosity',
    ],
    typeSpeed: 50,      // typing speed in milliseconds
    backSpeed: 25,      // backspacing speed in milliseconds
    backDelay: 1000,    // delay before starting the backspacing
    loop: true          // loop through the strings
};

const typed = new Typed('#terminalOutput', options);