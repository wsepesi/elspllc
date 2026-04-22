import Footer from './Footer'
import Navbar from './Navbar'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        backgroundImage: 'url(/images/lake_4.webp)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  )
}
