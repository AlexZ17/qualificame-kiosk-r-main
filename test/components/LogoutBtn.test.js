import React from 'react';
import { shallow } from 'enzyme';
import { TouchableOpacity, Platform } from 'react-native';

import LogoutBtn from 'qualificame-kiosk/app/components/LogoutBtn';
import { Feather } from '@expo/vector-icons';


function createTestProps (props) {
	return {
		onPress: ()=>{},
		...props,
	}
}

describe('rendering', () => {
	let wrapper = shallow(<LogoutBtn />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('displays feather icon', () => {
		expect(wrapper.find(Feather).exists()).toBeTruthy();
	});
	it('the feather icon display an camera', () => {
		expect(wrapper.find(Feather).prop('name')).toEqual('log-out');
	});
});

describe('interactions', () => {
	let wrapper;
	const createWrapper = props => shallow(<LogoutBtn {...props}/>);
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