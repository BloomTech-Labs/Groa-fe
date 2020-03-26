import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import { recommendationAction } from "../../store/actions/recommendationActions";
import {
  faSearch,
  faUserCircle,
  faAngleDown,
  faBars,
  faSync
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ifDev } from "../../utils/removeAttribute.js";
import { setFilter, setFilterArray } from "../../store/actions/filterActions"; 
import "../../scss/components/_navigation.scss";
import GroaLogo from "../auth/Groa-logo-B2AA.png";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      year: "",
      genres: "", 
      submit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.logout = this.logout.bind(this);
    this.getNewRecommendations = this.getNewRecommendations.bind(this);
    this.ApplyFilter = this.ApplyFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.submit2 = this.submit2.bind(this); 
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
    console.log('search status', this.state.search);
    this.props.setFilter(this.state.search);
    this.props.setFilterArray(this.state);
    console.log(this.props.searchTerm);
  };
  //filters year
  handleFilter = (e) => { 
    e.preventDefault();
    e.persist()
    this.setState({year: e.target.innerText})
    this.setState({submit: true})
    this.props.setFilter(this.state)
    if(e.target.innerText){
      this.props.setFilterArray(this.state)
    }else{
      this.props.setFilter("")
    }
    console.log(e.target.innerText)
  }
  //filters genre
  genreFilter = (e) => { 
    e.preventDefault();
    e.persist()
    this.setState({genres: e.target.innerText})
    this.setState({submit: true})
    this.props.setFilter(this.state)
    
    if(e.target.innerText){
      this.props.setFilterArray(this.state)
    }else{
      this.props.setFilter("")
    }
    console.log(e.target.innerText)
  }
  handleClear = (e) => { 
    e.preventDefault();
    this.props.setFilter("")
    this.setState({search: "",
      year: "",
      genres: "", 
      submit: false})
  }

  submit2 = e => {
    e.preventDefault();
    e.persist();
    const {search,year,genres,submit} = this.state
    this.setState({submit: true})
    console.log('submit2 click problem', this.state);
    this.props.setFilter(this.state.search);
    this.props.setFilterArray(this.state);
    // this.setState({})
  };
  ApplyFilter = (e) => {
      e.preventDefault();
      e.persist();

    
      this.setState({submit: true})      
      console.log('double click problem', this.state);
      this.props.setFilter(this.state.search);
      this.props.setFilterArray(this.state);
    
    // this.setState({})
  };
  
  logout = () => {
    localStorage.removeItem("token");
  };

  getNewRecommendations = (id) => {
    // Gets new recommendations for account, if applicible
    this.props.recommendationAction(id)
  }

  
  render() {
    const {setState} = this.props
    const genresArray = ['Documentary','Drama','Horror','Mystery','Adventure','History','Musical','Action','Comedy','Thriller','Crime','Romance','Biography', 'Music', '\\N','Family', 'Sci-Fi', 'Fantasy','Western', 'Sport','Animation','War','Adult','Reality-TV', 'News', 'Talk-Show','Game-Show','Film-Noir']
    return (
      <div className="mainContainer" data-test={ifDev("navigation")}>
        <div className="navContainer">
          <div className="Bars" > 
          {/* hidden */}
          
          {/* meunu start  ------------------------------------------*/}
            <a href="#main-menu" className="menu-toggle" aria-label= "Open main menu" 
              id = "main-menu-toggle">
              <FontAwesomeIcon className="bars-icon" icon={faBars} aria-label="main menu" />
              
                <span className = "sr-only"> Open main menu</span>
                <i aria-hidden='true' className="far fa-bars"></i>
            </a>

            <nav id="main-menu" className = "main-menu">
              <div className="title">
              <h2>Filter Results</h2>
              <a href="#main-menu-toggle" className="menu-close">X</a>
              </div>
              <ul>
                
                <li onClick={this.ApplyFilter} style = {{fontSize: "1.5rem", fontWeight: "bold"}}className = "Genre"><a href="#">Apply filter</a></li>

                <li onClick={this.handleClear} style = {{fontSize: "1.5rem", fontWeight: "bold"}}className = "Genre"><a href="#">Clear</a></li>

                <li className = "Genre"><a href="#">Genre <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
                <i className="far fa-angle-down"></i></a>
                <ul className="dropdown">
                {
                  genresArray.map(x => { return <li onClick={this.genreFilter}>{x}</li>})

                }
                </ul>
                
                </li>

                <li className= "Year"><a href="#">Year <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
                <i className="far fa-angle-down"></i></a>
                <ul className="dropdown">
                  <li onClick={this.handleFilter}>2020</li>
                  <li onClick={this.handleFilter}>2019</li>
                  <li onClick={this.handleFilter}>2018</li>
                  <li onClick={this.handleFilter}>2017</li>
                  <li onClick={this.handleFilter}>2016</li>
                  <li onClick={this.handleFilter}>2015</li>
                  <li onClick={this.handleFilter}>2014</li>
                  <li onClick={this.handleFilter}>2013</li>
                  <li onClick={this.handleFilter}>2012</li>
                  <li onClick={this.handleFilter}>2011</li>
                  <li onClick={this.handleFilter}>2010</li>
                  <li onClick={this.handleFilter}>2009</li>
                  <li onClick={this.handleFilter}>2008</li>
                  <li onClick={this.handleFilter}>2007</li>
                  <li onClick={this.handleFilter}>2006</li>
                  <li onClick={this.handleFilter}>2005</li>
                  <li onClick={this.handleFilter}>2004</li>
                  <li onClick={this.handleFilter}>2003</li>
                  <li onClick={this.handleFilter}>2002</li>
                  <li onClick={this.handleFilter}>2001</li>
                  <li onClick={this.handleFilter}>2000</li>
                  <li onClick={this.handleFilter}>1999</li>
                  <li onClick={this.handleFilter}>1998</li>
                  <li onClick={this.handleFilter}>1997</li>
                  <li onClick={this.handleFilter}>1996</li>
                  <li onClick={this.handleFilter}>1995</li>
                  <li onClick={this.handleFilter}>1994</li>
                  <li onClick={this.handleFilter}>1993</li>
                  <li onClick={this.handleFilter}>1992</li>
                  <li onClick={this.handleFilter}>1991</li>
                  <li onClick={this.handleFilter}>1990</li>
                  <li onClick={this.handleFilter}>1989</li>
                  <li onClick={this.handleFilter}>1988</li>
                  <li onClick={this.handleFilter}>1987</li>
                  <li onClick={this.handleFilter}>1986</li>
                  <li onClick={this.handleFilter}>1985</li>
                  <li onClick={this.handleFilter}>1984</li>
                  <li onClick={this.handleFilter}>1983</li>
                  <li onClick={this.handleFilter}>1982</li>
                  <li onClick={this.handleFilter}>1981</li>
                  <li onClick={this.handleFilter}>1980</li>
                  <li onClick={this.handleFilter}>1979</li>
                  <li onClick={this.handleFilter}>1978</li>
                  <li onClick={this.handleFilter}>1977</li>
                  <li onClick={this.handleFilter}>1976</li>
                  <li onClick={this.handleFilter}>1975</li>
                  <li onClick={this.handleFilter}>1974</li>
                  <li onClick={this.handleFilter}>1973</li>
                  <li onClick={this.handleFilter}>1972</li>
                  <li onClick={this.handleFilter}>1971</li>
                
                </ul>
                </li>
                <li className = "Genre"><a href="#">Language <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
                <i className="far fa-angle-down"></i></a>
                
                <ul className="dropdown">
                {/* {
                  genresArray.map(x => { return <li onClick={this.genreFilter}>{x}</li>})

                } */}
                </ul>
                
                </li>

                {/* We also wanted to implement sorting by these criteria as well, but ran out of
                time to do so. values need to be added to table such as languages etc. down below.*/}

                {/* <li><a href="#">Decade</a></li> */}
                {/* <li><a href="#">MPAA Rating</a></li>
                <li><a href="#">Language</a></li>
                <li><a href="#">Streaming platform</a></li> 
                <li><a href="#">Sort</a></li>  */}
                {/* By actor, director, screenwriter, cigematographer(sort by  */}
              </ul>
            </nav>
            <a href= "#main-menu-toggle" className = "backdrop" hidden tabIndex="-1"/>
          </div>
                  {/* menu end ------------------------------------------------------ */}
          <div id="main-menu" className="Links">
            <img src={GroaLogo} alt="Groa Logo" />
                         
            <NavLink
              className="NavLink hidden"
              to={`/${this.props.userid}/trending`}
            >
              {/* hidden */}
              Trending
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Recommended
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/ratings`}
            >
              Ratings
            </NavLink>

            {/* adding this here until all other nav functionality is added */}
            <NavLink className="NavLink" to={`/${this.props.userid}/upload`}>
              Upload Data
            </NavLink>

            <NavLink
              className="NavLink"
              onClick={this.logout}
              data-test={ifDev("logoutBtn")}
              to="/login"
            >
              Logout
            </NavLink>

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/watchlist`}
            >
              {/* hidden */}
              Watchlist
            </NavLink>
                {/* --------------------------marked hidden links above and below in classNames
                ----------in future delete the word hidden from classname and to add links
                ------to nav bar */}
            <NavLink
              className="NavLink hidden"
              to={`/${this.props.userid}/explore`}
            >
              {/* hidden */}
              Explore
            </NavLink>
            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/filter`}
            >
              {/* hidden */}
              Find Movies
            </NavLink>
          </div>
          
          <form  onSubmit={this.submit2} className="searchContainer">
          <button className="recommendations-button" onClick={()=>this.getNewRecommendations(this.props.userid)}>
              <FontAwesomeIcon className="sync-icon" icon={faSync} />
                <i className="fas fa-sync"></i> Update your recs
          </button>

          
            <FontAwesomeIcon className="search-icon fa-icons" icon={faSearch} />
            <input
              className="searchBox"
              type="text"
              name="search"
              value={this.search}
              onChange={this.handleChange}
              placeholder="search..."
             
            />
          </form>

          <div className="fa-icons">
            <FontAwesomeIcon className="bell-icon  hidden" icon={faBell} />
            <i className="far fa-bell"></i>

            <FontAwesomeIcon
              className="question-icon  hidden"
              icon={faQuestionCircle}
            />
            <i className="far fa-question-circle  hidden"></i>

            <FontAwesomeIcon
              className="user-circle-icon  hidden"
              icon={faUserCircle}
            />
            <i className="far fa-user-circle"></i>

            <FontAwesomeIcon className="angle-down-icon hidden" icon={faAngleDown} />
            <i className="far fa-angle-down"></i>
          </div>
        </div>
        {/* END navContainer */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.login.userid,
    searchTerm: state.filter.searchTerm
  };
};
export default connect(mapStateToProps, 
  { loginAction, setFilter, setFilterArray,recommendationAction
})(Navigation);
