import React from 'react'

class GifSearch extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      searchTerm:''
    }
  }

  handleInputChange = (e) => {
     this.setState({
       searchTerm: e.target.value,
     })

  handleBiz = (e) =>{
    e.preventDefault()
    this.props.handleSearch(this.state.searchTerm)
  }

  render(){
    return(
      <form onSubmit={this.handleBiz}>
      <input type='text' value={this.state.searchTerm} onChange={this.handleInputChange}/>
      <button type='submit'>Submit</button>
      </form>
    )
  }

}
