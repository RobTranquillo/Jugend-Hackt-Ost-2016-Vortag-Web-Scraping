function applyRunningOrder()
{

  baseX = -1000;
  baseY = -1500;

  slidesDefinition = [
    { intro,   x : -1000, y : -1400, z :  0, rot : 0,  scale : 1, rotY : 0  },
    { prob1,   x : -2100, y : -1600, z :  0, rot : 0,  scale : 1, rotY : 55 },
    { prob2,   x : -2100, y : -1000, z :  0, rot : 0,  scale : 1, rotY : 55 },
    { prob3,   x : -2100, y : -200,  z :  0, rot : 0,  scale : 1, rotY : 55 },
    { prob4,   x : -2100, y :  400,  z :  0, rot : 0,  scale : 1, rotY : 55 },
    { scrape1, x : -1000, y : -1800, z :  0, rot : 40, scale : 1, rotY : 40 },
    { scrape2, x :  200,  y : -1800, z :  0, rot : 40, scale : 1, rotY : 40 },
    { scrape3, x :  1000, y : -1800, z :  0, rot : 40, scale : 1, rotY : 40 },
    { scrape4, x :  2200, y : -1800, z :  0, rot : 40, scale : 1, rotY : 40 },
    { scrape5, x :  3000, y : -1000, z : -600,  rot : 40, scale  : 1, rotY : 40 },
    { scrape6, x :  4200, y :  200,  z : -1300, rot : 40, scale  : 1, rotY : 40 },
    { basics1, x :  2200, y :  200,  z : 0, rot : 0, scale  : 1, rotY : 0 },
    { basics2, x :  3200, y :  1000, z : 0, rot : 90, scale  : 1, rotY : 0 },
    { basics3, x :  2200, y :  1800, z : 0, rot : 180, scale  : 1, rotY : 0 },
    { basics4, x :  1400, y :  800,  z : 0, rot : 270, scale  : 1, rotY : 0 },
    { ex1,     x :  2300, y :  950,  z : 0, rot : 135, scale  : 1, rotY : 0 },
    { ex2,     x :  2255, y :  933,  z : 0, rot : 135, scale  : 0.05, rotY : 0 },
    { ex3,     x :  2207, y :  981,  z : 0, rot : 135, scale  : 0.05, rotY : 0 },
    { oview, x :  0,  y : 0,  z : 0, rot : 0, scale  : 6, rotY : 0 },
    { exit,    x :  900,  y : -700,  z : 0, rot : 0, scale  : 2, rotY : 0 },
  ];


  slides = document.getElementsByClassName("step");
  for (i=0; i < slides.length; i++) {
    appendAttribute( slides[i] , "data-x", slidesDefinition[i].x);
    appendAttribute( slides[i] , "data-y", slidesDefinition[i].y);
    appendAttribute( slides[i] , "data-z", slidesDefinition[i].z);
    appendAttribute( slides[i] , "data-rotate", slidesDefinition[i].rot);
    appendAttribute( slides[i] , "data-scale", slidesDefinition[i].scale);
    appendAttribute( slides[i] , "data-rotate-y", slidesDefinition[i].rotY);
  }

}


function appendAttribute( obj, newAttr, value )
{
    attribO = document.createAttribute( newAttr );
    attribO.value = value;
    obj.setAttributeNode(attribO);
}

