import React from "react";
import Btn from "./button.css";
import Styles from "../commons/styles/styles.css"
import * as ChangeColorActions from "../actions/change-color.action"
import { connect } from "react-redux"

const Layout = ({ color, changeColorRed, changeColorBlue, changeColorGreen }) => {
    const getStyle = color => {
        if(color === 'red') {
            return Styles.redText;
        } else if(color === 'blue') {
            return Styles.blueText;
        } else if(color === 'green') {
            return Styles.greenText;
        } else {
            return Styles.redText;
        }
    };

    return (
        <div>
            <h1 className={getStyle(color)}>Hola mundo</h1>
            <input className={Btn.red} type="button" value="Cambiar color" onClick={changeColorRed}/>
            <input className={Btn.blue} type="button" value="Cambiar color" onClick={changeColorBlue}/>
            <input className={Btn.green} type="button" value="Cambiar color" onClick={changeColorGreen}/>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        color : state.color
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeColorRed : () => dispatch(ChangeColorActions.changeColorRed()),
        changeColorBlue : () => dispatch(ChangeColorActions.changeColorBlue()),
        changeColorGreen : () => dispatch(ChangeColorActions.changeColorGreen())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
