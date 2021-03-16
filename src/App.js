import './App.css';
import { Component } from 'react';

class App extends Component {

    state = {
      posts : [
        {
          id: 1,
          title: 'Título 1',
          body: 'corpo do título 1'
        },
        {
          id: 2,
          title: 'Título 2',
          body: 'corpo do título 2'
        },
        {
          id: 3,
          title: 'Título 3',
          body: 'corpo do título 3'
        }
      ]
    };

  handlePClick = () => {
    this.setState({ name: 'Vieira Bruno' });
  }

  handleAClick = (event) =>{
    event.preventDefault();
    const { counter } = this.state;
    
    this.setState( {counter: counter + 1} );
  }

  render(){
    const { posts } = this.state; 

      return (
        <div className="App">
          {posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
    );
  }
}

export default App;
