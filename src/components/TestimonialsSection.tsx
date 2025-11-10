import Image from 'next/image';
import ContentWrapper from './ContentWrapper'; // Assuming you use ContentWrapper

const testimonialsData = [
    {
        name: 'Hazrien Nazman',
        title: 'IoT Product Manager',
        relation: 'Ex-Colleague',
        quote: "Brian is a genuinely great and incredibly knowledgeable colleague. He possesses a remarkable ability to not just identify problems, but to strategize and find effective solutions. What truly sets him apart is his unwavering persistence; he will dedicate himself entirely to a challenge and will not stop until he finds the right solution, ensuring the task is completed to the highest standard.",
        imagePath: '/images/testimonials/hazrien.png',
    },
    {
        name: 'Raghad Habayeb',
        title: 'Planning and Quality Assurance Engineer',
        relation: 'Coursemate',
        quote: "Brian is a wonderful team member, considerate, supportive, and an active listener. I had the pleasure of working with him on a group assignments and case studies, where his dedication truly stood out. He is never lazy and always strives to find the best solutions and well-thought-out answers. Brian quickly became the person I would go to for advice, especially when our group faced challenges. He constantly encouraged everyone, helped ease tensions, and reminded us to give each other grace when things did not go as planned. Every team needs a Brian, someone who lifts others up, keeps the group focused, and creates a space where everyone feels valued and respected.",
        imagePath: '/images/testimonials/raghad.png',
    },
    // {
    //     name: 'Chen Li',
    //     title: 'Software Developer, Peer',
    //     quote: "An excellent team player who excels in system optimization. He introduced us to Docker best practices, significantly speeding up our development cycle.",
    //     imagePath: '/images/testimonials/chen.jpg',
    // },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials">
            <ContentWrapper>
                <h1 className="text-4xl font-extrabold text-white mb-10 border-b border-gray-700 pb-4">
                    What Others Say
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-xl h-full
                                transition-all duration-300 
                                hover:-translate-y-1 
                                hover:shadow-2xl 
                                hover:shadow-blue-400/20
                        ">

                            {/* 🚀 Profile Picture */}
                            <div className="relative w-20 h-20 mb-4">
                                <Image
                                    src={testimonial.imagePath}
                                    alt={`Profile picture of ${testimonial.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full border-2 border-teal-500"
                                />
                            </div>

                            {/* 📝 Quote */}
                            <p className="text-gray-300 italic mb-4">
                                "{testimonial.quote}"
                            </p>

                            {/* 👤 Name and Title */}
                            <div className="mt-auto"> {/* mt-auto pushes content to the bottom */}
                                <p className="font-bold text-teal-400">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                                <p className="text-sm text-gray-500">{testimonial.relation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    );
}