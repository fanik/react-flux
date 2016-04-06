import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ListItem
				leftAvatar={<Avatar src="https://scontent-waw1-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p40x40/10603565_818890761503513_1396940649479840001_n.jpg?oh=1a6fe394e4eae10d42109c8487d4637a&oe=578624AE"/>}
					  primaryText={this.props.message}
			>
			</ListItem>
		);
		
	}
}

export default Message;