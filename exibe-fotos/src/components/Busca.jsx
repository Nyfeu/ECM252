import React, { Component } from 'react'

import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {

    state = {
        termoDeBusca: '',
    }

    onTermoAlterado = (event) => {
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {

        return (
            <form onSubmit={this.onFormSubmit} className='w-full px-3 py-3'>

                <div className="flex flex-column">

                    <IconField iconPosition='left'>

                        <InputIcon className='pi pi-search' />
                        <InputText
                            className='w-full'
                            value={this.state.termoDeBusca}
                            placeholder={this.props.dica}
                            onChange={this.onTermoAlterado}
                        />

                    </IconField>

                    <Button className='mt-1' label='OK' severity='success' outlined />

                </div>

            </form>

        )

    }

}