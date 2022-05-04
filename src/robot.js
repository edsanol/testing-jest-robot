function createRobot(x, y) {
    // lanza error si x o y están fuera de los límites (0 a 10)
    this.x = x;
    this.y = y;

    return {
       // moveUp - incrementa y en 1

        moveUp: () => {
            const coorY = this.y + 1
            if(coorY > 10){
                throw new Error("wrong error")
            } else {
                this.y = coorY
            }
        },

       // moveDown - decrementa y en 1.

        moveDown: () => {
            const coorY = this.y - 1
            if(coorY < 0){
                throw new Error("wrong error")
            } else {
                this.y = coorY
            }
        },

       // moveLeft - decrementa x en 1.

        moveLeft: () => {
            const coorX = this.x - 1
            if(coorX < 0){
                throw new Error("wrong error")
            } else {
                this.x = coorX
            }
        },

       // moveRight - incrementa x en 1

        moveRight: () => {
            const coorX = this.x + 1
            if(coorX > 10){
                throw new Error("wrong error")
            } else {
                this.x = coorX
            }
        },

       // getX - retorna x

        getX: () => {
            return this.x
        },

       // getY - retorna y

        getY: () => {
            return this.y
        }
       
    }
}

module.exports = createRobot