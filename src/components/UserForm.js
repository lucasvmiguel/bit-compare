import React from 'react';

import Menu from './Menu';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: '', confirmPassword: '', oldPassword: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.state[name] = value;
    this.setState(this.state);
    this.props.onChange(this.state);
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.props.onSubmit();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div>
        <Menu />
        
        <div className="padding-top-3 center">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="dark-blue">Se inscrever</h1>
            </div>
          </div>
          <div className="row">
            {this.props.error && <div className="col-xs-12 padding-top-1">
              <p className="error-message">ERROR</p>
            </div>}
          </div>
          <div className="row">
            <div className="col-xs-12 padding-top-1">
              <input type="text" name="email" className="text-input" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="E-mail"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 padding-top-1">
              <input disabled={this.props.login} type="text" name="name" className="text-input" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Nome"/>
            </div>
          </div>
          {this.props.login &&           
            <div className="row padding-top-1">
              <div className="col-xs-12">
                <input type="password" name="oldPassword" className="text-input" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Senha antiga"/>
              </div>
            </div>}
          <div className="row padding-top-1">
            <div className="col-xs-12">
              <input type="password" name="password" className="text-input" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Senha"/>
            </div>
          </div>
          <div className="row padding-top-1">
            <div className="col-xs-12">
              <input type="password" name="confirmPassword" className="text-input" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Confirmar senha"/>
            </div>
          </div>
          <div className="row padding-top-1">
            <div className="col-xs-12">
              <button onClick={this.handleSubmit} className="text-submit">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;