function createRobot(x, y) {
    // lanza error si x o y están fuera de los límites (0 a 10)
    this.x = x;
    this.y = y;

    return {
       // moveUp - incrementa y en 1

        moveUp: () => {
            this.y++;
        },

       // moveDown - decrementa y en 1.

        moveDown: () => {
            this.y--;
        },

       // moveLeft - decrementa x en 1.

        moveLeft: () => {
            this.x--;
        },

       // moveRight - incrementa x en 1

        moveRight: () => {
            this.x++;
        },

       // getX - retorna x

        getX: () => {

            if (this.x > 10 || this.x < 0) {
                throw new Error("wrong error");
            } else {
                return this.x
            }
            
        },

       // getY - retorna y

       getY: () => {

            if (this.y > 10 || this.y < 0) {
                throw new Error("wrong error");
            } else {
                return this.y
            }

       }
       
    }
}

module.exports = createRobot