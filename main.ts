let X = 4
let Y = 4
for (let index = 0; index < 3; index++) {
    if ("Y" >= "4") {
        for (let index = 0; index < 5; index++) {
            led.plot(X, Y)
            basic.pause(100)
            Y = Y - 1
        }
        if ("Y" >= "0") {
            X = X - 1
            for (let index = 0; index < 5; index++) {
                led.plot(X, Y)
                basic.pause(100)
                Y = Y - 1
                led.plot(X, Y)
                basic.pause(100)
            }
        }
    }
    X = X - 1
}
