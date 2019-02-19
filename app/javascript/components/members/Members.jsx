import React from 'react';

import Grid from '../templates/grid'
import MemberForm from '../members/MemberForm'

export default class Members extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div className="container-fluid content">
          <Grid cols= "12 12 12">
              <h1>Index</h1>
              <button className="btn btn-success btn-new-member"
                      data-toggle="collapse" 
                      data-target="#nav-member" 
                      aria-expanded="false" 
                      aria-controls="nav-member">NEW MEMBER</button>
          </Grid>
          <MemberForm />
        </div>
    );
  }
}
