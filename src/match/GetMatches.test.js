import axios from 'axios';
import getMatches from "./GetMatches";
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('axios');
const store = configureStore([thunk])({data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}});

test('Calls service to get all matches', () => {

    let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
    axios.get.mockResolvedValue(resp);
     store.subscribe(() => {
         expect(store.getState()).toEqual(resp);
     });
    getMatches("userId")(store.dispatch);
});

