/*








*/



class Character {
    constructor(image, x, y, lives, width, height) {
        this.startX = x;
        this.startY = y;
        this.image = image;
        this.x = x;
        this.y = y;
        this.lives = lives;
        this.width = width;
        this.height = height;

    }
    collision() {
        //make splat noise
        this.x = this.startX;
        this.y = this.startY;
        this.lives--;

    }

}
export default Character;