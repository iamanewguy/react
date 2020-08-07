import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import DataTable from './DataTable';
import AddUser from './AddUser';
import DaTa from './Data.json'
import { v1 as uuidv1 } from 'uuid';

class App  extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      textSearch: "",
      editUserStatus: false,
      editUserObject: {}
    }
  }
  editUser = (user) => {
    //console.log(user)
    this.setState({
      editUserObject: user
    });
  }
  removeUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData))
  }
  addNewUser = (name,tel,permission) => {
    var item = {};
      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.permission = permission;
    var items = this.state.data;
    items.push(item)
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items))
  }
  getTextSearch= (dataSearch) => {
    this.setState({
      textSearch: dataSearch
    });
  }
  thaydoiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  editFormStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getEditUserInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.permission = info.permission;
        }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
  componentWillMount(){  
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DaTa))
    } else {
      var tempData = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:tempData
      });
    }
  }
  render() {
    //localStorage.setItem("key1","ha ha ha")
    var ketqua = [];
    this.state.data.forEach((item)=> {
      if(item.name.indexOf(this.state.textSearch) !== -1){
        ketqua.push(item);
      }
    })
    
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
          <div className="row">
              <Search checkKetNoiProps= {(dataSearch)=> this.getTextSearch(dataSearch)}
                ketNoi = {()=> this.thaydoiTrangThai()}
                hienThiForm = {this.state.hienThiForm } 
                editUserSTT = {this.state.editUserStatus}  
                editFormStatus = {()=> this.editFormStatus()}  
                editUserObject = {this.state.editUserObject}
                getEditUserInfoApp = {(info) => this.getEditUserInfoApp(info)}           
                />
              <DataTable 
                 editfunc={(user) => this.editUser(user)} 
                 removefunc={(idUser) => this.removeUser(idUser)} 
                 dataUserProps = {ketqua}
                 editFormStatus = {()=> this.editFormStatus()} 
              />
              <AddUser addNew ={(name,tel,permission) => this.addNewUser(name,tel,permission)} hienThiForm ={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
