const React = require("react");

class Template1 extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Template 1</title>
        </head>
        <body>
          <h1>{this.props.message}</h1>
          <p> "Always be inspired." <br /> -Jay-Z </p>
        </body>
      </html>
    );
  }
}

module.exports = Template1;
