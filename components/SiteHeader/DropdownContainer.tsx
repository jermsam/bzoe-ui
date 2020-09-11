import { Component} from "react";
import styled from "styled-components";

const Caret = styled.div`
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent #fff;
  top: -20px;
  left: calc(50% - 10px);
  z-index: 1;
`;

const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`;

class DropdownContainer extends Component {
  render() {
    return (
      <div>
        <Caret />
        <DropdownBackground>{this.props.children}</DropdownBackground>
      </div>
    );
  }
}

export default DropdownContainer