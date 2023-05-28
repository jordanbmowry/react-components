const data = [
  { name: 'Tomato', cost: 10, weight: 5 },
  { name: 'Carrot', cost: 15, weight: 2 },
  { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(veg) {
  return veg.cost;
}

const sortOrder = 'desc';

data.sort((a, b) => {
  const valA = getSortValue(a);
  const valB = getSortValue(b);

  const reverseOrder = sortOrder === 'asc' ? 1 : -1;

  if (typeof valA === 'string') {
    return valA.localeCompare(valB) * reverseOrder;
  }

  return (valA - valB) * reverseOrder;
});
