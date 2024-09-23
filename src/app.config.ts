import { AppConfig } from "remax/wechat";

const config: AppConfig = {
    tabBar: {
        color: "#00BCD4",
        selectedColor: "#ffffff",
        backgroundColor: "#009688",
        list: [
            {
                pagePath: "pages/tasks/index",
                iconPath: "/images/tasks.png",
                selectedIconPath: "/images/tasks.png",
                text: "任务清单"
            },
            {
                pagePath: "pages/shop/index",
                iconPath: "/images/shop.png",
                selectedIconPath: "/images/shop.png",
                text: "积分超市"
            },
            {
                pagePath: "pages/home/index",
                iconPath: "/images/mine.png",
                selectedIconPath: "/images/mine.png",
                text: "我的"
            }
        ]
    },
    entryPagePath: "pages/tasks/index",
    pages: ["pages/shop/index", 'pages/home/index', "pages/tasks/index"],
    window: {
        navigationBarTitleText: '明日之星',
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTextStyle: "black"
    }
};

export default config;
