export default class Bird {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.height = this.dimensions.height / 2;
        this.width = (this.dimensions.width / 3) * 2;
    }

    drawBird(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.height, this.width, 40, 30)
    }

    animate(ctx) {
        this.drawBird(ctx);
    }
}