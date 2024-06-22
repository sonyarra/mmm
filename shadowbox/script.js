var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

const box = document.getElementById('box');
const myRange = document.getElementById('myRange');

// Установка начального радиуса
box.style.width = `${myRange.value}px`;
box.style.height = `${myRange.value}px`;

// Обработчик изменения положения ползунка
myRange.addEventListener('input', function() {
  const radius = this.value;
  box.style.width = `${radius}px`;
  box.style.height = `${radius}px`;
});