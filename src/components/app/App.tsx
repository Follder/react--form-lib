import Input from '../input/Input';
import './App.scss';

function App() {
  return (
    <div className="page">
      <header className="container">
        <div className="page__wrapper">
          <Input required={'my own text'} />
        </div>
      </header>
    </div>
  );
}

export default App;
