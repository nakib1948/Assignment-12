
async function getData() {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-details/53')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}



const page = async ({ params }) => {
    const data = await getData()
    console.log(data)
    return (
        <div className="card w-full glass">
            <figure><img src={data.postDetails.img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{data.postDetails.title}</h2>
                <p>{data.postDetails.content}</p>

            </div>
        </div>

    );
};

export default page;