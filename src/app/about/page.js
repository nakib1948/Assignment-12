
const page = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src='https://i.ibb.co/CPzxpBf/meeting-4784909-1280.jpg' alt="Album" /></figure>
                <div className="card-body w-3/4">
                    <h2 className="card-title text-3xl">What makes us different!</h2>
                    <p> our goal is to share a world of ideas, knowledge, and inspiration. Our platform is a haven for those who want to explore a diverse array of topics, from technology to culture, creativity to current events. With our team of dedicated writers and experts, we are committed to offering thought-provoking content that captivates, educates, and entertains our readers.

                        Having come into existence in 2010, our blog has evolved into a thriving community of thinkers, storytellers, and enthusiasts. We firmly believe that diverse perspectives enhance our understanding of the world. Our aim is to cultivate an inclusive environment where voices from various backgrounds are acknowledged and celebrated.

                        Our mission is to enable individuals to express themselves, share their experiences, and participate in meaningful conversations. Through insightful articles, engaging discussions, and carefully curated content, our vision is to create a platform that ignites curiosity, stimulates dialogue, and nurtures personal development.

                        We are grateful that you are joining us on this expedition of exploration and enlightenment. Together, let s navigate the realm of ideas and uncover the beauty of shared knowledge."

                    </p>

                </div>
            </div>
            <h1 className='text-4xl font-semibold text-center my-5 text-blue-600'> Our Client review </h1>
            <div className="grid md:grid-cols-3 ml-10 sm:grid-cols-1 gap-3">
                <div className="card w-96 bg-base-100 shadow-xl glass">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/C6qb560/img4.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg'>By Peter Graffin</h1>
                        <p>"Incredible content and diverse perspectives. I find myself coming back for more inspiration and insights."</p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/5rkJ4jT/img5.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg'>By Joe Bony</h1>
                        <p>"This blog is my go-to source for thought-provoking articles. It's like having a cup of coffee with a brilliant mind."</p>

                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/ZL8wWX2/img11.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className='text-lg'>By stwie Lois</h1>
                        <p>"Engaging discussions and well-researched articles. This blog keeps me informed and entertained in equal measure."</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;