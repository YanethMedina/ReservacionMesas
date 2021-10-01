

//Funcion para inicializar variables y limpiar articulos y mostrar cajas
function temaseleccionado(){
    //Limpiar textbox
    document.getElementById("resultado").innerHTML="¡Resultados!";

    //getElementsByTagName convierte en arreglo porque guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //Oocultar varios elementos
    for(i=0; i < capas.length; i++){
        capas[i].style.display="none";
    }
    //Almacenar el dato de la opcion del usuario
    var articulo=document.getElementById("temas").value;
    document.getElementById(articulo).style.display="block";
}

document.getElementById('reservacion').addEventListener("change",function(){mesas();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});
    
//Start
let mesas=function(){
    let nm=document.getElementById('reservacion').value;
    //let np=document.getElementById('personas').value;
    //let ninios='';
    let contenido='';

    for(i = 0; i < nm; i++){
        contenido += '<h3>Mesa: ' + (i + 1) + '</h3>' +
        '<h4>Numero de Comensales</h4>' +
        '<form name="formulario1" action="#">'+
        '<select class="seleccion" name="cosa" onchange="cambia()">' +
        '<option value="0">Seleccione numero de Adultos</option>' +
        '<option value="1">1</option>' +
        '<option value="2">2</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '</select>'+
        '<select class="seleccion" name="opt">'+
        '<option value="-">-'+
        '</select>'+
        '</form><br>';
   
}
    document.getElementById("mesas").innerHTML=contenido;
}
var opt_1 = new Array ("Numero de Menores", "1", "2", "3", "4");
var opt_2 = new Array ("Numero de Menores", "1", "2", "3");
var opt_3 = new Array ("Numero de Menores", "1", "2");
var opt_4 = new Array ("Numero de Menores");

function cambia(){
    var cosa;
				//Se toma el vamor de la "cosa seleccionada"
				cosa = document.formulario1.cosa.value;
				//se chequea si la "cosa" esta definida
				if(cosa!=0){
					//selecionamos las cosas Correctas
					mis_opts=eval("opt_" + cosa);
					//se calcula el numero de cosas
					num_opts=mis_opts.length;
					//marco el numero de opt en el select
					document.formulario1.opt.length = num_opts;
					//para cada opt del array, la pongo en el select
					for(i=0; i<num_opts; i++){
						document.formulario1.opt.options[i].value=mis_opts[i];
						document.formulario1.opt.options[i].text=mis_opts[i];
					}
					}else{
						//si no habia ninguna opt seleccionada, elimino las cosas del select
						document.formulario1.opt.length = 1;
						//ponemos un guion en la unica opt que he dejado
						document.formulario1.opt.options[0].value="-";
						document.formulario1.opt.options[0].text="-";
					}
					//hacer un reset de las opts
					document.formulario1.opt.options[0].selected = true;

}

let mostrar=function(){
    /*let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for(let i = 0; i < cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for(let i = 0; i < cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }*/
    window.open("DatosReservacion.html");
}

//Linea para detectar el evento del select
document.getElementById('temas').addEventListener("change",temaseleccionado);
//document.getElementById('opc').addEventListener("change",function(){opciones()});
//document.getElementById('calcular').addEventListener("click",function(){promedio()});