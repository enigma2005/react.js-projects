import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                clicks: 0,
                show: true
            };
        }

        IncrementItem = () => {
            this.setState({ clicks: this.state.clicks + 1 });
        }
        DecreaseItem = () => {
            this.setState({ clicks: this.state.clicks - 1 });
        }
        render() {
            return ( <
                div >

                <
                button onClick = { this.IncrementItem } > + < /button> <
                button onClick = { this.DecreaseItem } > - < /button> {
                    this.state.show ? < h2 > { this.state.clicks } < /h2> : '' } <
                        /div>
                );
            }
        }

        ReactDOM.render( < App / > , document.getElementById("root"));