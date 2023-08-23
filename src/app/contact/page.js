
const page = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-1/2 p-6 bg-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label className="block font-medium">Name</label>
                        <input type="text" className="form-input w-full rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Email</label>
                        <input type="email" className="form-input border-cyan-500 w-full rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Website URL</label>
                        <input type="url" className="form-input w-full rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Message</label>
                        <textarea className="form-textarea w-full rounded"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </form>
            </div>


        </div>
    );
};

export default page;