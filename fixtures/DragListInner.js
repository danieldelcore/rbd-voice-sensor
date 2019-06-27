import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useStyles, styleCollector } from 'trousers';

import { ListItem } from './';

const styles = styleCollector('innerDroplist').element`
  background-color: #EBECF0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 8px;
  padding-bottom: 0;
  transition: background-color 0.2s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`.modifier(props => props.dropSnapshot.isDraggingOver)`
  background-color: #FFEBE6;
`.modifier(props => props.dropSnapshot.isDraggingFrom)`
  background-color: #E6FCFF;
`;

const DragListInner = props => {
    const classNames = useStyles(styles, props);

    return (
        <div ref={props.dropProvided.innerRef} className={classNames}>
            {props.listItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(dragProvided, dragSnapshot) => (
                        <ListItem
                            item={item}
                            dragProvided={dragProvided}
                            dragSnapshot={dragSnapshot}
                        />
                    )}
                </Draggable>
            ))}
            {props.dropProvided.placeholder}
        </div>
    );
};

export default DragListInner;
