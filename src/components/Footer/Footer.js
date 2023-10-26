export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-screen">
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full lg:max-w-5xl md:max-w-2xl sm:max-w-lg max-w-sm  sm:text-center">
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 flex text-center flex-col md:flex md:flex-row justify-center items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 flex justiify-center items-center">©2023
              </span>
              <div className="text-sm text-gray-500 dark:text-gray-300 flex justiify-center items-center">
                <a href="">❤️ by Andikarna</a>.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}