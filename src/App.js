import Cards from "./components/cartas";
import Nivel1 from "./components/nivelum";
import Nivel2 from "./components/niveldois";
import Nivel3 from "./components/niveltres";
import { useEffect, useState } from "react";

function App() {

  const [nivel, setNivel] = useState(0)
  const [points, setPoints] = useState(30)

  useEffect(
    ()=> {
      const url = window.location.href
      const res = url.split('?')
      setNivel(res[1])
    }
  )

  const LinksPaginas=(p)=>{
    if(p==1){
      window.open('http://localhost:3000?1', '_self')
    } else if (p==2){
      window.open('http://localhost:3000?2', '_self')
    } else if (p==3){
      window.open('http://localhost:3000?3', '_self')
    }
  }

  const retornarApp=()=>{
    if(nivel==1){
      return <Nivel1></Nivel1>
    } else if(nivel==2) {
      return <Nivel2></Nivel2>
    } else if(nivel==3) {
      return <Nivel3></Nivel3>
    } else {
      return(
            <div className="botoes">
              <button onClick={()=> LinksPaginas(1)}> Fácil </button>
              <button onClick={()=> LinksPaginas(2)}> Médio </button>
              <button onClick={()=> LinksPaginas(3)}> Difícil </button>
            </div>)
    }
  }

  return (
    <div className="App">
      <h1> Jogo da memória </h1>
      <h3> Make your choice</h3>

    {retornarApp()}
     
    </div>
  );
}

export default App;
