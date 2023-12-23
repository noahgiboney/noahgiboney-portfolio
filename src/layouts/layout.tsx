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
  
  //ensures nav bar is top z index
  const headroomStyle = {
    zIndex: 1000
  };

  return (
      <div className={jose.className}>
        <Headroom style={headroomStyle}>
          <NavBar/>
        </Headroom>
          {children}
        <Footer/>
      </div>
  )
}

