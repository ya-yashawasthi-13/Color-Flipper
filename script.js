const button = document.querySelector(".inner");
const p = document.querySelector(".color");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

function changecolor(){
    var color = getRandomHexColor();
    document.body.style.backgroundColor = color ;
    p.textContent = color ;
}

button.addEventListener('click',changecolor);
