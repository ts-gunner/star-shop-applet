import React from 'react'
import { View, Image, Text } from 'remax/wechat'
import { Button } from 'annar'
import "annar/esm/card/style/index.css"
import "annar/esm/button/style/index.css"

const categoryData = [
    {
        key: "study",
        label: "学习",
        description: "xaxaaaaaa",
        img: "/images/category/study.png",
        point: "0.2"
    },
    {
        key: "housework",
        label: "家务",
        description: "xaxaaaaaa",
        img: "/images/category/study.png",
        point: "0.4"
    },
    {
        key: "sport",
        label: "运动",
        description: "xaxaaaaaa",
        img: "/images/category/study.png",
        point: "0.5"
    }
]

export default function Category() {
    return (
        <View style={{
            height: "100%",

        }}>
            {
                categoryData.map((item) => {
                    return (
                        <View style={{
                            width: "100%",
                            boxShadow: "0 .125rem .25rem #ccc",
                            borderRadius: "1rem",
                            marginTop: "0.5rem",
                            alignItems: "center",
                            justifyContent: "space-between",
                            display: "flex"
                        }}>
                            <View style={{ display: "flex", alignItems: "center" }}>
                                <View style={{ height: "4rem", backgroundColor: "#009688", width: "0.2rem", marginLeft: "0.5rem" }}></View>
                                <View style={{ marginLeft: "0.5rem" }}>
                                    <Image src={item.img} mode='scaleToFill' style={{ width: "5.5rem", height: "5.5rem" }}></Image>
                                </View>
                                <View>
                                    <View style={{ fontWeight: 700 }}>{item.label}</View>
                                    <View style={{ marginTop: "0.25rem", color: "#949494", fontSize: "0.8rem" }}>{item.description}</View>
                                </View>
                            </View>
                            <View style={{ display: "flex", alignItems: "center" }}>
                                <View style={{ marginRight: "0.5rem" }}>{item.point}</View>
                                <View style={{ marginRight: "0.5rem" }}>
                                    <Button style={{ backgroundColor: "#009688" }}><Text style={{ color: "white" }}>添加</Text></Button>
                                </View>
                            </View>


                        </View>
                    )
                })
            }

            <View style={{
                width: "100%",
                height: "5.5rem",
                border: "0.2rem dashed #949494",
                display: "flex",
                borderRadius: "1rem",
                marginTop: "1rem",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    display:"flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Image src="/images/category/add.png" style={{ height: "3rem", width: "3rem" }}></Image>
                <Text style={{ color: "#949494", fontSize: "0.8rem" }}>可添加其他类别</Text>

                </View>
            
            </View>
        </View>
    )
}
