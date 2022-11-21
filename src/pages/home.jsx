import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';
import './home.scss';

const href = window.location.href.split('/');

const API_URL = href[0] + '//' + href[2] +'/wp-json/wp/v2/';

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            content: ''
        };
    }
    
    async componentDidMount() {
        const data = await this.getPost(429);
        this.setState(data);
    }

    async getPost(value) { 
        const response = await fetch(API_URL + 'posts/' + value);
        const data = await response.json();
        return data;
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.title.rendered}
                </h1>
                <div className="content" dangerouslySetInnerHTML={{__html: this.state.content.rendered}}></div>
            </div>
        )
    }
}

