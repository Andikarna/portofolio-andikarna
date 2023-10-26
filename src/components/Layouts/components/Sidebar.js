import ContentSideBar from "./contentSidebar";


export default function Sidebar() {
  return (    
    <aside id="sidebar" className="hidden lg:block fixed top-0 left-72 md:left-48 xl:left-60 z-40 w-60 h-screen mx-4 pt-20 bg-white border-gray-200  dark:bg-gray-900 dark:border-gray-700" aria-label="Sidebar">
      <ContentSideBar />
    </aside>
  )
}