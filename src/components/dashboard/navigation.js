import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction";
import { faSearch, faUserCircle, faAngleDown, faBars} from "@fortawesome/free-solid-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../dashboard/_Navigation.scss";
import { ifDev } from "../../utils/removeAttribute.js";
import { setFilter } from "../../store/actions/filterActions"; 

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
    this.props.setFilter(this.state.search);
    console.log(this.props.searchTerm);
  };

  handleFilter = (e) => { 
    e.preventDefault();
    e.persist()
    this.setState({search: e.target.innerText})
    this.props.setFilter(this.state.search)
    if(e.target.innerText){
      this.props.setFilter(e.target.innerText)
    }else{
      this.props.setFilter("")
    }
    console.log(e.target.innerText)
  }
  handleClear = (e) => { 
    e.preventDefault();
    this.props.setFilter("")
    this.setState({search: ""})
  }

  submit2 = e => {
    e.preventDefault();
    this.props.setFilter(this.state.search);

  };
  
  logout = () => {
    localStorage.removeItem("token");
  };
  
  render() {
    const {setState} = this.props
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
                
                <li onClick={this.handleClear} className = "Genre"><a href="#">Clear</a></li>
                <li className = "Genre"><a href="#">Genre</a></li>
                <li className= "Year"><a href="#">Year</a>
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

                <li><a href="#">Decade</a></li>
                <li><a href="#">MPAA Rating</a></li>
                <li><a href="#">Language</a></li>
                <li><a href="#">Streaming platform</a></li> 
                <li><a href="#">Sort</a></li> 
                {/* By actor, director, screenwriter, cigematographer(sort by  */}
              </ul>
            </nav>
            <a href= "#main-menu-toggle" className = "backdrop" hidden tabIndex="-1"/>
          </div>
                  {/* menu end ------------------------------------------------------ */}
          <div id="main-menu" className="Links">
            <NavLink
              className="Groa-NavLink"
              to={`/${this.props.userid}/recommended`}
            >
              Groa
            </NavLink>

            <NavLink
              className="NavLink"
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

            {/* adding this here until all other nav functionality is added */}
            <NavLink className="NavLink" to={`/${this.props.userid}/upload`}>
              Upload Data
            </NavLink>

            <NavLink
              className="NavLink"
              to="/login"
              onClick={this.state.logout}
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

            <NavLink
              className="NavLink"
              to={`/${this.props.userid}/explore`}
            >
              {/* hidden */}
              Explore
            </NavLink>
          </div>
          
          <form  onSubmit={this.submit2} className="searchContainer">
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

            <FontAwesomeIcon className="angle-down-icon" icon={faAngleDown} />
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
export default connect(mapStateToProps, { loginAction, setFilter })(Navigation);