/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { renderText, useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Link as Link, Body as Body } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, HtmlEmbed as HtmlEmbed, Image as Image, Slot as Slot } from "@webstudio-is/sdk-components-react/components";


      export const projectId = "abefc540-959f-463e-a31f-49b2cf9acd9f";

      export const projectDomain = "athulsaira-rihwv";

      export const lastPublished = "2026-07-21T09:50:35.976Z";

      export const siteName = "Athul + Saira";

      export const breakpoints = [{"id":"_DGcndh91J2REWb_w-VY4"},{"id":"LvGjTWMmX6EhBYMuhodgU","maxWidth":1024},{"id":"tYPV3BXGhQw_bZHkrBgLS","maxWidth":768},{"id":"py0TwqTbBdS-iZZEWWXno","maxWidth":640},{"id":"91k9f89YYQ5bFEzg6Cob1","minWidth":1280},{"id":"MYrSsHztdqk2yRhKGuKar","minWidth":1536}];

      export const favIconAsset: string | undefined =
        "cursive-monogram-colour-with-bg_o_fXD27qvEGkw7xFPHWPq.svg";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["PlaywriteIE-VariableFont_wght_aAxnsRsolYF0X4Jwe-3yI.ttf","SortsMillGoudy-Italic_LPFSBPfCC8JnAMjbOLbyq.ttf","SortsMillGoudy-Regular_GwY95pS6nSCMoqmmJLH2g.ttf"]

      export const pageBackgroundImageAssets: string[] =
        ["olga-thelavart-vS3idIiYxX0-unsplash_MaZMcMlQHO2xmfX2HebnG.jpg"]

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-element c1yp71vy cpyh00p chapbom c11wqf5k c1sb0d0 c1wwh0ud`}>
<Slot>
<Fragment_1>
<aside
id={"bgElem-container"}
className={`w-element chkplf5 c1kikmo8 cxna78f c1b1csm9 c9ezh0`}>
<Image
src={"/assets/star-1_buS26ZVBH6AGIaCCXNl_T.svg"}
width={65}
height={105}
alt={""}
id={"star-1"}
className={`w-image`} />
<Image
src={"/assets/star-2_J9RXGgHsduU7Z--6LFl8H.svg"}
width={70}
height={102}
alt={""}
id={"star-2"}
className={`w-image`} />
<Image
src={"/assets/star-3_RB9dTBmBprcJ5hy0jXjRA.svg"}
width={66}
height={105}
alt={""}
id={"star-3"}
className={`w-image`} />
<Image
src={"/assets/star-4_z-ePAybVeyXPUaCqrY7Q1.svg"}
width={48}
height={58}
alt={""}
id={"star-4"}
className={`w-image`} />
<Image
src={"/assets/star-5_cH9f3hAiDPd_-FpgHAiov.svg"}
width={51}
height={68}
alt={""}
id={"star-5"}
className={`w-image`} />
<Image
src={"/assets/heart-1_Hy0Ey8DJMn8vX0fRw126J.svg"}
width={49}
height={54}
alt={""}
className={`w-image`} />
<Image
src={"/assets/heart-2_24ZIDyjSntbWKVAFFYbBA.svg"}
width={54}
height={53}
alt={""}
className={`w-image`} />
<Image
src={"/assets/heart-3_gDmwQOCzUcrtisHph4fn4.svg"}
width={61}
height={64}
alt={""}
className={`w-image`} />
<HtmlEmbed
code={"<style>\n#bgElem-container {\n  pointer-events: none;\n}\n\n.bgElem {\n  position: absolute;\n  width: 20px; /* Adjust based on your SVG size */\n  height: auto;\n  opacity: 0; /* Start hidden for animation */\n  animation: twinkle ease-in-out infinite;\n  mix-blend-mode: difference;\n}\n\n@keyframes twinkle {\n  0%, {\n    opacity: 0;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.8;\n    transform: scale(1.1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n</style>\n<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n  const container = document.getElementById('bgElem-container');\n  const bgElemCount = 120; // Number of elements\n\n  const bgElemRef = Array.from(container.querySelectorAll('img'));\n\n  if (bgElemRef.length === 0) return;\n\n  while (container.querySelectorAll('img').length < bgElemCount) {\n    const randomRef = bgElemRef[Math.floor(Math.random() * bgElemRef.length)];\n    const clone = randomRef.cloneNode(true);\n\n    clone.style = '';\n    container.appendChild(clone);\n  }\n\n  const allBgElems = container.querySelectorAll('img');\n\n  container.style.display = 'block';\n  container.style.position = 'absolute';\n  container.style.top = '0';\n  container.style.left = '0';\n  container.style.width = '100%';\n  container.style.height = '100%';\n  container.style.zIndex = '1';\n  container.style.pointerEvents = 'none';\n\n  const initializeElem = img => {\n    img.classList.add('bgElem');\n    img.style.position = 'absolute';\n    img.style.animationDuration = `${2 + Math.random() * 3}s`;\n    img.style.animationDelay = `${Math.random() * 2}s`;\n    img.style.animationTimingFunction = 'cubic-bezier(0.65, 0, 0.35, 1)';\n    const scale = 0.6 + Math.random() * 1.5;\n    const rotation = (Math.random() * 40) - 20;\n    img.style.transform = `rotate(${rotation}deg) scale(${scale})`;\n  };\n\n  const positionElements = () => {\n    const sections = document.querySelectorAll(\"section\");\n    let sumOfHeights = 0;\n    for (const sec of sections) {\n      sumOfHeights += sec.offsetHeight || sec.getBoundingClientRect().height || 0;\n    }\n\n    const viewportWidth = document.documentElement.clientWidth;\n    const viewportHeight = sumOfHeights;\n\n    allBgElems.forEach(img => {\n      img.style.left = `${Math.random() * viewportWidth}px`;\n      img.style.top = `${Math.random() * viewportHeight}px`;\n    });\n  };\n\n  allBgElems.forEach(initializeElem);\n  positionElements();\n  window.addEventListener('resize', positionElements);\n});\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
</aside>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<div
className={`w-element cw035ua cbu9hsu c18gcn3d c1ciya14 c9ec481 c1nlsp8h c2c8m88 c1gccmu4 chapbom c1dkagqf c1ngz0j1 c1tz0jf4 c1gwrb19 c1bd8b7m c1jv8spi c5kbhcc cngro6d c56bmm2 c1mt26gn c81kb1u cy6w0f8 cx0sry4 c1urz1l4 c34nlew cm9w0fj c1lt64lp c1vjchr`}>
<div
className={`w-element c1izoes8 c1gccmu4 c1vxbebg cyyeyec c1nkt75d c1l8m8v8 c1ouinbj c1foopxb c1mvbqfz c1sv0dmj c4ybo7z cc6lw1i c15ldk6b`}>
<Link
href={"/"}
className={`w-element ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
<span
className={`w-element`}>
{"Home"}
</span>
</Link>
<Link
href={"/#when"}
target={"_self"}
className={`w-element ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
<span
className={`w-element`}>
{"When?"}
</span>
</Link>
<Link
href={"/#where"}
className={`w-element ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
<span
className={`w-element`}>
{"Where?"}
</span>
</Link>
<Link
href={"/rsvp"}
className={`w-element ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
<span
className={`w-element`}>
{"RSVP"}
</span>
</Link>
</div>
</div>
</Fragment_1>
</Slot>
<section
className={`w-element cvrbkwn c1t6zgsi c1rudpek c1j5yc2y c2waocn c1ouinbj c18gcn3d cmgn3sb`}>
<HtmlEmbed
code={"<iframe style=\"border:none;width:100%;height:100%;\" id=\"wedding-rsvp-form-9e8iyg\" src=\"https://opnform.com/forms/wedding-rsvp-form-9e8iyg\"></iframe>"}
className={`w-html-embed`} />
</section>
</Body>
}


      export { Page }
    