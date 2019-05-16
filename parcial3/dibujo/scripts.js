document.addEventListener("DOMContentLoaded", iniciar, false);
     function iniciar()
     {
       var canvas = document.getElementById("canvas");
       canvas.addEventListener("mousedown", ObtenerCoords, false);
     }

     function ObtenerCoords(event){
       var x = new Number();
       var y = new Number();
       var canvas = document.getElementById("canvas");

       if (event.x != undefined && event.y != undefined){
         x = event.x;
         y = event.y;
       }else{// Firefox
         x = event.clientX + document.body.scrollLeft +
             document.documentElement.scrollLeft;
         y = event.clientY + document.body.scrollTop +
             document.documentElement.scrollTop;
       }

       x -= canvas.offsetLeft;
       y -= canvas.offsetTop;

       alert("x: " + x + "  y: " + y);}


function inicio()
{
  var elemento=document.getElementById("canvas");
canvas=elemento.getContext("2d");//para trabajar en 2d
/*
fillRect: para dibujar un rectangulo relleno
strokeRect: para dibujar un  rectangulo hueco
clearRect:para borrar
globalAlpha:determina la transperencia ej: globalAlpha=.3;
//los primeros dos numeros para especificar donde sera el inicio y los ultimos dos el tamaño
el primero whidth=ancho y el seguindo heigt=alto
*/
//canvas.strokeRect(385,210,25,15);
canvas.beginPath();
{
    canvas.moveTo(385,210);
    canvas.lineTo(410,210);
    canvas.lineTo(418,235);
    canvas.lineTo(377,235);
    canvas.lineTo(385,210);
    canvas.moveTo(385,210);
    canvas.lineTo(380,180);
    canvas.moveTo(410,210);
    canvas.lineTo(415,180);
    canvas.moveTo(380,180);
    canvas.lineTo(415,180);
//triangulo
    canvas.moveTo(398,160);
    canvas.lineTo(380,180);
    canvas.moveTo(398,160);//empieza triangulo
    canvas.lineTo(415,180);
    canvas.stroke();
}

    canvas.beginPath();
    {
      canvas.moveTo(380,180);
      canvas.lineTo(340,160);
      canvas.lineTo(360,140);
      canvas.closePath();
      canvas.stroke();
    }


    canvas.beginPath();
    {
    canvas.moveTo(415,180);
    canvas.lineTo(455,160);
    canvas.lineTo(435,140);

    canvas.closePath();
    canvas.stroke();
  }

  canvas.beginPath();
  {
  //canvas.fillStyle="rgb(0, 0, 0,.7)";
  canvas.moveTo(435,140);
  canvas.lineTo(398,160);
  canvas.lineTo(415,180);
  canvas.closePath();
  canvas.stroke();
}

canvas.beginPath();
{
//canvas.fillStyle="rgb(0, 0, 0,.7)";
canvas.moveTo(360,140);
canvas.lineTo(398,160);
canvas.lineTo(380,180);
canvas.closePath();
canvas.stroke();
}

canvas.beginPath();
{
//canvas.fillStyle="rgb(0, 0, 0,.4)";
canvas.moveTo(398,160);
canvas.lineTo(360,140);
canvas.lineTo(380,90);
canvas.lineTo(415,90);
canvas.lineTo(435,140);
//canvas.closePath();
canvas.stroke();
}

canvas.beginPath();
{
//canvas.fillStyle="rgb(0, 0, 0,.7)";
canvas.moveTo(380,90);
canvas.lineTo(375,70);
canvas.lineTo(398,60);
canvas.lineTo(420,70);
canvas.lineTo(415,90);
canvas.closePath();
canvas.stroke();
}

canvas.beginPath();
{
canvas.moveTo(375,70);
canvas.lineTo(280,1);
canvas.lineTo(250,30);
canvas.lineTo(250,160);
canvas.lineTo(230,180);
canvas.lineTo(265,270);
canvas.lineTo(360,370);
canvas.lineTo(370,370);
canvas.lineTo(398,390);
canvas.lineTo(426,370);
canvas.lineTo(436,370);
canvas.lineTo(535,270);
canvas.lineTo(570,180);
canvas.lineTo(550,160);
canvas.lineTo(550,30);
canvas.lineTo(520,1);
canvas.lineTo(420,70);
//canvas.closePath();
canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(340,160);
  canvas.lineTo(385,210);
  canvas.stroke();
}
canvas.beginPath();
{
  canvas.moveTo(455,160);
  canvas.lineTo(410,210);
  canvas.stroke();
}
canvas.beginPath();
{
  canvas.fillStyle="rgb(0, 0, 0)";

  canvas.moveTo(358,180);
  canvas.lineTo(330,180);
  canvas.lineTo(320,190);
  canvas.quadraticCurveTo(358,204,370,195);
    canvas.fill();
  }
  canvas.beginPath();
  {
    canvas.fillStyle="rgb(0, 0, 0)";

    canvas.moveTo(438,180);
    canvas.lineTo(466,180);
    canvas.lineTo(476,190);
    canvas.quadraticCurveTo(438,204,424,195);
      canvas.fill();
    }

    canvas.beginPath();
    {
      canvas.moveTo(280,1);
      canvas.lineTo(380,90);
      canvas.stroke();

      }
      canvas.beginPath();
      {
        canvas.moveTo(520,1);
        canvas.lineTo(415,90);
        canvas.stroke();

        }
        canvas.beginPath();
        {
          canvas.moveTo(280,1);
          canvas.lineTo(380,90);
          canvas.stroke();

          }
          canvas.beginPath();
          {
            canvas.moveTo(378,235);
            canvas.lineTo(350,250);
            canvas.lineTo(350,260);
            canvas.lineTo(398,280);
            canvas.lineTo(450,260);
            canvas.lineTo(450,250);
            canvas.lineTo(418,235);

            canvas.stroke();

            }


            canvas.beginPath();
            {
              canvas.moveTo(385,210);
              canvas.lineTo(350,250);

              canvas.stroke();

              }
              canvas.beginPath();
              {
                canvas.moveTo(410,210);
                canvas.lineTo(450,250);

                canvas.stroke();

                }

        canvas.beginPath();
        {
          canvas.fillStyle="rgb(0, 0, 0,.7)";

          canvas.moveTo(398,280);
          canvas.lineTo(450,250);
          canvas.lineTo(350,250);
          canvas.closePath();

          canvas.fill();

      }
      canvas.beginPath();
      {
        canvas.fillStyle="rgb(0, 0, 0)";

        canvas.moveTo(398,280);
        canvas.lineTo(370,285);
        canvas.lineTo(400,290);
        canvas.lineTo(430,285);
        canvas.closePath();
        canvas.fill();

    }

    canvas.beginPath();
    {
      canvas.moveTo(398,280);
      canvas.lineTo(430,285);
      canvas.lineTo(468,240);

      canvas.closePath();
      canvas.stroke();

  }
  canvas.beginPath();
  {
    canvas.moveTo(398,280);
    canvas.lineTo(370,285);
    canvas.lineTo(334,240);

    canvas.closePath();
    canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(231,180);
  canvas.lineTo(370,285);

  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(569,180);
  canvas.lineTo(430,285);

  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(334,241);
  canvas.lineTo(385,210);

  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(469,240);
  canvas.lineTo(410,210);

  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(425,370);
  canvas.lineTo(410,350);
  canvas.lineTo(385,350);
  canvas.lineTo(370,370);

  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(410,350);
  canvas.lineTo(430,285);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(385,350);
  canvas.lineTo(370,285);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(370,285);
  canvas.lineTo(360,370);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(430,285);
  canvas.lineTo(436,370);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(370,285);
  canvas.lineTo(339,348);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(430,285);
  canvas.lineTo(461,346);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(340,160);
  canvas.lineTo(330,182);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(455,160);
  canvas.lineTo(466,182);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(322,190);
  canvas.lineTo(334,240);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(475,190);
  canvas.lineTo(468,240);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(250,160);
  canvas.lineTo(380,90);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(550,160);
  canvas.lineTo(415,90);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(370,288);
  canvas.lineTo(250,159);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(430,288);
  canvas.lineTo(550,159);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(550,159);
  canvas.lineTo(475,190);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(250,159);
  canvas.lineTo(325,190);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(550,159);
  canvas.lineTo(455,161);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(250,159);
  canvas.lineTo(342,161);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(550,159);
  canvas.lineTo(436,140);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(250,159);
  canvas.lineTo(362,140);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(372,286);
  canvas.lineTo(266,270);
  canvas.stroke();

}

canvas.beginPath();
{
  canvas.moveTo(428,286);
  canvas.lineTo(534,270);
  canvas.stroke();

}
canvas.beginPath();
{
  canvas.moveTo(266,270);
  canvas.lineTo(304,234);
  canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(535,270);
  canvas.lineTo(496,234);
  canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(266,270);
  canvas.lineTo(354,320);
  canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(535,270);
  canvas.lineTo(446,319);
  canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(250,30);
  canvas.lineTo(296,14);
  canvas.stroke();
}

canvas.beginPath();
{
  canvas.moveTo(550,30);
  canvas.lineTo(503,14);
  canvas.stroke();
}




}
window.addEventListener("load",inicio,false);
