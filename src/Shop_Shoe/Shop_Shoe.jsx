import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import Gio_Hang from "./Gio_Hang";
import Item_Detail from "./Item_Detail";
import Lish_Shoe from "./Lish_Shoe";

export default class Shop_Shoe extends Component {
  state = {
    shoeArr: dataShoe,
    detailShoe: dataShoe[0],
    gioHang: [],
  };
  handleChangeDetail = (idShoe) => {
    let index = this.state.shoeArr.findIndex((item) => {
      return item.id == idShoe;
    });
    this.setState({ detailShoe: dataShoe[index] });
  };
  handleAddToCart = (shoe) => {
    // console.log("shoe: ", shoe);
    let cloneGioHang = [...this.state.gioHang];
    // console.log("cloneGioHang: ", cloneGioHang);

    let index = this.state.gioHang.findIndex((item) => {
      return item.id == shoe.id;
    });
    //TH1: chua co trong gio hang
    if (index == -1) {
      let spGioHang = { ...shoe, soLuong: 1 };
      cloneGioHang.push(spGioHang);
    } else {
      this.state.gioHang[index].soLuong++;
    }
    this.setState({ gioHang: cloneGioHang }, () => {
      console.log("state", this.state.gioHang);
    });
  };
  handleTang = (id, bool) => {
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == id;
    });
    if (bool == true) {
      this.state.gioHang[index].soLuong++;
      console.log(
        " this.state.gioHang[index].soLuong: ",
        this.state.gioHang[index].soLuong
      );
    } else {
      this.state.gioHang[index].soLuong--;
      if (this.state.gioHang[index].soLuong == 0) {
        this.setState({ gioHang: this.state.gioHang.splice(index, 1) });
      }
    }

    this.setState({ gioHang: this.state.gioHang });
  };
  handleRemove = (id) => {
    console.log("id: ", id);
    let index = this.state.gioHang.findIndex((item) => {
      return item.id == id;
    });
    console.log("index: ", index);
    let cloneGioHang = [...this.state.gioHang];
    cloneGioHang.splice(index, 1);
    console.log("cloneGioHang: ", cloneGioHang);
    this.setState({ gioHang: cloneGioHang }, () => {
      console.log(this.state.gioHang);
    });
  };
  render() {
    return (
      <div className="container">
        <Gio_Hang
          dataGioHang={this.state.gioHang}
          handleTang={this.handleTang}
          handleRemove={this.handleRemove}
        />
        <Lish_Shoe
          data={this.state.shoeArr}
          handleChangeDetail={this.handleChangeDetail}
          handleAddToCart={this.handleAddToCart}
        />
        <Item_Detail itemDetail={this.state.detailShoe} />
      </div>
    );
  }
}
