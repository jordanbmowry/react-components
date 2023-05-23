import { useState } from 'react';
import Dropdown from './components/Dropdown';
import type { Option } from './components/Dropdown';

function App() {
  const [selection, setSelection] = useState<null | Option>(null);

  const handleSelection = (option: Option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  return (
    <div className='flex'>
      <Dropdown
        value={selection}
        onChange={handleSelection}
        options={options}
      />
    </div>
  );
}

export default App;
