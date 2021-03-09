import React from "react";
import classes from "./Forthcoming.module.scss";

const forthcoming = () => (
    <div className={classes.Container}>
        <div className={classes.Word}>
            <div className={classes.Block}>
                <div className={classes.Block__Face}>
                    <span className={classes.Block__Letter}>c</span>
                    <span className={classes.Block__Letter}>s</span>
                    <span className={classes.Block__Letter}>c</span>
                    <span className={classes.Block__Letter}>s</span>
                    <span className={classes.Block__Letter}></span>
                </div>
            </div>
        </div>
    </div>
);

export default forthcoming;
