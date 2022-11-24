import {FC} from "react"
import Image from "next/image"

import giwLogo from "public/gooditworks.png"

const IndexPage: FC = () => (
  <div className="p-4">
    <h2>TODO: put README there</h2>
    <p>btw, our logo (static):</p>
    <Image src={giwLogo} alt="Good iT Works logo" sizes="100vw" />
    <p>and nice Next.js meme (external url)</p>
    <Image
      src="https://www.freecodecamp.org/news/content/images/2020/08/meme.jpg"
      alt="meme about next.js"
      width={888}
      height={499}
      sizes="100vw"
    />
  </div>
)

export default IndexPage
