import Jane from "../assets/testimonials-images/jane.jpg";
import Chris from "../assets/testimonials-images/chris.jpg";
import Leslie from "../assets/testimonials-images/Leslie.jpg";
import Mike from "../assets/testimonials-images/mike.jpg";
import Emily from "../assets/testimonials-images/Emily.png";

const people = [
  {
    name: "Leslie Alexander",
    role: "Front-End Developer",
    imageUrl: Leslie,
  },
  {
    name: "Jane Cooper",
    role: "AWS Certified Solutions Architect",
    imageUrl: Jane,
  },
  {
    name: "Mike Johnson",
    role: "Terraform Expert",
    imageUrl: Mike,
  },
  {
    name: "Emily Davis",
    role: "DevOps Engineer",
    imageUrl: Emily,
  },
  {
    name: "Chris Wilson",
    role: "Software Engineer",
    imageUrl: Chris,
  },
];

export default function Team() {
  return (
    <div className="bg-gradient-to-br from-[#574964] via-[#9F8383] to-[#C8AAAA] text-white pt-36 pb-20">
      <div className="mx-auto text-center max-w-4xl px-6">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#FFDAB3] drop-shadow-lg">
          Meet Our Exceptional Team
        </h2>
        <p className="mt-4 text-lg text-[#C8AAAA]">
          At FewvLearns, we are driven by passion and excellence to empower you
          with cutting-edge skills for your future.
        </p>
      </div>

      <div className="mx-auto flex justify-center items-center mt-16 max-w-7xl px-6 gap-x-8 gap-y-12">
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="group">
              <div className="relative flex flex-col items-center text-center bg-[#001313] shadow-lg shadow-[#9F8383] rounded-2xl p-6 md:p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[#FFDAB3]">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="h-24 w-24 rounded-full shadow-md shadow-[#9F8383] group-hover:shadow-[#FFDAB3] transition-shadow"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#574964] to-transparent opacity-0 group-hover:opacity-90 rounded-2xl transition-opacity duration-300">
                  <div className="flex flex-col justify-center items-center h-full text-white px-6">
                    <p className="text-lg italic font-medium text-[#FFDAB3]">
                      {person.name} brings unmatched expertise in {person.role}. Their dedication fuels our teams success
                    </p>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-7 text-[#FFDAB3]">
                  {person.name}
                </h3>
                <p className="text-sm text-[#C8AAAA]">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <div className="mx-auto text-center max-w-5xl px-6">
          <p className="text-lg text-[#FFDAB3]">
            <span className="font-extrabold text-[#8a5d5d]">Our Mission: </span> 
            To cultivate a community where learning meets innovation, driven by
            the passion of exceptional individuals.
          </p>
        </div>
      </div>
    </div>
  );
}
