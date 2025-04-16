// Heart
basic.forever(function () {
    basic.showIcon(IconNames.Duck)
    basic.pause(700)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(700)
})
