function something(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }
    sayHi()
}
something('good morning', 'jui')






function anything(a, b) {
    function getFirstName() {
        if (b) {
            return b.split(' ')[0]
        } else {
            return ' '
        }
    }

    var message = a +
        getFirstName()
    console.log(message)
}

anything('good night ', 'joynab hossain jolly')