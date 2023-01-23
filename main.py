def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_icon(IconNames.DUCK)

def on_forever():
    music.play_melody("G A A - G E F G ", 120)
basic.forever(on_forever)
