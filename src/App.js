import React,{Component} from 'react';
import Cardlist from "./containers/Cardlist";
import Searchfield from "./containers/Searchfield"

class App extends Component {
  
  constructor()
  {
    super();
    this.state =
    {
      users : [],
      searchfield : ""
    }
  }

  onSearchchange = (event) =>{
    this.setState({searchfield : event.target.value});
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(user => this.setState({users : user}))
  }
  
  render()
  {
    const {users,searchfield} = this.state;
    const filteredusers = users.filter(user => {
      return user.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !users.length ? 
     <h1 classname="f1 helvetica">Loading</h1> :
    (<div className="App tc">
      <h1 className="f1 helvetica">Posts</h1>
      <Searchfield searchchange={this.onSearchchange}/>
      <Cardlist users={filteredusers} />
    </div>)
  }
}

export default App;
