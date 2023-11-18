import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {

    const [params, setParams] = useSearchParams()
    const selectedCategory = params.get('category')


    return (
        <Container>
            <div className=" flex items-center pt-4 justify-between overflow-x-auto">
                {
                    categories.map(category => <CategoryBox selected={selectedCategory === category.label} key={category.label} icon={category.icon} label={category.label}></CategoryBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;