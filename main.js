//Desafio Uno Backend - Carabajal Rodrigo 

class ProductManager {

    static contadorID = 0;

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock){

        if(!title || !description || !price || !img || !code || !stock){
            console.log("Completar todos los campos"); 
            return;
        }
 
        if(this.products.some(item => item.code === code)) {
            console.log("ya existe un producto con el mismo codigo");
            return;
        }

        const newProduct = {
            id: ++ProductManager.contadorID,
            title, 
            description,
            price,
            img,
            code, 
            stock
        }

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products; 
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.error("no se escuentra el producto por ID"); 
        } else {
            console.log(product);
        }
    }
}

//Test: 

//1) Se creará una instancia de la clase “ProductManager”

const products = new ProductManager(); 

//2) Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []

console.log(products.getProducts());

//3) Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

products.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123", 25);

//4)El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

//5)Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

console.log(products.getProducts());

//6)Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

// products.addProduct("Producto prueba", "esto es un producto prueba", 200, "sin imagen", "abc123");

products.addProduct("producto1", "descripcion1", 100, "sin imagen", "abc124", 25);
products.addProduct("producto2", "descripcion2", 200, "sin imagen", "abc125", 25);

console.log(products.getProducts());

//7) Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

products.getProductById(12);
