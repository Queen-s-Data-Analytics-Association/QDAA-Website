import React, { Component } from 'react';
import { FooterContainer } from './containers/footer'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2 class="title">Queen's Data Analytics Association</h2>
                <FooterContainer />
            </div>
        );
    }
}

export default Home;