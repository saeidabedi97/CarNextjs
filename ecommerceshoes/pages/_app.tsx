import type { AppProps } from 'next/app'
import {   NavItem, NavBarContainer, NavItemsContainer, NavLogoContainer } from '../styles/NavHeader.style'
import Image from 'next/image'
import { GlobalStyle } from '../styles/Global.style'
import BMWLogo from '../public/BMWLogo.svg'
import Link from "next/link"
import { navLinks } from '../Utils/navLinks'
import {motion} from "framer-motion"


function MyApp({ Component, pageProps }: AppProps) {
  
  
  return ( 
  <>
  <GlobalStyle/>
  <NavBarContainer>
    {navLinks.map((link,index) => {
      return(
     <NavItemsContainer key={link.name}>
       <Link href={link.path} >
         <NavItem 
         key={index} 
         as={motion.li} 
         whileHover={{
          borderBottom:"3px solid white",
          textShadow:"8px 8px 5px blue",
          transition: { duration: 1 },
            }}
            >{link.name}</NavItem>
       </Link>
    </NavItemsContainer>
      );
    })}
    
    <NavLogoContainer>
              <Image alt="logo" src={BMWLogo}></Image>
    </NavLogoContainer>

  </NavBarContainer>
  <Component {...pageProps} />
  </>
  )}

export default MyApp
