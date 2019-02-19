import React from 'react';
import axios from 'axios'

import Grid from '../templates/grid'
import MemberForm from '../members/MemberForm'
import MemberList from '../members/MemberList'
import Search from '../templates/search'

const URL = '/members'

export default class Members extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {name: '', email: '', role: '', list: [], response: []}

    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeRole = this.handleChangeRole.bind(this)

    this.handleAdd = this.handleAdd.bind(this)
    
    this.getMembers()
  }

  getMembers(){
    axios.get(`${URL}.json`,{ headers: { 'Content-Type': 'application/json'}})
        .then((resp) =>{
            this.setState({...this.state, list: resp.data})
            console.log(resp.data)
        })                                                                  
  }

  handleChangeName(e){
    this.setState({ ...this.state, name: e.target.value})
  }

  handleChangeEmail(e){
    this.setState({ ...this.state, email: e.target.value})
  }

  handleChangeRole(e){
    this.setState({ ...this.state, role: e.target.value})
  }


  handleAdd(){
   const member ={
        name: this.state.name,
        email: this.state.email,
        role: this.state.role
    }

    axios.post(URL, member, { headers: { 'Content-Type': 'application/json'}})
      .then(
          resp =>  {
            this.setState({ ...this.state, response: resp.data}) 
            this.getMembers()
        }
      );
  }


  render() {
    return (
        <div className="">
          <Grid cols= "12 12 12">
              <Search />
              <MemberList list={this.state.list}/>

          </Grid>
          <MemberForm handleChangeName={this.handleChangeName}
                      handleChangeEmail={this.handleChangeEmail}
                      handleChangeRole={this.handleChangeRole}
                      response={this.state.response} 
                      handleAdd={this.handleAdd}/>
        </div>
    );
  }
}
