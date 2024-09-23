import React, { useState } from 'react'
import { View, Text } from 'remax/wechat'
import Item from './Item';
import Frame from "@/component/Frame";
import Tab, { TabContent } from '@/component/tab/Tab';
import { theme } from '@/data/config';
const data = [
    {
        title: "做家务",
        description: "完成需要提供证明",
        score: 0.2,
        status: 0,
    },
    {
        title: "学习1",
        description: "完成需要提供证明",
        score: 0.2,
        status: 0,
    },
    {
        title: "学习2",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习3",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习1",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习2",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习3",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习1",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习2",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
    {
        title: "学习3",
        description: "完成需要提供证明",
        score: 0.2,
        status: 1,
    },
]

const tabData = [
    {
        key: 0,
        label: "未完成"
    },
    {
        key: 1,
        label: "已完成"
    },
    {
        key: 2,
        label: "待审核"
    }
]

export default function Task() {
    const [tabKey, setTabKey] = useState(0)
    return (
        <Frame>
            <Text style={{
                fontWeight: 700
            }}>Today</Text>
            <View style={{marginTop: "1.5rem"}}>
                <Tab activateKey={tabKey} onTabClick={(key) => setTabKey(key)}>
                    {tabData.map((tabItem) => {
                        return (
                            <TabContent key={tabItem.key} tabKey={tabItem.key} label={tabItem.label}>
                                {
                                    data.filter((item)=> item.status === tabItem.key).map((item, index) => {
                                        return <Item key={index} title={item.title} description={item.description} score={item.score}></Item>
                                    })
                                }
                            </TabContent>
                        )
                    })}
                </Tab>




            </View>


        </Frame>
    )
}
