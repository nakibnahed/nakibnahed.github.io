let slider = tns({
    container: ".my-slider",
    "slideBy": 1,
    "speed": 400,
    "nav": false,
    "dots": true,
    "mouseDrag": true,
    "touchDrag": true,
    "loop": true,
    controlsContainer: ".controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        1600: {
            items: 3,
            gutter: 30
        },
        1024: {
            items: 3,
            gutter: 20
        },
        768: {
            items: 2,
            gutter: 20
        },
        480: {
            items: 1
        }
    }
})