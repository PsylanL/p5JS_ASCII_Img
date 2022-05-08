const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let paisin;

function preload() {
  paisin=loadImage("./d.jpg")
  }

function setup() {
  createCanvas(400,400);
}

function draw() {
  
  background(0);
   // Draw one image at full size at (0,0);
  //image(paisin, 0, 0, width, height);


/*Conocer los rangos verdaderos de las imagenes */
let w = width/paisin.width;
let h = height/paisin.height;

/*Cargamos los pixeles de la imagen */
paisin.loadPixels(); /*Esta funcion siempre debe ser llamada al manipular pixels[] */

/*ARREGLO DE PIXELES RGB */
for(let i=0;i<paisin.width;i++){
  for(let j=0;j<paisin.height;j++){
    const pixelIndex=(i+j*paisin.width)*4;
    const r=paisin.pixels[pixelIndex + 0];
    const b=paisin.pixels[pixelIndex + 1];
    const g=paisin.pixels[pixelIndex + 2];
    const avg=(r + g + b)/3;
    noStroke();
    //fill(avg) // lo cambiamos por el fill 255 para ver mejor la imagen, se cambio len y 0 de posicion
    fill(avg);
// square(i*w,j*h,w); // filter or somn like that

  const len = density.length;
  const charIndex = floor(map(avg,0,255,0,len)); //agarra el filtro avg y su rango de 0 a 255. LIGHTER TO DARKER LEN, 0
  // lo mapea en un nombre de entre 0 a density.lenght(len), el floor quita los decimales aproximandolo al mas cerca hacia abajo
  textSize(w);
  text(density.charAt(charIndex),i*w + w * 0.5, j*h + h*0.5);
  }
}

}
