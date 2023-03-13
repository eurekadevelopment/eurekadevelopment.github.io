import '../../node_modules/jquery/dist/jquery.js';
window.$ = $;

//splash animation//
$(document).ready(function() {
    setTimeout(() => {
        $('.splash').addClass('display-none');
    }, 1520);
})

//navbar//
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle")
toggle.addEventListener("click", () => {
    $(sidebar).toggleClass("close");
});

//Close Window when u click somewhere into page
const overlay = document.querySelector('.overlay');
const overlay_rom = document.querySelector('.overlay-rom');
$(document).on('click', function handleClickOutsideBox(event) {
    if (overlay.contains(event.target)) {
        $(overlay).hide();
    } else if (overlay_rom.contains(event.target)) {
        $(overlay_rom).hide();
    }
});

// ROMS/DOWNLOAD DIALOG - START
// Call function when show dialog btn is clicked
$('#rom-dialog').click(function () {
    show_dialog();
});
$('#dload-dialog').click(function () {
    show_dialog_dload();
});

window.show_dialog = function () {
    $('#dialog-container').css('display', 'block');
};

window.show_dialog_dload = function() {
    $('#dialog-container-dload').css('display', 'block');
};

// If confirm btn is clicked , the function confim() is executed
$('#confirm').click(function () {
    $('#confirm').click();
    $('#dialog-container-dload').hide();
    $('#dialog-container').hide();
});
//ROMS/DOWNLOAD DIALOG - END
//Fixes downloadWindow Bug
$(document).ready(function () {
    for (i = 0; i < 36; i++) {
        $('#downloadWindow' + [i]).css('display', 'block').delay(100).hide();
    }
});
//Expand - Collapse text 
$(function () {
    $(".expand-btn").on('click', function () {
        $(this).parent().addClass("showContent");
        setTimeout(function () {
            $(".showContent").removeClass("showContent");
        }, 3000);
    });
});
