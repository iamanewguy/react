import React, { Component } from 'react';

class DataTableRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){
            return "Admin";
        } else if (this.props.permission === 2){
            return "Manager";
        } else {
            return "Other"
        }
    }
    editClick = () => {
        this.props.editUserClick()
        this.props.editFormStatus()
    }
    removeClick = (isUser) => {
        this.props.removeUserClick(isUser)
    }
    render() {
        return (
           <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>                             
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning"><i className="fa fa-edit " onClick={() => this.editClick()}>Sửa</i></div>
                    <div className="btn btn-danger"><i className="fa fa-delete " onClick={(isUser) => this.removeClick(this.props.id)}>Xóa</i></div>
                </div>                                   
                </td>
             </tr>
        );
    }
}

export default DataTableRow;