contM = 0;
var Mosca = new Object();
Mosca.x = 10;
Mosca.y = 0;
Mosca.velX = 1;
Mosca.vely = 0;
$("#botonStart").click(function() {
    Mosca.mover = function() {
        stopInterval = setInterval(function() {
            if (Mosca.x >= 10) {
                Mosca.x = Mosca.x + 10;
                $("#mosca").css("left", Mosca.x);
            }
            if (Mosca.x == 1050) {
                Mosca.x = Mosca.x - 10;
                $("#mosca").css("left", Mosca.x);
            }
        }, 20);
    }
    Mosca.mover();
});

var Mira = new Object();
Mira.X = 0;
Mira.Y = 0;
Mira.sobre = true;
$("#botonStart").click(function() {
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
    Mira.mover();
});

function reloj() {
    var i = 0;
    setInterval(function() {
        if (i < 61) {
            $('#cuenta').val(i.toString());
            i++;
        }
    }, 1000);
}
reloj();

function miraRoja() {
    $("#mosca").mouseover(function() {
        $("#puntero").css("background-color", "red");
        $("#puntero").css("border-radius", "100px");
    });
    $("#mosca").mouseout(function() {
        $("#puntero").css("background-color", "transparent");
    });
}
miraRoja();

$(document).keypress(function(e) {
    coordenadasMira = $("#puntero").position();
    coordenadasMosca = $("#mosca").position();
    if ((e.keyCode == 32) && (coordenadasMosca.left < coordenadasMira.left + 50) && (coordenadasMosca.left > coordenadasMira.left - 50) && (coordenadasMosca.top < coordenadasMira.top + 50) && (coordenadasMosca.top > coordenadasMira.top - 50)) {
        contM = contM +1;
        $('#points').val(contM.toString());
    }
    if ((e.keyCode == 32) && (coordenadasMosca.left < coordenadasMira.left + 50) && (coordenadasMosca.left > coordenadasMira.left - 50) && (coordenadasMosca.top < coordenadasMira.top + 50) && (coordenadasMosca.top > coordenadasMira.top - 50)) {
        $('#mosca').css('background-image', 'url("mosca_muerta.png")');
        setInterval(change, 2000);
    }
});

function change() {
    $('#mosca').css('background-image', 'url("mosca.gif")');
}

