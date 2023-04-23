function navBar() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// $(".articles p a").on("mouseover", function() {
//     var link = $(".articles p a");
//     var linkSize = link.css("font-size");
//     link.css("font-size", "2rem");
// });