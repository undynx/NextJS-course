import React from 'react'
import { motion } from 'framer-motion';

import LinkItem, { LinkType } from '@components/LinkItem/LinkItem';

import profileSVG from '@assets/icons/profile.svg';
import nosotrosSVG from '@assets/icons/nosotros.svg';
import contactoSVG from '@assets/icons/message.svg';
import cartSVG from '@assets/icons/cart.svg'

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
]

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <>
      <motion.div
        variants={variants}
        animate={ isOpen ? "opened" : "closed" }
        transition={{ duration: 0.3 }}
        className="w-72 min-h-screen fixed top-0 right-0 bg-blue-100 p-8 z-10"
      >
        {links.map((el) => (
          <LinkItem linkItem={el} key={el.title} onClick={onClose} />
        ))}
      </motion.div>
      {isOpen && <button className="fixed top-0 right-0 min-h-screen min-w-full" onClick={onClose} />}
    </>
  )
}

export default Navbar
