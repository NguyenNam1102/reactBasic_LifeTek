import React from 'react';
import AddTodoClass from './AddTodoClass';
import { toast } from 'react-toastify';


class FormTodo extends React.Component {

    state = {
        listName: [
            { id: '01', name: 'Nguyen Van A' },
            { id: '02', name: 'Nguyen Van B' },
            { id: '03', name: 'Nguyen Van C' },
        ],
        title: ''
    }

    handleChangeInput = (event) => {
        this.setState({
            title: event.target.value,
        })
        console.log(this.state.title)
    }

    handleAdd = () => {
        if (!this.state.title) {
            toast.error(`Vui lòng nhập đủ thông tin!`)
            return;
        }
        // if(undefined/null/empty) => false

        let todo = { id: Math.floor(Math.random() * 10000), name: this.state.title }

        let currentListTodo = this.state.listName;
        currentListTodo.push(todo);

        this.setState({
            listName: currentListTodo
        })
    }



    render() {
        return (
            <>
                <input onChange={(event) => this.handleChangeInput(event)} />
                <button onClick={() => this.handleAdd()}>
                    Add
                </button>
                <AddTodoClass data={this.state.listName} />
            </>

        )
    }
}

export default FormTodo;