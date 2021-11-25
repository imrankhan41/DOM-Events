function justFunction() {
    const paragraph = document.getElementById('just-click');
    paragraph.innerText="hello do u want to see me";
}

const directUse = document.getElementById('direct-use');
directUse.addEventListener("click",function(){
    const paragraph = document.getElementById('just-click');
    paragraph.innerText="hello do u want to see me";
})

const updateName =document.getElementById('update');
updateName.addEventListener("click",function(){
    const name =document.getElementById("input-field");
    const paragraph = document.getElementById("just-click");
    paragraph.innerText = name.value;
    name.value='';
})