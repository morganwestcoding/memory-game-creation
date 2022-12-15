document.addEventListener('DOMContentLoaded', () => {
//card options
    const cardArray = [
        {
            name: 'Lizard',
            img: 'images/lizard-memory-game-sq.jpg'
        },
        {
            name: 'Lizard',
            img: 'images/lizard-memory-game-sq.jpg'
        },
        {
            name: 'Panda',
            img: 'images/panda-memory-game-sq.jpg'
        },
        {
            name: 'Panda',
            img: 'images/panda-memory-game-sq.jpg'
        },
        {
            name: 'Dolphin',
            img: 'images/dolphin-memory-game-sq.jpg'
        },
        {
            name: 'Dolphin',
            img: 'images/dolphin-memory-game-sq.jpg'
        },
        {
            name:'Rhino',
            img: 'images/rhino-memory-game-sq.jpg'
        },
        {
            name:'Rhino',
            img: 'images/rhino-memory-game-sq.jpg'
        },
        {
            name:'Tiger',
            img:'images/tiger-memory-game-sq.jpg'
        },
        {
            name:'Tiger',
            img:'images/tiger-memory-game-sq.jpg'
        },
        {
            name:'Baboon',
            img:'images/baboon-memory-game-sq.jpg'
        },
        {
            
            name:'Baboon',
            img:'images/baboon-memory-game-sq.jpg'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenID =[]
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card= document.createElement('img')
            card.setAttribute('src', 'images/front-card-memory-game-sq.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document. querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]

    //check if the names of the cards are equal
        if (cardArray[optionOneID].name === cardArray[optionTwoID].name) {
            alert('You found a match')
            cards[optionOneID].setAttribute('src', 'images/white-memory-game-sq.jpg')
            cards[optionTwoID].setAttribute('src', 'images/white-memory-game-sq.jpg')

    // remove the click event listener from the cards that were matched
            this.removeEventListemer('click', flipcard)
            this.removeEventListener('click', flipcard)
           
            cardsWon.push(cardsChosen)  
        } else {
            cards[optionOneID].setAttribute('src', 'images/front-card-memory-game-sq.jpg')
            cards[optionTwoID].setAttribute('src', 'images/front-card-memory-game-sq.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flip your card
    function flipCard() {
        let cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length ===2) {
           setTimeout(checkForMatch, 500) 
        }
    }

    createBoard()
})