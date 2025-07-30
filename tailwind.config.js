const colors=require("tailwindcss/colors");

/** @type{import('tailwindcss).config} */
export default{
    content:["./index.html", "./src/**/*.{js,jsx}"],
    theme:{
        screens:{sm:"640px", md:"768px",lg:"1024px",xl:"1280px",'2xl':"1536px"},
        colors:{
            transparent:"transparent",
            current:"currentColor",
            primarylight:"#EDE7D4",
            primarydark:"#DCD0A7",
            navy:"#091540",
            mediumblue:'#0081A7',
            lightblue:'#734FCF',
            actuallightblue:'#997FDC',
            pink:'#C680A7',
            black:colors.black,
            white:colors.white,
            red:colors.red,
            green:colors.green,
            orange:colors.orange,
            gray:colors.gray
        }
    }
}