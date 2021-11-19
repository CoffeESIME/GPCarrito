import coursera from "./../../assets/coursera.svg";
import mikenieva from "./../../assets/mikenieva-coursera.webp";

export default function Header() {

    return (
      <nav className="bg-gray-800">
        <div className="max-w-5xl px-12">
          <div className="flex h-16">
            <div className="flex-shrink-0 flex items-center">
                <a href="https://es.coursera.org/courses?query=guided%20projects" target="_blank" rel="noopener noreferrer">
                    <img className="lg:block h-4 w-auto" src={coursera} alt="Coursera" />
                </a>
            </div>
            <div className="flex items-center">
              <div className="md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <div className="ml-3 relative">
                    <a href="https://www.coursera.org/instructor/mikenieva" target="_blank" rel="noopener noreferrer">
                        <img className="h-8 w-8 rounded-full" src={mikenieva} alt="" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
