import React from 'react';
import App from './App';
import {shallow} from "enzyme";


test('renders spark dates header', () => {
    const app = shallow(<App/>);
    expect(app.find('.heading').childAt(0).text()).toContain("Spark Dates, Made for all")
});
