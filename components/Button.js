import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import color from 'color'

const Container = styled.div`
  min-height: 50px;
  width: 300px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`

const Control = styled.button`
  border: 2px solid ${(props) => props.color};
  min-height: 50px;
  min-width: 50px;
  margin-${(props) => {
    return props.side === 'left' ? 'right' : 'left'
  }}: 10px;
  background: #fff;
  transition: background 0.2 ease;
  :hover {
    cursor: pointer;
    background: ${color('#fff').darken(0.1).toString()}
  }
`

const StyledButton = styled.button`
  border: 2px ${(props) => props.dashed && 'dashed'} ${(props) => props.dotted && 'dotted'} ${(props) => props.color};
  min-height: 50px;
  width: 150px;
  background: ${(props) => color(props.color).alpha(0.1).toString()};
  :hover {
    cursor: pointer;
    background: ${(props) => color(props.color).alpha(0.3).toString()}
  }
`

const StyledLabel = styled.span`
  font-size: 18px;
  font-family: Arial;
  color: #000;
`

class Button extends Component {
  state = {
    buttonCount: 0
  }

  add = () => this.setState({ buttonCount: this.state.buttonCount + 1 })

  substract = () => this.setState({ buttonCount: this.state.buttonCount - 1 })

  renderControl = (side) => {
    const { showControls } = this.props
    return showControls && (
      <Control
        onClick={side === 'left' ? this.substract : this.add }
        side={side}
      >
        {side === 'left' ? '-' : '+'}
      </Control>
    )
  }

  render() {
    return (
      <Container>
        {this.renderControl('left')}
        <StyledButton
          {...this.props}
          onClick={this.add}
        >
          <StyledLabel>
            {this.state.buttonCount}
          </StyledLabel>
        </StyledButton>
        {this.renderControl('right')}
      </Container>
    )
  }
}

export default Button
