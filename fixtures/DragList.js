import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { DragListInner } from './';

const DragList = ({ listId, title, listItems }) => {
    return (
        <Droppable droppableId={listId}>
            {(dropProvided, dropSnapshot) => (
                <DragListInner
                    listItems={listItems}
                    dropProvided={dropProvided}
                    dropSnapshot={dropSnapshot}
                />
            )}
        </Droppable>
    );
};

export default DragList;
