import React from 'react'
import { View,navigateTo } from 'remax/wechat'
import { Button } from 'annar'
export default function Portal() {
    const switchPage = (url:string) => {
        navigateTo({
            url: url
        })
    }
  return (
    <View>
        <Button onTap={()=>switchPage("/pages/tasks/index")}>跳转到task页面</Button>
        <Button onTap={()=>switchPage("/pages/home/index")}>跳转到home页面</Button>

    </View>
  )
}
