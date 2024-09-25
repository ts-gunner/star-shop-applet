import React from 'react'
import { View } from 'remax/wechat'
import { Ling } from 'annar'
import "./tab.css"
import "annar/esm/ling/style/index.css"

interface TabType {
    activateKey: string | number
    children: React.ReactElement<typeof TabContent>[]
    onTabClick: (key: any) => void
}

export const TabContent = ({ children }: {
    tabKey: any,
    label: string,
    children: React.ReactNode
}) => {
    return <View>{children}</View>
}

export default function Tab({ activateKey, children, onTabClick }: TabType) {
    const [nowClientX, setNowClientX] = React.useState(0)
    const ling = React.useRef<any>();
    const tabs = React.Children.toArray(children).map((child) => {
        if (React.isValidElement(child)) {
            return {
                key: child.props.tabKey,
                label: child.props.label
            }
        } else {
            return null
        }
    }).filter((item) => item != null)
    const tabIndex = tabs.findIndex(item => item.key === activateKey)
    const handleTabTouchStart = (event: any) => {
        setNowClientX(event.changedTouches[0].clientX)
    }
    const handleTabTouchEnd = (event: any) => {
        let currentClientX = event.changedTouches[0].clientX
        const tabIndex = tabs.findIndex(item => item.key === activateKey)
        if (currentClientX < nowClientX) {
            console.log("向左滑动")
            // 向左滑动
            if (tabIndex + 1 >= tabs.length) {
                // ling.current.warning("已到尽头", 3000)
            } else {
                onTabClick(tabs[tabIndex + 1].key)
            }

        } else {
            console.log("向右滑动")
            // 向右滑动
            if (tabIndex - 1 < 0) {
                // ling.current.warning("已到尽头", 3000)
            } else {
                onTabClick(tabs[tabIndex - 1].key)
            }
        }

    }

    return (
        <View>
            <Ling ref={ling} />
            <View className='custom-tab-header'>
                {tabs.map((item) => {
                    return <View
                        style={{
                            width: "4.375rem",
                            color: item.key === activateKey ? "black" : "#808080",
                            fontWeight: item.key === activateKey ? 800 : 500,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            whiteSpace: "nowrap",
                            marginLeft: "0.125rem",
                            marginRight: "0.125rem"
                        }}
                        key={item.key}
                        onClick={() => onTabClick(item.key)}
                    >{item.label}</View>
                })}
                <View style={{
                    position: "absolute",
                    left: 0,
                    backgroundColor: "#fdfffd",
                    height: "100%",
                    borderRadius: "1.875rem",
                    zIndex: -1,
                    transition: "all .3s cubic-bezier(.645,.045,.355,1)",
                    boxShadow: "0 .125rem .25rem #ccc",
                    width: `${100 / tabs.length}%`,
                    transform: tabIndex === 0 ? "0" : `translateX(${100 * tabIndex}%)`
                }}></View>
            </View>
            <View
                onTouchStart={handleTabTouchStart}
                onTouchEnd={handleTabTouchEnd}
            >
                {React.Children.toArray(children).map((child, index) => {
                    if (React.isValidElement(child)) {
                        return child.props.tabKey === activateKey ? child : null
                    } else {
                        return null
                    }

                })}
            </View>
        </View>
    )
}
