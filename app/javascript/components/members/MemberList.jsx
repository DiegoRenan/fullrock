import React from 'react'

import Grid from '../templates/grid'

export default props => {

    const renderMembers = () => {
        const list = props.list || []  

        return list.map( member => 
            <Grid cols= "12 4 3">
                <div className="card box-member" key={member.id}>
                    <img className="card-img-top mx-auto img-thumbnail w-50" src="/close.png" />
                    <div className="card-body">
                        <center>
                       <h4 className="card-text">{member.name}</h4>
                       <h6 className="card-text">{member.email}</h6>
                       <h6 className="card-text">{member.role}</h6>
                       </center>
                    </div>
                    <div>
                        <center>
                        <img src="/ok.png" className="mx-auto icon"/>
                        <img src="/note.png" className="mx-auto icon"/>
                        <img src="/glass.png" className="mx-auto icon"/>
                        <img src="/dots.png" className="mx-auto icon"/>
                        </center>
                    </div>
                </div>
            </Grid>
        ) 
    }

    return(
        <div>
            <div className="row">
                {renderMembers()}
            </div>
        </div> 
    )
}