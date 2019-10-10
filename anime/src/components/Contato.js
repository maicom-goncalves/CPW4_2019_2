import React, { Component } from 'react'

import telefone from '../imagem/telefone.png';
import email from '../imagem/email.png';
import endereco from '../imagem/endereco.png';

import ItemContato from './ItemContato';
export default class Contato extends Component {
    render() {
        return (
            <div>
                <h3>Contato</h3>
                <ItemContato icone={endereco} descricao="Endereço" contato="5 de novembro , 22"/>
                
                <ItemContato
                icone={telefone}
                descricao="telefone"
                contato="(011)9 987653445"/>
                <ItemContato
                icone={email}
                descricao="email"
                contato="cpw4@yahoo.com.br"/>
               
            </div>
        );
    }
}
