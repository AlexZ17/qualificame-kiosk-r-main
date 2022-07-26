import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity } from 'react-native';

import BodyText from 'qualificame-kiosk/app/components/BodyText';
import SecondaryBtn from 'qualificame-kiosk/app/components/SecondaryBtn';

function createTestProps (props) {
	return {
		text: 'Hello World',
		disabled: true,
		color: 'blue',
		onPress: ()=>{},
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<SecondaryBtn {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders the test text inside', () => {
		expect(wrapper.find(BodyText).prop('text') ).toEqual('Hello World')
	});
	it('Text have the correct color', () => {
		expect(wrapper.find(BodyText).prop('color') ).toEqual('blue');
	});
	it('if touchableOpacity has disabled', () => {
		expect(wrapper.find(TouchableOpacity).prop('disabled') ).toBeTruthy();
	});
});

describe('interactions', () => {
	let wrapper;
	const createWrapper = props => shallow(<SecondaryBtn {...props}/>);
	describe('when onPress function is passed to props', () => {
		let fn;
		beforeEach(() => {
			fn = jest.fn();
			const props = createTestProps({ onPress: fn })
			wrapper = createWrapper(props);
		});
		it('it is called on button press', () => {
			wrapper.find(TouchableOpacity).first().props().onPress();
			expect(fn).toBeCalled();
		});
	});
})