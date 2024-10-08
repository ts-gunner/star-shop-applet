import React from 'react'
import { View, Text } from 'remax/wechat'
import { Card } from 'annar';
import { theme } from '@/data/config';
import Icon from '@/component/Icon';
interface ItemType {
    title: string,
    description: string,
    score: number
}
export default function Item({
    title,
    description,
    score
}: ItemType) {
    return (
        <View style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            marginTop: "5%",
            marginBottom: "5%",
            padding: "3%",

            boxShadow: "0 .125rem .25rem #ccc"
        }}>
            <Card
                style={{
                    color: "black",
                }}
                shadow
            >
                <View style={{ display: "flex", justifyContent: "space-between" }}>
                    <View>
                        <View>

                        </View>
                        <View>
                            <View>{title}</View>
                            <View style={{
                                fontSize: "0.9em",
                                color: theme.divider,
                            }}>{description}</View>
                        </View>

                    </View>
                    <View style={{ display: "flex", alignItems: "center" }}>
                        <Text style={{ marginRight: "10%" }}>{score}</Text>
                        <Icon url="/images/gold.png"></Icon>

                    </View>

                </View>
            </Card>
        </View>

    )
}
