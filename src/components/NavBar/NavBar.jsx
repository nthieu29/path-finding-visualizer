import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6">
                            Path Finding Visualizer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar/>
            </React.Fragment>
        );
    }
}

export default NavBar;