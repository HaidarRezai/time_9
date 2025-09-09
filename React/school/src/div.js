function Cart(props) {
    return (
        <div className="bg-white rounded-lg shadow-md p-3">
            <div className="w-full h-64 mt-4 flex items-center justify-center overflow-hidden">
                <img src={props.img} alt="Image" className="w-full h-full object-cover" />
            </div>
            <div className="flex space-x-2 my-4">
                {props.images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Image ${index + 1}`} className="w-10 h-10 object-cover rounded-full border-2 border-gray-300" />
                ))}
            </div>
            <h1 className="text-3xl font-semibold my-4">{props.a} <sapn
                className="bg-green-200 p-1 rounded-2xl text-sm">
                {(props.price - (props.des * props.price) / 100) ? (props.price - (props.des * props.price) / 100) : "Free"}</sapn> <sapn className="bg-red-200 p-1 rounded-2xl text-sm">{props.des}%</sapn></h1>
            <p>{props.p}</p>

            <button onClick={() => props.al()} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">{props.btn}</button>
            {
                props.status && <div className="my-4">
                    {props.user_comment.map((i) => (
                        <div className="border-b p-2">
                            <div className="flex items-center space-x-2 mb-2">
                                <img src={i.profile} className="w-8 h-8 rounded-full" />
                                <h1 className="font-bold">{i.name}</h1>
                            </div>
                            <p>{i.comment}</p>
                        </div>
                    ))}
                </div>
            }

        </div>
    )
}
export default Cart;