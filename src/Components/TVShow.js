import React from 'react';

class TVShow extends React.Component {

  handleShowSelect = () => {
    this.props.selectShow(this.props.show)
  }

  render(){
    const props = this.props
    return (
      <div>
        <br/>
        <img src={props.show.image.medium} onClick={this.handleShowSelect} alt=""/>
      </div>
    );
  }
}

export default TVShow;
