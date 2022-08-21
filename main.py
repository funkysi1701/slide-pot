slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT = 0

def on_forever():
    global slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
    slide_poTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT = pins.analog_read_pin(AnalogPin.P0)
    serial.write_line("slide poT =")
basic.forever(on_forever)
