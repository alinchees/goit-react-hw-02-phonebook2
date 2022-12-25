import { Component } from "react"
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
class App extends Component {
    state = {
    contacts: [],
    filter: '',
  }
  delete=(deleted)=>{
    const{contacts} = this.state;
    this.setState({contacts : contacts.filter((cont)=> cont.id !== deleted)});
}
filtered=()=>{
  if (this.state.filter) {
      return this.state.contacts.filter(m => m.name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))
  }
  return this.state.contacts;
}
addTar=(even)=>{
  const r = even.target.value;
  this.setState({filter: r});
}
  nameContact =(data)=>{
    const{name,number} = data;
    const bulElement =  this.state.contacts.find(con=> con.name === name);
    if (bulElement) {
      alert(`${name} is already contact`);
    }
    else{
      this.setState((prev) => ({
              contacts : [...prev.contacts,{id: this.state.contacts.length,name, number}]
            }))
    }
  }

  render(){
    const filteredContacts = this.filtered();
    return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <Form submit={this.nameContact}/>

  <h2>Contacts</h2>
  {this.state.contacts.length?
      <Contacts cont={filteredContacts} delete={this.delete} add={this.addTar}/>
      :""}
    </div>
    
  );
  }
  
};
export default App;