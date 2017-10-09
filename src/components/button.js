import React, { Component } from 'react';

class Button extends Component{

  onClickHandler(e){
    console.log("you clicked me");
  }

  render () {
    let buttonStyle = {
      width: 50,
    };
    const {isDisabled,width,value} = this.props;
    buttonStyle.width=parseInt(width);
    return (
      <div>
      <input type="button"
        className="btn btn-default"
        style={buttonStyle}
        value={value}
        disabled={isDisabled}
        onClick={this.onClickHandler.bind(this)}/>
      </div>
    );
  }
}

export default Button;
