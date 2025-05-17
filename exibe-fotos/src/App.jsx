import React from "react"
import Busca from "./components/Busca"
import ListaImagens from "./components/ListaImagens"
import PexelsLogo from "./components/PexelsLogo"
import pexelsClient from "./utils/pexelsClient"

export default class App extends React.Component {

  state = {
    photos: []
  }

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({ query: termoDeBusca, per_page: 5}).then((result) => {
  //     this.setState({photos: result.photos})
  //   })
  // }

  onBuscaRealizada = (termoDeBusca) => {

    pexelsClient.get('/search', {
      params: {
        query: termoDeBusca,
        per_page: 5
      }
    }).then((result) => {
      this.setState({photos: result.data.photos})
    })

  }

  render() {

    return (

      <div className="grid border-1 justify-content-center w-9 m-auto">
  
        <div className="col-12">
          <PexelsLogo/>
        </div>
        <div className="col-12 ml-4">
          <h4>Exibir uma lista de...</h4>
        </div>
  
        <Busca 
          dica='Buscar...'
          onBuscaRealizada={this.onBuscaRealizada}
        />
      
        <div className="col-12">

          <ListaImagens photos={this.state.photos}/>

        </div>

      </div>
  
    )

  }

}