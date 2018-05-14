import React, { Component } from "react"
import axios from "axios"

import PageHeader from "../template/pageHeader"
import TodoForm from "./todoForm"
import TodoList from "./todoList"

const URL = "http://localhost:3003/api/todos";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: "", list: [], alterDescription: "" }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClean = this.handleClean.bind(this);
        this.handleAlter = this.handleAlter.bind(this);
        this.handleAlterChange = this.handleAlterChange.bind(this);

        this.refresh()
    }

    refresh(description = "") {
        const search = description ? `&description__regex=/${description}/` : "";

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleAlter(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, description: this.state.alterDescription })
            .then(resp => this.refresh())
    }

    handleClean() {
        this.refresh();
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAlterChange(e) {
        this.setState({ ...this.state, alterDescription: e.target.value })
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}
                    handleSearch={this.handleSearch} handleClean={this.handleClean} handleAlterChange={this.handleAlterChange}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} handleAlter={this.handleAlter} />
            </div>
        )
    }
}