import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import type { TableProps as SortableTableProps } from './Table';
import type { ConfigObj, Fruit } from '../pages/TablePage';

function SortableTable<T extends Fruit>(props: SortableTableProps<T>) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { config, data } = props;

  const handleClick = (label: 'asc' | 'desc' | null) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortOrder(label);
      return;
    }
    setSortOrder((currentSortOrder) => {
      if (!currentSortOrder) {
        setSortBy(label);
        return 'asc';
      } else if (currentSortOrder === 'asc') {
        setSortBy(label);
        return 'desc';
      }
      setSortBy(null);
      return null;
    });
  };

  const updatedConfig = config.map((col) => {
    if (!col.sortValue) {
      return col;
    }
    return {
      ...col,
      header() {
        return (
          <th
            className='cursor-pointer hover:bg-gray-100'
            onClick={() => handleClick(col.label as 'desc' | 'asc' | null)}
          >
            <div className='flex items-center'>
              {getIcons(col.label, sortBy, sortOrder)}
              {col.label}
            </div>
          </th>
        );
      },
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find(
      (col) => col.label === sortBy
    ) as ConfigObj<T>;

    if (sortValue) {
      sortedData = [...data].sort((a, b) => {
        const valA = sortValue(a) ?? 0;
        const valB = sortValue(b) ?? 0;

        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valA === 'string' && typeof valB === 'string') {
          return valA.localeCompare(valB) * reverseOrder;
        } else if (typeof valA === 'number' && typeof valB === 'number') {
          return (valA - valB) * reverseOrder;
        }

        return 0;
      });
    }
  }

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
