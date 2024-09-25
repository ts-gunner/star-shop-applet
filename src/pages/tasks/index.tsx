import React, { useState } from 'react'
import { View, Text } from 'remax/wechat'
import Frame from "@/component/Frame";
import Tab, { TabContent } from '@/component/tab/Tab';
import Category from './Category';
import Approval from './Approval';
import Ready from './Ready';

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
        label: "任务类别",
        keyName: "category"
    },
    {
        key: 1,
        label: "待审核",
        keyName: "approval"
    },
    {
        key: 2,
        label: "已完成",
        keyName: "done"
    }
]

export default function Task() {
    const [tabKey, setTabKey] = useState(0)
    const generateTabContent = (keyName: string) => {
        switch (keyName) {
            case "category":
                return <Category></Category>
            case "approval":
                return <Approval/>
            case "done":
                return <Ready />
        }
    }
    return (
        <Frame>
            <View style={{ marginTop: "1rem" }}>
                <Tab activateKey={tabKey} onTabClick={(key) => setTabKey(key)}>
                    {tabData.map((tabItem) => {
                        return (
                            <TabContent key={tabItem.key} tabKey={tabItem.key} label={tabItem.label}>
                                <View style={{
                                    marginTop: "0.8rem",
                                    height:  "100%"
                                }}> 
                                {
                                    generateTabContent(tabItem.keyName)
                                }
                                </View>
                               
                            </TabContent>
                        )
                    })}
                </Tab>




            </View>


        </Frame >
    )
}
