//
/*










*/


//var cars;
class Car {
    constructor(src, x, y, direction, speed, width, height) {
        this.src = src;
        this.x = x
        this.y = y;
        this.direction = direction;
        this.speed = speed;
        this.width = width;
        this.height = height;

    }
    intersects(character) {
        return !(character.x + 1 > (this.x + this.width) ||
            (character.x + character.width - 1) < this.x ||
            character.y + 1 > (this.y + this.height) ||
            (character.y + character.height - 1) < this.y);
    }
    bumpCar(otherCar) {
        this.speed = otherCar.speed;
        if (this.x < otherCar.x) {
            while (this.intersects(otherCar)) {
                this.x -= 1;
            }
            //   this.x = this.x - otherCar.x - 3;
        } else {
            while (otherCar.intersects(this)) {
                otherCar.x -= 1;
            }
        }
        //   console.log("x: " + this.x);
    }
}




export default Car;