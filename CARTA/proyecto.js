
//Diseñar una función constructora que acepte un apodo, 
//un número de vidas y un valor de carta (del 1 al 7). Además, 
//se requiere incluir dos métodos como propiedades: uno para reducir
// las vidas y otro para mostrar el apodo junto con la cantidad de vidas restantes

function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = valorCarta;
  
    this.reducirVidas = function(cantidad) {
      this.vidas -= cantidad;
      if (this.vidas < 0) {
        this.vidas = 0; // Asegurarse de no tener vidas negativas
      }

    };
  
    this.mostrarEstado = function() {
      alert(`Apodo: ${this.apodo}, Vidas restantes: ${this.vidas}`);
    };

  }
  
  const nuevoJugador = new Jugador('Jugador1', 5, 4);
  alert("Estado inicial del jugador:");
  nuevoJugador.mostrarEstado(); // Muestra "Apodo: Jugador1, Vidas restantes: 5"
  
  // Reducir las vidas del jugador en 2
  nuevoJugador.reducirVidas(2);
  alert("Estado después de reducir vidas:");
  nuevoJugador.mostrarEstado();
