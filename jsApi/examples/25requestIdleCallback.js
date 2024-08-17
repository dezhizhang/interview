const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    let curWidth = 100;
    let maxWidth = 400;

    function addWidth() {
        curWidth = curWidth + 3;
        box.style.width = `${curWidth}px`;
        if(curWidth < maxWidth) {
            requestIdleCallback(addWidth);
        }
    }

    addWidth();

})