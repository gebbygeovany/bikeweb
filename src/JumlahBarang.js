import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon } from 'semantic-ui-react';

class JumlahBarang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            show: true
        };
    }

    IncrementItem = () => {
        if (this.state.clicks < 10) {
            this.setState({ clicks: this.state.clicks + 1 });
        }
    }
    DecreaseItem = () => {
        if (this.state.clicks > 0) {
            this.setState({ clicks: this.state.clicks - 1 });
        }
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.IncrementItem}>Click to increment by 1</button>
                <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
                <button onClick={this.ToggleClick}>
                    {this.state.show ? 'Hide number' : 'Show number'}
                </button>
                {this.state.show ? <h2>{this.state.clicks}</h2> : ''} */}

                <Button.Group icon style={{paddingBottom:'0px'}}>
                    <Button onClick={this.DecreaseItem}>
                        <Icon name='minus' />
                    </Button>
                    <Button style={{backgroundColor:'white'}}>
                        <span className='hargaBarangGrid'>{this.state.clicks}</span>
                    </Button>
                    <Button onClick={this.IncrementItem}>
                        <Icon name='plus' />
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default JumlahBarang;