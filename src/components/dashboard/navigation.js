import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { faSearch,faUserCircle,faAngleDown,faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../dashboard/navigation.scss";
import {faBell, faQuestionCircle} from '@fortawesome/free-regular-svg-icons';


class Navigation extends Component {

    state = {

            search: ''
    };
    

    handleChange = e =>{
        this.setState({search: e.target.value})
    }
        
    render() {
        return(

            <div className="mainContainer">

                {/* the top left bar icon */}

                <div className="Bars">
                <FontAwesomeIcon 
                className='bars-icon' 
                icon={faBars}
              />
              <i class="far fa-bars"></i>
               </div>

                {/* The links on top are here */}

                <div className="Links">
                    
                <NavLink className='Groa' to="/">
                    Groa 
                </NavLink>

                <NavLink className='NavLink' to="/trending">
                    Trending
                </NavLink>

                <NavLink  className='NavLink' to="/recommended"> 
                    Recommended
                </NavLink>

                <NavLink className='NavLink' to="/watchlist">
                    Watchlist 
                </NavLink>

                <NavLink className='NavLink' to="/explore"> 
                    Explore
                </NavLink>
                </div>

                {/* The search inputs and icons are here */}

                <div className='searchContainer'>
                <FontAwesomeIcon 
                className='search-icon' 
                icon={faSearch}
                 />
                <input className='searchBox'
                type="text"
                name="search" 
                value={this.search} 
                onChange={this.handleChange} 
                placeholder= 'Search...'/>
             </div>

                {/* The icons are here */}  

             <FontAwesomeIcon 
                className='bell-icon' 
                icon={faBell}
              />
                
                <FontAwesomeIcon 
                className='question-icon' 
                icon={faQuestionCircle}
              />

                <FontAwesomeIcon 
                className='user-circle-icon' 
                icon={faUserCircle}
              />

                <FontAwesomeIcon 
                className='angle-down-icon' 
                icon={faAngleDown}
              />
               
            </div>
        )
    }
}

export default Navigation;