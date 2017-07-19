import React, {Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      gifs:[]
    }
  }

  componentWillMount(){
    fetch('http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC')
    .then(resp => resp.json())
    .then(data => this.setState({
      gifs:data.data
    }))
  }

  handleSearch= (searchTerm) =>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(data => this.setState({
      gifs:data.data
    }))
  }

  render(){

    return(
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch handleSearch={this.handleSearch}/>
      </div>
    )
  }
}

export default GifListContainer;
