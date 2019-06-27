import React from 'react';
import { css, useStyles, styleCollector } from 'trousers';

import { Avatar, BlockQuote, Lozenge } from '../fixtures';

const style = styleCollector('listitem').element`
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    box-sizing: border-box;
    min-height: 40px;
    margin-bottom: 8px;
    user-select: none;
    color: rgb(9, 30, 66);
    display: flex;
    border-radius: 2px;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: transparent;
    padding: 8px;
    transition: background-color 0.2s ease 0s, border-color 0.1s ease 0s;
  `.modifier(props => !!props.isDragging)`
    background-color: #E3FCEF;
    box-shadow: 2px 2px 1px #A5ADBA;
    border-color: #57D9A3;
  `;

const bufferStyles = css`
    display: flex;
    margin-top: 8px;
    align-items: center;
`;

const ListItem = ({ item, dragProvided, dragSnapshot }) => {
    const classNames = useStyles(style, {
        isDragging: dragSnapshot.isDragging,
    });
    const bufferClassNames = useStyles(bufferStyles);

    return (
        <div
            id={item.id}
            key={item.id}
            href={item.author.url}
            className={classNames}
            ref={dragProvided.innerRef}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}
            data-is-dragging={dragSnapshot.isDragging}
        >
            <Avatar src={item.author.avatarUrl} alt={item.author.name} />
            <div>
                <BlockQuote>{item.content}</BlockQuote>
                <footer className={bufferClassNames}>
                    <Lozenge color={item.author.colors.soft}>
                        id:{item.id}
                    </Lozenge>
                </footer>
            </div>
        </div>
    );
};

export default ListItem;
