/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { renderText, useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Fragment as Fragment_1, Text as Text, HtmlEmbed as HtmlEmbed, Box as Box, Image as Image, Heading as Heading, Slot as Slot, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, List as List, ListItem as ListItem, Separator as Separator, CodeText as CodeText, Bold as Bold } from "@webstudio-is/sdk-components-react/components";
import { Link as Link, Body as Body, RichTextLink as RichTextLink, Link as Link_1 } from "@webstudio-is/sdk-components-react-router";


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
        []

      

      const Page = (_props: { system: any; }) => {
return <Body
id={"top"}
className={`w-body`}>
<Box
className={`w-box cvrbkwn c1t6zgsi`}>
<Box
className={`w-box cw035ua cbu9hsu c18gcn3d c1pvm84p c1ouinbj cwqm55w cvb66uv c1gccmu4 chapbom c1dkagqf c1ngz0j1 c1j5yc2y c1foqghq cc2w75a cm9w0fj`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
className={`w-heading c24jemy c1fbra61 c47oduo c1e3et87`}>
{"Style Guide"}
</Heading>
<Slot>
<Fragment_1>
<Text
className={`w-text`}>
{"Version 1.2"}
</Text>
</Fragment_1>
</Slot>
<Paragraph
className={`w-paragraph c11jdexo c1qq4xlu`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l c1mdd5wq c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom cvrbkwn c1t6zgsi c19jrx6u cjcrp6y c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 c1nlsp8h c2c8m88 cw035ua cbu9hsu c18gcn3d c1pvm84p c1dkagqf c1j5yc2y c1foqghq c19f05x cc2w75a cm9w0fj`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c14yxs4l c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 c15kd2l9 c14zma00 cq7ztxb c19f05x c2h2q4j c16j5r0w c1b4zx57`}>
<Box
className={`w-box cq9gdu c6f5xqn`}>
<Text
className={`w-text c10m6shn c140h8nz c7iwwp6 c1o8a950 cw9mk0l c7w12cm c1myvxhx cbd5ppj c1227rzq c99ogn6 cq3moa ctc8l3d cc4vz5e c1mvbqfz`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph c1f6fpq7 c1bcwd2g`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj ce4yh8f cwx6qr7 cb47r6z c70qtde`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj ce4yh8f cwx6qr7 cb47r6z c70qtde`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1gpx5d6 c1e3et87 c24jemy c1fbra61`}>
{"Foreground"}
</Heading>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb cc6gycy c1t360mb`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c14fsbs4 c19f05x`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c15c8eqf c1t360mb`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c3q3ar1 c1t360mb`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c1n62w2n c1t360mb`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1gpx5d6 c1e3et87 c24jemy c1fbra61`}>
{"Background"}
</Heading>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--background-primary"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c2d59m6 c19f05x`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb cqasnyx c1t360mb`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--background-accent"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c10f0tla c1t360mb`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--background-card"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb cppp8jm c1t360mb`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c1gpx5d6 c1e3et87 c24jemy c1fbra61`}>
{"Other"}
</Heading>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c1a3trew c1o8a950 cw9mk0l cn9r060 cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4 c162fazn`}>
{"--focus-color"}
</Text>
<Box
className={`w-box c1ikt10l crs9d2r caw2ux7 cwmdnu8 ch8su1s cplacv2 cefi1kb c1c188ds c1t360mb`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1c37sgm c1oaslo4 c1foopxb c1mvbqfz c1ngz0j1 c83zs83 cu57bmw c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"button-group"}
</Text>
<Box
className={`w-box c1ouinbj c1gccmu4 c1oaslo4 c1pi3u6n c32h1k6 c1dkagqf`}>
<Link
className={`w-link chggea7 co3xxui c1wyr0kp c1s8hf9x c1mkmmd6 c98sxda c14zyj11 c1oydj2s ctkv1s7 c1i3tgfx c1ilbpzy c1lnp2lh ccsz1cw chm4zy5`}>
{"button"}
</Link>
<Link
className={`w-link ce8cfxq c1yxhk57 c1wyr0kp c1s8hf9x c1mkmmd6 c98sxda c14zyj11 c1oydj2s ctkv1s7 c1i3tgfx c1ilbpzy cntqenf ccsz1cw chm4zy5`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1c37sgm c1oaslo4 c1foopxb c1mvbqfz c1ngz0j1 c83zs83 cu57bmw c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"link"}
</Text>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading c24jemy c1fbra61 c47oduo c1e3et87`}>
{"Heading 1 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Heading 2 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c1gpx5d6 c1e3et87 c24jemy c1fbra61`}>
{"Heading 3 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading c8a0f18 c1e3et87 c24jemy c1fbra61`}>
{"Heading 4 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cjqmo1i c1e3et87 c24jemy c1fbra61`}>
{"Heading 5 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Heading
className={`w-heading cjqmo1i c1e3et87 c24jemy c1fbra61`}>
{"Heading 6 text "}
{""}
<br />
{""}
{"you can edit"}
</Heading>
<Paragraph
className={`w-paragraph`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines"}
</Paragraph>
<Blockquote
className={`w-blockquote c1fbra61 c1bvs4py c1ermhi c1twjcj0 c1wrxvf1`}>
<Span
className={`w-text-1 c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"list"}
</Text>
<List
className={`w-list c1fbra61`}>
<ListItem
className={`w-list-item`}>
<Span
className={`w-text-1 c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"separator"}
</Text>
<Separator
className={`w-separator cax53za c18gcn3d c24jemy c1fbra61`} />
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj ce4yh8f cwx6qr7 cb47r6z c70qtde`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Text
className={`w-text c10m6shn c1o8a950 cw9mk0l c1swb9vp cbd5ppj c6562px c134ezqk c1l146rn cpg58fg ctokdg4`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box c1ouinbj c1ngz0j1 cygy2yt culihav c16v5zpk`}>
<Box
className={`w-box c1ouinbj c1ngz0j1 c1cis5nm cbsibg8 c1h4c997`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph c1f6fpq7 c1bcwd2g`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box c14yxs4l cq7ztxb c1twydxh ce74ywr cb8qmx5`}>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1gccmu4 chapbom c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj cb47r6z c18gcn3d c70qtde c1filc4x`} />
</Box>
<Box
className={`w-box c1fnk1w9 clmvqps cxba061 chwfpdo c1ouinbj c1c37sgm c1oaslo4 c1foopxb c1mvbqfz c1ngz0j1 cqvy9n0 cvdwp54 c19f05x c2h2q4j`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj ce4yh8f cwx6qr7 cb47r6z c70qtde`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c17qfwvw c11mlf6k c1ckbe1q c1hwy7lj cb47r6z c18gcn3d c70qtde c1filc4x`} />
</Box>
</Box>
</Box>
</Box>
<Box
tag={"nav"}
className={`w-box c1q7cxtg c1x4fkqk c1tz0jf4 c1kikmo8 cxna78f c3bkyk0 cq3wdf4 cb47r6z c1c91sfy c1ejxznf`}>
<Box
className={`w-box cw035ua cbu9hsu c18gcn3d c1pvm84p c1ouinbj c1cis5nm cbsibg8 c1gccmu4 c1vxbebg c1dkagqf c1izoes8 c1j5yc2y c1foqghq c1czkpgx cc2w75a cm9w0fj`}>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Layout"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Colors"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Elements"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Forms"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Radix"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Utility"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Slots"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Custom"}
</Link>
<Link
className={`w-link ccsz1cw chm4zy5 c1ouinbj c1e3et87 c1izoes8 c1pazqdt c1in4j3g cinicg8 c6ampsg cgwish1 cwb9fzk c1kp9tpa cjbqlue c69i0qc c14ecruh c8a0f18 cf7qvpa`}>
{"Notes"}
</Link>
</Box>
</Box>
</Box>
<Box
className={`w-box cw035ua cbu9hsu c1ijbwzg c69xxeb c18gcn3d c1pvm84p c1ouinbj c1pi3u6n c32h1k6 c1gccmu4 chapbom c1t6zgsi cvrbkwn c1dkagqf c1ngz0j1 c1j5yc2y c1foqghq cm9w0fj`}>
<Heading
tag={"h2"}
className={`w-heading c17njnoo c1e3et87 c24jemy c1fbra61`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph c1bcwd2g cbd5ppj c3q3ar1`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
tag={"nav"}
className={`w-box`}>
<Link
className={`w-link`}>
<Image
loading={"eager"}
className={`w-image`} />
</Link>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cvrbkwn c1t6zgsi`}>
<Box
className={`w-box cw035ua cbu9hsu c18gcn3d c1pvm84p c1ouinbj c1nlsp8h c2c8m88 c1gccmu4 chapbom c1dkagqf c1ngz0j1 c1j5yc2y c1foqghq cc2w75a cm9w0fj`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box`} />
</Box>
</Fragment_1>
</Slot>
</Box>
<Link_1
href={"https://webstudio.is/?via=badge"}
target={"_blank"}
className={`w-element c1wfnnmu c10d1kf1 ckr8jop c1gccmu4 chapbom c1tz0jf4 coa5fzp czj019b cy1g45s c1sklras c1ktnga9 c1ls77ri cjx395x c9eneif c1xhupoy c1kg9e0i c1mjju2c cy4vlsn cvzklyj ce41ode c1564chs c11up5zr c1i3tgfx c8he0ol c18f0fmd c1hvnvw8 c1lk9ved cmyjxon`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path fill-rule=\"evenodd\" d=\"m12.32 12.416 2.62-8.085a1.205 1.205 0 1 0-2.292-.746l-2.62 8.084a1.205 1.205 0 1 0 2.292.747Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M8 7.624c.297 0 .517.175.704.394.207.243.373.545.514.866.634 1.44.753 3.241.753 3.241a1.206 1.206 0 0 0 1.285 1.122 1.207 1.207 0 0 0 1.12-1.287s-.16-2.25-.952-4.05C10.744 6.364 9.594 5.208 8 5.208c-1.594 0-2.744 1.156-3.424 2.7-.792 1.8-.951 4.05-.951 4.05a1.207 1.207 0 0 0 1.12 1.288 1.206 1.206 0 0 0 1.284-1.122s.119-1.8.753-3.24a3.52 3.52 0 0 1 .514-.867c.187-.22.406-.394.704-.394Z\" clip-rule=\"evenodd\"/><path fill-rule=\"evenodd\" d=\"M5.973 11.669 3.352 3.585a1.205 1.205 0 1 0-2.293.746l2.622 8.084a1.205 1.205 0 1 0 2.292-.746Z\" clip-rule=\"evenodd\"/></svg>"}
className={`w-html-embed c9ec481 cfzh65v c15bdnkf c1mvbqfz`} />
<div
className={`w-element`}>
{"Built with Webstudio"}
</div>
</Link_1>
</Body>
}


      export { Page }
    