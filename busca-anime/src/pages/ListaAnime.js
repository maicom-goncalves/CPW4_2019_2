import React, { Component } from 'react';

export default class componentName extends Component {
    constructor() {
       
        super();

        this.state = {
            animes: []
        }

        this.service = new AnimeService();
    }
    async componentDidMount() {
        const animes =
            await this.service.recuperarAnimes();
        this.setState({ animes });
    }  
  render() {
    const animes =
    this.state.animes.map(anime => (
        <Link
            to={
                {
                    pathname: rotas.anime,
                    state: { anime }
                }
            }
            key={anime.mal_id}>
            <div className="item">{anime.title}</div>
        </Link>
    ));  
    return (
        <div>

        {
            
            !this.state.animes &&
            <h2>animes</h2>
        }

        {
            this.state.animes &&
            <p id="nenhuma">
               
                lista!
            </p>
        }

        <div className="listagem">
            {animes}
        </div>
      </div>
    );
  }
}
