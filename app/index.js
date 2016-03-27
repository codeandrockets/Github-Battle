var USER_DATA = {
	name: 'Steven Jasionowicz',
	username: 'codeandrockets',
	image: 'http://media1.santabanta.com/full1/Miscellaneous/Cartoon%20Characters/cartoon-characters-40a.jpg'

}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageURL} style={{height: 100, width: 100}} />
 	}
});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
				{this.props.username}
				</a>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageURL={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);