import { useReducer, ChangeEvent, FormEvent, Reducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

interface CounterPageProps {
  initialCount: number;
}

interface State {
  count: number;
  valueToAdd: number;
}

interface Action {
  type: Type;
  payload?: number;
}

type Type =
  | 'increment'
  | 'decrement'
  | 'change-value-to-add'
  | 'add-value-to-count';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      if (typeof payload === 'number') {
        return {
          ...state,
          valueToAdd: payload,
        };
      }
      return state;
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }: CounterPageProps) {
  const initialState: State = {
    count: initialCount,
    valueToAdd: 0,
  };

  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  console.log(state);

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value!) || 0;

    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>

      <div className='flex gap-2 flex-row'>
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button secondary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
