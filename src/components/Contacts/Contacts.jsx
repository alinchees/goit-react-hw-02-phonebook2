import { Component } from 'react';
import PropTypes from 'prop-types';
class Contacts extends Component {
  render() {
    console.log(this.props.cont);
    return (
      <div>
        <ul>
          {this.props.cont.map(m => (
            <li key={m.id}>
              <p>
                {m.name}: {m.number}
              </p>
              <button type="button" onClick={() => this.props.delete(m.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
        <h2>Find firs name</h2>
        <input
          type="text"
          name="firstName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.props.add}
        />
      </div>
    );
  }
}
Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
export default Contacts;
