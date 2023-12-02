import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="bottomNavigation">
                    <h5>Copyright 2019</h5>
                    <button variant="text" color="inherit">Help</button>
                    <button href="https://github.com/bill-ahmed/SpendingTracker" target="_blank" variant="text" color="inherit">About Us</button>
                </div>
            </div>
        )
    }
}

export default Home;