import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {

  state = {
    posts : [],
    allPosts : [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
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
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts(); 

    this.setState({
      posts : postsAndPhotos.slice(page, postsPerPage), 
      allPosts: postsAndPhotos
    });
  };

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
 
  };

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue : value});
  }

  render(){
    const { 
      posts,
      page,
      postsPerPage,
      allPosts,
      searchValue 
    } = this.state; 
    const noMorePosts = page + postsPerPage >= allPosts.length;

      return (

        <section className="container">
          {
            //verdadeiro
            !!searchValue && 
              (
                <>
                  <h1>Search Value: {searchValue}</h1>
                  <br />
                </>
              )
          }
          <input 
            type="search" 
            onChange={this.handleChange}
            value={searchValue}/>
          <br />
          <br />
          <br />
          <Posts posts = {posts} />
          <div className="button-container">
            {
              //falso
              !searchValue &&
                (
                  <Button 
                    text="Load More Posts"
                      onClick={this.loadMorePosts}
                      disabled={noMorePosts}
                  />
                )
            }
            
          </div>
        </section>
    );
  };
};