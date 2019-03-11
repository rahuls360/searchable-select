import React from "react";

class Select extends React.Component {
  render() {
    this.defaultValue = this.props.defaultValue;
      if(this.props.defaultValue == null){
          this.defaultValue = this.props.options[0];
      }
    return (
        <>
        <form>
            <input type="text"/>
        </form>
        <select defaultValue={this.defaultValue}>
            {this.props.options.map((option, index) => {
                return <option value={option} key={index}>{option}</option>;
            })}
        </select>
        </>
    );
  }
}

export default Select;