import React, { Children } from 'react'
import { View } from 'remax/wechat'
import "./tab.css"

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

    const tabs = React.Children.toArray(children).map((child)=> {
        if (React.isValidElement(child)){
            return {
                key:child.props.tabKey,
                label: child.props.label
            }
        }else {
            return null
        }
    }).filter((item)=> item != null)
    const tabIndex = tabs.findIndex(item => item.key === activateKey)

    return (
        <View>
            <View className='tab-header'>
                {tabs.map((item) => {
                    return <View
                        className="tab-header-item"
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
            <View>
                {React.Children.toArray(children).map((child, index) => {
                    if (React.isValidElement(child)){
                        return child.props.tabKey === activateKey ? child : null
                    }else {
                        return null
                    }
                    
                })}
            </View>
        </View>
    )
}
