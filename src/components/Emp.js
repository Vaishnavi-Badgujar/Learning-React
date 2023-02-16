import { Component } from "react";

export default class Emp extends Component{
    constructor(){
        super();
        this.state={
            employees:[]
        }
    }

    /*Lifecycle Hooks */

    componentDidMount(){
        let e1={
            id : 1,
            name : 'Vaishnavi',
            salary : '100000',
            city : 'London'
        };
        let e2={
            id : 1,
            name : 'Asha',
            salary : '500000',
            city : 'Kent'
        };
        let e3={
            id : 1,
            name : 'Gayatri',
            salary : '300000',
            city : 'Abu-Dhabi'
        };
        let temp = [e1,e2,e3];
        this.setState({
            employees: temp
        });
    }

    render(){
        return(
            <div>
                <h3>Employee List</h3>
                {
                    this.state.employees.map(e=>(
                        <div key ={e.id}>
                            ID: {e.id} <br />
                            Name: {e.name} <br />
                            Salary: {e.salary} <br />
                            City: {e.city} <br /><br />
                        </div>
                    ))
                }
                <br /><br />
                <button onClick={() => (this.sortSalary('ASC'))}>Sort as per the Salary - ASC</button>
                <button onClick={() => (this.sortSalary('DESC'))}>Sort as per the Salary - DESC</button>
            </div>
        );
    }

sortSalary(direction){
    let temp = [];
    switch(direction){
        case 'ASC':
            temp = this.state.employees.sort((e1, e2) => e1.salary - e2.salary);
            break;
        case 'DESC':
            temp = this.state.employees.sort((e1, e2) => e2.salary - e1.salary);
            break;
        default:
            break;
    }

    this.setState({
        employees: temp
    });

}

}