import styled, {css} from "styled-components";

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
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  background-color: #eeeeee;

  &:hover {
    background-color: #222831;
  }

  ${props => 
    props.active && css`
      font-weight: 600;
      background-color: #222831;
  `}

`;

const Category = styled.div`
`;

const BrandCategory = ({onSelect, brandCategories}) => {
  return (
    <CategoriesBlock>
      {brandCategories.map(c => (
        <Category
          key={c.name}
          active={brandCategories === c.name}
          onClick={() => onSelect(c.name)}
        >{c.text}</Category>
      ))}
    </CategoriesBlock>
  )
};

export default BrandCategory;