// objeto constructor
class Calculador {

    //funcion constructora
    constructor(categoria, nombre, precio, cuotas) {

        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
        this.cuotas = cuotas;

        /** SE GENERA EL PRECIO FINAL EN LA INSTANCIA DEL OBJETO */

        this.precio_final_cuotas = 0;
        switch(this.cuotas) {
            case 3:
                let cuota3 = (this.precio / 3);
                this.precio_final_cuotas = cuota3 * 1.05;
                break;
            case 6:
                let cuota6 = (this.precio / 6);
                this.precio_final_cuotas = cuota6 * 1.15;
                break;
            case 12:
                let cuota12 = (this.precio / 12);
                this.precio_final_cuotas = cuota12 * 1.40;
                break;
        }
    }

    /** METODO QUE DEVUELVE LA CANTIDAD DE CUOTAS */
    
    // seleccionarCuotas () {

    //     switch(this.cuotas){
    //         case 3 :
    //             let cuota3 = (this.precio / 3);
    //             return cuota3 * 1.05;
    //             break;
    //         case 6 :
    //             let cuota6 = (this.precio / 6);
    //             return cuota6 * 1.15;
    //             break;
    //         case 12 :
    //             let cuota12 = (this.precio / 12);
    //             return cuota12 * 1.40;
    //             break;
    //         default :
    //             return "no ingreso la cantidad de cuotas correctas";
    //             break;
    //     }
    // }
}


//ingresamos 3 objetos de tipo calculador (3 productos con distintos valores)

const productos = []; //inicializamos el array

for(i = 1; i < 4; i++) {
    let categoriaDelProducto = prompt("ingrese la categoria del producto " + i);
    let nombreDelProducto = prompt("ingrese el nombre del producto " + i);
    let precioDelProducto = parseInt(prompt("ingrese el precio del producto " + i));
    let cuotasAPagar = parseInt(prompt("ingrese 3, 6 o 12 segun la cantidad de cuotas que desea " + i));

    const producto = new Calculador(categoriaDelProducto, nombreDelProducto, precioDelProducto, cuotasAPagar);
    
    productos.push(producto); // agregamos los valores al array (3 objetos en un array)
}

// mostramos el array
console.log(productos)

//obtener los nombres de los productos en otro array

const nombreDeLosProductos =  productos.map( (producto) => {
    return producto.nombre;
});
console.log(nombreDeLosProductos)