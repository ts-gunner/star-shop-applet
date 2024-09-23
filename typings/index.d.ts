declare module '*.png';
declare module '*.css';

declare namespace NodeJS {  
    interface ProcessEnv {  
        REMAX_APP_THEME_DEFAULT: string; 
        // 可以添加更多环境变量  
    }  
}


declare module "@/data/theme" {
    const ThemeConfig: any;
    export default ThemeConfig;
}

declare module "@/data/config" {
    export const theme: {
        primary: string,
        secondary: string,
        decorate: string,
        primaryText: string,
        secondaryText: string,
        divider: string,
    };
}
