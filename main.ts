input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pasos = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(cm)
})
let cm = 0
let pasos = 0
pasos = 0
let igualdad = 0
cm = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500 && (input.acceleration(Dimension.X) > 20 && input.acceleration(Dimension.Y) > 10) || input.acceleration(Dimension.Y) > 10 && input.acceleration(Dimension.Z) > 20) {
        pasos += 2
        cm += 110
        basic.showNumber(pasos)
        music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 1967, 255, 122, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
