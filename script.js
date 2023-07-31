const sliderValue = document.querySelector(".sliderValue");
const slider = document.getElementById("slider");
const rangeInputs = document.querySelectorAll('input[type="range"]');
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");

sliderValue.innerHTML = slider.value;
bar1.classList.add("medium");
bar2.classList.add("medium");
bar3.classList.add("medium");

slider.oninput = function () {
  sliderValue.innerHTML = this.value;

  const levelText = document.querySelector("#levelText");

  if (slider.value < 7) {
    levelText.innerHTML = "too weak!";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.remove("weak");
    bar1.classList.add("tooweak");
  }
  if (slider.value < 9 && slider.value >= 7) {
    levelText.innerHTML = "weak!";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("weak");
    bar1.classList.add("Weak");
  }
  if (slider.value < 11 && slider.value >= 9) {
    levelText.innerHTML = "medium";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("medium");
    bar2.classList.add("medium");
    bar3.classList.add("medium");
  }
  if (slider.value > 11) {
    levelText.innerHTML = "strong";
    bar1.classList.remove("tooweak", "weak", "medium", "strong");
    bar2.classList.remove("tooweak", "weak", "medium", "strong");
    bar3.classList.remove("tooweak", "weak", "medium", "strong");
    bar4.classList.remove("tooweak", "weak", "medium", "strong");
    bar1.classList.add("strong");
    bar2.classList.add("strong");
    bar3.classList.add("strong");
    bar4.classList.add("strong");
  }
};



function handleInputChange(e) {
  let target = e.target;

  const min = target.min;
  const max = target.max;
  const val = target.value;

  // target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 50%";
}



rangeInputs.forEach((input) => {
  input.addEventListener("input", handleInputChange);
});

const copyIcon = document.getElementById("copyIcon");
const copyMsg = document.getElementById("copyMsg");

copyIcon.addEventListener("click", copyField);

function copyField() {
  var copyTxt = document.getElementById("fieldText").innerHTML;

  navigator.clipboard.writeText(copyTxt);
  copyMsg.style.display = "initial";
}

// Password Generate
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generate);
const fieldText = document.getElementById("fieldText");

function generate(lenght) {
  const uppercase = document.getElementById("UpCase");
  const lowercase = document.getElementById("LoCase");
  const numbers = document.getElementById("Num");
  const symbols = document.getElementById("Sym");
  const alert = document.getElementById("alert");

  if(uppercase){
    console.log("Hey, i m working");
  }
  if (
    uppercase.checked === false &&
    lowercase.checked === false &&
    numbers.checked === false &&
    symbols.checked === false
  ) {
    alert.style.display = "block";
  } else {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "@#&(§!-)^$*%+=/?";

    let chars = "";
    var length = slider.value;

    if (uppercase.checked === true) {
      chars += uppercaseChars;
    }
    if (lowercase.checked === true) {
      chars += lowercaseChars;
    }
    if (numbers.checked === true) {
      chars += numbersChars;
    }
    if (symbols.checked === true) {
      chars += symbolsChars;
    }

    let password = "";
    let passwordLength = length;
    const array = new Uint32Array(length); // Create 'unsigned' array
    window.crypto.getRandomValues(array);
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i] % chars.length]; // % operator returns remainder of division
    }

    fieldText.innerHTML = password;
    fieldText.style.color = "var(--clr-almost-white)";
    copyMsg.style.display = "none";
    alert.style.display = "none";

    return password;
  }
}
