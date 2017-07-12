var UserAddForm = React.createClass({

	getInitialState: function() {
		return { title: '' ,firstname: '',lastname: '',street: '', town: '',postcode: '',dateOfBirth: '' ,validAge: false,error:'' };
	},

	onChange: function(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;


		this.setState({ 
			// title: e.target.value,firstname: e.target.value,lastname: e.target.value 
			[name]: value
		});
	},
	_onBlur: function(e){

		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
	    this.setState({
	    	[name]: value
	    });
	},
	getAge: function(dateString){
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	},
	addUser: function(e) {

		e.preventDefault();


		if(this.getAge(this.state.dateOfBirth) < 18 || this.state.dateOfBirth == ''){
			this.props.displayMessage(' Your age is below 18.');
			return false;
		}

		if(!this.state.validAge){
			this.props.displayMessage(' Please confirm if your age is 18 above.');
			return false;
		}

		this.props.onAdd(this.state.title,this.state.firstname,this.state.lastname,this.state.street,this.state.town,this.state.postcode,this.state.dateOfBirth,this.state.validAge);

		$('#dateOfBirth').val(''); // force the date input to display blank value

		this.setState({ title: '',firstname: '',lastname: '',street: '', town: '',postcode: '',dateOfBirth: '' ,validAge: '',message:'' });
	},

	render: function() {
		return (
				<div className="col-md-8">	
		            <form className="form-horizontal" role="form" onSubmit={this.addUser}>
		                <h2 className="text-center">Registration Form</h2>
		                <div className="form-group">
		                    <label for="title" className="col-sm-3 control-label">Title</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" className="form-control" autofocus />
		                    </div>
		                </div>                
		                <div className="form-group">
		                    <label for="firstName" className="col-sm-3 control-label">First Name</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.onChange} placeholder="First Name" className="form-control" />
		                    </div>
		                </div>                
		                <div className="form-group">
		                    <label for="lastName" className="col-sm-3 control-label">Last Name</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange} placeholder="Last Name" className="form-control" />
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label for="street" className="col-sm-3 control-label">Street</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="street" value={this.state.street} onChange={this.onChange} placeholder="Street" className="form-control" />
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label for="town" className="col-sm-3 control-label">Town</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="town" value={this.state.town} onChange={this.onChange} placeholder="Town" className="form-control" />
		                    </div>
		                </div>
		                <div className="form-group">
		                    <label for="postcode" className="col-sm-3 control-label">Postcode</label>
		                    <div className="col-sm-9">
		                        <input type="text" name="postcode" value={this.state.postcode} onChange={this.onChange} placeholder="Postcode" className="form-control" />
		                    </div>
		                </div>		                
		                <div className="form-group">
		                    <label for="birthDate" className="col-sm-3 control-label">Date of Birth</label>
		                    <div className="col-sm-9">
		                        <input type="date" id="dateOfBirth" onBlur={this._onBlur} name="dateOfBirth" className="form-control" />
		                    </div>
		                </div>
		                <div className="form-group">
		                    <div className="col-sm-9 col-sm-offset-3">
		                        <div className="checkbox">
		                            <label>
		                                <input type="checkbox" name="validAge" value="1" checked={this.state.validAge} onChange={this.onChange}/>Applicant is 18+ years of age.
		                            </label>
		                        </div>
		                    </div>
		                </div> 

		                <div className="form-group">
		                    <div className="col-sm-9 col-sm-offset-3">
		                        <button type="submit" className="btn btn-primary btn-block">Register</button>
		                    </div>
		                </div>
		            </form> 
		        </div>
			);
	}

});

export default UserAddForm;