function stand () {
    motor.servo(motor.Servos.S1, 180)
    motor.servo(motor.Servos.S8, 180)
    motor.servo(motor.Servos.S6, 0)
    motor.servo(motor.Servos.S2, 0)
}
function BR_DFLT () {
    motor.servo(motor.Servos.S3, 65)
}
function FR_DFLT () {
    // FrontRight
    motor.servo(motor.Servos.S4, 135)
}
function BL_DFLT () {
    motor.servo(motor.Servos.S7, 45)
}
function BL_DOWN () {
    motor.servo(motor.Servos.S8, 135)
}
function FR_body () {
    // FrontRight
    motor.servo(motor.Servos.S4, 90)
}
function all_leg_stand () {
    motor.servo(motor.Servos.S1, 180)
    motor.servo(motor.Servos.S2, 0)
    motor.servo(motor.Servos.S6, 0)
    motor.servo(motor.Servos.S8, 180)
}
function BR_body () {
    // FrontRight
    motor.servo(motor.Servos.S3, 180)
}
function FR_DOWN () {
    motor.servo(motor.Servos.S1, 180)
}
function BR_STRECH () {
    // FrontRight
    motor.servo(motor.Servos.S3, 0)
}
function FL_DOWN () {
    motor.servo(motor.Servos.S2, 45)
}
function FR_STRECH () {
    // FrontRight
    motor.servo(motor.Servos.S4, 0)
}
function BL_STRECH () {
    // FrontRight
    motor.servo(motor.Servos.S7, 90)
}
function BR_DOWN () {
    motor.servo(motor.Servos.S8, 135)
}
function all_leg_ground () {
    motor.servo(motor.Servos.S1, 90)
    motor.servo(motor.Servos.S2, 90)
    motor.servo(motor.Servos.S6, 90)
    motor.servo(motor.Servos.S8, 90)
}
function FL_STRECH () {
    // FrontRight
    motor.servo(motor.Servos.S5, 0)
}
function FR_UP () {
    motor.servo(motor.Servos.S1, 135)
}
function FL_DFLT () {
    // frontleft
    motor.servo(motor.Servos.S5, 45)
}
function body () {
    motor.servo(motor.Servos.S3, 180)
    motor.servo(motor.Servos.S4, 90)
    motor.servo(motor.Servos.S5, 90)
    motor.servo(motor.Servos.S7, 0)
}
function BR_UP () {
    motor.servo(motor.Servos.S8, 180)
}
function BL_body () {
    // FrontRight
    motor.servo(motor.Servos.S7, 0)
}
function strech () {
    motor.servo(motor.Servos.S3, 0)
    motor.servo(motor.Servos.S4, 180)
    motor.servo(motor.Servos.S5, 0)
    motor.servo(motor.Servos.S7, 90)
}
function FL_body () {
    // FrontRight
    motor.servo(motor.Servos.S5, 90)
}
function BL_UP () {
    motor.servo(motor.Servos.S8, 180)
}
function FL_UP () {
    motor.servo(motor.Servos.S2, 0)
}
basic.forever(function () {
	
})
