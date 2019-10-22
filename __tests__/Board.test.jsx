import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from '../client/components/board/Board.tsx';

describe('Board', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board/>, div);
    });
 
});