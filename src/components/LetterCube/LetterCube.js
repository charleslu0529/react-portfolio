import React from "react";
import classes from "./LetterCube.module.scss";

const letterCube = (props) => {
    return (
        <div className={classes.Block}>
            <div className={classes.Block__Face}>
                <span className={classes.Block__Letter}>{props.letterOne}</span>
                <span className={classes.Block__Letter}>{props.letterTwo}</span>
                <span className={classes.Block__Letter}>{props.letterOne}</span>
                <span className={classes.Block__Letter}>{props.letterTwo}</span>
                <span className={classes.Block__Letter}></span>
            </div>
        </div>
    );
};

export default letterCube;
