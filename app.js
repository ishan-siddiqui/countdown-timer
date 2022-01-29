const countdown = () => {
    const countDate = new Date('Jan 20, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // How does time work?
    const second = 1000;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    // Calculate the amount of time left
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor(((gap % day) % hour) / minute);
    let textSecond = Math.floor((((gap % day) % hour) % minute) / second);

    if (textSecond==0) {
        textMinute-=1;
    }
    if (textMinute==0) {
        textHour-=1;
    }
    if (textHour==0) {
        textDay-=1;
    }
    // Printing it out on our HTML-
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

};

countdown();

// We need to run countdown() function continuously
setInterval(countdown, 1000);

