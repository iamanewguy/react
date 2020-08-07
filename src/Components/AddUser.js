import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThai: true,
            id: "",
            name: "",
            tel: "",
            permission: "",
        }
    }
    isChange = ((event) => {
      var name = event.target.name;
      var value = event.target.value;
      this.setState({
        [name]: value
      });
      // var item = {};
      // item.id = this.state.id;
      // item.name = this.state.name;
      // item.tel = this.state.tel;
      // item.permission = this.state.permission;
      // console.log(item)
    })
    checkTrangThai = () => {
      if(this.props.hienThiForm === true){
        return (
          <div className="col">          
            <div className="card border-info mb-3 mt-2 " style={{maxWidth: '18rem'}}>
                      <div className="card-header text-center">Thêm mới</div>
              <form>
                    <div className="card-body text-info">
                          <div className="form-group">
                        <input type="text" className="form-control" name="name" id="User" onChange={(event)=> {this.isChange(event)}} placeholder="Họ tên" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="tel" id="DienThoai" onChange={(event)=> {this.isChange(event)}} placeholder="Điện thoại" />
                      </div>
                      <div className="form-group">
                        <select className="custom-select " name="permission" onChange={(event)=> {this.isChange(event)}}>
                          <option value >Chọn chức vụ</option>
                          <option  value={1}>Admin</option>
                          <option value={2}>Manager</option>
                          <option value={3}>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                      <input type="reset" className="btn btn-block btn-info" onClick={(name,tel,permission) => this.props.addNew(this.state.name,this.state.tel,this.state.permission)}  value="Thêm mới"/>
                      </div>
                    </div>
              </form>
            </div>
            </div>
        )
      }
    }
    render() {
        return (            
                     <div>
                       {this.checkTrangThai()}
                     </div>    
        );
    }
}

export default AddUser;