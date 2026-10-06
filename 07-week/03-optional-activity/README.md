# Week 7 - Kotlin Basics and Ionic Component

## Description

This activity combines basic Kotlin concepts with the creation of a simple Ionic React component.

## Kotlin Exercise

A `Producto` class was created using Kotlin.

The class includes:

- `val` properties.
- Nullable values using `String?`.
- Null-safety using the Elvis operator `?:`.
- Validation to prevent negative prices.
- Two example products printed in the console.

### Kotlin code

```kotlin
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