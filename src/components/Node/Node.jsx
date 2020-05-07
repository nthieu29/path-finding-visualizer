import React, {Component} from 'react';
import "./Node.css"

class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowIndex: this.props.row,
            colIndex: this.props.col,
            isStartNode: this.props.isStartNode,
            isEndNode: this.props.isEndNode,
            isVisited: this.prop.isVisited,
            isBlocked: this.props.isBlocked
        }
    }

    render() {
        let className = "node";
        if (this.props.isStartNode) className = className + " startNode";
        if (this.props.isBlocked) className = className + " blocked";
        if (this.props.isVisited) className = className + " visited";
        if (this.props.isEndNode) className = className + " endNode";
        return (
            <div className={className}/>
        );
    }
}

export default Node;