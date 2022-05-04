const  createRobot = require('./robot')

describe("Moving Robot incrementing Y", () => {
    test("should increment Y with initial coordinates in (0, 0)", () => {
        const robot = createRobot(0, 0);
        robot.moveUp()
        expect(robot.getY()).toBe(1);
    })
    test("should increment Y with initial coordinates in (0, 10) (Error)", () => {
        const robot = createRobot(0, 10);
        expect(() => robot.moveUp()).toThrowError("wrong error");
    })
})

describe("Moving Robot decrementing Y", () => {
    test("should decrement Y with initial coordinates in (0, 5)", () => {
        const robot = createRobot(0, 5);
        robot.moveDown()
        expect(robot.getY()).toBe(4);
    })
    test("should decrement Y with initial coordinates in (0, 0) (Error)", () => {
        const robot = createRobot(0, 0);
        expect(() => robot.moveDown()).toThrowError("wrong error");
    })
})

describe("Moving Robot decrementing X", () => {
    test("should decrement X with initial coordinates in (5, 3)", () => {
        const robot = createRobot(6, 3);
        robot.moveLeft()
        expect(robot.getX()).toBe(5);
    })
    test("should decrement X with initial coordinates in (0, 8) (Error)", () => {
        const robot = createRobot(0, 8);
        expect(() => robot.moveLeft()).toThrowError("wrong error");
    })

})

describe("Moving Robot incrementing X", () => {
    test("should decrement X with initial coordinates in (2, 10)", () => {
        const robot = createRobot(2, 10);
        robot.moveRight()
        expect(robot.getX()).toBe(3);
    })
    test("should decrement X with initial coordinates in (10, 3) (Error)", () => {
        const robot = createRobot(10, 3);
        expect(() => robot.moveRight()).toThrowError("wrong error");
    })
})
