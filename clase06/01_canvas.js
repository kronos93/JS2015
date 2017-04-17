(function(d) {
    'use strict';
    let canvas = d.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;
    console.log(ctx);
    console.log(canvas);

    console.log(w);
    console.log(h);

    /*for (let i = 0; i < 30; i++) {
        ctx.moveTo(0, i * 10);
        ctx.lineTo(w, i * 10);

    }
    for (let i = 0; i < 50; i++) {
        ctx.moveTo(i * 10, 0);
        ctx.lineTo(i * 10, h);
    }*/
    /*ctx.moveTo(w * 0.5, 0);
    ctx.lineTo(w * 0.5, h);*/

    /*ctx.rect(50, 50, 200, 100);

    ctx.strokeStyle = "green";
    ctx.fillStyle = "tomato";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fill();

    ctx.font = "bold 40px Arial";
    ctx.fillText('Hola mundo', 50, 200);
    ctx.strokeText('Adiós mundo', 50, 250);*/
    ctx.arc(w * 0.5, h * 0.5, 120, 0, Math.PI * 2, true);

    ctx.strokeStyle = "green";
    ctx.fillStyle = "tomato";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fill();
})(document);