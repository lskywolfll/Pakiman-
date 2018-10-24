var imagenes = []; //objeto complejo en el cual se declara con [] vacio que el primer valor empieza de 0
imagenes["Cauchin"] = "vaca.png"; // valor en el cual ponemos la ruta en este caso solo el nombre por que estaba en la misma carpeta
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

// class Pakiman
// {
//   constructor(n, v, a)
//   {
//     this.imagen = new Image(); // para el objeto primero insertar this.() dentro va el nombre que le daremos
//     this.nombre = n; // similar a lo anterior pero declarando que es = al primero valor del parametro dado en al clase construc
//     this.Vida = v; // lo mismo que anterior
//     this.ataque = a; // =^^
//     // this.tipo = "tierra";
//     this.imagen.src = imagenes[this.nombre];  // src es la que llama por asi decirlo a la imagen que le damos el valor del objeto de afuera de la clase, poniendo this.nombre que en el cual usaremos mas abajo declarado
//   }
//   hablar() // dentro de las clases todas seran funciones por ende no escribimos el function como antes
//   {
//     alert(this.nombre);// ejemplo que nos mandara un aviso en pantalla si lo pusieramos mas abajo un alert
//   }
//   mostrar() // funcion que demos nombres entendibles de lo que queremos hacer para hacer el codigo mas simple y nos entiendan mejor lo que tratamos de hacer y los demas programadores puedan darse una idea
//   {
//     document.body.appendChild(this.imagen); // es agregar un hijo a la estructura jerarquica, insertamos la imagen
//     // document.write("<p>"); // parrafo
//     document.write("<br /><strong>" + this.nombre + "</strong><br />"); // br es salto de linea, strong es negrita
//     document.write("Vida: " + this.Vida + "<br />"); // usando el nombre de la clase del objeto que declaramos mas arriva con su valor respectivo
//     document.write("Ataque: " + this.ataque + "<hr />"); // lo mismo que lo anterior pero con los ataques
//     // document.write("</p>"); // se Puede eliminar
//   }
// }

// var cauchin = new Pakiman("Cauchin", 100, 30);
// var pokacho = new Pakiman("Pokacho", 80, 50);  // variable contenedora e asignacionde valores respecto a lo declarado en construc
// var tocinauro = new Pakiman("Tocinauro", 120, 40);

// pokacho.mostrar();
// cauchin.mostrar(); // aqui invocamos la funcion que declaramos mas arriva con el nombre de las variables que ingresamos con sus respectivas posiciones para asi lo tomen segun el parametro correspondiente
// tocinauro.mostrar();

var coleccion = []; // sub Objeto
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// console.log(coleccion);
// for(var pakin in coleccion) // este ciclo solo operara por la cantidad de objetos dentro del array, dentro de cada variable dentro del coleccion se colocara dentro, va antes del in que nosotros le damos el nombre
// {// en donde va in itera en el indice, el of en ocasiones itera sobre el objeto , funciona sobre objetos
//   console.log(coleccion[pakin]);
// }

for(var freddito of coleccion)  // habran casos en que nos funciona el indice usaremos in por que necesitamos respectivamente eso, el of nos sirve el objeto
{//in nos saldria la clave , si tiene push es inicio por asi declararlo que lo entiende javaScript, en el de imagenes no saldria nada por no haber indice
  freddito.mostrar();  //el nombre fredito es todo y cada uno de lo que contiene el objeto dentro si hay 3 entonces 3 freditos
}

for(var x of coleccion)
{
  console.log(x);
}
