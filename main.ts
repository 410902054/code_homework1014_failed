let x = 4
let y = 4
for (let index = 0; index < 3; index++) {
    if ("Y" >= "4") {
        for (let index = 0; index < 5; index++) {
            led.plot(x, y)
            basic.pause(100)
            y = y - 1
        }
        if ("Y" >= "0") {
            x = x - 1
            for (let index = 0; index < 5; index++) {
                led.plot(x, y)
                basic.pause(100)
                y = y - 1
                led.plot(x, y)
                basic.pause(100)
            }
        }
    }
    x = x - 1
}
