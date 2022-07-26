import React from 'react';
import { shallow } from 'enzyme';
import {
	TouchableOpacity,
	Image
} from 'react-native';

import ReactionBtn from 'qualificame-kiosk/app/components/ReactionBtn';
import image from 'qualificame-kiosk/assets/excellent.png'

function createTestProps (props) {
	return {
		onPress: ()=>{},
		...props,
	}
}

describe('rendering', () => {
	let wrapper = shallow(<ReactionBtn />);
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders size the image', () => {
		expect(wrapper.find(Image).props().style.width ).toEqual(100);
		expect(wrapper.find(Image).props().style.height ).toEqual(100);
	});
	it('renders image', () => {
		expect(wrapper.find(Image).prop('source')).toEqual(image)
	});
});

describe('interactions', () => {
	let wrapper;
	const createWrapper = props => shallow(<ReactionBtn {...props}/>);
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
});