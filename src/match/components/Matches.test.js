import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Matches from "./Matches";
import store from '../../store';
import {act} from 'react-dom/test-utils';
import mockAxios from 'jest-mock-axios';


describe('<Matches>', () => {
    describe('Matches component, displays all matches', () => {
        it('should render the list of matches', () => {
            let containerWithData = document.createElement("div");
            act(() => {
                render(
                    <Provider store={store}>
                        <Matches userId="userId"/>
                    </Provider>
                    , containerWithData);
            });
            let resp = {data: {matches: [{displayName: "fname", city: {}}, {displayName: "anotherName", city: {}}]}};
            mockAxios.mockResponse(resp);

            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches');
            expect(containerWithData.textContent).toContain("fname");
            expect(containerWithData.textContent).toContain("anotherName");
        });

        it('should show 0 matches found if no matches', () => {
            let containerWithoutData = document.createElement("div");
            act(() => {
                render(
                    <Provider store={store}>
                        <Matches userId="userId"/>
                    </Provider>
                    , containerWithoutData);
            });
            let respWithNoData = {data: {matches: []}};
            mockAxios.mockResponse(respWithNoData);

            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches');
            expect(containerWithoutData.textContent).toContain("Found 0 Matches for you");
        });

        it('should show no matches found in case of error', () => {
            let containerWithoutData = document.createElement("div");
            act(() => {
                render(
                    <Provider store={store}>
                        <Matches userId="userId"/>
                    </Provider>
                    , containerWithoutData);
            });
            let respWithError = {message: "We will be get back soon."};
            mockAxios.mockError(respWithError);

            expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches');
            expect(containerWithoutData.textContent).toContain("No Matches Found For You");
        });

        afterEach(() => {
            mockAxios.reset();
        })
    });
});
