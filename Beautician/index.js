let a = document.getElementById("snav");

function demo() {
    if (a.style.top === "103%") {
        a.style = "top:-460%; transition: all 2s;";
    } else {
        a.style = "top:103%; transition: all 2s;";
    }
}