export default function TwCard({ title, description, link }) {
  return (
    <a
      href={link}
      className="group hover:bg-white hover:shadow-lg hover:border-transparent max-w-md mx-auto rounded-xl shadow-md overflow-hidden"
    >
      <div className="md:flex">
        <div className="p-8">
          <a
            href="#"
            className={`block mt-1 text-lg leading-tight font-medium text-gray-900 group-hover: text-gray-500 hover:underline`}
          >
            {title}
          </a>
          <p className={`mt-2 text-gray-500`}>{description}</p>
        </div>
      </div>
    </a>
  );
}
