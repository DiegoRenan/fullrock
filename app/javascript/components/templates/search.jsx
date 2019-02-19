import React from 'react'
import Grid from '../templates/grid'

export default props => (

       <div className="search-bar row">
            <Grid cols="12 6 6">
                <div class="col">
                    <input class="form-control form-control input search" 
                        type="search" 
                        placeholder="Search" />                        
                </div>
            </Grid>
            <Grid cols="12 4 4">
                Visualizar:
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-light active">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked/> FRELLAS
                    </label>
                    <label class="btn btn-light">
                        <input type="radio" name="options" id="option2" autocomplete="off"/> USUÁRIOS
                    </label>
                </div>
            </Grid>
            <Grid cols="12 2 2">
                <button className="btn btn-success btn-new-member"
                        data-toggle="collapse" 
                        data-target="#nav-member" 
                        aria-expanded="false" 
                        aria-controls="nav-member">NEW MEMBER</button>
            </Grid>
        </div> 

)