import React from "react";
import classes from "./Forthcoming.module.scss";
import LetterCube from "../LetterCube/LetterCube";

const forthcoming = (props) => (
    <div className={classes.Container}>
        <div className={classes.Word}>
            <LetterCube letterOne="C" letterTwo="S" index="6" />
            <LetterCube letterOne="O" letterTwo="O" index="5" />
            <LetterCube letterOne="M" letterTwo="O" index="4" />
            <LetterCube letterOne="I" letterTwo="N" index="3" />
            <LetterCube letterOne="N" letterTwo="." index="2" />
            <LetterCube letterOne="G" letterTwo="." index="1" />
        </div>
    </div>
);

export default forthcoming;
