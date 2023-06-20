import React from 'react';
import './catFriends.css'
import SearchBox from '../features/SearchBox.js'
import CardList from '../features/CardList.js'
import Scroll from '../features/Scroll.js'
import ErrorBoundary from '../features/ErrorBoundary';

// Has to be a class in order to use an object outside this function
class CatFriends extends React.Component {

  // construct the singleton state object
  constructor() {
    // super initializes the App class, which state is a child of
    super()
    this.state = {
      // initial values
      cats: [],
      searchField: ''
    }
  }

  // Using the => function style makes sure "this" is referring to App Class.
  // Otherwise it refers to the SearchBox Class that called the function.
  searchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  // Acts as my HTML body
  render() {
    // Compare the searchField value with each cat name to filter my array
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    // If 0 length (not 0 = true)
    if (!this.state.cats.length) return <h1>Loading</h1>
    else {
      return (
        <div>
          <header className='tc'>
            <h1 className='f1'>Cat Friends</h1>
            {/* We pass this function into the SearchBox component, so 
            it can call this function with the onChange event */}
            <SearchBox searchChange={this.searchChange} />
          </header>
          <main>
            <Scroll>
              {/* If an error occurs in CardList, return alternative 
              HTML in its place */}
              <ErrorBoundary>
                <CardList cats={filteredCats} />
              </ErrorBoundary>
            </Scroll>
          </main>
        </div>
      );
    }
  }

  // Once the mounting is complete, run this function
  // automatically thanks to lifecycle hooks
  componentDidMount() {
    // Do HTTP GET request with fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // "then" convert the response to json
        return response.json();
      })
      .then(users => {
        // "then" assign the json array (users) to my state
        this.setState({ cats: users });
      });
  }
}

export default CatFriends;