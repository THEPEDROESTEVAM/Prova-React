import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Esporte extends Component
{

    state = {
        noticias: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`everything?q=Esporte&apiKey=e7a5a329d48d4e45b25084c1c9532d97`);

        const { docs } = response.data.articles;

        //console.log(response.data.results);
        this.setState({ noticias: response.data.articles });
    }

    render()
    {   
        const {noticias} = this.state;
        
        return(
        <div className="container">
            {
                noticias.map((noticia, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`${noticia.urlToImage}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <h3>{ noticia.title }</h3>
                            <p>{ noticia.description }</p>
                        </div>
                        <div className="col-md-2">
                            <p><b>Autor: </b>{ noticia.source.name }</p>
                            <a className="btn btn-primary" href={`${noticia.url}`} target="_blank">Ver no site</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Esporte;
