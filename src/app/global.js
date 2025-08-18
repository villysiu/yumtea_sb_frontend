// Global variables and functions
export const homeLink = 'http://127.0.0.1:3000';
export const apiLink = 'http://127.0.0.1:8080'
// export const apiLink = 'https://yum-tea-sb.onrender.com';
export const imgLink = 'https://raw.githubusercontent.com/villysiu/yumtea_sb_frontend/refs/heads/github-deploy/public'
//                      
export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
export default function setHeadeTextColor({color}) {
    // console.log(color)
    // console.log(document.documentElement.style)
    document.documentElement.style.setProperty('--header_text_color', color)
}