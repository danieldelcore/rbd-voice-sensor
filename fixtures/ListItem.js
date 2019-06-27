import React from 'react';

const ListItem = ({ item, dragProvided, dragSnapshot }) => {
    return (
        <div
            key={item.id}
            href={item.author.url}
            // isDragging={dragSnapshot.isDragging}
            // colors={item.author.colors}
            ref={dragProvided.innerRef}
            {...dragProvided.draggableProps}
            {...dragProvided.dragHandleProps}
            data-is-dragging={dragSnapshot.isDragging}
        >
            <img src={item.author.avatarUrl} alt={item.author.name} />
            <div>
                <blockquote>{item.content}</blockquote>
                <footer>
                    {item.author.name}
                    id:{item.id}
                </footer>
            </div>
        </div>
    );
};

export default ListItem;
