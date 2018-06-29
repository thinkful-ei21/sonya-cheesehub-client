import React from 'react';

export default class CheeseList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  console.log(this.props);
  const list = this.props.cheeses.map(cheese => <li>{cheese}</li>)

  return (
    <ul>
      {list}
    </ul>      
  )
}
}
