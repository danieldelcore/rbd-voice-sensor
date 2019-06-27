import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { styleCollector, useStyles } from 'trousers';

import voiceSensor from '../src';
import { quotes, DragList } from '../fixtures';

const style = styleCollector('container').element`
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `;

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DragContainer = props => {
    const classNames = useStyles(style);
    const [state, setState] = useState({
        quotes,
    });

    const onDragStart = () => {};

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const quotes = reorder(
            state.quotes,
            result.source.index,
            result.destination.index,
        );

        setState({ quotes });
    };

    return (
        <div className={classNames}>
            <DragDropContext
                sensors={[voiceSensor]}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            >
                <DragList
                    listId="list"
                    title="My List"
                    listItems={state.quotes}
                />
            </DragDropContext>
        </div>
    );
};

storiesOf('Examples', module).add('Basic', () => <DragContainer />);
