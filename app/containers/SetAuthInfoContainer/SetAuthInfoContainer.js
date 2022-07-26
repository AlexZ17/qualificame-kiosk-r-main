import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from "qualificame-kiosk/app/actions/AuthActions";
class SetAuthInfoContainer extends Component {	

	render() {
		return (
			<React.Fragment>
			{
				this.props.children(this.props.logout)
			}
			</React.Fragment>
		);
	}
}

mapStateToProps = state => ({})

export default connect(mapStateToProps, { logout })(SetAuthInfoContainer);
