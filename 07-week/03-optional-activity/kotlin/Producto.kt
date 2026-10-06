class Producto(
    val nombre: String?,
    val precio: Double
) {
    init {
        require(precio >= 0) {
            "El precio no puede ser negativo"
        }
    }

    fun mostrarProducto() {
        val nombreSeguro = nombre ?: "Producto sin nombre"

        println("Nombre: $nombreSeguro")
        println("Precio: $$precio")
        println("--------------------")
    }
}

fun main() {
    val producto1 = Producto("Audifonos", 85000.0)
    val producto2 = Producto(null, 50000.0)

    producto1.mostrarProducto()
    producto2.mostrarProducto()
}   