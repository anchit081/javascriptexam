var User = React.createClass({

	render: function() {
		return (	
				<ul className="list-group">
					<li className="list-group-item">
						<div className="row">

							<span className="col-md-12"><label>Title:</label> {this.props.title}</span>

							<span className="col-md-12"><label>Full Name:</label> {this.props.firstname} {this.props.lastname}</span>

							<span className="col-md-12"><label>Street:</label> {this.props.street}</span>

							<span className="col-md-12"><label>Town: </label> {this.props.town}</span>

							<span className="col-md-12"><label>Postcode:</label> {this.props.postcode}</span>

							<span className="col-md-12"><label>Birthday:</label> {this.props.dateOfBirth}</span>

						</div>
					</li>
				</ul>

			);
	}
});

export default User;