makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    停止()
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Square)
    后退()
})
function 右转 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function 左转 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    前进()
})
function 后退 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    左转()
})
function 前进 () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function 停止 () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    右转()
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
basic.forever(function () {
	
})
