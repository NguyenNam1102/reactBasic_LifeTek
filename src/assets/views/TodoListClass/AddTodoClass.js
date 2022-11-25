import React from 'react';
import { toast } from 'react-toastify';


class AddTodoClass extends React.Component {

    state = {
        updateList: {}
    }

    handleDelete = (item) => {
        console.log(item.id);
        let updateList = this.props.data;
        updateList = updateList.filter((itemUser) => itemUser.id !== item.id)
        console.log(this.props.data)
        console.log(updateList)
        this.setState({
            listName: updateList
        })
    }

    render() {
    }

    render() {
        return (
            <>
                <ul>
                    {this.props.data.map((item, index) => {
                        return (
                            <li key={index}>STT: {index + 1} ---  Name: {item.name}
                                &nbsp; <button>Edit</button>
                                &nbsp; <button onClick={() => this.handleDelete(item)}>Delete</button>
                            </li>
                        )
                    })
                    }

                </ul>
            </>
        )
    }
}

export default AddTodoClass;