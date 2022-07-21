import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Rendered');
    const { onReset, counters, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
