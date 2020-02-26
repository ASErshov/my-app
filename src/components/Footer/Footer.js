import React from 'react';
import classes from './Footer.module.css'
import { withRouter } from 'react-router-dom';

const Footer = withRouter((props, {history}) =>  (
        <footer onClick = { () => props.history.push(props.link)}>
            <div className={classes.next}>
                Листайте вниз
                <div></div>
            </div>
        </footer>
    )
);

export default Footer;