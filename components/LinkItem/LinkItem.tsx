import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type LinkType = {
  redirect: string,
  title: string,
  icon: string,
}

type LinkItemProps = {
  linkItem: LinkType,
  onClick?: () => void,
}

const LinkItem = ({ linkItem, onClick }: LinkItemProps) => {
  const { redirect, title, icon } = linkItem;
  return (
    <Link href={redirect} className="flex items-center py-4" onClick={onClick}>
      <Image
        src={icon}
        width={40}
        alt=""
      />
      <span className="pl-2">{title}</span>
    </Link>
  )
}

export default LinkItem
