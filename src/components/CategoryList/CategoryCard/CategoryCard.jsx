

const CategoryCard = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="p-10 rounded-md bg-gradient-to-r from-linear1Lighter to-linear2Lighter">
            <div className="p-4 rounded-md bg-gradient-to-r from-linear1Light to-linear2Light">
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default CategoryCard;