function throttle(fn, delay = 200) {
    let timer = 0;
    return function () {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = 0;
        }, delay);
    };
}

const div1 = document.getElementById('div1');
div1.addEventListener('drag', throttle((e) => {
    console.log('鼠标的位置', e.offsetX, e.offsetY)
}));