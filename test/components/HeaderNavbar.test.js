import React from 'react';
import { shallow } from 'enzyme';
import {
	SafeAreaView,
	StatusBar 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HeaderNavbar from 'qualificame-kiosk/app/components/HeaderNavbar';

function createTestProps (props) {
	return {
		statusBar: 'default',
		left: null,
		center: null,
		right: null,
		bgColor: "",
		unSet: false,
		...props
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<HeaderNavbar {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('displays SafeAreaView', () => {
		expect(wrapper.find(SafeAreaView).exists()).toBeTruthy();
	});
	it('displays StatusBar', () => {
		expect(wrapper.find(StatusBar).exists()).toBeTruthy();
	});
	it('displays feather icon', () => {
		expect(wrapper.find(LinearGradient).exists()).toBe(false);
	});
	it('renders StatusBar with correct barStyle', () => {
		expect(wrapper.find(StatusBar).prop('barStyle') ).toEqual('default');
	});
})