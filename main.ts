let slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT = 0
let Mapped = 0
let Number2 = 0
//  The       funkysi &                     
basic.forever(function () {
    slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT = pins.analogReadPin(AnalogPin.P0)
    serial.writeLine("slide poT =")
    serial.writeNumber(slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT)
    serial.writeLine("")
    Mapped = Math.map(slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT, 0, 1023, 10, 0)
    Number2 = Math.round(Mapped)
    serial.writeLine("Number =")
    serial.writeNumber(Number2)
    serial.writeLine("")
    serial.writeLine("")
    basic.showNumber(Number2)
    music.playMelody("E F G F G F D F ", 120)
    music.setVolume((Number2 + 1) * 10)
    basic.pause(500)
})
