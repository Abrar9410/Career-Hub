

const CategoryCard = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="p-4 sm:p-8 lg:p-10 rounded-md bg-gradient-to-r from-linear1Lighter to-linear2Lighter">
            <div className="p-4 w-max rounded-md bg-gradient-to-r from-linear1Light to-linear2Light mb-4">
                <img src={logo} alt="logo" />
            </div>
            <h4 className="text-primary font-extrabold md:text-xl py-2">{category_name}</h4>
            <p className="text-secondary">{availability}</p>
        </div>
    );
};

export default CategoryCard;