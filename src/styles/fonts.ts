import localFont from "@next/font/local"

const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {path: "../../public/fonts/Roboto-Regular.ttf", weight: "400", style: "normal"},
    {path: "../../public/fonts/Roboto-Italic.ttf", weight: "400", style: "italic"},
    {path: "../../public/fonts/Roboto-Medium.ttf", weight: "500", style: "normal"},
    {path: "../../public/fonts/Roboto-MediumItalic.ttf", weight: "500", style: "italic"},
    {path: "../../public/fonts/Roboto-Bold.ttf", weight: "700", style: "normal"},
    {path: "../../public/fonts/Roboto-BoldItalic.ttf", weight: "700", style: "italic"}
  ]
})

export {roboto}
