import axios from "axios";
import { Component } from "react";

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        //Call the API
        this.gettodos();
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {this.state.todos.map((t) => (
                        <div className="col" key={t.id}>
                          <div className="card" >
                            <div class="card-header">ID:{t.id}</div>
                            <div className="card-body">
                              <h5 className="card-title"><bold>Title:</bold> {t.title}</h5>
                            </div>
                            <div class="card-footer border-info">completed:{t.completed? 'true' : 'false'}</div>
                          </div>
                        </div>
                     ))
                }
            </div>
            </div>
        );
    }

    async gettodos() {
        try {
            const responce = axios.get("https://jsonplaceholder.typicode.com/todos");
            const data = (await responce).data;
            this.setState({
                todos: data,
            });
        } catch (error) {
            console.error(error);
        }
    }

}