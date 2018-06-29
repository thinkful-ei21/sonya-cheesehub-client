import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses())
  }

  render() {
  console.log(this.props.cheeses);

  const list = this.props.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ))

  console.log(list);

  // const list = [];
  // for (let i = 0; i < this.props.cheeses.length; i++) {
  //   list.push(<li key={i}>{this.props.cheeses[i]}</li>)
  // }

  return (
      <ul>
        {list}
      </ul>      
  )
}
}
const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
