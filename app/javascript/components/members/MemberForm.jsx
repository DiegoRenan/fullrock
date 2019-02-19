import React from 'react'

import Grid from '../templates/grid'

export default props => {
    const renderResponse = () => {
        const response = props.response || [] 
        
        if (response.errors){
            return response.errors.map( error =>                     
                  <li className="error" key={error}>{error}</li>
            )
        }else{
           if (response.name){
            return <h4 className="success">{response.name} was Successfully saved</h4>
           } 
        }
    }
    return(
        <div className="nav flex-column sidebar" id="nav-member">
            <Grid cols= "12 12 12">
            
                <div className="left-sidebar">
                    <div className="close-sidebar"  
                         data-toggle="collapse" 
                         data-target="#nav-member" 
                         aria-expanded="false" 
                         aria-controls="nav-member"></div>
                </div> 

                <div className="right-sidebar">
                    <ul>{renderResponse()}</ul>
                    
                    <label>New Member</label>
                    
                    <p>
                        <input id="name" className="form-control input" 
                                         placeholder="Name"
                                         value={props.name}
                                         onChange={props.handleChangeName}/>
                    </p>
                    <p>
                        <input id="email" className="form-control input" 
                                          placeholder="Email"
                                          value={props.email}
                                          onChange={props.handleChangeEmail}/>
                    </p>
                    <p>
                        <input id="role" className="form-control input" 
                                         placeholder="Função de trabalho"
                                         value={props.role}
                                         onChange={props.handleChangeRole}/>
                    </p>
                    <button className="btn btn-primary btn-block btn-new-member"
                            onClick={props.handleAdd}>
                        CREATE NEW MEMBER
                    </button>
                </div>
            </Grid>

        </div>
    )
}