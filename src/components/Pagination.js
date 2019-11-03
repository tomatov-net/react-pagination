import React from 'react';
import { users } from '../api/users'

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current_page: 1,
            records_per_page: 10,
            users: users(),
            usersOnPage: [],
        };

        this.changePage(1);
    }

    prevPage = (e) => {
        e.preventDefault();
        if (this.state.current_page > 1){
            this.state.current_page--;
            this.changePage(this.state.current_page);
        }
    }

    nextPage = (e) => {
        e.preventDefault();
        if (this.state.current_page < this.numPages()) {
            this.state.current_page++;
            this.changePage(this.state.current_page);
        }
    }

    changePage = (page) => {
        if (page < 1) {
            page = 1;
        }

        if (page > this.numPages()) {
            page = this.numPages();
        }

        this.state.usersOnPage = [];

        for (let i = (page-1) * this.state.records_per_page; i < (page * this.state.records_per_page); i++) {
            this.state.usersOnPage.push(this.state.users[i]);
            this.setState({
                usersOnPage: this.state.usersOnPage
            });
        }
    }

    numPages = () =>{
        return Math.ceil(this.state.users.length / this.state.records_per_page);
    }

    render() {
        return <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <ul>
                        {this.state.usersOnPage.map((item, index) => {
                            return <li key={ index }>{item.name}</li>;
                        })}
                    </ul>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        {this.state.current_page > 1 ?
                            <a href=""
                               onClick={this.prevPage}
                               className="btn btn-info"
                            >Prev</a> : ''}
                    </div>
                    {this.state.current_page !== this.numPages() ?
                        <div className="col-md-6">
                            <a href=""
                               onClick={this.nextPage}
                               className="btn btn-success"
                            >Next</a>
                        </div>
                        : ''}
                </div>
            </div>
        </div>;
    }
}

export default Pagination;
