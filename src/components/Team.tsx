const team = [
  {
    name: "Thinh Lam",
    role: "Founder",
    image: "/lovable-uploads/572ae2f7-7d93-4f52-bf1e-ef088eb4f496.png",
  },
  {
    name: "Thong Bui",
    role: "Co-Founder",
    image: "/lovable-uploads/7f2c8f30-fd86-49ba-ac3e-19ddba5c0a58.png",
  },
  {
    name: "Duy Pham",
    role: "Co-Founder",
    image: "/lovable-uploads/c2268986-97ad-4743-bb14-6b7e194115e9.png",
  },
];

const Team = () => {
  return (
    <div id="team" className="py-16 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The passionate people behind Thanks Everyday
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="text-center transform transition duration-500 hover:scale-105"
              >
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">{member.name}</h3>
                      <p className="text-indigo-400">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;