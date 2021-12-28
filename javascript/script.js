const quotes = document.getElementsByClassName('quote-div')
const quotesContainer = document.getElementsByClassName('quotes-container')[0]

const buttonPrev = document.getElementById('prev')
const buttonNext = document.getElementById('next')

let currentQuoteIndex = 0
const maxQuoteIndex = quotes.length - 1

// Move the HTML div to show the next quote
function changeQuote() {
    quotesContainer.style.transform = `translateX(${-currentQuoteIndex * 1000}px)`
}

// What happens when clicking the "previous" button
function clickPrev() {
    if (currentQuoteIndex == 0) {
        currentQuoteIndex = maxQuoteIndex
    }

    else {
        currentQuoteIndex--
    }

    changeQuote()
}

// What happens when clicking the "next" button
function clickNext() {
    if (currentQuoteIndex == maxQuoteIndex) {
        currentQuoteIndex = 0
    }

    else {
        currentQuoteIndex++
    }

    changeQuote()
}

// Executes automatically after a set amount of time
function autoNext() {
    if (currentQuoteIndex == maxQuoteIndex) {
        currentQuoteIndex = 0
    }

    else {
        currentQuoteIndex++
    }

    changeQuote()
}

buttonPrev.addEventListener('click', () => {
    clickPrev()
})


buttonNext.addEventListener('click', () => {
    clickNext()
})

let interval = setInterval(() => {
    autoNext()
}, 5000);