function filterAll () {

    // Resetting class of hidden on each card
    let cards = [...document.getElementsByClassName("card")]
    cards.forEach(card => {
        card.classList.remove("hidden")
    })

    // Resetting class of active on each button
    let categoryButtons = [...document.getElementsByClassName("category")]
    categoryButtons.forEach(button => {
        button.classList.remove("active")
    })

    // Adding class of active to button that has been pressed
    let allButton = document.getElementById("all-button")
    allButton.classList.add("active")

    // Removing set background height and resetting to default height: 100%
    let backgroundImage = [...document.getElementsByClassName("main-image")]
    backgroundImage[0].classList.remove('main-image-filtered')
    
}

function filterSelection(cardClass, buttonId) {

    // Resetting class of hidden on each card then re-adding hidden to cards that have not been selected in filter
    let cards = [...document.getElementsByClassName("card")]
    cards.forEach(card => {
        card.classList.remove("hidden")
        if (!card.classList.contains(cardClass)) {
            card.classList.add("hidden")
        }
    })

    // Resetting class of active on each button
    let categoryButtons = [...document.getElementsByClassName("category")]
    categoryButtons.forEach(button => {
        button.classList.remove("active")
    })

    // Adding class of active to button that has been pressed
    let clickedButton = document.getElementById(buttonId)
    clickedButton.classList.add("active")

    // Adding set background height so background stretches entire viewport on all devices
    let backgroundImage = [...document.getElementsByClassName("main-image")]
    backgroundImage[0].classList.add('main-image-filtered')
}