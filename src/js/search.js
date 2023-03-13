const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const infoText = document.getElementsByClassName('infoText')[0];
const optionsList = document.querySelectorAll(".option");
const searchHelper = document.querySelector(".searchHelper");
const somewhereClick = document.getElementById('somewhereClick');
const helperVideo = document.querySelector('.helperVideo');

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    filterList("");
    searchBox.value = "";

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
        selected.style.borderColor = 'white';
        selected.style.margin = '0 -15px 10px -15px';
        searchHelper.style.margin = '0 -15px 10px 0px';
        searchHelper.style.transition = 'all 0.3s';
    }
    else {
        selected.style.borderColor = '#08f';
        selected.style.margin = '';
    }
});

document.addEventListener('click', function handleClickOutsideBox(event) {

    if (!somewhereClick.contains(event.target)) {
        selected.style.borderColor = '#08f';
        infoText.style.display = 'none';
        selected.style.margin = '';
        helperVideo.style.display = 'none';
        optionsContainer.classList.remove("active");
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        optionsContainer.classList.remove("active");
        selected.style.margin = '';
        if (infoText.style.display = 'block') {
            selected.style.borderColor = '';
        } else {
        }
    });
});

searchBox.addEventListener("keyup", function (e) { filterList(e.target.value); });

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
            selected.style.borderColor = '';
            selected.style.borderColor = '#08f';

        } else {
            option.style.display = "none";
            selected.style.borderColor = '#005199';
        }

    });
};

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        optionsContainer.classList.remove("active");
        selected.style.borderColor = '';
        infoText.style.display = 'block';
        selected.style.margin = '';
        helperVideo.style.display = 'none';
    }
};

$(".select-box").mouseover(function(){
        $(".selected").css("-webkit-box-shadow", "1px 0px 5px 1px #008FFF");
        $(".selected").css("box-shadow", "1px 0px 5px 1px #008FFF");
        $(".selected").css("transition", "0.15s ease-in-out");
});

$(".select-box").mouseout(function(){
    $(".selected").css("-webkit-box-shadow", "");
    $(".selected").css("box-shadow", "");
    $(".selected").css("transition", "");
});
