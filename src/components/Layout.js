import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Provider from "./themeProvider";

export default function Layout({ children }) {
  return (
      <Provider>
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-3/4">
            <Sidebar />
            <div class="p-4 xl:ml-80 lg:ml-64 md:ml-2">
              {children}
            </div>
          </div>
        </div>
      </Provider>
  )
}