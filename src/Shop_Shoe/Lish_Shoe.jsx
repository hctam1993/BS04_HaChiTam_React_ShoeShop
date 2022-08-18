import React, { Component } from "react";
import Item_Shoe from "./Item_Shoe";

export default class Lish_Shoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((item, index) => {
          return (
            <div className="col-3" key={item.id + index.toString()}>
              <Item_Shoe
                detail={item}
                handleChangeDetail={this.props.handleChangeDetail}
                handleAddToCart={this.props.handleAddToCart}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
