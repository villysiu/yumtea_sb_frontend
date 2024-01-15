// export const homeLink = 'http://localhost:3000'
export const homeLink = 'http://127.0.0.1:8001'
export const apiLink = 'http://127.0.0.1:8000'

export const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
export default function setHeadeTextColor({color}) {
    // console.log(color)
    // console.log(document.documentElement.style)
    document.documentElement.style.setProperty('--header_text_color', color)
}