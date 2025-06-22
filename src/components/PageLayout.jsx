import Navbar from "./Navbar"
import Footer from "./Footer"

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  )
}
