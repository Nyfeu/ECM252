import React, { useState } from 'react'
import { Card } from 'primereact/card'
import './Accordion.css'

const Accordion = ({ itens }) => {

    const [activeIndex, setActiveIndex] = useState(null) 

    const _clickedItem = (key) => {
        
        // Mostra o item
        console.log(key)

        // Atualizar a variável de estado atribuindo o indice a ela
        setActiveIndex(key === activeIndex ? null : key)

    }

    const _constructCard = (item, key) => {
    
        const verifyContent = (key) => {
            return (key === activeIndex) ? {display: 'block'} : {display: 'none'}
        }

        const verifyIcon = (key) => {
            return (key === activeIndex) ? 'pi pi-angle-down' : 'pi pi-angle-right'
        }

        return (
    
            <Card id='accordion' key={key} className='border-1 border-400 my-3'>

                <div onClick={() => _clickedItem(key)}>
                    <i className={verifyIcon(key)}></i>
                    <h5 className='inline ml-3'>{item.title}</h5>
                </div>

                <div style={verifyContent(key)}>
                    <p>{item.content}</p>
                </div>

            </Card>

        )

    }

    const _constructJSX = () => itens.map((item, key) => _constructCard(item, key))

    return (
        <>
            {_constructJSX()}
        </>
    )
}

export default Accordion