import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts';

class App extends Component {

    state = {
      posts : []
    };

  handlePClick = () => {
    this.setState({ name: 'Vieira Bruno' });
  };

  handleAClick = (event) =>{
    event.preventDefault();
    const { counter } = this.state;
    
    this.setState( {counter: counter + 1} );
  };

 async componentDidMount(){
    await this.loadPosts();
  };

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts(); 

    this.setState({posts : postsAndPhotos});
  }

  render(){
    const { posts } = this.state; 

      return (
        <section className="container">
          <Posts posts = {posts} />
        </section>
        
    );
  }
}

export default App;
