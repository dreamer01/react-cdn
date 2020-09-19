const App = () => {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <h1>Lets Build Stuff</h1>
      <button onClick={() => setState((state) => state + 1)}>{state}</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
