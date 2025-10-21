let number = document.getElementById("number");
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval();
    };
    counter += 1; 
    number.innerHTML = counter + "%";
}, 20);
