let emp_name = document.getElementById("emp-name");
let emp_desig = document.getElementById("emp-desig");
let add_btn = document.getElementById("add-btn");
let leave_invoice = document.getElementById("leave-invoice");
let confirmBtn = document.getElementsByClassName("confirmBtn");
$(document).ready(function () {
    $(leave_invoice).hide();
    $(confirmBtn).hide();

});
$(document).ready(function () {
    $(add_btn).click(function () {
        $(emp_name).toggle("New Request");
        $(emp_desig).toggle("");
        $(leave_invoice).slideToggle();
        $(confirmBtn).slideToggle();
    })
});



