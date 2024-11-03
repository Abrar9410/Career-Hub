import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";


const CategoryList = () => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/categories.json')
        .then(res => res.json())
        .then(data => setCategoryList(data))
    },[])

    return (
        <div className="w-10/12 mx-auto mt-32 mb-8">
            <div className="text-center">
                <h2 className="text-primary font-extrabold md:text-5xl">Job Category List</h2>
                <p className="text-secondary pt-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {
                    categoryList.map(category => 
                        <CategoryCard key={category.category_name} category={category}></CategoryCard>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryList;