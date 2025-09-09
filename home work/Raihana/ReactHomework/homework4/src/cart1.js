import React from "react";
class Cart1 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="border border-indigo-200 w-full max-w-[25%] h-[46vh] p-4 flex flex-col gap-5 rounded-lg mt-20">
                {this.props.children}
            </div>)
    }
}
export default Cart1;