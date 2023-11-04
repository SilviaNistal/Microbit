radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Pitchfork)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
radio.setGroup(1)
basic.forever(function () {
	
})
