import React, { Component } from "react";

export default class Gio_Hang extends Component {
  renderTbody = () => {
    return this.props.dataGioHang.map((item, index) => {
      return (
        <tr key={item.id + index.toString()}>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            {""}
            <img style={{ width: 80 }} src={item.image} alt="" />
          </td>

          <td>
            <button
              className="btn btn-warning mr-3"
              onClick={() => {
                this.props.handleTang(item.id, false);
              }}
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.handleTang(item.id, true);
              }}
              className="btn btn-primary ml-3"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className=" py-5">
        <table className="table text-left">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Image</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>{this.renderTbody()}</tbody>
        </table>
        {this.props.dataGioHang.length == 0 && (
          <p>Chua co san pham trong gio hang</p>
        )}
      </div>
    );
  }
}
