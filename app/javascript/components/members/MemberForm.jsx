import React from 'react'

import Grid from '../templates/grid'

export default props => (
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
                   
                    <label>New Member</label>
                    <p>
                        <input id="titulo" className="form-control input" placeholder="Name"/>
                    </p>
                    <p>
                        <input id="titulo" className="form-control input" placeholder="Email"/>
                    </p>
                    <p>
                        <input id="titulo" className="form-control input" placeholder="Função de trabalho"/>
                    </p>
                    <button className="btn btn-primary btn-block btn-new-member">
                        CREATE NEW MEMBER
                    </button>
                </div>
            </Grid>

        </div>
)