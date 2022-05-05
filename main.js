let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/civilization-six.jpg') {
        myImage.setAttribute('src', 'images/bizhi.jpg');
    } else {
        myImage.setAttribute('src', 'images/civilization-six.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('������������֡�');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla ����ˣ�' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla ����ˣ�' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
       