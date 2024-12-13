class BracketBox {
    constructor(teamname, seed, quadrant){
        this.name = teamname;
        this.seed = seed;
        this.quadrant = quadrant;
    }

    drawBox(x, y, width, heightDifference){
        ctx.fillStyle = "white";
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(x, y - heightDifference);
        ctx.lineTo(x + width, y - heightDifference);
        ctx.stroke();
        ctx.font = "20px Arial";
        ctx.fillText(this.name, x, y - 20, width);
    }
}