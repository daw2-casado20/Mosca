$("#botonStart").click(function() {
    Mosca.mover();
    Mira.mover();
    miraRoja();
    pulsar();
    reloj();
    $("#botonStart").blur();
});

contM = 0;
var Mosca = new Object();
Mosca.x = 100;
Mosca.y = 100;
Mosca.velX = 10;
Mosca.vely = 3;

Mosca.mover = function() {
    intervalID = setInterval(function() {
        if (Mosca.x > ($(".selva").width() - ($("#mosca").width())) || Mosca.x < 0) { //Si Mosca.X es más grande al ancho del fondo menos el ancho de la mosca
            Mosca.velX = Mosca.velX * (-1);
        }
        Mosca.x = Mosca.x + Mosca.velX;
        $("#mosca").css("left", Mosca.x);

    }, 20);
}

var Mira = new Object();
Mira.X = 0;
Mira.Y = 0;
Mira.sobre = true;

Mira.mover = function() { ////creo el metodo actualiza para actualizar mediante prompt
    $(".selva").mousemove(function() {
        Mira.X = event.clientX - $(this).offset().left;
        Mira.Y = event.clientY - $(this).offset().top;
        if ((Mira.X <= 1076.00) && (Mira.X >= 35.659) && (Mira.Y <= 515.00) && (Mira.Y >= 30.00)) {
            $("#puntero").css("left", Mira.X - 34);
            $("#puntero").css("top", Mira.Y - 30);
        }
    });
}

function reloj() {
    var i = 0;
    setInterval(function() {
        if (i < 61) {
            $('#cuenta').val(i.toString());
            i++;
            if (i == 61) {
                alert("El juego a terminado");
                location.reload();
            }
        }
    }, 1000);
}

function miraRoja() {
    $("#mosca").mouseover(function() {
        $("#puntero").css("border", "4px red solid");
        $("#puntero").css("border-radius", "100px");
    });
    $("#mosca").mouseout(function() {
        $("#puntero").css("border", "none");
    });
}

function pulsar() {
    $(document).keypress(function(e) {
        coordenadasMira = $("#puntero").position();
        coordenadasMosca = $("#mosca").position();
        if ((e.keyCode == 32) && (coordenadasMosca.left < coordenadasMira.left + 50) && (coordenadasMosca.left > coordenadasMira.left - 50) && (coordenadasMosca.top < coordenadasMira.top + 50) && (coordenadasMosca.top > coordenadasMira.top - 50)) {
            contM = contM + 1;
            $('#points').val(contM.toString());
        }
        if ((e.keyCode == 32) && (coordenadasMosca.left < coordenadasMira.left + 50) && (coordenadasMosca.left > coordenadasMira.left - 50) && (coordenadasMosca.top < coordenadasMira.top + 50) && (coordenadasMosca.top > coordenadasMira.top - 50)) {
            $('#mosca').css('background-image', 'url("mosca_muerta.png")');
            clearInterval(intervalID);
            setInterval(change, 2000);
        }
    });
}

function change() {

    $('#mosca').css('background-image', 'url("mosca.gif")');
    //PosXmosca = Math.floor(Math.random() * ($(".selva").width() - ($("#mosca").width())));
    PosYmosca = Math.floor(Math.random() * ($(".selva").height() - ($("#mosca").height())));

    //$("#mosca").css("left", PosXmosca);
    $("#mosca").css("top", PosYmosca);
    clearInterval(intervalID);
    Mosca.mover();
}
