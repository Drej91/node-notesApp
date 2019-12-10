// const square = function (x) {
//     return x * x;
// }

// const square = x => {
//     return x * x
// }

// const square = x => x * x

// console.log(square(3));

const event = {
    name: 'Basketball game',
    guestList: ["Pera", "Mika", "Zika"],
    printGameInfo() {
        console.log('Info for ' + this.name)

        this.guestList.forEach(guest => {
            console.log(guest + ' is going to the ' + this.name + '.')
        })
    }
}

event.printGameInfo()