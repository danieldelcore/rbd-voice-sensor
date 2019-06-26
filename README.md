<p align="center">
  <img src="assets/rbd-logo-with-controller.jpg" alt="react beautiful dnd logo" />
</p>
<h1 align="center">rbd-voice-sensor</h1>

<div align="center">

A **voice** sensor for [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd), built with the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

</div>

_What are sensors?_

A sensor is a React Hook (or plain ol' function) that gives you access to [RBD's Programmatic API](https://github.com/atlassian/react-beautiful-dnd/blob/virtual/docs/sensors/programmatic.md), with that you're able to programmatically control drag and drop interactions with any input type you can think of.

_Why Voice?_

Imagine dragging and dropping Jira tickets in a standup using only your voice. Or improving accessiblity for people with a physical disability.

## Get started 🏗

**Installation**

`npm install --save rbd-voice-sensor` or `yarn add rbd-voice-sensor`

**Basic Example**

```jsx
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import voiceSensor from 'rbd-voice-sensor';

function App() {
    return <DragDropContext sensors={[voiceSensor]}>{/*...*/}</DragDropContext>;
}
```

## Resources 📖

-   [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
-   [RBD Programmatic API](https://github.com/atlassian/react-beautiful-dnd/blob/virtual/docs/sensors/programmatic.md)
-   [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
