(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _UserBox = require('./components/UserBox');

var _UserBox2 = _interopRequireDefault(_UserBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

React.render(React.createElement(_UserBox2.default, null), document.querySelector('#app'));

},{"./components/UserBox":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Message = React.createClass({
	displayName: "Message",


	render: function render() {
		$(".alert").delay(100).slideUp(200, function () {
			$(this).alert('close');
		});

		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ className: "alert alert-danger" },
				React.createElement("span", { className: "glyphicon glyphicon-exclamation-sign" }),
				React.createElement(
					"span",
					{ className: "sr-only" },
					"Error:"
				),
				this.props.error
			)
		);
	}
});

exports.default = Message;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var User = React.createClass({
	displayName: "User",


	render: function render() {
		return React.createElement(
			"ul",
			{ className: "list-group" },
			React.createElement(
				"li",
				{ className: "list-group-item" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Title:"
						),
						" ",
						this.props.title
					),
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Full Name:"
						),
						" ",
						this.props.firstname,
						" ",
						this.props.lastname
					),
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Street:"
						),
						" ",
						this.props.street
					),
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Town: "
						),
						" ",
						this.props.town
					),
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Postcode:"
						),
						" ",
						this.props.postcode
					),
					React.createElement(
						"span",
						{ className: "col-md-12" },
						React.createElement(
							"label",
							null,
							"Birthday:"
						),
						" ",
						this.props.dateOfBirth
					)
				)
			)
		);
	}
});

exports.default = User;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserAddForm = React.createClass({
	displayName: 'UserAddForm',


	getInitialState: function getInitialState() {
		return { title: '', firstname: '', lastname: '', street: '', town: '', postcode: '', dateOfBirth: '', validAge: false, error: '' };
	},

	onChange: function onChange(event) {
		var target = event.target;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		var name = target.name;

		this.setState(_defineProperty({}, name, value));
	},
	_onBlur: function _onBlur(e) {

		var target = e.target;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		var name = target.name;
		this.setState(_defineProperty({}, name, value));
	},
	getAge: function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
			age--;
		}
		return age;
	},
	addUser: function addUser(e) {

		e.preventDefault();

		if (this.getAge(this.state.dateOfBirth) < 18 || this.state.dateOfBirth == '') {
			this.props.displayMessage(' Your age is below 18.');
			return false;
		}

		if (!this.state.validAge) {
			this.props.displayMessage(' Please confirm if your age is 18 above.');
			return false;
		}

		this.props.onAdd(this.state.title, this.state.firstname, this.state.lastname, this.state.street, this.state.town, this.state.postcode, this.state.dateOfBirth, this.state.validAge);

		$('#dateOfBirth').val(''); // force the date input to display blank value

		this.setState({ title: '', firstname: '', lastname: '', street: '', town: '', postcode: '', dateOfBirth: '', validAge: '', message: '' });
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'col-md-8' },
			React.createElement(
				'form',
				{ className: 'form-horizontal', role: 'form', onSubmit: this.addUser },
				React.createElement(
					'h2',
					{ className: 'text-center' },
					'Registration Form'
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'title', className: 'col-sm-3 control-label' },
						'Title'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'title', value: this.state.title, onChange: this.onChange, placeholder: 'Title', className: 'form-control', autofocus: true })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'firstName', className: 'col-sm-3 control-label' },
						'First Name'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'firstname', value: this.state.firstname, onChange: this.onChange, placeholder: 'First Name', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'lastName', className: 'col-sm-3 control-label' },
						'Last Name'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'lastname', value: this.state.lastname, onChange: this.onChange, placeholder: 'Last Name', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'street', className: 'col-sm-3 control-label' },
						'Street'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'street', value: this.state.street, onChange: this.onChange, placeholder: 'Street', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'town', className: 'col-sm-3 control-label' },
						'Town'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'town', value: this.state.town, onChange: this.onChange, placeholder: 'Town', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'postcode', className: 'col-sm-3 control-label' },
						'Postcode'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'text', name: 'postcode', value: this.state.postcode, onChange: this.onChange, placeholder: 'Postcode', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'label',
						{ 'for': 'birthDate', className: 'col-sm-3 control-label' },
						'Date of Birth'
					),
					React.createElement(
						'div',
						{ className: 'col-sm-9' },
						React.createElement('input', { type: 'date', id: 'dateOfBirth', onBlur: this._onBlur, name: 'dateOfBirth', className: 'form-control' })
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'div',
						{ className: 'col-sm-9 col-sm-offset-3' },
						React.createElement(
							'div',
							{ className: 'checkbox' },
							React.createElement(
								'label',
								null,
								React.createElement('input', { type: 'checkbox', name: 'validAge', value: '1', checked: this.state.validAge, onChange: this.onChange }),
								'Applicant is 18+ years of age.'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'form-group' },
					React.createElement(
						'div',
						{ className: 'col-sm-9 col-sm-offset-3' },
						React.createElement(
							'button',
							{ type: 'submit', className: 'btn btn-primary btn-block' },
							'Register'
						)
					)
				)
			)
		);
	}

});

exports.default = UserAddForm;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _UserAddForm = require('./UserAddForm');

var _UserAddForm2 = _interopRequireDefault(_UserAddForm);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserBox = React.createClass({
	displayName: 'UserBox',


	getInitialState: function getInitialState() {
		return {
			users: [],
			messages: []
		};
	},

	addUser: function addUser(title, firstname, lastname, street, town, postcode, dateOfBirth, validAge) {

		var users = this.state.users.concat({ title: title, firstname: firstname, lastname: lastname, street: street, town: town, postcode: postcode, dateOfBirth: dateOfBirth, validAge: validAge });

		this.setState({ users: users });
	},
	displayMessage: function displayMessage(error) {

		var messages = this.state.messages.concat({ error: error });
		// console.log(messages)
		this.setState({ messages: messages });
	},

	render: function render() {

		var newUser = function newUser(user) {
			return React.createElement(_User2.default, {
				title: user.title,
				firstname: user.firstname,
				lastname: user.lastname,
				street: user.street,
				town: user.town,
				postcode: user.postcode,
				dateOfBirth: user.dateOfBirth,
				validAge: user.validAge
			});
		};

		var newMessage = function newMessage(message) {
			return React.createElement(_Message2.default, {
				error: message.error
			});
		};

		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Online Shopping'
			),
			React.createElement('hr', null),
			this.state.messages.map(newMessage),
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(_UserAddForm2.default, { onAdd: this.addUser, displayMessage: this.displayMessage }),
				React.createElement(
					'div',
					{ className: 'col-md-4' },
					React.createElement('br', null),
					React.createElement('br', null),
					React.createElement(
						'div',
						{ className: 'panel panel-default' },
						React.createElement(
							'div',
							{ className: 'panel-body' },
							'Registered Users'
						),
						React.createElement(
							'div',
							{ className: 'panel-footer' },
							this.state.users.map(newUser)
						)
					)
				)
			)
		);
	}

});

exports.default = UserBox;

},{"./Message":2,"./User":3,"./UserAddForm":4}]},{},[1]);
