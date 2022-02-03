(function() {
    document.addEventListener('mousemove', parallax);
    const elem = document.querySelector('#parallax');
    
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.015}% ${50 - (_mouseY - _h) * 0.025}%`; //change the values after * for parallax sensitivity
        let x = `${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();