import React from "react";


class C extends React.Component {
    render() {

        return (
            <>
                <div>
                    <p>TrailBase is an open-source Firebase alternative built with Rust, Axum, SQLite, and V8 for high performance. It claims to be 11x faster than PocketBase and 40x faster than Supabase while maintaining a small footprint. The platform leverages fast technologies like Rust for low overhead, Axum for HTTP serving, SQLite for database operations, and V8 for JavaScript execution to deliver superior performance for backend applications.</p>
                </div>
                <div className="flex gap-6 my-6">
                    <a href="#">23 Upvotes</a>
                    <a href="#">2 Comments</a>
                </div>
                <div className="grid grid-cols-6 max-md:grid-cols-2 border border-[#1C1F26] p-4 rounded-2xl font-bold gap-6">
                    <div className="hover:bg-green-100 hover:text-gray-600 w-8 h-8 rounded-xl flex items-center justify-center">
                        <i className="bi bi-arrow-down-square"></i>
                    </div>
                    <div className="hover:bg-green-100 hover:text-gray-600 w-8 h-8 rounded-xl flex items-center justify-center">
                        <i className="bi bi-arrow-up-square"></i>
                    </div>
                    <div className="flex gap-2">
                        <i className="bi bi-send-arrow-up"></i>
                        <span>Comments</span>
                    </div>
                    <div className="flex gap-2">
                        <i className="bi bi-envelope-arrow-up"></i>
                        <span>Award</span>
                    </div>
                    <div className="flex gap-2">
                        <i className="bi bi-cloud-arrow-up"></i>
                        <span>Comments</span>
                    </div>
                    <div className="flex gap-2">
                        <i className="bi bi-arrow-clockwise"></i>
                        <span>Award</span>
                    </div>
                </div>
            </>
        )
    }
}

export default C;