import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useStyles, styleCollector } from 'trousers';

import { DragListInner } from './';

const style = styleCollector('droplist').element`
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `;

const DragList = ({ listId, title, listItems }) => {
    const classNames = useStyles(style);

    return (
        <div className={classNames}>
            <Droppable droppableId={listId}>
                {(dropProvided, dropSnapshot) => (
                    <DragListInner
                        listItems={listItems}
                        dropProvided={dropProvided}
                        dropSnapshot={dropSnapshot}
                    />
                )}
            </Droppable>
        </div>
    );
};

export default DragList;
