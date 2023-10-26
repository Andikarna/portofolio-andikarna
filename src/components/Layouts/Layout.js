import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "./components/Sidebar";
import Provider from "../Header/components/themeProvider";

export default function Layout({ children }) {
  return (
      <Provider>
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-3/4">
            <Sidebar />
            <div className="p-4 xl:ml-80 lg:ml-64 md:ml-2">
              {children}
            </div>
          </div>
        </div>
      </Provider>
  )
}