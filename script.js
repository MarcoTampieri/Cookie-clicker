let visualScore = document.getElementById("output");
let clickButton = document.getElementById("primoBottone");
let multiply = document.getElementById("multiplier");
let autoButton = document.getElementById("autoClicker");
let bonusButton = document.getElementById("bonus");

let score = 1000;
let bonusValue = 1;

visualScore.innerText = score;

clickButton.innerText = "Click " + clickButton.value;
function normalClick() {
    score += parseInt(clickButton.value) * bonusValue;
    visualScore.innerText = score;
    clickButton.innerText = "Click " + clickButton.value;
};

let multiplyPrice = 50;
multiply.innerText = "Multiplier x" + multiply.value + "\nMultiplier price: " + multiplyPrice;
function increaseMultiplier() {
    if (score >= multiplyPrice) {
        multiply.value = parseInt(multiply.value) + 1;
        clickButton.value = multiply.value;
        score -= multiplyPrice;
        multiplyPrice += Math.round(multiplyPrice * 75 / 100);
        multiply.innerText = "Multiplier x" + multiply.value + "\nMultiplier price: " + multiplyPrice;
        visualScore.innerText = score;
        clickButton.innerText = "Click " + clickButton.value;
    } else if (score < multiplyPrice) {
        multiply.disabled = true;
    }
};

let autoPrice = 500;
autoButton.innerText = "Auto-clicker " + autoPrice;
function autoClick() {
    if (score >= autoPrice && !this.auto) {
        this.auto = setInterval(normalClick, 1000);
        score -= autoPrice;
        //   } else if (score < autoPrice) {
        //       alert("Not enough points to buy.");
        //   } else if (this.auto) {
        //       alert("Autoclicker already enabled.")
        //   }
        this.bob = setInterval(buttonCheck, 1000);
    }
}

// AUTO CLICKER ON AUTO AFTER 200 COOKIES
//function autoClick() {
//    if (score >= 200 && !this.auto) {
//        this.auto = setInterval(normalClick, 1000);
//    }
//}
//clickButton.addEventListener("click", autoClick);

bonusPrice = 5000;
bonusButton.innerText = "BONUS " + bonusPrice;
function bonusEvent() {
    if (score >= 5000) {
        score -= bonusPrice;
        let timeleft = 30;
        let downloadTimer = setInterval(function () {
            timeleft--;
            bonusValue = 2;
            bonusButton.disabled = true;
            bonusButton.innerText = "BONUS\n" + timeleft;
            if (timeleft <= 0) {
                bonusValue = 1;
                bonusButton.disabled = false;
                bonusButton.innerText = "BONUS " + bonusPrice;
            }
        }, 1000);
    } else {
        alert("Not enough points to activate.")
    }
}

function buttonCheck() {
    if (score < multiplyPrice) {
        multiply.disabled = true;
    } else {
        multiply.disabled = false;
    };

    if (score < autoPrice) {
        autoButton.disabled = true;
    } else {
        autoButton.disabled = false;
    };

    if (score < bonusPrice) {
        bonusButton.disabled = true;
    } else {
        bonusButton.disabled = false;
    }
};

clickButton.addEventListener("click", normalClick);
clickButton.addEventListener("click", buttonCheck);
multiply.addEventListener("click", increaseMultiplier);
autoButton.addEventListener("click", autoClick);
bonusButton.addEventListener("click", bonusEvent);