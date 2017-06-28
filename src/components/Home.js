import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      enteties: [
        {title: 'Foo'},
        {title: 'Boo'}
      ]
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const enteties = res.data;
        this.setState({ enteties });
      });
  }


  render(){
    return(
      <div className='mainWindow'>
        {this.state.enteties.map(a =>
          <li key={a.id}>User:{a.name} wrote: {a.body}</li>
        )}
      </div>
    )
  }
}

export default Home;
