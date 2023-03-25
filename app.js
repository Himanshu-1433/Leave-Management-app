let emp_name = document.getElementById("emp-name");
let emp_desig = document.getElementById("emp-desig");
let add_btn = document.getElementById("add-btn");
let leave_invoice = document.getElementById("leave-invoice");
let confirmBtn = document.getElementsByClassName("confirmBtn");
let click = 1;
$(document).ready(() => {
    $(leave_invoice).hide();
    $(confirmBtn).hide();
});
add_btn.addEventListener("click", () => {
    setPosition(0, 1000);
    $(leave_invoice).slideToggle();
    $(confirmBtn).slideToggle();
    $("#user-component").slideToggle();
    $("#user-data").slideToggle();
    if (click == 0) {
        add_btn.style.transition = "all 1s";
        add_btn.style.transform = "rotate(90deg)";
        emp_name.innerHTML = "Dorothy Boone";
        emp_desig.innerHTML = "PHP Developer";
        add_btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
        anime({
            targets: '.leave-invoice',
            duration: 1000,
            scale: 0,
        });
        anime({
            targets: '.card',
            duration: 1000,
            scale: 0.90,
        });
        anime({
            targets: '.confirmBtn',
            duration: 1000,
            scale: 0,
        });
        click = 1;
        console.log("0 call");
    }
    else if (click == 1) {
        anime({
            targets: '.leave-invoice',
            duration: 900,
            scale: 1.010,
        });
        anime({
            targets: '.card',
            duration: 1000,
            scale: 1.010,
        });
        anime({
            targets: '.confirmBtn',
            duration: 900,
            scale: 1.010,
        });
        add_btn.style.transition = "all 1s";
        add_btn.style.transform = "rotate(180deg)";
        emp_name.innerHTML = "New Request";
        add_btn.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
        emp_desig.innerHTML = "";
        console.log("1 call");
        click = 0;
    }
})
let confirm = document.getElementById("confirm-leave");
confirm.addEventListener("click", function () {
    $(leave_invoice).slideToggle();
    $(confirmBtn).slideToggle();
    add_btn.style.transition = "all 1s";
    add_btn.style.transform = "rotate(90deg)";
    emp_name.innerHTML = "Dorothy Boone";
    emp_desig.innerHTML = "PHP Developer";
    add_btn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    click = 1;
    anime({
        targets: '.leave-invoice',
        duration: 1000,
        scale: 0,
    });
    anime({
        targets: '.card',
        duration: 1000,
        scale: 0.90,
    });
    anime({
        targets: '.confirmBtn',
        duration: 1000,
        scale: 0,
    });
})
let fromLeave = document.getElementById("fromLeave");
let toLeave = document.getElementById("toLeave");
function setPosition(pos1, pos2) {
    anime({
        targets: '.confirmBtn',
        left: pos1,
        delay: 300,

    });
    anime({
        targets: '.leave-invoice',
        left: pos1,
        delay: 100,

    });
    anime({
        targets: '.date-time-notice',
        left: pos1,
        delay: 300,
    });
    anime({
        targets: '.calender',
        left: pos2,
        delay: 300,
    });
}
let slideRight = () => {
    setPosition(-1000, 0)
};
fromLeave.addEventListener("click", slideRight);
let btn_save = document.getElementById("btn-save");
let btn_cancel = document.getElementById("btn-cancel");
btn_save.addEventListener("click", () => {
    setPosition(0, 1000);
});

btn_cancel.addEventListener("click", () => {
    setPosition(0, 1000);
});

function buttonTrackPosition(pos) {
    anime({
        targets: ".track",
        left: pos
    });
}

let btn_req = document.getElementById("btn-request");
let btn_calender = document.getElementById("btn-calender");
btn_req.addEventListener("click", () => {
    btn_req.style.color = "black";
    btn_calender.style.color = "white";
    console.log("call");
    buttonTrackPosition(1)
});

btn_calender.addEventListener("click", () => {
    btn_req.style.color = "white";
    btn_calender.style.color = "black";
    console.log(" 2 ");
    let sc = screen.width;
    buttonTrackPosition((sc / 2) - 30)
});

var glideMulti = new Glide('.box-user', {
    type: 'slider',
    autoplay: 4000,
    focusAt: 'center',
    perView: 2
});
glideMulti.mount();