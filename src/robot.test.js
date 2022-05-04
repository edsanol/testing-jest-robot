const  createRobot = require('./robot')

describe("Robot", () => {
    test("should increment Y", () => {
        const robot = createRobot(10, 10);
        robot.moveUp()
        expect(() => robot.getY()).toThrowError("wrong error");
    })
    test("should decrement Y", () => {
        const robot = createRobot(0, 0);
        robot.moveDown()
        expect(() => robot.getY()).toThrowError("wrong error");
    })
    test("should increment X", () => {
        const robot = createRobot(10, 10);
        robot.moveRight()
        expect(() => robot.getX()).toThrowError("wrong error");
    })
    test("should decrement X", () => {
        const robot = createRobot(0, 0);
        robot.moveLeft()
        expect(() => robot.getX()).toThrowError("wrong error");
    })
})