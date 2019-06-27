import React, { useState } from 'react';

function voiceSensor(api) {
    const preDrag = api.tryGetLock('item-1');

    if (!preDrag) {
        return;
    }

    const drag = preDrag.snapLift();

    drag.moveDown();
    drag.moveDown();
    drag.moveDown();

    drag.drop();
}
