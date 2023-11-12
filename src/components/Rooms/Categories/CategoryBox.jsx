/* eslint-disable react/prop-types */


const CategoryBox = ({ label, icon: Icon }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
            <div className=" text-sm font-medium">
                <Icon size={26}></Icon>
                {label}
            </div>
        </div>
    );
};

export default CategoryBox;