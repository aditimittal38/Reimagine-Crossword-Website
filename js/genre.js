function FilterObjects(category, type) {
    var x, i;
    x = document.getElementsByClassName("box");
    
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (category === "all" || x[i].classList.contains(category)) {
            if (type === "fiction" && x[i].classList.contains("fiction")) {
                addClass(x[i], "show");
            }
            else if (type === "non-fiction" && x[i].classList.contains("non-fiction")) {
                addClass(x[i], "show");
            }
            else if (type === "kids-section" && x[i].classList.contains("kids-section")) {
                addClass(x[i], "show");
            }
            else if (type === "young-adult" && x[i].classList.contains("young-adult")) {
                addClass(x[i], "show");
            }
            else if (type === "business" && x[i].classList.contains("business")) {
                addClass(x[i], "show");
            }
            else if (type === "toys" && x[i].classList.contains("toys")) {
                addClass(x[i], "show");
            }
            else if (type === "gifts" && x[i].classList.contains("gifts")) {
                addClass(x[i], "show");
            }
        }
    }
}

function addClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
