
import { Component } from "react";
import  PropTypes  from "prop-types";
class Form extends Component{
    state ={
        name: '',
        number: '',
    }
    handelInput=(even)=>{
        const{name,value}= even.currentTarget
        this.setState({
            [name] : value
        })
    }
    handelSubmit= even=>{
        even.preventDefault();
        this.props.submit(this.state);
    }
render(){
   
    return(
        <div>
            <form action="" onSubmit={this.handelSubmit}>
               
                <h2>Name</h2>
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handelInput}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <h2>Number</h2>
                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    onChange={this.handelInput}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <br/>
                <button type="submit">Add contacts</button>
            </form>
            
        </div>
    );
}
}
Form.propTypes ={
    submit: PropTypes.func.isRequired,
}
export default Form;