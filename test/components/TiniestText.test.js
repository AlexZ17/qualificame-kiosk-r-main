import React from 'react';
import { shallow } from 'enzyme';

import TiniestText from 'qualificame-kiosk/app/components/TiniestText';
import { Text } from 'react-native';
import { Fonts, Colors } from 'qualificame-kiosk/app/styles';

function createTestProps (props) {
	return {
		// common props
		color: '',
		text: 'testing',
		weight: '',
		align: '',
		// allow to override common props
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<TiniestText {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders text correctly', () => {
		expect(wrapper.find(Text).children().text()).toEqual('testing');
	});
	it('renders text with correct font color', () => {
		expect(wrapper.find(Text).props().style.find(p => p.color).color).toEqual(Colors.black);
	});
	it('renders text with correct font weight', () => {
		expect(wrapper.find(Text).props().style.find(p => p.fontWeight).fontWeight).toEqual(Fonts.weight.regular);
	});
	it('renders text with correct font size', () => {
		expect(wrapper.find(Text).props().style.find(p => p.fontSize).fontSize).toEqual(Fonts.size.tiniest);
	});
	it('renders text with correct alignment', () => {
		expect(wrapper.find(Text).props().style.find(p => p.textAlign).textAlign).toEqual('left');
	});
});