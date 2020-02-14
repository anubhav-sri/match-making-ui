import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import filterMatches from "../FilterMatches";
import mockAxios from "jest-mock-axios";
import {GET_MATCHES_ERROR, GET_MATCHES_PENDING, GET_MATCHES_SUCCESS} from "../../actions/MatchActions";


const store = configureStore([thunk])({});

describe('<FiltersMatches>', () => {
    it('should call backend to filter the matches with fixed latitude and longitude', () => {

        let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
        filterMatches("userId", {hasPhoto: true})(store.dispatch);

        mockAxios.mockResponse(resp);

        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches', {
            params: {hasPhoto: true}, config: {headers: {latitude: 53.801277, longitude: -1.548567}}
        });
    });
    it('should remove the unchanged filters', () => {

        let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
        filterMatches("userId", {hasPhoto: false})(store.dispatch);

        mockAxios.mockResponse(resp);

        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches', {
            params: {}, config: {headers: {latitude: 53.801277, longitude: -1.548567}}
        });

    });

    it('should map the range properties', () => {

        let resp = {data: {matches: [{displayName: "fname"}, {displayName: "anotherName"}]}};
        filterMatches("userId", {
            ageRange: [2, 3],
            heightRange: [1, 2],
            compatibilityRange: [0.2, 0.3]
        })(store.dispatch);

        mockAxios.mockResponse(resp);

        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches', {
            params: {
                "ageRange.from": 2, "ageRange.to": 3,
                "heightRange.from": 1, "heightRange.to": 2,
                "compatibilityRange.from": 0.2, "compatibilityRange.to": 0.3
            },
            config: {headers: {latitude: 53.801277, longitude: -1.548567}}
        });

    });
    it('should dispatch the correct statuses in case of success', () => {

        let matches = [{displayName: "fname"}, {displayName: "anotherName"}];
        let resp = {data: {matches: matches}};


        store.dispatch(filterMatches("userId", {})).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({"type": GET_MATCHES_PENDING});
            expect(actions[1]).toEqual({"matches": matches, "type": GET_MATCHES_SUCCESS});
        });

        mockAxios.mockResponse(resp);
        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches', {
            params: {},
            config: {headers: {latitude: 53.801277, longitude: -1.548567}}
        });

    });
    it('should dispatch the correct statuses in case of failure', () => {

        let resp = {error: "error"};

        store.dispatch(filterMatches("userId", {})).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({"type": GET_MATCHES_PENDING});
            expect(actions[1]).toEqual({"error": true, "type": GET_MATCHES_ERROR});
        });
        mockAxios.mockError(resp);


        expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:8090/users/userId/matches', {
            params: {},
            config: {headers: {latitude: 53.801277, longitude: -1.548567}}
        });

    });

    afterEach(() => {
        mockAxios.reset()
    })
})
;

