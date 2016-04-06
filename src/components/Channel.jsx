import React from 'react';
import mui from 'material-ui';

var {ListItem} = mui;

class Channel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ListItem primaryText={this.props.channel} />
		);
		
	}
}

export default Channel;