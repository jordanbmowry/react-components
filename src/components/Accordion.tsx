interface Item {
  label: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

function Accordion({ items }: AccordionProps) {
  return <div></div>;
}

export default Accordion;
