let B = 0
let G = 0
let Tx = 15
let T = 100
let L = 500
let R = Tx * L
basic.forever(function () {
    for (let index = 0; index < Tx; index++) {
        R += L * -1
        pins.servoSetPulse(AnalogPin.P0, R)
        basic.pause(T)
    }
    basic.pause(Tx * T)
    for (let index = 0; index < Tx; index++) {
        R += L
        pins.servoSetPulse(AnalogPin.P0, R)
        basic.pause(T)
    }
})
basic.forever(function () {
    basic.pause(Tx * T)
    for (let index = 0; index < Tx; index++) {
        G += L / 2
        pins.servoSetPulse(AnalogPin.P1, G)
        basic.pause(T)
    }
    for (let index = 0; index < Tx; index++) {
        G += L / 2 * -1
        pins.servoSetPulse(AnalogPin.P1, G)
        basic.pause(T)
    }
})
basic.forever(function () {
    for (let index = 0; index < Tx; index++) {
        B += L
        pins.servoSetPulse(AnalogPin.P2, B)
        basic.pause(T)
    }
    for (let index = 0; index < Tx; index++) {
        B += L * -1
        pins.servoSetPulse(AnalogPin.P2, B)
        basic.pause(T)
    }
    basic.pause(Tx * T)
})
