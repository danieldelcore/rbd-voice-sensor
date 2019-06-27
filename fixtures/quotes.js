import finnImg from '../static/avatars/finn.png';
import bmoImg from '../static/avatars/bmo.png';
import princessImg from '../static/avatars/princess.png';
import jakeImg from '../static/avatars/jake.png';

const jake: Author = {
    id: 1,
    name: 'Jake',
    url: 'http://adventuretime.wikia.com/wiki/Jake',
    avatarUrl: jakeImg,
    colors: {
        soft: '#FFFAE6',
        hard: '#FFC400',
    },
};

const BMO: Author = {
    id: 2,
    name: 'BMO',
    url: 'http://adventuretime.wikia.com/wiki/BMO',
    avatarUrl: bmoImg,
    colors: {
        soft: '#E3FCEF',
        hard: '#57D9A3',
    },
};

const finn: Author = {
    id: 3,
    name: 'Finn',
    url: 'http://adventuretime.wikia.com/wiki/Finn',
    avatarUrl: finnImg,
    colors: {
        soft: '#DEEBFF',
        hard: '#2684FF',
    },
};

const princess: Author = {
    id: 4,
    name: 'Princess bubblegum',
    url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
    avatarUrl: princessImg,
    colors: {
        soft: '#EAE6FF',
        hard: '#8777D9',
    },
};

const quotes = [
    {
        id: 'finn',
        content: 'Sometimes life is scary and dark',
        author: BMO,
    },
    {
        id: 'jake',
        content:
            'Sucking at something is the first step towards being sorta good at something.',
        author: jake,
    },
    {
        id: 'bob',
        content: 'Homies help homies. Always',
        author: finn,
    },
    {
        id: 'princess bubblegum',
        content: 'Responsibility demands sacrifice',
        author: princess,
    },
    {
        id: 'princess bannana',
        content:
            "That's it! The answer was so simple, I was too smart to see it!",
        author: princess,
    },
    {
        id: 'harry',
        content: 'People make mistakes. It’s a part of growing up',
        author: finn,
    },
    {
        id: 'smith',
        content:
            "Don't you always call sweatpants 'give up on life pants,' Jake?",
        author: finn,
    },
    {
        id: 'ava',
        content: 'I should not have drunk that much tea!',
        author: princess,
    },
    {
        id: 'lisa',
        content: 'Please! I need the real you!',
        author: princess,
    },
    {
        id: 'jill',
        content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
        author: princess,
    },
];

export default quotes;
