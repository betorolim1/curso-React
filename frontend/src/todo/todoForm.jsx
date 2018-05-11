import React from "react"

import Grid from "../template/grid"
import IconeButton from "../template/iconButton"


export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
        </Grid>

        <Grid cols="12 3 2">
            <IconeButton style="primary" onClick={props.handleAdd} icon="plus" />
        </Grid>
    </div>
)