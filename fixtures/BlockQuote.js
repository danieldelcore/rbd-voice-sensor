import React from 'react';
import { useStyles, styleCollector } from 'trousers';

const styles = styleCollector('blockquote').element`
    margin: 0 auto;

    &::before {
        content: open-quote;
    }

    &::after {
        content: close-quote;
    }
  `;

const BlockQuote = props => {
    const classNames = useStyles(styles);

    return <blockquote className={classNames}>{props.children}</blockquote>;
};

export default BlockQuote;
