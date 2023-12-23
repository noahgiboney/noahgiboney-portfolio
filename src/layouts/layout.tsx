import  { Quicksand }  from 'next/font/google'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Headroom from 'react-headroom'

const jose = Quicksand({ subsets: ['latin'], weight: ['300']})

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

