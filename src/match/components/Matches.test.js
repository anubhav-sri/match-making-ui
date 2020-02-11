import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Matches from "./Matches";
import store from '../../store';
import axios from 'axios';
import {act} from 'react-dom/test-utils';

jest.mock('axios');

describe('Matches component, displays all macthes', () => {
    let container = document.createElement("div");

    let resp = {data: {matches: [{displayName: "fname", city: {}}, {displayName: "anotherName", city: {}}]}};
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
    it('should render the list of macthes', () => {
        expect(container.textContent).toContain("fname");
        expect(container.textContent).toContain("anotherName");
    });
});
