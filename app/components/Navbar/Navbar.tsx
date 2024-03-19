import React from 'react'
import { motion } from 'framer-motion';

import LinkItem, { LinkType } from '../LinkItem/LinkItem';

import profileSVG from '@assets/icons/profile.svg';
import checkSVG from '@assets/icons/check.svg';

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
    redirect: '/',
    title: 'Perfil',
    icon: profileSVG,
  },
  {
    redirect: '/',
    title: 'Link 1',
    icon: checkSVG,
  },
  {
    redirect: '/',
    title: 'Link 2',
    icon: checkSVG,
  }
]

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  return (
    <>
      <motion.div
        variants={variants}
        animate={ isOpen ? "opened" : "closed" }
        transition={{ duration: 0.3 }}
        className="w-72 min-h-screen fixed top-0 right-0 bg-pink-100 p-8 z-10"
      >
        {links.map((el) => (
          <LinkItem linkItem={el} />
        ))}
      </motion.div>
      {isOpen && <button className="fixed top-0 right-0 min-h-screen min-w-full" onClick={onClose} />}
    </>
  )
}

export default Navbar
