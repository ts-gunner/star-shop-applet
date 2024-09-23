import React from 'react'
import { View, Image, Text } from 'remax/wechat';
import Frame from '@/component/Frame';
import {theme} from '@/data/config';
import "./index.css"
export default function Home() {
  return (
    <Frame>
      <View style={{
        backgroundColor: theme.secondary,
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "5rem",
        gap: "0.3rem"
      }}>
        <View>
          <Image src="/images/monkey.png" mode='scaleToFill' showMenuByLongpress className='mine-avator'></Image>
        </View>
        <View>
          <View>
            <Text style={{
              color: theme.secondaryText,
              fontWeight: 700
            }}>杨俊杰</Text>
          </View>
          <View>
            <Text style={{
              color: theme.divider,
              fontWeight: 500
            }}>角色：小马喽</Text>

          </View>
        </View>
      </View>

    </Frame>
  )
}
