# Piedra, Papel o Tijeras

Un sencillo juego de **Piedra, Papel o Tijeras** implementado en JavaScript. Ahora cuenta con una interfaz gráfica para jugar fácilmente desde el navegador. Este proyecto ejecuta un juego entre un humano y la computadora, declarando al ganador al alcanzar 5 puntos.

## Descripción

El programa utiliza JavaScript para:

- Permitir al jugador seleccionar entre "piedra", "papel" o "tijeras" mediante botones.
- Generar una elección aleatoria para la computadora.
- Comparar ambas elecciones y determinar al ganador de cada ronda.
- Mostrar los resultados de cada ronda y el puntaje acumulado en pantalla.
- Declarar al ganador al alcanzar 5 puntos y reiniciar el juego con un botón.

Este proyecto es ideal para practicar:

- Manipulación del DOM.
- Uso de eventos en JavaScript.
- Lógica condicional (`if/else if`).
- Modularización de funciones.

## Cómo usar

1. **Abre el archivo `index.html` en tu navegador.**

2. **Juega:**
   - Haz clic en "Piedra", "Papel" o "Tijeras".
   - Observa los resultados y el puntaje actualizado en pantalla.
   - El juego termina cuando uno de los jugadores alcanza 5 puntos. Usa el botón "Reset game" para reiniciar.

## Estructura del Código

### Funciones principales

- **`playRound(humanChoice)`:**
  Controla una ronda del juego:

  - Genera la elección de la computadora.
  - Compara las elecciones y determina el resultado.
  - Actualiza el puntaje y muestra los mensajes correspondientes en pantalla.

- **`getComputerChoice()`:**
  Genera una elección aleatoria para la computadora (1 = piedra, 2 = papel, 3 = tijeras).

- **`getChoiceName(choice)`:**
  Convierte las elecciones numéricas (1, 2, 3) a texto ("piedra", "papel", "tijeras") para construir mensajes más claros.

### Manejo de eventos

- Se añaden `eventListener` a los botones para manejar la elección del jugador y reiniciar el juego.

## Flujo del juego

1. **Inicio:**

   - Los puntajes y mensajes se inicializan en 0 o vacíos.

2. **Rondas:**

   - El jugador hace clic en un botón para elegir su jugada.
   - La computadora genera su elección.
   - Se compara quién gana la ronda, actualizando el puntaje y mostrando el resultado en pantalla.

3. **Fin del juego:**
   - Al alcanzar 5 puntos, se muestra un mensaje con el ganador y se habilita un botón para reiniciar el juego.
