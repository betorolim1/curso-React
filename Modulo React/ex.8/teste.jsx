import React from 'react'

//Esta classe não estava na aula
export default class Teste extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialString }
    }

    alteraStringDepois() {
        this.setState({value: this.state.value + "_"})
    }

    alteraStringAntes() {
        this.setState({value: "_" + this.state.value})
    }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <h1>{this.state.value}</h1>
                <button onClick={() => this.alteraStringAntes()}>Antes</button>
                <button onClick={() => this.alteraStringDepois()}>Depois</button>
            </div>
        )
    }
}
