import React from 'react'
import { Image } from 'remax/wechat'
export default function Icon({url}: {url:string}) {
  return (
    <Image src={url} style={{width: "40px", height: "40px"}}></Image>
  )
}
