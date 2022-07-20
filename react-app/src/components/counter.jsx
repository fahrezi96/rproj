import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: ['tag1', 'tag2'],
    // imageUrl: 'https://picsum.photos/200',
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this);
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* {this.props.children} */}
        {/* <h5>{this.props.id}</h5> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">
          Increment
        </button>
        {/* {this.state.tags.length === 0 && 'Please create a new tag'}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
