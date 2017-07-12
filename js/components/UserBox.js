import User from './User';

import UserAddForm from './UserAddForm';

import Message from './Message';

var UserBox = React.createClass({

	getInitialState: function() {
		return { 	
					users: [],
					messages: []
				};
	},

	addUser: function(title,firstname,lastname,street,town,postcode,dateOfBirth,validAge) {

		var users = this.state.users.concat({ title, firstname,lastname,street,town,postcode,dateOfBirth,validAge });

		this.setState({ users });
	},
	displayMessage: function(error) {

		var messages = this.state.messages.concat({ error });
		// console.log(messages)
		this.setState({ messages });
	},

	render: function() {

		var newUser = function(user) {
			return <User 
						title={user.title} 
						firstname={user.firstname} 
						lastname={user.lastname} 
						street={user.street} 
						town={user.town} 
						postcode={user.postcode} 
						dateOfBirth={user.dateOfBirth} 
						validAge={user.validAge} 
						/>
		};

		var newMessage = function(message) {
			return <Message
						error={message.error}
					/>
		};

		return (
			<div>
				<h1>Online Shopping</h1>
				<hr/>
				
				{ this.state.messages.map(newMessage) }
				
				<div className="container">
					<UserAddForm onAdd={this.addUser} displayMessage={ this.displayMessage }/>

					<div className="col-md-4">
						<br/><br/>
						<div className="panel panel-default">
						  <div className="panel-body">
						    Registered Users
						  </div>
						  <div className="panel-footer">

							{ this.state.users.map(newUser) }

						  </div>
						</div>

					</div>
				</div>
				
			</div>
		);

	}


});

export default UserBox;