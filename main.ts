basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.House)
    }
})
