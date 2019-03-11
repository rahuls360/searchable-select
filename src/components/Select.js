import React from "react";

class Select extends React.Component {
    state = {
        search: ""
    }

    selectRef = React.createRef();

    handleChange = (event) => {
        this.setState({search: event.target.value});
        // this.selectRef.handleMouseDown(event);
    }

  render() {
    this.defaultValue = this.props.defaultValue;
      if(this.props.defaultValue == null){
          this.defaultValue = this.props.options[0];
      }

      let filteredOptions = this.props.options.filter((option) => {
          return option.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      });
      const optionsJSX = filteredOptions.map((option, index) => {
            return <option value={option} key={index}>{option}</option>;
        });
    return (
        <>
        <form>
            <input type="text" name="search" value={this.state.search} onChange={this.handleChange}/>
        </form>
        <select defaultValue={this.defaultValue} ref={this.selectRef}>
            {optionsJSX}
        </select>
        </>
    );
  }
}

export default Select;