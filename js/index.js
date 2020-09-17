const rootElement = document.getElementById("root");
const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lets Develop")
);
ReactDOM.render(element, rootElement);
