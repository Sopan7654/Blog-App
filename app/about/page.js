import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* About Section */}
      <div className="flex flex-col items-center justify-center py-32 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-400 dark:ring-gray-600 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center space-y-4">
              <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-2 animate-fade-in">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Hello! I'm{" "}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  Sopan Bharkad
                </span>
                , a passionate software developer and tech enthusiast from
                Nagpur. I specialize in building intuitive and responsive web
                applications using modern frameworks and tools like React,
                Next.js, and Tailwind CSS.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Currently pursuing my final year at RTMU University, Nagpur, in
                Integrated B.Tech in Computer Science & Engineering, I aim to
                create impactful and innovative digital solutions. Whether it's
                front-end design, back-end functionality, or full-stack
                projects, my journey in tech reflects my commitment to
                continuous learning and growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <section className="py-16 bg-gradient-to-b from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white animate-slide-in">
              My Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              From an eager beginner to a skilled developer, here’s how I
              navigated the world of programming.
            </p>
          </div>

          {/* Journey Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="flex items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg transform transition hover:scale-105">
              <div className="w-1/3">
                <img
                  src="/images/web.png"
                  alt="Sopan as a beginner"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  My coding journey began when I discovered web development. The
                  joy of creating functional and visually appealing web pages
                  quickly fueled my passion for technology and design.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-center p-6 bg-gradient-to-r from-pink-300 to-purple-400 dark:from-gray-700 dark:to-gray-600 text-white shadow-md rounded-lg transform transition hover:scale-105">
              <div className="w-1/3">
                <img
                  src="/images/1.jpg"
                  alt="Sopan learning new skills"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold">Diving Deeper</h3>
                <p className="mt-2">
                  Exploring technologies like React, MongoDB, and Tailwind CSS
                  allowed me to build impactful full-stack projects. My
                  internship experiences at Zomato and Ad Infocom Systems gave
                  me hands-on knowledge of real-world software development.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg transform transition hover:scale-105">
              <div className="w-1/3">
                <img
                  src="/images/2.jpg"
                  alt="Sopan working on a project"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  From developing HR systems and restaurant reservation apps to
                  participating in hackathons, I’ve continually pushed my
                  boundaries to refine my skills and deliver meaningful
                  solutions.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="flex items-center p-6 bg-gradient-to-r from-blue-300 to-green-400 dark:from-gray-700 dark:to-gray-600 text-white shadow-md rounded-lg transform transition hover:scale-105">
              <div className="w-1/3">
                <img
                  src="/images/3.jpg"
                  alt="Sopan mentoring others"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-2/3 pl-6">
                <h3 className="text-xl font-bold">Giving Back</h3>
                <p className="mt-2">
                  As a mentor, I contribute to the programming community by
                  sharing insights through tutorials, helping peers, and
                  creating impactful open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
