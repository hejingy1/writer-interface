// App.js
import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  display: block;
  font-size: 20px;
  line-height: 40px;
  min-height: 120px;
  overflow: hidden;
  padding: 0 7px;
  margin: 0 0 30px;
  resize: none;
  width: 500px;
`;

// const Label = styled.span`
//   color: ${props => props.green ? '#00BB00' : 'red'};
//   font-size: 1.5em;
// `;

const InfoBox = () => {
  return(
    <div>
      <Textarea1 />
    </div>
  )
}

class Textarea1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: '',
          scrollHeight: 0,
        }
    }

    // onChange(e) {
    // //   const t = e.target;
    // //   t.style.height = 'auto';
    // //   t.style.height = `${t.scrollHeight}px`;
    //   this.setState({value: e.target.value});
    // }

    render() {
        return (
            <StyledTextarea
              value={this.props.value}
              onChange={this.props.onChange}
            />
        );
    }
}

export default InfoBox;