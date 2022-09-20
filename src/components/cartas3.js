import {useState} from 'react';
import Card from './carta';
import calculaJogadas from './estatisticas';

function Cards3(){

    const [items3, setItems3] = useState([
        {id: 1, img: '/img/aplicativo-movel.png', stat: ""},
        {id: 1, img: '/img/aplicativo-movel.png', stat: ""},
        {id: 2, img: '/img/area-de-trabalho-do-computador.png', stat: ""},
        {id: 2, img: '/img/area-de-trabalho-do-computador.png', stat: ""},
        {id: 3, img: '/img/big-data.png', stat: ""},
        {id: 3, img: '/img/big-data.png', stat: ""},
        {id: 4, img: '/img/chat.png', stat: ""},
        {id: 4, img: '/img/chat.png', stat: ""},
        {id: 5, img: '/img/email.png', stat: ""},
        {id: 5, img: '/img/email.png', stat: ""},
        {id: 6, img: '/img/headphones.png', stat: ""},
        {id: 6, img: '/img/headphones.png', stat: ""},
        {id: 7, img: '/img/internet.png', stat: ""},
        {id: 7, img: '/img/internet.png', stat: ""},
        {id: 8, img: '/img/link.png', stat: ""},
        {id: 8, img: '/img/link.png', stat: ""},
        {id: 9, img: '/img/notebook.png', stat: ""},
        {id: 9, img: '/img/notebook.png', stat: ""},
        {id: 10, img: '/img/power-off.png', stat: ""},
        {id: 10, img: '/img/power-off.png', stat: ""},
        {id: 11, img: '/img/refresh.png', stat: ""},
        {id: 11, img: '/img/refresh.png', stat: ""},
        {id: 12, img: '/img/robo.png', stat: ""},
        {id: 12, img: '/img/robo.png', stat: ""},
        {id: 13, img: '/img/security.png', stat: ""},
        {id: 13, img: '/img/security.png', stat: ""},
        {id: 14, img: '/img/servidor.png', stat: ""},
        {id: 14, img: '/img/servidor.png', stat: ""},
        {id: 15, img: '/img/wifi.png', stat: ""},
        {id: 15, img: '/img/wifi.png', stat: ""}

    ].sort(() => Math.random() - 0.5))

    const [ prev, setPrev] = useState(-1)
    const [points3, setPoints3] = useState(30)

    function check(current){
        if (items3[current].id == items3[prev].id){
            items3[current].stat = "correct"
            items3[prev].stat = "correct"
            setPoints3(points3 + 20)
            setPrev(-1)
        } else{
            items3[current].stat = "wrong"
            items3[prev].stat = "wrong"
            setPoints3(points3 - 5)
            if (points3 <= 0){
                alert('Atenção, sua pontuação ficou negativa, você será redirecionado(a) á pagina inicial.')
                window.open('http://localhost:3000', '_self')
            } else {
                setItems3([...items3])
                setTimeout(() => {
                    items3[current].stat = ""
                    items3[prev].stat = ""
                    setItems3([...items3])
                    setPrev(-1)
                }, 1000)
            }
        }

    }

    function handleClick(id){
        if (prev === -1){
            items3[id].stat = "active"
            setItems3([...items3])
            setPrev(id)
        }else {
            check(id)
        }
    }

    return (
        <div className="container2">
            {items3.map((item3, index) =>( 
                <Card key={index} item = {item3} id={index} handleClick={handleClick}> </Card>))
            }
            <p>Pontuação atual: {points3}</p>
            {/*calculaJogadas(points3)*/}
        </div>
    )
}

export default Cards3;