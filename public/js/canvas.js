let canvas = document.getElementById("canvas");
let degree = 0;
const amplitude = 50;
const period = 1000;
const speed = 2;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    function drawWave() {

        if (darkmode) {
            ctx.fillStyle = "#24292E";
        } else {
            ctx.fillStyle = "#1F2428";
        }

        // calculates the slope of the curve
        let pante = canvas.height / canvas.width;

        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        // make a triangle
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(0, canvas.height);
        for (let x = 0, panteAdd = 0; x <= canvas.width; x++, panteAdd += pante) {
            // calc the courbe of sinus for the wave
            let y = -amplitude * Math.sin((Math.PI / period) * (degree + x));
            ctx.lineTo(x, y + canvas.height - panteAdd);
        }
        ctx.fill();
        ctx.closePath();
        // reset memory
        if (degree == 2000) {
            degree = 0;
        }
        degree += speed;
        window.requestAnimationFrame(drawWave);
    }

    drawWave();

}