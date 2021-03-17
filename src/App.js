import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

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

  componentDidMount(){
    this.loadPosts();
   
  };

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson =  await posts.json();
    const photosJson =  await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({posts : postsAndPhotos});
  }

  render(){
    const { posts } = this.state; 

      return (
        <section className="container">
          <div className="App" className="posts">
            {posts.map(post => (
              <PostCard { ...post } key={post.id}/>
            ))}
          </div>
        </section>
        
    );
  }
}

export default App;
