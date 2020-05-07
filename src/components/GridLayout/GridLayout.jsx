import React, {Component} from 'react';
import './GridLayout.css'
import Node from "../Node/Node";

class GridLayout extends Component {
    render() {
        let numberOfRow = this.props.gridSetting.numberOfRows;
        let numberOfCol = this.props.gridSetting.numberOfColumns;
        let rows = [];
        for (let row = 0; row < numberOfRow; row++) {
            for (let col = 0; col < numberOfCol; col++) {
                let key = row + "-" + col;
                rows.push(<Node row={row} col={col} key={key}/>);
            }
        }
        rows[0] = <Node isStartNode={true} row={0} col={0}/>
        rows[numberOfRow * numberOfCol - 1] = <Node isEndNode={true} row={numberOfRow - 1} col={numberOfCol - 1}/>
        let styles = {
            gridTemplateColumns: "repeat(" + numberOfCol + ", 20px)",
            gridTemplateRows: "repeat(" + numberOfRow + ", 20px)",
        }

        return (
            <div className="wrapper" style={styles}>
                {rows}
            </div>
        );
    }
}

export default GridLayout;