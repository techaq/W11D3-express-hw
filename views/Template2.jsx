const React = require("react");

class Template1 extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Template 2</title>
        </head>
        <body>
          <h1>{this.props.message}</h1>
          <p> "Don't try to lessen yourself for the world; let the world catch up to you." <br /> -Beyoncé </p>
        </body>
      </html>
    );
  }
}

module.exports = Template1;
