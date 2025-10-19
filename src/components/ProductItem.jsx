import styled from "styled-components"
import ProductDetail from "./ProductDetail"

export default function ProductItem({products}){
    return(
        <ProductList>
            {products && products.map(el=>(
                <li key={el.id}>
                    <ProductDetail product={el}/>
                </li>
            ))}
        </ProductList>
    )
}

const ProductList = styled.ul`
    display: flex;
    gap: 20px 5%;
    flex-wrap: wrap;
    li{
        flex-basis: 30%;
        flex-shrink: 0;
    }
`