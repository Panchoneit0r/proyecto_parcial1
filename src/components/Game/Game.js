import React, { Component } from 'react';
import './Game.css';
import papel from '../shared/images/papel.png';
import piedra from '../shared/images/piedra.png';
import tijeras from '../shared/images/tijeras.png';

class Game extends Component {

  constructor() {
      super();
      this.state = {
          random: 0,
          pj: 0,
          pc: 0,
          eleccion: 0,
          mensaje: ""
      }
  }  

    handleOnPiedra = () =>{
        let Random = parseInt(this.state.random);
        Random = generateRandomNumber(3);
        let text = textoPiedra(Random);
        let pJ = parseInt(this.state.pj);
        let pC = parseInt(this.state.pc);
        if(Random === 1){
            pC+= 1;
        }
        else if(Random === 2){
            pJ+= 1;
        }
        this.setState({mensaje: text,
        eleccion: 1,
        random: Random + 1,
        pj: pJ,
        pc: pC,
        }) 
        
    }

    handleOnPapel = () =>{
        let Random = parseInt(this.state.random);
        Random = generateRandomNumber(3);
        let text = textoPapel(Random);
        let pJ = parseInt(this.state.pj);
        let pC = parseInt(this.state.pc);
        if(Random === 2){
            pC+= 1;
        }
        else if(Random === 0){
            pJ+= 1;
        }
        this.setState({mensaje: text,
        eleccion: 2,
        random: Random +1, 
        pj: pJ,
        pc: pC,
        }) 
    }
    
    handleOnTijeras = () =>{
        let Random = parseInt(this.state.random);
        Random = generateRandomNumber(3);
        let text = textoTijeras(Random);
        let pJ = parseInt(this.state.pj);
        let pC = parseInt(this.state.pc);
        if(Random === 0){
            pC+= 1;
        }
        else if(Random === 1){
            pJ+= 1;
        }
        this.setState({mensaje: text,
        eleccion: 3,
        random: Random + 1,
        pj: pJ,
        pc: pC
        }) 
    }

  render() {
    return (
      <div>
          <header>
             <h1>Piedra, Papel o Tijeras</h1>
             <img src={piedra} onClick={this.handleOnPiedra} alt="piedra"/>
            <img src={papel} onClick={this.handleOnPapel} alt="papel"/>  
            <img src={tijeras} onClick={this.handleOnTijeras} alt="piedra"/>
          </header>
          <div className="juagador"></div>
          <h1>Eleccion del juegador</h1>
         <img src={mostarEleccion(this.state.eleccion)} alt=""/>
          <div className="cpu">
          <h1>Eleccion del contricante</h1>
         <img src={mostarEleccion(this.state.random )} alt=""/>
          </div>
          <div className="cartel">
              <h2>{this.state.mensaje}</h2>
              <h2>Llevas {this.state.pj} puntos</h2>
              <h2>El contricante lleva {this.state.pc} puntos</h2>
          </div>

      </div>
    )
  }
}

export default Game;



function mostarEleccion(eleccion){
    if(eleccion === 1){ return piedra}
    else if(eleccion === 2){return papel}
    else if(eleccion === 3){return tijeras}
}

function generateRandomNumber(max) {
    return Math.floor(Math.random()*(max));
}

function textoPiedra(random){
    if(random === 0){
        return "El rival eligio piedra. Empataste la ronda";
    }
    else if(random === 1){
        return "El rival eligio papel. Perdiste la ronda";
    }
    else{
        return "El rival eligio tijeras. Ganaste la ronda";
    }
}
function textoPapel(random){
    if(random === 0){
        return "El rival eligio piedra. Ganaste la ronda";
    }
    else if(random === 1){
        return "El rival eligio papel. Empataste la ronda";
    }
    else{
        return "El rival eligio tijeras. Perdiste la ronda";
    }
    
}

function textoTijeras(random){
    if(random === 0){
        return "El rival eligio piedra. Pedriste la ronda";
    }
    else if(random === 1){
        return "El rival eligio papel. Ganaste la ronda";
    }
    else{
        return "El rival eligio tijeras. Empataste la ronda";
    }
}


