import React from 'react';
import { shallow } from 'enzyme';

import IconText from 'qualificame-kiosk/app/components/IconText';
import { Feather } from '@expo/vector-icons';
import BodyText from 'qualificame-kiosk/app/components/BodyText';

function createTestProps (props) {
	return {
		// common props
		color: 'red',
		text: 'testing',
		iconName: 'moon',
		// allow to override common props
		...props,
	}
}

describe('rendering', () => {
	let wrapper;
	const createWrapper = props => shallow(<IconText {...props}/>);
	beforeEach(() => {
		const props = createTestProps()
		wrapper = createWrapper(props);
	});
	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('renders Feather component', () => {
		expect(wrapper.find(Feather)).toHaveLength(1);
	});
	it('renders BodyText component', () => {
		expect(wrapper.find(BodyText)).toHaveLength(1);
	});
	it('displays the correct feather icon ', () => {
		expect(wrapper.find(Feather).exists()).toBeTruthy();
		expect(wrapper.find(Feather).props().name).toEqual('moon')
	});
	it('renders text correctly', () => {
		expect(wrapper.find(BodyText).prop('text')).toEqual('testing');
	});
})