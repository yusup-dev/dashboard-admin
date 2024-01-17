// toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

// toggle between hiding and showing the dropdown content
function yourFunction() {
    document.getElementById("dropbell").classList.toggle("show");
}

let arrows = document.querySelectorAll(".iocn-link");

function removeAllClassShowMenu() {
    let class_name = "kk";
    let elements = document.getElementsByClassName(class_name);

    for (element of elements) {
        element.classList.remove(class_name);
    }
}

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (el) => {
        removeAllClassShowMenu();
        arrow.parentElement.classList.toggle("showMenu");
    });
});

// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", (e) => {
//     let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
//     arrowParent.classList.toggle("showMenu");
//   });
// }
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu-alt-left");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});