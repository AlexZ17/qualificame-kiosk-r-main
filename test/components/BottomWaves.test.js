import React from 'react';
import { shallow } from 'enzyme';

import { ImageBackground } from 'react-native';

import BottomWaves from 'qualificame-kiosk/app/components/BottomWaves';
import IconText from 'qualificame-kiosk/app/components/IconText';
import SubtitleText from 'qualificame-kiosk/app/components/SubtitleText';

import wavesImg from 'qualificame-kiosk/assets/waves-green.png';

describe('rendering', () => {
	const wrapper = shallow(<BottomWaves />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders IconText components', () => {
		expect(wrapper.find(IconText)).toHaveLength(2);
	});
	it('renders SubtitleText component', () => {
		expect(wrapper.find(SubtitleText)).toHaveLength(1);
	});
	it('renders image', () => {
		expect(wrapper.find(ImageBackground).prop('source')).toEqual(wavesImg);
	})
})