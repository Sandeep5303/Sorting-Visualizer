import SortingVisualizer from './components/SortingVisualizer';
import './App.css';

import SortingState from './context/sorting/SortingState';

function App() {
  return (
    <SortingState>
      <SortingVisualizer />
    </SortingState>
  );
}

export default App;
