import React, { useState, useEffect } from 'react'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'
import axios from 'axios'
import Accordion from './Accordion'
import striptags from 'striptags'

const Busca = () => {

    const [termoDeBusca, setTermoDeBusca] = useState('')
    const [resultados, setResultados] = useState([])

    useEffect(() => {

        const buscar = async () => {

            try {

                const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {

                    params: {

                        action: 'query',
                        list: 'search',
                        format: 'json',
                        origin: '*',
                        srsearch: termoDeBusca

                    }

                })

                setResultados(data?.query?.search)

                console.log(data)

            } catch (e) {

                console.log(e)

            }

        }



        const timeoutID = setTimeout(() => {
            if (termoDeBusca) buscar()
        }, 500)

        return () => clearTimeout(timeoutID)

    }, [termoDeBusca])

    const getItens = () => {
        return resultados.map((resultado) => {
            const title = resultado.title
            const content = striptags(resultado.snippet)
            return {title, content}
        })
    }

    return (
        <div>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search' />
                <InputText
                    placeholder='Buscar...'
                    onChange={(e) => setTermoDeBusca(e.target.value)}
                    value={termoDeBusca}
                />
            </IconField>
            <Accordion itens={getItens()}/>
        </div>
    )
}

export default Busca