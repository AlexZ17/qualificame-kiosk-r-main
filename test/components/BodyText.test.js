import React from 'react';
import { shallow } from 'enzyme';

import BodyText from 'qualificame-kiosk/app/components/BodyText';
import { Text } from 'react-native';
import { Fonts, Colors } from 'qualificame-kiosk/app/styles';

function createTestProps (props) {
	return {
		// common props
		color: '',
		text: 'test text',
		weight: '',
		align: '',
		// allow to override common props
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<BodyText {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders the test text inside', () => {
		expect(wrapper.find(Text).children().text()).toEqual('test text');
	});
	it('Text have the correct fontSize', () => {
		expect(wrapper.find(Text).props().style.find(o => o.fontSize).fontSize).toEqual(Fonts.size.body);
	});
	it('Text have the correct color', () => {
		expect(wrapper.find(Text).props().style.find(o => o.color).color).toEqual(Colors.black);
	});	
	it('Text have the correct fontWeight', () => {
		expect(wrapper.find(Text).props().style.find(o => o.fontWeight).fontWeight).toEqual(Fonts.weight.regular);
	});	
	it('renders text with correct alignment', () => {
		expect(wrapper.find(Text).props().style.find(o => o.textAlign).textAlign).toEqual('left');
	});	
})