import { contributors } from "../constants/index";

const Contributors = () => {
    return (
        <section id='contributors' className='py-16 bg-slate-300'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12'>Contributors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contributors.map((contributor, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-lg flex flex-col items-center bg-white">
                            <img src={contributor.imageUrl} alt={`${contributor.name}`} className="w-32 h-32 rounded-full mb-4 object-cover" />
                            <h3 className="text-xl font-semibold mb-2 text-green-500">{contributor.name}</h3>
                            <p className="text-blue-500 mb-2">{contributor.role}</p>
                            <p className="text-gray-600 text-center">{contributor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contributors;
