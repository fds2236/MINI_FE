import styled from "styled-components";

const brandCategories = [
  {
    name: 'NIKE',
    text: 'NIKE'
  },
  {
    name: 'CONVERSE',
    text: 'CONVERSE'
  },
  {
    name: 'ADIDAS',
    text: 'ADIDAS'
  },
  {
    name: 'VANS',
    text: 'VANS'
  },
  {
    name: 'NEWBALANCE',
    text: 'NEWBALANCE'
  }
]

const CategoriesBlock = styled.div`
`;

const Category = styled.div`
`;

const brandCategory = ({onSelect, category}) => {
  return (
    <CategoriesBlock>
      {brandCategories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >{c.text}</Category>
      ))}
    </CategoriesBlock>
  )
};

export default brandCategory;