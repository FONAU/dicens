function toggleMenu(){

    var menu = document.getElementById("dicens-menu");
    var mask = document.getElementById("dicens-menu-mask");

    menu.classList.toggle("status-close");
    menu.classList.toggle("status-open");

    mask.classList.toggle("status-close");
    mask.classList.toggle("status-open");

}