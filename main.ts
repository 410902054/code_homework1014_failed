let Y = 4
let X = 4
for (let index = 0; index < 5; index++) {
    led.plot(X, Y)
    basic.pause(100)
    Y += -1
}
X = 3
for (let index = 0; index < 5; index++) {
    led.plot(X, Y + 1)
    basic.pause(100)
    Y += 1
}
X = 2
for (let index = 0; index < 5; index++) {
    led.plot(X, Y)
    basic.pause(100)
    Y += -1
}
X = 1
for (let index = 0; index < 5; index++) {
    led.plot(X, Y + 1)
    basic.pause(100)
    Y += 1
}
X = 0
for (let index = 0; index < 5; index++) {
    led.plot(X, Y)
    basic.pause(100)
    Y += -1
}
