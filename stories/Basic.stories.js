import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useStyleCollector, css } from 'trousers';

import voiceSensor from '../src';
import { quotes, DragList } from '../fixtures';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DragContainer = () => {
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
        <DragDropContext
            sensors={[voiceSensor]}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <DragList listId="list" title="My List" listItems={state.quotes} />
        </DragDropContext>
    );
};

storiesOf('Examples', module).add('Basic', () => <DragContainer />);
