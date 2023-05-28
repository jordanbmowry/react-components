import type { ConfigObj } from '../pages/TablePage';
import { Fragment } from 'react';

export interface TableProps<T> {
  data: T[];
  config: ConfigObj<T>[];
  keyFn(rowData: T): string;
}

function Table<T>({ data, config, keyFn }: TableProps<T>) {
  const renderedHeaders = config.map((col) => {
    if (col.header) {
      return <Fragment key={col.label}>{col.header()}</Fragment>;
    }
    return <th key={col.label}>{col.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className='p-2' key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)} className='border-b'>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
