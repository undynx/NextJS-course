import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

import LinkItem, { LinkType } from '@components/LinkItem/LinkItem';

import profileSVG from '@assets/icons/profile.svg';
import nosotrosSVG from '@assets/icons/nosotros.svg';
import contactoSVG from '@assets/icons/message.svg';
import cartSVG from '@assets/icons/cart.svg'
import closeSVG from '@assets/icons/close.svg';
import adminSVG from '@assets/icons/admin.svg';

type NavbarProps = {
  isOpen: boolean,
  onClose: () => void,
}

const variants = {
  opened: { x: 0 },
  closed: { x: '100%' }
}

const links: LinkType[] = [
  {
    redirect: '/perfil',
    title: 'Perfil',
    icon: profileSVG,
  },
  {
    redirect: '/nosotros',
    title: 'Nosotros',
    icon: nosotrosSVG,
  },
  {
    redirect: '/carrito',
    title: 'Carrito',
    icon: cartSVG,
  },
  {
    redirect: '/contacto',
    title: 'Contacto',
    icon: contactoSVG,
  },
  {
    redirect: '/admin',
    title: 'Admin',
    icon: adminSVG,
  },
]

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <>
      <motion.div
        variants={variants}
        initial={"closed"}
        animate={ isOpen ? "opened" : "closed" }
        transition={{ duration: 0.3 }}
        className="w-72 min-h-screen fixed top-0 right-0 bg-base-color p-8 z-10"
      >
        <div className='w-100 flex justify-end'>
          <button onClick={onClose}><Image src={closeSVG} alt='close button'  width={15}/></button>
        </div>
        {links.map((el) => (
          <LinkItem linkItem={el} key={el.title} onClick={onClose} />
        ))}
      </motion.div>
      {isOpen && <button className="fixed top-0 right-0 min-h-screen min-w-full" onClick={onClose} />}
    </>
  )
}

export default Navbar
