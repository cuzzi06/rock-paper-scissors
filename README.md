# Piedra, Papel o Tijeras

Un sencillo juego de **Piedra, Papel o Tijeras** implementado en JavaScript. Este proyecto ejecuta un juego entre un humano y la computadora, simulando 5 rondas consecutivas y declarando al ganador final.

## Descripción

El programa utiliza funciones básicas de JavaScript para:
- Recibir la elección del jugador mediante un `prompt`.
- Generar una elección aleatoria para la computadora.
- Comparar ambas elecciones y determinar al ganador de cada ronda.
- Llevar un puntaje acumulado entre el jugador y la computadora.
- Declarar al ganador tras 5 rondas.

Este proyecto es ideal para practicar:
- Condicionales (`if/else if`).
- Bucles (`for`).
- Uso de funciones y su alcance.
- Manejo básico de entradas y salidas en la consola.

## Cómo usar

1. **Clona este repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
2. **Abre el archivo `index.html` en tu navegador.**

3. **Sigue las instrucciones en pantalla:**
   - Ingrese "piedra", "papel" o "tijeras" en el cuadro de diálogo (`prompt`).
   - Juega 5 rondas consecutivas.
   - Observa los resultados y el puntaje en la consola.

## Estructura del Código

### Funciones principales

- **`playGame`:**  
  Controla el flujo del juego, incluyendo las rondas y el cálculo del puntaje.

- **`getComputerChoice`:**  
  Genera una elección aleatoria para la computadora (`1` = piedra, `2` = papel, `3` = tijeras).

- **`getHumanChoice`:**  
  Solicita al jugador una entrada mediante un cuadro de diálogo y valida que sea correcta.

- **`playRound`:**  
  Ejecuta una ronda del juego, compara las elecciones y devuelve el resultado, actualizando los puntajes.

- **`getChoiceName`:**  
  Convierte las elecciones numéricas (`1`, `2`, `3`) a texto (`"piedra"`, `"papel"`, `"tijeras"`) para construir mensajes más claros.

### Flujo del juego

1. **Inicio:**  
   Se inicializan las variables de puntaje y se prepara el bucle para 5 rondas.
2. **Rondas:**  
   - El jugador elige su jugada.
   - La computadora genera su elección.
   - Se compara quién gana la ronda, actualizando el puntaje.
3. **Resultado final:**  
   Tras 5 rondas, se muestra en consola quién ganó el juego.

## Ejemplo en Consola

Ronda 1:
La computadora eligió papel. ¡Ganas!
Puntaje: Humano = 1 - Computadora = 0

Ronda 2:
La computadora eligió tijeras. ¡Gana la computadora!
Puntaje: Humano = 1 - Computadora = 1

...

Resultado final:
¡Has ganado el juego!

## Mejoras futuras

- Implementar una interfaz gráfica con HTML y CSS para hacerlo más interactivo.
- Permitir jugar un número personalizado de rondas.
- Añadir un modo multijugador.

## Autor

Desarrollado por **Gianfranco Palacios** como parte de un proyecto de aprendizaje de JavaScript.
