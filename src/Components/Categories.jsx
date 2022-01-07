import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive';


const Container = styled.div
`
display:flex;
justify-content: space-between;
padding: 20px;
${mobile({padding: "0px", flexDirection: "column"})};
`;

const Title = styled.h1
`
font-size: 38px;
font-weight:400;
text-align:center;
margin-top:0;
${mobile({ fontSize:"28px"})}
`

const Categories = () => {
    return (
        <>
        <Title>Favorite Catagories</Title>
        <Container>
           {categories.map(item=> (
               <CategoryItem item={item} key={item.id}/>
           ))}
        </Container>
        </>
    )
}

export default Categories
