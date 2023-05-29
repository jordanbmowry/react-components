import React from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import type { TableProps as SortableTableProps } from './Table';
import useSort from '../hooks/use-sort';
import { Fruit } from '../pages/TablePage';

function SortableTable<T extends Fruit>(props: SortableTableProps<T>) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortCol } = useSort<
    T,
    typeof data,
    typeof config
  >(data, config);

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => setSortCol(col.label as 'desc' | 'asc' | null)}
        >
          <div className='flex items-center'>
            {getIcons(col.label, sortBy, sortOrder)}
            {col.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(
  label: string,
  sortBy: string | null,
  sortOrder: null | 'asc' | 'desc'
) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return <GoArrowSmallUp />;
  }
  return <GoArrowSmallDown />;
}

export default SortableTable;
