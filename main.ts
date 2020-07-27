function Snake (X: number) {
    while (liste[X] < 4) {
        led.unplot(X, liste[X])
        liste[X] = liste[X] + 1
        led.plot(X, liste[X])
        basic.pause(150)
    }
    while (liste[X] > 0) {
        led.unplot(X, liste[X])
        liste[X] = liste[X] - 1
        led.plot(X, liste[X])
        basic.pause(150)
    }
}
let liste: number[] = []
liste = [0, 1, 2, 3, 4]
let y = 0
led.plot(0, 0)
// Appel de la fonction pour toute les positions de y
// 
basic.forever(function () {
    Snake(0)
})
basic.forever(function () {
    Snake(1)
})
basic.forever(function () {
    Snake(2)
})
basic.forever(function () {
    Snake(3)
})
basic.forever(function () {
    Snake(4)
})
