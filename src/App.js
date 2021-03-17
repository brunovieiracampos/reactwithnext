import './App.css';
import { Component } from 'react';

class App extends Component {

    state = {
      counter: 0,
      posts : [{
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
      }]
    };

  handlePClick = () => {
    this.setState({ name: 'Vieira Bruno' });
  }

  handleAClick = (event) =>{
    event.preventDefault();
    const { counter } = this.state;
    
    this.setState( {counter: counter + 1} );
  }


  componentDidMount(){
    
    this.handleTimeout();
    
  };

  componentDidUpdate(){
    this.handleTimeout();

  }

  handleTimeout = () => {
    const {posts, counter } = this.state;
    posts[0].title = 'O título mudou';

    setTimeout(() => {
      this.setState({
        posts,
        counter : counter + 1
      })
    }, 2000);
  }


  render(){
    const { posts, counter } = this.state; 

      return (
        <div className="App">
          <p>{counter}</p>
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
