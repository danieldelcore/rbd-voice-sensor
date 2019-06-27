import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { useStyleCollector, styleCollector } from 'trousers';
import { Transcript } from '../fixtures';

storiesOf('Speech', module).add('Basic detection', () => (
    <div>
        <h1>Transcript</h1>
        <Transcript />
    </div>
));
