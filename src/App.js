import React  from 'react';
import Cardlist from './Cardlist';
import Scroll from './Scroll'
import SearchBox from './SearchBox'
import { Component } from 'react/cjs/react.production.min';
import './App.css'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchfields:'',
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        })
        
    }
    onSearchChange=(event)=>{
        this.setState({searchfields:event.target.value});     
        
    }
    render(){
        const filterrobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return(
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                    <Cardlist robots = {filterrobots}/>
                    </Scroll>
                    
                </div>        
            );
        }
            
        
        
    }
    
}
export default App;