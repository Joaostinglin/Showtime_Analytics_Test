import React from 'react';
import { shallow, configure } from 'enzyme'
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import { MovieDetail } from '../components/Body/MovieDetail'

configure({ adapter: new Adapter() });

describe('<MovieDetail />', () => {

    it('Show back button', () => {
        const movieDetail = shallow(<MovieDetail movies={
            {
                loading: false,
                movieById: [{ original_title: "" }]
            }} />);
        expect(movieDetail.find('#back-button').exists()).true;
    });

    it('Do not show back button', () => {
        const movieDetail = shallow(<MovieDetail movies={{loading: true}} />);
        expect(movieDetail.find('#back-button').exists()).false;
    });

});