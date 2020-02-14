import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../../../store';
import {act} from 'react-dom/test-utils';
import Filters from "../Filters";


describe('Filters, used for filtering matches', () => {
    let container = document.createElement("div");

    beforeEach(() => {
        act(() => {
            render(
                <Provider store={store}>
                    <Filters userId="userId"/>
                </Provider>
                , container);
        });
    });
    it('should render all filters', () => {
        expect(container.getElementsByClassName("photo-filter").length).toBe(1);
        expect(container.getElementsByClassName("in-contact-filter").length).toBe(1);
        expect(container.getElementsByClassName("favorite-filter").length).toBe(1);
        expect(container.getElementsByClassName("age-filter").length).toBe(1);
        expect(container.getElementsByClassName("distance-filter").length).toBe(1);
        expect(container.getElementsByClassName("compatibility-filter").length).toBe(1);
        expect(container.getElementsByClassName("height-filter").length).toBe(1);
    });
});
