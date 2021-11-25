function makeBlue(){
    document.body.style.backgroundColor='blue';
}

const buttonOrange = document.getElementById('colorOrange');
buttonOrange.onclick = makeOrange;
function makeOrange(){
    document.body.style.backgroundColor='orange';
}

const greenButton = document.getElementById('colorGreen');
//handle event using anonymous function
greenButton.onclick =function (){
    document.body.style.backgroundColor='green';
}
//handle event using add event listener
const buttonPink = document.getElementById('colorPink');
buttonPink.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor='pink';
}
//handle event using add event listener
const buttonPurple = document.getElementById('colorPurple');
buttonPurple.addEventListener('click',function makePurple(){
    document.body.style.backgroundColor='purple';
})

document.getElementById('colorKhaki').addEventListener('click',function makeKhaki(){
    document.body.style.backgroundColor='khaki';
})