const element = document.querySelectorAll('.ul .li');
const list = [];

document.body.classList.add(localStorage.getItem('color'))

element.forEach(e => {
    list.push(e.getAttribute('data-color'));
    e.addEventListener('click', function () {
        document.body.classList.remove(...list);
        document.body.classList.add(this.getAttribute('data-color'));
        localStorage.setItem('color', this.getAttribute('data-color'))
    });
});

window.onload = function () {
    $('#colorpalette').hide();
    for (i = 0; i < 50; i++) {
        $('#colorpalette').hide();
    };
}

window.startAnimation = function () {
    $('#animation').css('animation', 'spinin 0.2s linear 0s');
};

window.stopAnimation = function () {
    $('#animation').css('animation', 'spinout 0.2s linear 0s');
};

$(".color").mouseover(function(){
    $(".color").css("animation", "rotateColorSelector 0.5s ease-in-out");
});

window.openColorpalette = function () {
    $("#colorpalette").fadeIn(800);
    if ($('#colorpalette').hide()) {
        $('#colorpalette').css('display', 'block');
        startAnimation();
        setTimeout(
            function () {
                $('#colorpalette').hide();
                stopAnimation();
            },
            10000);
    }
}

window.closeColorpalette = function () {
    $('#colorpalette').hide();
    stopAnimation();
}
