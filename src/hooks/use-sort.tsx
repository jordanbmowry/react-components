import { useState } from 'react';
import { ConfigObj, Fruit } from '../pages/TablePage';

function useSort<T extends Fruit, U extends T[], V extends ConfigObj<T>[]>(
  data: U,
  config: V
) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const setSortCol = (label: string | null) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
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

  let sortedData: T[] = [...data];

  if (sortOrder && sortBy) {
    const column = config.find((col) => col.label === sortBy);
    if (column && column.sortValue) {
      sortedData = [...data].sort((a, b) => {
        const valA = column.sortValue!(a) ?? 0;
        const valB = column.sortValue!(b) ?? 0;

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

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortCol,
  };
}

export default useSort;
