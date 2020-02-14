import getMatches from "../GetMatches";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'jest-mock-axios';

const store = configureStore([thunk])({data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}});

test('Calls service to get all matches', () => {

    let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
    store.subscribe(() => {
        expect(store.getState()).toEqual(resp);
    });
    getMatches("userId")(store.dispatch);
    mockAxios.mockResponse(resp);
});

