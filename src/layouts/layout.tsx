import  { Josefin_Sans }  from 'next/font/google'
import 'src/styles/global.css'
import NavBar from '@/components/NavComponent';
import Footer from '@/components/FooterComponent';

const jose = Josefin_Sans({ subsets: ['vietnamese'], weight: ['300']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={jose.className}>
        <NavBar/>
          {children}
        <Footer/>
      </div>
        
  )
}

