import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <h1 className="mx-auto">Hello world</h1>

        <button onClick={()=>{
          this.setState({
            count:count+1
          })
        }}>{count}</button>
      </>
    );
  }
}

export default About
