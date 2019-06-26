# rbd-voice-sensor
A voice sensor for [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd), built with the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) 

*What are sensors?*
A sensor is a React Hook (or plain ol' function) that gives you access to [RBD's Programmatic API](https://github.com/atlassian/react-beautiful-dnd/blob/virtual/docs/sensors/programmatic.md), with that API you're able to programmatically control drag and drop interactions with any input type you can think of.

## Get started 🏗
**Installation**

`npm install --save rbd-voice-sensor` or `yarn add rbd-voice-sensor`

**Basic Example**

```
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import voiceSensor from 'rbd-voice-sensor';

function App() {
  return (
    <DragDropContext sensors={[voiceSensor]}>{/*...*/}</DragDropContext>
  );
}
```
