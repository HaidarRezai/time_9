import React from "react";

class B extends React.Component {
    render() {
        return (
            <>
                <div className="grid justify-between grid-cols-2 max-md:grid-cols-1 gap-6">
                    <div className="flex flex-col gap-6">
                        <h1 className="font-bold text-2xl">Welcome to TrailBase</h1>
                        <p>1m read time</p>
                        <button className="border p-2 rounded-xl">
                            <i className="bi bi-arrow-up-right-square"></i>
                            <span>Read post</span>
                        </button>
                    </div>
                    <div>
                        <img src="./image/2.webp" alt="" className="rounded-2xl" />
                    </div>
                </div>
                <div className="flex max-md:flex-col gap-2 py-4">
                    <div className="border border-[#CFD6E6] rounded-2xl flex gap-3 px-2">
                        <i className="bi bi-arrow-up-right-square"></i>
                        <p className="font-bold">Testing for website</p>
                    </div>
                    <div className="border border-[#CFD6E6] rounded-2xl flex gap-3 px-2">
                        <i className="bi bi-arrow-up-right-square"></i>
                        <p className="font-bold">Testing for website</p>
                    </div>
                    <div className="border border-[#CFD6E6] rounded-2xl flex gap-3 px-2">
                        <i className="bi bi-arrow-up-right-square"></i>
                        <p className="font-bold">Testing for website</p>
                    </div>
                </div>
            </>
        );
    }
}
export default B;