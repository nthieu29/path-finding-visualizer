import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import BlockIcon from '@material-ui/icons/Block';
import Chip from "@material-ui/core/Chip";

const styles = () => ({
    card: {
        marginBottom: "30px"
    },
    startingPoint: {
        color: "#27ae60",
        border: "1px solid #27ae60"
    },
    endingPoint: {
        color: "#e74c3c",
        border: "1px solid #e74c3c",
        marginLeft: "10px"
    },
    blockPoint: {
        marginLeft: "10px"
    },
    cardElement: {
        marginLeft: "10px"
    },
    algorithmSelect: {
        marginLeft: "10px",
        marginRight: "10px",
        minWidth: "70px"
    },
    pathNode: {
        color: "#f1c40f",
        marginLeft: "10px"
    },
    visitedNode: {
        color: "#4fc3f7",
        marginLeft: "10px"
    },
    unvisitedNode: {
        color: "#64b5f6"
    }
});

const algorithms = [
    {
        value: 'BFS',
        label: 'BFS',
    },
    {
        value: 'DFS',
        label: 'DFS',
    }
];

class VisualControl extends Component {
    constructor(props) {
        super(props);
        this.setRows = this.props.rowChangeHandler;
        this.handleRowChange = this.handleRowChange.bind(this);
        this.setCols = this.props.columnChangeHandler;
        this.handleColChange = this.handleColChange.bind(this);
    }

    handleRowChange(event) {
        if (event.target.value > 0) {
            this.setRows(event.target.value);
        }
    }

    handleColChange(event) {
        if (event.target.value > 0) {
            this.setCols(event.target.value);
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={5} justify="center">
                <Grid item xs={12} sm={5}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Grid Settings
                            </Typography>
                            <TextField
                                id="numberOfRow"
                                label="Rows"
                                variant="outlined"
                                type="number"
                                size="small"
                                defaultValue={this.props.gridSettings.numberOfRows}
                                onChange={this.handleRowChange}
                                required/>
                            <TextField
                                className={classes.cardElement}
                                id="numberOfCol"
                                label="Columns"
                                variant="outlined"
                                type="number"
                                size="small"
                                defaultValue={this.props.gridSettings.numberOfColumns}
                                onChange={this.handleColChange}
                                required/>
                            <TextField
                                className={classes.algorithmSelect}
                                id="algorithm"
                                select
                                label="Algorithm"
                                variant="outlined"
                                size="small"
                                defaultValue={this.props.gridSettings.algorithm}
                            >
                                {algorithms.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <Button
                                className={classes.cardElement}
                                variant="outlined"
                                color="primary"
                                size="large"
                                startIcon={<Icon>search</Icon>}
                            >
                                Find
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Grid's elements
                            </Typography>
                            <Button variant="outlined" className={classes.startingPoint}>
                                <PlayArrowIcon/> Start
                            </Button>
                            <Button variant="outlined" className={classes.endingPoint}>
                                <GolfCourseIcon/> End
                            </Button>
                            <Button variant="outlined" className={classes.blockPoint}>
                                <BlockIcon/> Block
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Grid's Node Status
                            </Typography>
                            <Chip label="Unvisited" variant="outlined" className={classes.unvisitedNode}/>
                            <Chip label="Visited" variant="outlined" className={classes.visitedNode}/>
                            <Chip label="Path" variant="outlined" className={classes.pathNode}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        );
    }
}

export default withStyles(styles, {withTheme: true})(VisualControl);