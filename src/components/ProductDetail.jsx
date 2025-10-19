import { useNavigate } from "react-router-dom"
import styled from "styled-components";


export default function ProductDetail({ product }) {
    const nagivate = useNavigate();
    const detailNavigate = () => {
        nagivate(`/products/detail/${product.id}`, 
            { state :{
                title : product.title,
                id : product.id,
                image : product.image,
                price: product.price,
                option : product.option,
                category : product.category,
                colors : product.colors,
                description : product.description
            } });
    }
    return (
        <DetailItem onClick={detailNavigate}>
            <img src={product.image} />
        </DetailItem>
    )
}

const DetailItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
`