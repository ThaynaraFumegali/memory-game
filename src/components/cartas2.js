import {useState} from 'react';
import Card from './carta';

function Cards2(){

    const [items2, setItems2] = useState([
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
        {id: 10, img: '/img/power-off.png', stat: ""}
    ].sort(() => Math.random() - 0.5))

    const [ prev, setPrev] = useState(-1)
    const [points2, setPoints2] = useState(30)

    function check(current){
        if (items2[current].id == items2[prev].id){
            items2[current].stat = "correct"
            items2[prev].stat = "correct"
            setPoints2(points2 + 20)
            setPrev(-1)
        } else{
            items2[current].stat = "wrong"
            items2[prev].stat = "wrong"
            setPoints2(points2 - 5)
            if (points2 <= 0){
                alert('Atenção, sua pontuação ficou negativa, você será redirecionado(a) á pagina inicial.')
                window.open('http://localhost:3000', '_self')
            } else {
                setItems2([...items2])
                setTimeout(() => {
                    items2[current].stat = ""
                    items2[prev].stat = ""
                    setItems2([...items2])
                    setPrev(-1)
                }, 1000)
            }
        }

    }

    function handleClick(id){
        if (prev === -1){
            items2[id].stat = "active"
            setItems2([...items2])
            setPrev(id)
        }else {
            check(id)
        }
    }

    return (
        <div className="container2">
            {items2.map((item2, index) =>( 
                <Card key={index} item = {item2} id={index} handleClick={handleClick}> </Card>))
            }
            <p>Pontuação atual: {points2}</p>
        </div>
    )
}

export default Cards2;