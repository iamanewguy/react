import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: "",
            userObj:{}
        }
    }
    editUserInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getEditUserInfoApp(info)
    }
    isShowEditFrom = () => {
        if(this.props.editUserSTT === true){
            return <EditUser
                    editUserInfo = {(info)=> this.editUserInfo(info)}
                    editFormStatus = {()=> this.props.editFormStatus()}
                    editUserObject = {this.props.editUserObject}
                    />
        }
    }
    isChange = (event) => {
        this.setState({
            dataSearch: event.target.value
        });
        this.props.checkKetNoiProps(this.state.dataSearch)
    }

    hienThiForm = () => {
        if(this.props.hienThiForm === false){
            return <div className="btn btn-block btn-outline-primary" onClick ={() => this.props.ketNoi()}>Thêm mới</div>
        } else {
            return  <div className="btn btn-block btn-outline-secondary" onClick ={() => this.props.ketNoi()}>Đóng lại</div>
        }
    }
    render() {
        return (
            
                 <div className="col-12">
                     {
                         this.isShowEditFrom()
                     }
                        <div className="form-group">
                        <div className="btn-group">
                            <input type="text" className="form-control" placeholder="Nhập từ khóa..." onChange={(event) => {this.isChange(event)}} style={{width: '450px'}} />
                            <div className="btn btn-info" onClick={(data) => this.props.checkKetNoiProps(this.state.dataSearch)}>Tìm</div>
                        </div>                
                        </div>
                        <hr></hr>
                        <div className="btn-group1">
                        {  this.hienThiForm()  }
                        </div>
                 </div>
                 
            
          
        );
    }
}

export default Search;