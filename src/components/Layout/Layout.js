import React, {Component} from 'react'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state= {
        showSideDrawer: false
    }


    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawertoggleClicked =() => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }


    render () {
        return ( <React.Fragment>
            <div>
                <Toolbar 
                drawertoggleClicked={this.drawertoggleClicked}
                />
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.SideDrawerClosedHandler}/>
            </div>
    
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </React.Fragment>)
    }
} 

export default Layout