let workTitle = "Web Developer";

let index = 1;

function writeText() {
    document.getElementById("work-title").textContent = workTitle.slice(0, index);

    index++

    if (index > workTitle.length) {
        index = 1;
    }
}

setInterval(() => {
    writeText()
}, 170, 5);

document.getElementById("myname").style.color = "blue";