import React from 'react';
import { useStyles, styleCollector } from 'trousers';

const styles = styleCollector('lozenge').element`
    background-color: rgb(255, 250, 230);
    border-radius: 2px;
    color: #6B778C;
    flex-grow: 0;
    font-size: 0.7857142857142857em;
    font-style: inherit;
    font-weight: normal;
    line-height: 1.45;
    margin: 0px;
    padding: 4px;
  `;

const Lozenge = props => {
    const classNames = useStyles(styles);

    return (
        <small className={classNames} style={{ backgroundColor: props.color }}>
            {props.children}
        </small>
    );
};

export default Lozenge;
