import React, {Component} from 'react';
import NavBar from "../NavBar/NavBar";
import GridLayout from "../GridLayout/GridLayout";
import VisualControl from "../VisualControl/VisualControl";

class Visualizer extends Component {
    constructor() {
        super();
        this.state = {
            gridSettings: {
                numberOfRows: 5,
                numberOfColumns: 30,
                algorithm: "BFS"
            }
        }
        this.setNumberOfColumns = this.setNumberOfColumns.bind(this);
        this.setNumberOfRows = this.setNumberOfRows.bind(this);
    }

    setNumberOfRows(newRows) {
        this.setState(prevState => ({
            gridSettings: {
                ...prevState.gridSettings,
                numberOfRows: newRows
            }
        }))
    }

    setNumberOfColumns(newCols) {
        this.setState(prevState => ({
            gridSettings: {
                ...prevState.gridSettings,
                numberOfColumns: newCols
            }
        }))
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <VisualControl gridSettings={this.state.gridSettings} rowChangeHandler={this.setNumberOfRows}
                               columnChangeHandler={this.setNumberOfColumns}/>
                <GridLayout gridSetting={this.state.gridSettings}/>
            </React.Fragment>
        );
    }
}

export default Visualizer;