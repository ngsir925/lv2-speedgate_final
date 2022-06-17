input.onPinReleased(TouchPin.P2, function () {
    T2 = input.runningTime()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(D / ((T2 - T1) / 1000))
})
input.onPinReleased(TouchPin.P1, function () {
    T1 = input.runningTime()
    basic.showIcon(IconNames.Triangle)
})
let T1 = 0
let T2 = 0
let D = 0
basic.showIcon(IconNames.Heart)
D = 29
