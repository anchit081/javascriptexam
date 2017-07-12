var Message = React.createClass({

	render: function() {
		$(".alert").delay(100).slideUp(200, function() {
			$(this).alert('close');
		});

		return (
				<div className="row">
					<div className="alert alert-danger">
					  <span className="glyphicon glyphicon-exclamation-sign"></span>
					  <span className="sr-only">Error:</span>
					  	 { this.props.error }
					</div>
				</div>
			);
	}
});

export default Message;