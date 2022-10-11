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
    //check if the hitboxes of two cars intersect
    intersects(character) {
        return !(character.x + 1 > (this.x + this.width) ||
            (character.x + character.width - 1) < this.x ||
            character.y + 1 > (this.y + this.height) ||
            (character.y + character.height - 1) < this.y);
    }
    //if a cars intersect, the car behind will tailgate and change to the speed of car in front
    bumpCar(otherCar) {
        this.speed = otherCar.speed;
        if (this.x < otherCar.x) {
            this.x = otherCar.x + otherCar.width;
            // while (this.intersects(otherCar)) {
            //     this.x -= 1;
            // }
        } else {
            otherCar.x = this.x + this.width;

            // while (otherCar.intersects(this)) {
            //     otherCar.x -= 1;
            // }
        }
    }
}

export default Car;