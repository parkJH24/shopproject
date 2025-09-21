import { useParams } from "react-router-dom";

export default function CategoryPage(){
    const {category} = useParams()
    console.log(category)

    return(
        <>
            <h2>{category} 페이지입니다.</h2>
        </>
    )
}