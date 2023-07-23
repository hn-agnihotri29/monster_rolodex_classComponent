import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';
import SearchBox from './components/search-box/serach-box.component';

class App extends Component {

  constructor() {
    super()

    this.state = {
     monsters: [],
     searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
        return {monsters: users}
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    //console.log('Render AppJs')
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monster-search-box'
        placeholder='search monster'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}


export default App;
