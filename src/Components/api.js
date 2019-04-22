import React from 'react';
import axios from 'axios';
import './api.css';

class Api extends React.Component {
    constructor (props)
    {
        super();

        this.state = {
            name : [],
            count : 0
        }
    }


    trick = () => {
    this.setState(prevState => ({
        count : prevState.count + 1
    }));
    }

    componentDidMount() {
        let fnames = [];

    axios.get('https://dev-util.edyst.com/challenge/person/-1000?end_yob=2018')
    .then((response) => {

        response.data.map(data => {
            fnames.push(data.name);
        });

        this.setState({
            name : fnames
        })

            this.interval = setInterval(() =>
            this.trick()
            , 1000);

    })
    .catch((e) => {
        console.log(e);
    })
    
}

componentWillUnmount() {
    clearInterval(this.interval);
  }

    render()
    {
        const {name,  count} = this.state;

        return (
            <div className = 'Api'>
                {
                       <h1>{ name[count] }</h1>
                }
            </div>
        )
    }
}

export default Api;