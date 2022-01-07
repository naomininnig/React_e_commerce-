import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Footer from "../Components/Footer"
import { mobile } from "../responsive"
import Products from "../Components/Products"


const Container = styled.div
`

`
const Title = styled.h1
`
font-size: 28px;
margin-top:30px;
margin-bottom:10px;
padding-left:10px;
`
const FilterContainer = styled.div
`
display:flex;
justify-content:space-between;
padding-left:10px;
padding-right:10px;
`
const Filter = styled.div
`
margin:20;
${mobile({ width:"0px 20px" , display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span
`
font-size:20px;
font-weight:600;
margin-right: 20px;
${mobile({ marginRight:"0px"})}
`
const Select = styled.select
`
padding:8px;
${mobile({ margin:"10px 0px"})}
`
const Option = styled.option
`

`

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Find your spice</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                        <Option >
                            Chili
                        </Option>
                        <Option>Oriental</Option>
                        <Option>India</Option>
                        <Option>Classic</Option>
                        <Option>Extravagant</Option>
                        <Option>Salad</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                        <Option >
                          Newest
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                        <Option>Best Sellers</Option>
                </Select>
                </Filter>
            </FilterContainer>
           <Products />
           <Newsletter />
           <Footer />
        </Container>
    )
}

export default ProductList




