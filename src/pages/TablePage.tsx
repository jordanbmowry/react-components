import Table from '../components/Table';

interface Fruit {
  name: string;
  color: string;
  score: number;
}

export interface ConfigObj<T> {
  label: string;
  render(obj: T): string | JSX.Element | number;
}

function TablePage() {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  const config: ConfigObj<Fruit>[] = [
    { label: 'Name', render: (fruit: Fruit) => fruit.name },
    {
      label: 'Color',
      render: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    { label: 'Score', render: (fruit: Fruit) => fruit.score },
  ];

  const keyFn = (fruit: Fruit) => fruit.name;

  return (
    <div>
      <Table<Fruit> data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
