class Pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image(); // para el objeto primero insertar this.() dentro va el nombre que le daremos
    this.nombre = n; // similar a lo anterior pero declarando que es = al primero valor del parametro dado en al clase construc
    this.Vida = v; // lo mismo que anterior
    this.ataque = a; // =^^
    // this.tipo = "tierra";
    this.imagen.src = imagenes[this.nombre];  // src es la que llama por asi decirlo a la imagen que le damos el valor del objeto de afuera de la clase, poniendo this.nombre que en el cual usaremos mas abajo declarado
  }
  hablar() // dentro de las clases todas seran funciones por ende no escribimos el function como antes
  {
    alert(this.nombre);// ejemplo que nos mandara un aviso en pantalla si lo pusieramos mas abajo un alert
  }
  mostrar() // funcion que demos nombres entendibles de lo que queremos hacer para hacer el codigo mas simple y nos entiendan mejor lo que tratamos de hacer y los demas programadores puedan darse una idea
  {
    document.body.appendChild(this.imagen); // es agregar un hijo a la estructura jerarquica, insertamos la imagen
    // document.write("<p>"); // parrafo
    document.write("<br /><strong>" + this.nombre + "</strong><br />"); // br es salto de linea, strong es negrita
    document.write("Vida: " + this.Vida + "<br />"); // usando el nombre de la clase del objeto que declaramos mas arriva con su valor respectivo
    document.write("Ataque: " + this.ataque + "<hr />"); // lo mismo que lo anterior pero con los ataques
    // document.write("</p>"); // se Puede eliminar
  }
}
