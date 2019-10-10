import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <span id="titulo">
                    <a href="/inicio">ANIME</a>
                </span>
            </div>
        );
    }
}
