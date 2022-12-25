import { Component } from "react";
import  PropTypes  from "prop-types";
class Contacts extends Component{ 
render(){
    console.log(this.props.cont);
    return(
        <div>
            <ul>
                {this.props.cont.map(m=>(
                    <li key={m.id}>
                        <p>{m.name}: {m.number}</p>
                        <button type="button" onClick={()=>this.props.delete(m.id)} >delete</button>
                    </li>
                ))}
            </ul>
            <h2>Find firs name</h2>
           <input type="text" 
            name="firstName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.props.add}/>
        </div>
    )
}
}
Contacts.propTypes = {
  cont: PropTypes.array,
  delete: PropTypes.func,
  add: PropTypes.func
}
export default Contacts;