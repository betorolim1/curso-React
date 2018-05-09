import React from 'react'
import ReactDOM from 'react-dom'
//import ClassComponent from './classComponent'
import Teste from './teste'


ReactDOM.render(
    //<ClassComponent label="Contador" initialValue={10} />
    <Teste initialString="Teste Inicial" titulo="Teste de String"/>
    , document.getElementById('app'))