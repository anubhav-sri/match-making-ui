import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Matches from "./Matches";
import store from '../../store';
import axios from 'axios';
import {act} from 'react-dom/test-utils';

jest.mock('axios');

describe('My Connected React-Redux Component', () => {
    let container = document.createElement("div");

    let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
    axios.get.mockResolvedValue(resp);
    beforeEach(() => {
        act(() => {
            render(
                <Provider store={store}>
                    <Matches userId="userId"/>
                </Provider>
                , container);
        });
    });
    it('should render with given state from Redux store', () => {
        expect(container.textContent).toContain("fname");
        expect(container.textContent).toContain("anotherName");
    });
});
