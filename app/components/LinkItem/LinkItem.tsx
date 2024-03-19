import React from 'react'
import Image from 'next/image'

export type LinkType = {
  redirect: string,
  title: string,
  icon: string,
}

type LinkItemProps = {
  linkItem: LinkType,
}

const LinkItem = ({ linkItem }: LinkItemProps) => {
  const { redirect, title, icon } = linkItem;
  return (
    <div className="flex items-center py-4">
      <Image
        src={icon}
        width={40}
        alt=""
      />
      <span className="pl-2">{title}</span>
    </div>
  )
}

export default LinkItem
