function stand () {
    motor.servo(motor.Servos.S1, 180)
    motor.servo(motor.Servos.S8, 180)
    motor.servo(motor.Servos.S6, 0)
    motor.servo(motor.Servos.S2, 0)
    basic.pause(500)
}
function walk_foreward () {
    motor.servo(motor.Servos.S1, 140)
    basic.pause(200)
    motor.servo(motor.Servos.S2, 40)
    basic.pause(200)
    motor.servo(motor.Servos.S6, 0)
    basic.pause(200)
    motor.servo(motor.Servos.S8, 150)
    basic.pause(200)
    motor.servo(motor.Servos.S1, 180)
    basic.pause(200)
    motor.servo(motor.Servos.S2, 0)
    basic.pause(200)
    motor.servo(motor.Servos.S6, 40)
    basic.pause(200)
    motor.servo(motor.Servos.S8, 140)
}
function sleep () {
    motor.servo(motor.Servos.S1, 90)
    motor.servo(motor.Servos.S8, 90)
    motor.servo(motor.Servos.S6, 90)
    motor.servo(motor.Servos.S2, 90)
    basic.pause(500)
}
basic.forever(function () {
    sleep()
    basic.pause(500)
    stand()
    basic.pause(500)
    walk_foreward()
    basic.pause(2000)
})
