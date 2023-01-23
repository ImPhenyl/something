input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
led.plot(1, 2)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `)
    music.playMelody("G A A - G E F G ", 120)
})
