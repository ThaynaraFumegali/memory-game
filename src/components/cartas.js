import {useState} from 'react';
import Card from './carta';

function Cards1(){

    const [items, setItems] = useState([
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
       
    ].sort(() => Math.random() - 0.5))

    const [ prev, setPrev] = useState(-1)
    const [points, setPoints] = useState(30)

    function check(current){
        if (items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setPoints(points + 20)
            setPrev(-1)
        } else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setPoints(points - 5)
            if (points <= 0){
                alert('Atenção, sua pontuação ficou negativa, você será redirecionado(a) á pagina inicial.')
                window.open('http://localhost:3000', '_self')
            } else {
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ""
                    items[prev].stat = ""
                    setItems([...items])
                    setPrev(-1)
                }, 1000)
            }
        }

    }

    function handleClick(id){
        if (prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else {
            check(id)
        }
    }

    return (
        <div className="container1">
            {items.map((item, index) =>( 
                <Card key={index} item = {item} id={index} handleClick={handleClick}> </Card>))
            }
            <p>Pontuação atual: {points}</p>
        </div>
    )
}

export default Cards1;