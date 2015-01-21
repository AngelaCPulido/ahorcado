//Elijan de un array de palabras aleatorio
var palabra = ['Peyorativo','Misantropia','hipofisis','hipotalamo','Ventriculo','esclerosis','necrosis','isquemia','filantropia','Epilepsia'];
var hombre, l, espacio;

//Palabra Aleatoria
function escogePalabra()
{
	var pAleatoria = Math.floor(Math.random()*(palabra.length));
	seleccion = palabra[pAleatoria];
	return seleccion;
}

//Declaranción clase ahorcado
var Ahorcado = function (con)
{
	//this es las variables locales de la clase, accesibles en toda la clase
	//this.contexto es el context de dibujo del canvas, que llega por parametro
	//desde la variable con
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function ()
{

	var dibujo = this.contexto;

	////Dibujando poste
	//dibujo.beginPath();
	//dibujo.moveTo(150,100);
	//dibujo.lineTo(150,50);
	//dibujo.lineTo(400,50);
	//dibujo.lineTo(400,350);
	//dibujo.lineWidth = 15;
	//dibujo.strokeStyle = "#000000";
	//dibujo.stroke();
	//dibujo.closePath();

	var fondo = new Image();
	fondo.src = 'images/fondo.png';
	fondo.onload = function()
	{
		dibujo.drawImage(fondo, 0, 0);
	}


	if(this.intentos > 0)
	{
		//intentos= 1 ---> rostro
		//dibujo.beginPath();
		//dibujo.arc(150, 140, 40, 0, Math.PI*2, false);
		//dibujo.strokeStyle = "#000";
		//dibujo.lineWidth = 8;
		//dibujo.stroke();
		//dibujo.closePath();
		var cabeza = new Image();
		cabeza.src = 'images/cabeza.png';
		cabeza.onload = function()
		{
			dibujo.drawImage(cabeza, 0, 0);
		}
		//intendos = 2 ---> torso
		if(this.intentos > 1)
		{
//			dibujo.beginPath();
//	        dibujo.moveTo(150,180);
//        	dibujo.lineTo(150,250);
//        	dibujo.lineWidth = 8;
//        	dibujo.strokeStyle = "#000000";
//        	dibujo.stroke();
//        	dibujo.closePath();
			
			var tronco = new Image();
			tronco.src = 'images/tronco.png';
			tronco.onload = function()
			{
				dibujo.drawImage(tronco, 0, 0);
			}

		}

		//intendos = 3 ---> brazos
		if(this.intentos > 2)
		{
//			dibujo.beginPath();
//	        dibujo.moveTo(120,220);
//        	dibujo.lineTo(150,180);
//        	dibujo.lineTo(180,220);
//        	dibujo.lineWidth = 8;
//        	dibujo.strokeStyle = "#000000";
//        	dibujo.stroke();
//        	dibujo.closePath();
			var manos = new Image();
			manos.src = 'images/manos.png';
			manos.onload = function()
			{
				dibujo.drawImage(manos, 0, 0);
			}


        		//intendos = 4 ---> piernas
        		if(this.intentos > 3)
        		{
//        			dibujo.beginPath();
//        	        dibujo.moveTo(120,290);
//                	dibujo.lineTo(150,250);
//                	dibujo.lineTo(180,290);
//                	dibujo.lineWidth = 8;
//                	dibujo.strokeStyle = "#000000";
//                	dibujo.stroke();
//                	dibujo.closePath();   
					var pies = new Image();
					pies.src = 'images/pies.png';
					pies.onload = function()
					{
						dibujo.drawImage(pies, 0, 0);
					}     

                    //intendos = 5 ---> ojos
             		if(this.intentos > 4)
             		{
//             			dibujo.beginPath();
//             	        //ojo izq
//             	        dibujo.moveTo(125,120);
//                     	dibujo.lineTo(145,145);
//                     	dibujo.moveTo(145,120);
//                     	dibujo.lineTo(125,145);//

//                     	//ojo der
//             	        dibujo.moveTo(155,120);
//                     	dibujo.lineTo(175,145);
//                     	dibujo.moveTo(175,120);
//                     	dibujo.lineTo(155,145)//

//                     	dibujo.lineWidth = 5;
//                     	dibujo.strokeStyle = "#000000";
//                     	dibujo.stroke();
//                     	dibujo.closePath();
     					var ojos = new Image();
     					ojos.src = 'images/ojos.png';
     					ojos.onload = function()
     					{
     						dibujo.drawImage(ojos, 0, 0);
     					}   
             		}        

        		}
		}


	}
}
Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("Estás muerto");
	}
	this.dibujar();
}

function inicio()
{
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 400;
	canvas.height = 500;
	var contexto = canvas.getContext ("2d");
    
    var palabraE = escogePalabra();

	hombre = new Ahorcado(contexto);

	//Convertir a mayúscula el texto toUpperCase --- Miniscula toLowerCase
	palabra = palabraE.toUpperCase();
	
	//Declaro un array con n espacios de acuerso al largo de la palabra
	espacio = new Array(palabraE.length);

	//Agregamos una función que se dispare al dar click al botón
	b.addEventListener("click", agregarLetra);

	mostrarPista(espacio);
	//mostrarPista(palabra, espacio);
}

function agregarLetra()
{
	var letra = l.value;
	l.value = "";
	mostrarPalabra(palabra, hombre, letra);	
}

function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p; 
	letra = letra.toUpperCase();

	for(p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}

	mostrarPista(espacio);

	//Si no lo encontré
	if(!encontrado)
	{
		ahorcado.trazar();
	}

	if(!ahorcado.vivo)
	{
		//mostrar la palabra entera
	}

}

function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i= 0; i<largo; i++)
	{
		if(espacio[i]!= undefined)
		{
			texto = texto + espacio[i] + " "; 
		}

		else
		{
			texto += "_ ";
		}

		pista.innerText = texto;
	}

}