import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ListItem } from './';

const DragList = ({ listId, title, listItems }) => {
    return (
        <Droppable droppableId={listId}>
            {(dropProvided, dropSnapshot) => (
                <React.Fragment>
                    {title}
                    <div ref={dropProvided.innerRef}>
                        {listItems.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(dragProvided, dragSnapshot) => (
                                    <ListItem
                                        item={item}
                                        dragProvided={dragProvided}
                                        dragSnapshot={dragSnapshot}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {dropProvided.placeholder}
                    </div>
                </React.Fragment>
            )}
        </Droppable>
    );
};

export default DragList;
