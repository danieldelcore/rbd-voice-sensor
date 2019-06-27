import React, { useState, useEffect } from 'react';
import { useStyles, styleCollector } from 'trousers';

const styles = styleCollector('transcript').element`
    font-size: 25px;
`.modifier(props => !!props.interim)`
    color: darkgrey;
`;

const Transcript = props => {
    const classnames = useStyles(styles, props);

    return props.children ? (
        <p className={classnames}>{props.children}</p>
    ) : null;
};

export default Transcript;
