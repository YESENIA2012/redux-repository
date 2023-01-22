import "./App.css";

import Pokemones from "./componentes/Pokemones";
import { Provider } from "react-redux";
import getStore from "./redux/store";

const App = () => {
  const store = getStore(); // store
  return (
    <Provider store={store}>
      <Pokemones />
    </Provider>
  );
};

export default App;

/* import PropTypes from "prop-types"; */
/* function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEfectA");
  });

  useEffect(() => {
    console.log("useEfectB");
  }, [count]);

  useEffect(() => {
    console.log("useEfectC");
  }, []);

  const onBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onBtnClick}>Click</button>
      <span>Count : {count}</span>
      <Hijo count={count} />
    </div>
  );
} */

/* const Hijo = (props) => {
  const { count } = props;
  return <div>Este es el resultado {count}</div>;
};

Hijo.propTypes = {
  count: PropTypes.number.isRequired,
}; */
