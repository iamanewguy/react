import React, { Component } from 'react';
import DataTableRow from './DataTableRow';

class DataTable extends Component {
     mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
         <DataTableRow
                 editUserClick={(user) => this.props.editfunc(value)}   
                 removeUserClick={(isUser) => this.props.removefunc(isUser)} 
                 name={value.name} 
                 key={key}
                 stt={key}
                 id={value.id}
                 permission={value.permission}
                 tel={value.tel}
                 editFormStatus = {() => this.props.editFormStatus()}
         />
     ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Điện thoại</th>
                        <th>Chức vụ</th>
                    </tr>
                    </thead>
                    <tbody>
                     {this.mappingDataUser() } 
                    </tbody>
                </table> 
                </div>

        );
    }
}

export default DataTable;