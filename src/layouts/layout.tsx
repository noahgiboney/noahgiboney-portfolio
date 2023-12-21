import  { Josefin_Sans }  from 'next/font/google'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Headroom from 'react-headroom'

const jose = Josefin_Sans({ subsets: ['vietnamese'], weight: ['300']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={jose.className}>
        <Headroom>
          <NavBar/>
        </Headroom>
          {children}
        <Footer/>
      </div>
  )
}

