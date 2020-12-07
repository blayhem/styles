export default function TwCard({ title, description, link }) {
  return (
    <a
      href={link}
      class="group hover:bg-white hover:shadow-lg hover:border-transparent max-w-md mx-auto rounded-xl shadow-md overflow-hidden"
    >
      <div class="md:flex">
        <div class="p-8">
          <a
            href="#"
            class={`block mt-1 text-lg leading-tight font-medium text-gray-900 group-hover: text-gray-500 hover:underline`}
          >
            {title}
          </a>
          <p class={`mt-2 text-gray-500`}>{description}</p>
        </div>
      </div>
    </a>
  );
}
