let score = 198;

let visualScore = document.getElementById("output");

let clickButton = document.getElementById("primoBottone");

let multiply = document.getElementById("multiplier");
let multiplyPrice = 50;
multiply.innerText = "Multiplier x" + multiply.value + "\nMultiplier price: " + multiplyPrice;

function normalClick() {
    score += parseInt(clickButton.value);
    visualScore.innerText = score;
    clickButton.innerText = "Click " + clickButton.value;
};

function increaseMultiplier() {
    if (score >= multiplyPrice) {
        multiply.value = parseInt(multiply.value) + 1;
        clickButton.value = multiply.value;
        score -= multiplyPrice;
        multiplyPrice += Math.round(multiplyPrice * 75 / 100);
        multiply.innerText = "Multiplier x" + multiply.value + "\nMultiplier price: " + multiplyPrice;
        visualScore.innerText = score;
        clickButton.innerText = "Click " + clickButton.value;
    } else {
        alert("Not enough points to buy multiplier");
    }
};

function autoClick() {
    if (score >= 200 && !this.auto) {
        this.auto = setInterval(normalClick, 1000);

    }
}

clickButton.addEventListener("click", normalClick);
clickButton.addEventListener("click", autoClick);
multiply.addEventListener("click", increaseMultiplier);
