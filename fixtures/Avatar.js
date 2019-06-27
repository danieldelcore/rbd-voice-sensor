import React from 'react';
import { useStyles, styleCollector } from 'trousers';

const style = styleCollector('avatar').element`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    flex-shrink: 0;
    flex-grow: 0;
    border-radius: 50%;
  `;

const Avatar = ({ src, alt }) => {
    const classNames = useStyles(style);

    return <img className={classNames} src={src} alt={alt} />;
};

export default Avatar;
