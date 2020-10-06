input.onGesture(Gesture.Shake, function () {
    if (input.acceleration(Dimension.X) >= 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # .
            . . . . .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.Y) >= 6) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.Z) >= 9) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
    }
})
