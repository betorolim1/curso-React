import React from "react"

import Grid from "../template/grid"
import IconeButton from "../template/iconButton"


export default props => {
    const keyHandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === "Escape") {
            props.handleClean();
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                    value={props.description} onChange={props.handleChange} onKeyUp={keyHandler} />
                <input type="text" className="form-control" value={props.alterDescription} onChange={props.handleAlterChange} 
                    placeholder="Alterar uma tarefa" />
            </Grid>

            <Grid cols="12 3 2">
                <IconeButton style="primary" onClick={props.handleAdd} icon="plus" />
                <IconeButton style="info" icon="search" onClick={props.handleSearch} />
                <IconeButton style="default" icon="close" onClick={props.handleClean} />
            </Grid>
        </div>
    )
}