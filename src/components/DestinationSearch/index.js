// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeRequest = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredList = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-bg">
        <h1>Destination Search</h1>
        <div className="searchContainer">
          <input
            type="search"
            placeholder="search"
            value={searchInput}
            onChange={this.onChangeRequest}
            className="search-bar"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="places-container">
          {filteredList.map(eachPlace => (
            <DestinationItem
              name={eachPlace.name}
              image={eachPlace.imgUrl}
              key={eachPlace.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
