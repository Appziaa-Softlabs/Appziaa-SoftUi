import React, { Component } from 'react';
import '../scss/style.css';
class Searchbar extends Component {

  render() {

    return (
      <div className="s01 search-bar">
        <form>
          <fieldset>
            <legend>Discover the Amazing Products</legend>
          </fieldset>
          <div className="inner-form ">
            <div className="input-field first-wrap">
              <input id="search" type="text" placeholder="What are you looking for?" />
            </div>
            {/* <div className="input-field second-wrap">
              <input id="location" type="text" placeholder="location" />
            </div> */}
            <div className="input-field ">
              <button type="button" class="btn btn-danger btn-search">Search</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}


export default Searchbar;

