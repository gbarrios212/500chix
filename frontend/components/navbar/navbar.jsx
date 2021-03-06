import React from 'react';
import { Link, Route } from 'react-router-dom';
import Search from '../search/search';
import AlertsContainer from './alerts_container';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    componentDidMount(){
        this.setState({ show: false });
    }

    closeDropdown(){
        this.setState({show: false})
    }

    toggleClass(e) {
        e.preventDefault();
        const currentState = this.state.show;
        this.setState({ show: !currentState });
    }

    handleLogout(){
        this.setState({show: false})
        this.props.logout()
        .then(this.props.history.push("/"))
        // .then(this.setState({show: false}))
    }

    render(){
        const logo = (
            <div className="logo">
                <Link to="/" onClick={this.closeDropdown}>500chix</Link>
            </div>
        )

        let alerts = this.props.message ? <AlertsContainer message={this.props.message} /> : <div></div>;

        if (!this.props.currentUser){
            return(
            <div>

                <section className="header">
                    {logo}
                    <div className="nav">
                        <i className="fas fa-search" ></i>
                            <Search/>
                            {/* <input className="search" type="text" placeholder="Search 500chix"/>  */}
                        <span className="login-styling">
                            <Link to="/login">Log In</Link>
                        </span>
                        <span className="signup-styling">
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    </div>
                </section>
            </div>
            )
        } else {
            return(
                <div>
                    <section className="header" >
                    
                        {logo}
                        <div className="nav">


                            <i className="fas fa-search" ></i>
                            <Search />
                            {/* <input className="search" type="text" placeholder="Search 500chix" onClick={this.closeDropdown}/> */}
                            <div className="dropdown">
                                <div className={this.state.show ? "dropdown-modal" : ""} onClick={this.closeDropdown}></div>
                                <div className="avatar-navbar-container">
                                    <button onClick={this.toggleClass} className="dropbtn">
                                        <img className="avatar-navbar" src={this.props.currentUser.profilePictureUrl} alt=""/>
                                            {/* <img src={this.props.currentUser.profilePictureUrl} alt=""/> */}
                                            {/* <i className="fas fa-user-circle"></i> */}
                                    </button>
                                </div>
                                <div id="myDropdown" className={this.state.show ? 'dropdown-content show' : 'dropdown-content'}>
                                    {/* <button className="logout" onClick={this.props.logout}>Log Out</button> */}
                                    <button className="logout" onClick={this.handleLogout}>Log Out</button>
                                    <Link to={`/users/${this.props.currentUser.id}`}><button className="profile" onClick={this.closeDropdown}>Profile</button></Link>
                                </div>
                            </div>
                            <Link to="/manage/upload" onClick={this.closeDropdown}>
                                <i className="fas fa-plus"></i>    
                            </Link>
                        </div>
                    </section>
                    {alerts}
                </div>
            )
        }
    }
}

export default Navbar;