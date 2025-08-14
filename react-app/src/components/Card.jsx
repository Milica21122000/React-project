const Card = ({children, bg = "bg-gray-100"}) => (
    <div className={`${bg} rounded-lg shadow-md p-6`}>
        {children}
    </div>
);

export default Card;