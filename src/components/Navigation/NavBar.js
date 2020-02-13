import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,Button,NavLink
} from 'reactstrap';



  import './NavBar.css';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.submitSearch=this.submitSearch.bind(this);
    this.handleSearchInput=this.handleSearchInput.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchText:"",
        };
  }
  //to update the state with the searchText input
        async handleSearchInput(e){
        this.setState({searchText:e.target.value});
    }
    // submitSearch will navigate to the url sending the searchText in the url by window.location 
      submitSearch = (e) => {
        e.preventDefault();
        window.location='/search?key='+ this.state.searchText
    
}
      
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar className='Nav'  dark  expand="md">
         
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

          <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink   href="/">Home</NavLink> 
          </NavItem>
          <NavLink    href="/now_playing">Now Playing</NavLink> 
          <NavLink     href="/popular"> Popular </NavLink> 
          <NavLink  href="/top_rated">Top Rated</NavLink> 
          </Nav>
          
            <Nav className="ml-auto " navbar>
                  
        <NavItem className="form-inline my-2 my-lg-0 mr-lg-2">
        <input
        form-control input-lg
         placeholder="Search for movies..."
         ref={input => this.search = input}
         onChange={this.handleSearchInput}/>
           </NavItem>


          <NavItem>
           <Button  color="danger" size="md"  onClick={this.submitSearch} >Search </Button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
