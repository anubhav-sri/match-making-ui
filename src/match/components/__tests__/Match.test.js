import React from 'react';
import Match from '../Match';
import {createMount} from '@material-ui/core/test-utils';

describe('<Match />', () => {
    let mount;
    beforeEach(() => {
        mount = createMount();
    });

    afterEach(() => {
        mount.cleanUp();
    });

    describe('Header', () => {
        test('renders fav icon in header if match is favourite', () => {
            const app = mount(<Match
                match={{displayName: "fname", favourite: true, mainPhoto: "http://mypic", city: {}}}/>);
            expect(app.find(".match-header").find(".favourite-icon").length).toBeGreaterThan(0)
        });

        test('does not renders fav icon in header if match is not favorite', () => {
            const app = mount(<Match
                match={{displayName: "fname", favourite: false, mainPhoto: "http://mypic", city: {}}}/>);
            expect(app.find(".match-header").find(".favourite-icon").length).toBe(0)
        });

        test('renders the name in header', () => {
            const app = mount(<Match
                match={{displayName: "fname", favourite: false, mainPhoto: "http://mypic", city: {}}}/>);
            expect(app.find(".match-header").find(".display-name").props().children).toEqual("fname");
        });

        test('renders the age in header', () => {
            const app = mount(<Match
                match={{displayName: "fname", favourite: false, mainPhoto: "http://mypic", age: 30, city: {}}}/>);
            expect(app.find(".match-header").find(".age").props().children.join("")).toEqual("30 yrs, ");
        });

        test('renders the height in header', () => {
            const app = mount(<Match
                match={{
                    heightInCm: 176,
                    mainPhoto: "http://mypic",
                    city: {}
                }}/>);
            expect(app.find(".match-header").find(".height").props().children.join("")).toEqual("176 cms ");
        });
    });

    describe('Match Content', () => {
        test('renders compatibility percent', () => {
            const app = mount(<Match
                match={{
                    compatibilityScore: 0.76,
                    mainPhoto: "http://mypic",
                    city: {}
                }}/>);
            expect(app.find(".match-content").find(".compatibility-score").props().children.join("")).toEqual("76%");
        });

        test('renders job title', () => {
            const app = mount(<Match
                match={{
                    displayName: "fname",
                    jobTitle: "Developer",
                    mainPhoto: "http://mypic",
                    city: {}
                }}/>);
            expect(app.find(".match-content").find(".job-title").props().children.join("")).toEqual("Works as Developer");
        });

        test('renders city name', () => {
            const app = mount(<Match
                match={{
                    city: {name: "Leed"},
                    mainPhoto: "http://mypic",
                }}/>);
            expect(app.find(".match-content").find(".city-name").props().children.join("")).toEqual("Lives in Leed");
        });

        test('renders religion', () => {
            const app = mount(<Match
                match={{
                    city: {},
                    religion: "Agnostic",
                    mainPhoto: "http://mypic",
                }}/>);
            expect(app.find(".match-content").find(".religion").props().children).toEqual("Agnostic");
        });
    });

});
