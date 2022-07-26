import React from 'react';
import { shallow } from 'enzyme';
import { Fonts, Colors } from 'qualificame-kiosk/app/styles'
import { Feather } from '@expo/vector-icons';

import TinyText from 'qualificame-kiosk/app/components/TinyText'
import LabeledInput from 'qualificame-kiosk/app/components/LabeledInput'

function createTestProps (props) {
	return {
		label: 'testing',
		color: 'green',
		iconName: 'moon',
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<LabeledInput {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders label correctly', () => {
		expect(wrapper.find(TinyText).prop('text')).toEqual('testing');
	});
	it('renders border with correct color', () => {
		expect(wrapper.find(TinyText).prop('color')).toEqual('green');
	});
	it('displays the correct feather icon ', () => {
		expect(wrapper.find(Feather).exists()).toBeTruthy();
		expect(wrapper.find(Feather).props().name).toEqual('moon')
	});
})