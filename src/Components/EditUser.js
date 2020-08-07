import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.editUserObject.id,
      name: this.props.editUserObject.name,
      tel: this.props.editUserObject.tel,
      permission: this.props.editUserObject.permission
    }
  }
  saveEditInfo = () => {
    var info = {};
    info.id = this.state.id
    info.name = this.state.name
    info.tel = this.state.tel
    info.permission = this.state.permission
    this.props.editUserInfo(info)
    this.props.editFormStatus()
  }
  onChange = (event) => {
    var name = event.target.name;
    var value = event.target.value; 
    this.setState({
      [name]:value
    });
  }
    render() {
        return (
            <div className="col-12">          
            <div className="card text-while bg-warning mb-3 mt-2 ">
                      <div className="card-header text-center">Sửa thông tin</div>
              <form>
                    <div className="card-body text-info">
                          <div className="form-group">
                        <input type="text" onChange={(event)=> this.onChange(event)} defaultValue={this.props.editUserObject.name} className="form-control" name="name" id="User" placeholder="Họ tên" />
                      </div>
                      <div className="form-group">
                        <input type="text" onChange={(event)=> this.onChange(event)} defaultValue={this.props.editUserObject.tel} className="form-control" name="tel" id="DienThoai"  placeholder="Điện thoại" />
                      </div>
                      <div className="form-group">
                        <select onChange={(event)=> this.onChange(event)} defaultValue={this.props.editUserObject.permission} className="custom-select " name="permission" >
                          <option value >Chọn chức vụ</option>
                          <option  value={1}>Admin</option>
                          <option value={2}>Manager</option>
                          <option value={3}>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                      <input type="button" className="btn btn-block btn-danger" onClick={()=> this.saveEditInfo()}  value="Lưu"/>
                      </div>
                    </div>
              </form>
            </div>
            </div>
        );
    }
}

export default EditUser;