import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img alt="X" src={this.props.user.profileObj.imageUrl} />
      </div>
    );
  }
}

export default Dashboard;
