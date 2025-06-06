import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Picture */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/Profile_org.jpeg"
                alt="Profile picture"
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover object-[0%_0%] scale-140 origin-bottom-left"
                priority
                quality={100}
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Conor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Software Developer
            </p>
          </div>

          {/* Introduction */}
          <p className="max-w-2xl text-gray-600 dark:text-gray-300">
            Welcome to my personal website. I'm a software developer passionate about building
            efficient and user-friendly applications. This site is where I share my thoughts,
            projects, and experiences in the world of technology.
          </p>
        </div>
      </main>
    </div>
  );
}
