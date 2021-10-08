export default function Mblock(props) {
    return (
        <div>
            {props.active == "0" && <SVGMblockBN></SVGMblockBN>
}
            {props.active == "1" && <SVGMblock></SVGMblock>
}
        </div>

    )
}

function SVGMblock(props) {
    return (
        <svg
            id="prefix__Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x={0}
            y={0}
            viewBox="0 0 186 181"
            xmlSpace="preserve"
            {...props}>
            <style>
                {
                    ".prefijost4mb4{fill:#2d2333}.prefijost6mb4{fill:#fff}"
                }
</style>
            <path
                d="M182.8 90.47c.02 47.82-40.17 86.6-89.77 86.62-49.59.02-89.81-38.74-89.83-86.56S43.38 3.93 92.97 3.91s89.81 38.74 89.83 86.56"
                fill="#ffda83"/>
            <path
                d="M181.3 90.47c-.03 17.74-5.8 35.03-16.3 49.32-10.38 14.11-25.17 24.86-41.67 30.66-17.42 6.11-36.61 6.8-54.43 1.94-17.03-4.64-32.52-14.35-44.03-27.75-11.41-13.29-18.56-30.1-19.91-47.58-1.38-17.73 3.02-35.54 12.47-50.59 9.28-14.78 23.09-26.43 39.03-33.46 16.91-7.46 36.18-9.47 54.3-5.88 17.37 3.44 33.57 11.98 46.06 24.56 12.29 12.37 20.62 28.37 23.44 45.6.7 4.35 1.03 8.77 1.04 13.18 0 1.93 3 1.93 3 0-.04-18.28-5.97-36.25-16.84-50.95-10.81-14.62-25.94-25.69-43.07-31.76C106.4 1.38 86.44.71 68.04 5.74 50.5 10.54 34.43 20.57 22.6 34.42 10.78 48.24 3.45 65.52 1.98 83.67.5 101.98 5.09 120.55 14.87 136.1c9.61 15.28 23.9 27.44 40.44 34.65 17.53 7.64 37.2 9.73 55.97 6.08 17.97-3.5 34.81-12.42 47.7-25.43 12.69-12.8 21.39-29.44 24.23-47.27.72-4.52 1.09-9.08 1.09-13.65 0-1.94-3-1.94-3-.01z"/>
            <defs>
                <path
                    id="prefijosvg1mb2"
                    d="M182.8 90.47c.02 47.82-40.17 86.6-89.77 86.62-49.59.02-89.81-38.74-89.83-86.56S43.38 3.93 92.97 3.91s89.81 38.74 89.83 86.56"/>
            </defs>
            <clipPath id="prefijosf2mb3">
                <use xlinkHref="#prefijosvg1mb2" overflow="visible"/>
            </clipPath>
            <ellipse
                cx={94.33}
                cy={159.63}
                rx={59.5}
                ry={44}
                clipPath="url(#prefijosf2mb3)"
                fill="#fff"
                stroke="#000"
                strokeMiterlimit={10}/>
            <defs>
                <path
                    id="kpreSVGID3"
                    d="M182.8 90.47c.02 47.82-40.17 86.6-89.77 86.62-49.59.02-89.81-38.74-89.83-86.56S43.38 3.93 92.97 3.91s89.81 38.74 89.83 86.56"/>
            </defs>
            <clipPath id="sprefixSVGID4">
                <use xlinkHref="#kpreSVGID3" overflow="visible"/>
            </clipPath>
            <g clipPath="url(#sprefixSVGID4)">
                <ellipse
                    cx={94.33}
                    cy={159.63}
                    rx={59.5}
                    ry={44}
                    fill="#fff"
                    stroke="#000"
                    strokeMiterlimit={10}/>
                <path
                    className="prefijost4mb4"
                    d="M49.42 118.31a64.588 64.588 0 00-16.83 15.93c-7.03 9.61-11.28 22.67-6.18 33.43 3.77 7.96 11.94 13.03 20.36 15.64 20.71 6.4 44.94-.8 58.81-17.46 1.51-1.82 2.94-3.8 3.55-6.09 1.22-4.6-1.17-9.53-4.66-12.77-3.93-3.65-9.29-5.72-14.65-5.65-10.28.13-19.43 7.65-29.71 7.52-.88-.01-1.79-.09-2.59-.45-2.16-.99-2.88-3.91-2.1-6.16.78-2.25 2.67-3.92 4.62-5.28 7.69-5.39 17.17-7.59 26.5-8.65 8.23-.93 21.63.95 29.71 2.73 17.13 3.76 32.03 16.44 38.48 32.75.42 1.05.88 2.22 1.89 2.73.91.47 2.01.26 3 0 5.2-1.38 5.09-6.29 8.29-10.63 3.19-4.33 4.52-10.15 2.93-15.29-.83-2.66-2.37-5.05-4.03-7.29-8.44-11.41-20.42-20.15-33.86-24.7-12.4-4.2-25.72-4.83-38.81-4.62-4.72.08-9.47.26-14.06 1.33-4.72 1.1-9.18 3.1-13.54 5.2a299.52 299.52 0 00-16.22 8.39l2.69.51"/>
                <path
                    d="M48.66 117.01c-7.57 4.96-14.3 11.45-19.17 19.11-4.55 7.15-7.68 15.91-6.62 24.48 2.16 17.49 20.8 25.57 36.5 26.44 15.86.87 32.1-5.04 43.54-16.1 2.95-2.86 6.17-6.21 7.49-10.18 1.35-4.05.09-8.5-2.32-11.89-5.25-7.39-14.73-10.22-23.39-8.43-4.22.87-8.19 2.6-12.2 4.11-4.05 1.52-8.42 3.05-12.81 2.79-2.02-.12-3.17-1.46-3.05-3.49.12-2.03 1.7-3.66 3.21-4.87 3.62-2.9 8.05-4.87 12.43-6.27 8.18-2.61 16.72-3.53 25.26-2.9 7.83.57 16.02 1.62 23.5 4.1 7.6 2.53 14.57 6.88 20.28 12.48 2.86 2.8 5.42 5.91 7.58 9.28 1.1 1.71 2.1 3.49 2.99 5.32.83 1.7 1.34 3.69 2.38 5.26 2.32 3.52 7.56 1.89 9.93-.78 1.11-1.25 1.83-2.74 2.52-4.25.82-1.79 1.73-3.44 2.85-5.07 2.45-3.56 3.78-8.08 3.4-12.4-.42-4.72-2.87-8.64-5.69-12.32-11.05-14.37-27.19-23.84-44.97-27.1-9.96-1.82-20.17-2.07-30.27-1.8-5.08.14-10.17.58-15.05 2.07-4.78 1.46-9.31 3.68-13.78 5.87-4.6 2.26-9.14 4.64-13.63 7.13-1.07.59-.93 2.5.36 2.74l2.69.51c1.89.36 2.7-2.53.8-2.89l-2.69-.51.36 2.74c4.41-2.45 8.88-4.79 13.41-7.02 4.46-2.19 8.95-4.4 13.73-5.81 4.72-1.39 9.61-1.74 14.51-1.85 4.92-.11 9.85-.1 14.77.16 9.56.49 19.12 1.98 28.07 5.48 7.79 3.05 15.02 7.6 21.19 13.24 3.11 2.84 5.99 5.97 8.52 9.34 2.68 3.58 4.89 7.4 4.73 12.01a16.28 16.28 0 01-1.53 6.25c-.85 1.83-2.15 3.35-3.11 5.12-1.46 2.68-2.29 6.52-5.45 7.73-.72.28-1.93.69-2.66.29-.71-.4-1-1.57-1.28-2.27-.73-1.78-1.53-3.52-2.44-5.21-1.84-3.43-4.07-6.64-6.58-9.6a56.756 56.756 0 00-18.11-14.15c-6.86-3.37-14.21-4.93-21.73-6.02-7.82-1.13-15.66-1.78-23.52-.7-8.75 1.2-17.77 3.6-24.96 8.95-3.08 2.29-5.82 5.66-4.81 9.74.43 1.75 1.6 3.28 3.29 3.97 1.95.8 4.31.56 6.36.29 8.35-1.09 15.61-6.12 23.96-7.14 8.11-.99 18.06 3.38 20.22 11.9 1.1 4.36-1.33 7.87-4.09 11-2.54 2.88-5.4 5.48-8.52 7.72-6.22 4.46-13.32 7.58-20.79 9.22-7.42 1.63-15.21 1.76-22.65.18-7.58-1.61-15.2-4.93-20.42-10.83-12.24-13.82-2.03-33.48 8.95-44.43 3.06-3.06 6.43-5.78 10.05-8.15 1.58-1.05.08-3.65-1.54-2.59z"/>
                <circle className="prefijost4mb4" cx={114.32} cy={26.67} r={22.67}/>
                <path
                    d="M135.5 26.67c-.07 8.77-5.58 16.91-13.9 19.9-8.44 3.03-17.95.4-23.67-6.49-5.65-6.8-6.29-16.79-1.75-24.33 4.53-7.52 13.55-11.59 22.19-9.87 9.89 1.97 17.05 10.74 17.13 20.79.01 1.93 3.01 1.93 3 0-.08-10.12-6.44-19.23-15.95-22.73-9.49-3.49-20.6-.41-26.95 7.45-6.36 7.88-7.24 19.17-1.92 27.85 5.28 8.64 15.58 13.08 25.49 11.11 11.18-2.22 19.24-12.38 19.33-23.68.01-1.93-2.99-1.93-3 0z"/>
                <defs>
                    <path
                        id="pdrefSVGID5f"
                        d="M143.66 71.68c.08-1.01.14-2.03.14-3.07 0-25.67-26.39-46.48-58.95-46.48S23.63 47.08 25.9 81.09c.06.9.16 1.78.27 2.64-.17 1-.27 2-.27 3.03 0 18.16 27.91 32.88 62.35 32.88s60.08-15.85 60.08-34.01c0-5.44-.25-9.43-4.67-13.95z"/>
                </defs>
                <clipPath id="sprfxSVGID6">
                    <use xlinkHref="#pdrefSVGID5f" overflow="visible"/>
                </clipPath>
                <g clipPath="url(#sprfxSVGID6)">
                    <path
                        className="prefijost6mb4"
                        d="M143.66 71.68c.08-1.01.14-2.03.14-3.07 0-25.67-26.39-46.48-58.95-46.48S23.63 47.08 25.9 81.09c.06.9.16 1.78.27 2.64-.17 1-.27 2-.27 3.03 0 18.16 27.91 32.88 62.35 32.88s60.08-15.85 60.08-34.01c0-5.44-.25-9.43-4.67-13.95z"/>
                    <path
                        d="M145.16 71.68c.9-11.42-3.45-22.39-11.01-30.85-8.06-9.02-19.26-14.99-30.9-17.93-12.23-3.09-25.36-3.13-37.45.6-11.06 3.41-21.25 9.86-28.7 18.75C29.51 51.3 25 62.56 24.37 74.37c-.09 1.58-.1 3.17-.05 4.75.06 1.73.49 3.57.27 5.27-.32 2.45-.15 4.95.48 7.34 1.16 4.39 3.81 8.27 7 11.45 8.4 8.36 20.36 12.85 31.72 15.36 14.37 3.17 29.57 3.53 44.04.81 11.67-2.19 23.67-6.59 32.55-14.72 3.44-3.15 6.33-6.95 8.02-11.32 1.75-4.52 1.94-9.9.91-14.61-.68-3.12-2.38-5.79-4.58-8.07-1.34-1.39-3.46.73-2.12 2.12 2.14 2.22 3.56 4.76 4 7.84.34 2.38.41 4.99.09 7.39-.52 3.93-2.37 7.63-4.83 10.7-6.63 8.28-17 13.1-26.99 15.94-13.48 3.83-27.92 4.4-41.77 2.55-11.84-1.58-24.06-5.02-33.95-11.95-3.65-2.56-7.02-5.73-9.26-9.62-.98-1.7-1.72-3.52-2.13-5.45-.19-.89-.31-1.78-.34-2.69-.06-1.62.3-3.2.13-4.81-1.25-11.33 1.5-22.99 7.56-32.62 5.82-9.26 14.52-16.46 24.44-20.97 10.69-4.86 22.55-6.27 34.16-4.9 11.64 1.38 23.26 5.73 32.41 13.16 8.06 6.55 14.16 15.52 15.79 25.91.44 2.8.48 5.63.26 8.45-.18 1.93 2.83 1.92 2.98 0z"/>
                </g>
                <defs>
                    <path
                        id="prefix__SVGID_7_"
                        d="M143.66 71.68c.08-1.01.14-2.03.14-3.07 0-25.67-26.39-46.48-58.95-46.48S23.63 47.08 25.9 81.09c.06.9.16 1.78.27 2.64-.17 1-.27 2-.27 3.03 0 18.16 27.91 32.88 62.35 32.88s60.08-15.85 60.08-34.01c0-5.44-.25-9.43-4.67-13.95z"/>
                </defs>
                <clipPath id="preSVGID8s">
                    <use xlinkHref="#prefix__SVGID_7_" overflow="visible"/>
                </clipPath>
                <g clipPath="url(#preSVGID8s)">
                    <path
                        className="prefijost4mb4"
                        d="M58.78 95.82c-1.94 0-4.52-1.31-5.46-2.95-.95-1.64-1.22-3.56-1.3-5.43-.52-10.97 4.93-22 13.97-28.62 1.92-1.41 4.02-2.64 6.33-3.3 6.67-1.92 14.55 1.8 17.09 8.09 1.84 4.54 3.39 9.19 3.39 14.08 0 4.53.42 4.33 0 6.8-.2 1.15-1.66 3.53-2.27 4.53-.57.94-3.62 3.9-4.53 4.53-7.6 5.28-18.05 3.97-27.22 2.27m90.69-11.33c2.86 3.79-8.51 7.49-10.64 8.03-5.13 1.3-9.7 1.65-14.3-1.23-3.72-2.33-8.61-7.53-10.54-11.5-2.17-4.46-1.43-13.1.33-17.67 3.99-10.36 17.69-16.48 26.61-7.26 3.79 3.92 2.43 9.23 4 13.75 1.89 5.45 6.83 9.54 4.54 15.88"/>
                </g>
                <path
                    d="M145.16 71.68c.9-11.42-3.45-22.39-11.01-30.85-8.06-9.02-19.26-14.99-30.9-17.93-12.23-3.09-25.36-3.13-37.45.6-11.06 3.41-21.25 9.86-28.7 18.75C29.51 51.3 25 62.56 24.37 74.37c-.09 1.58-.1 3.17-.05 4.75.06 1.73.49 3.57.27 5.27-.32 2.45-.15 4.95.48 7.34 1.16 4.39 3.81 8.27 7 11.45 8.4 8.36 20.36 12.85 31.72 15.36 14.37 3.17 29.57 3.53 44.04.81 11.67-2.19 23.67-6.59 32.55-14.72 3.44-3.15 6.33-6.95 8.02-11.32 1.75-4.52 1.94-9.9.91-14.61-.68-3.12-2.38-5.79-4.58-8.07-1.34-1.39-3.46.73-2.12 2.12 2.14 2.22 3.56 4.76 4 7.84.34 2.38.41 4.99.09 7.39-.52 3.93-2.37 7.63-4.83 10.7-6.63 8.28-17 13.1-26.99 15.94-13.48 3.83-27.92 4.4-41.77 2.55-11.84-1.58-24.06-5.02-33.95-11.95-3.65-2.56-7.02-5.73-9.26-9.62-.98-1.7-1.72-3.52-2.13-5.45-.19-.89-.31-1.78-.34-2.69-.06-1.62.3-3.2.13-4.81-1.25-11.33 1.5-22.99 7.56-32.62 5.82-9.26 14.52-16.46 24.44-20.97 10.69-4.86 22.55-6.27 34.16-4.9 11.64 1.38 23.26 5.73 32.41 13.16 8.06 6.55 14.16 15.52 15.79 25.91.44 2.8.48 5.63.26 8.45-.18 1.93 2.83 1.92 2.98 0z"/>
                <ellipse className="prefijost6mb4" cx={78.05} cy={75.42} rx={11.34} ry={13.6}/>
                <path
                    className="prefijost4mb4"
                    d="M40.11 58.38c3.86-11.88 11.38-22 21.18-28.87-2.71-9.49-11.43-16.44-21.78-16.44-12.52 0-22.67 10.15-22.67 22.67s10.15 22.67 22.67 22.67c.2 0 .4-.02.6-.03z"/>
                <path
                    d="M41.56 58.78C45.24 47.57 52.4 37.63 62.05 30.8c.54-.38.89-1.02.69-1.69-2.02-6.86-6.97-12.66-13.55-15.51-6.66-2.89-14.37-2.65-20.82.69-6.09 3.14-10.68 8.97-12.32 15.62-1.68 6.85-.29 14.34 3.91 20.03 4.6 6.23 12.31 10.39 20.16 9.94 1.92-.11 1.93-3.11 0-3-6.09.34-12.17-2.43-16.25-6.88-4.19-4.57-6.15-10.89-5.36-17.03.76-5.93 4.16-11.43 9.12-14.76 5.26-3.54 11.89-4.57 17.97-2.75 6.87 2.05 12.24 7.6 14.25 14.45.23-.56.46-1.13.69-1.69-10.32 7.3-17.93 17.77-21.87 29.77-.61 1.83 2.29 2.62 2.89.79z"/>
                <ellipse className="prefijost6mb4" cx={129.06} cy={70.88} rx={11.34} ry={13.6}/>
                <path
                    d="M127.93 61.82c-.65 0-1.27.11-1.88.28 1.75.63 3.01 2.29 3.01 4.25 0 2.5-2.03 4.53-4.53 4.53-1.85 0-3.43-1.11-4.14-2.7-.23.86-.4 1.75-.4 2.7 0 5.01 3.55 9.07 7.94 9.07 4.39 0 7.94-4.06 7.94-9.07-.01-5-3.56-9.06-7.94-9.06zM104.21 76.75c-1.63-.88-3.17-1.93-4.6-3.11.16-1.02 1.38-1.46 2.41-1.58 1.72-.2 3.47-.06 5.13.41.24.07.52.19.55.43.02.17-.09.32-.2.45-1.1 1.32-2.05 2.7-3.66 3.28"/>
                <path
                    d="M104.96 75.45c-.79-.43-1.56-.9-2.31-1.4-.36-.24-.72-.5-1.08-.76-.08-.06-.16-.12-.23-.18-.06-.05-.26-.2-.1-.08-.19-.15-.38-.3-.57-.46l.39 1.46c.07-.38-.01-.01-.03-.02.03-.06.06-.11.1-.17-.13.16-.16.2-.08.11.03-.04.07-.07.1-.1.1-.08.1-.09 0-.01s-.09.08.01 0c.04-.03.09-.05.14-.08.31-.2-.2.04.08-.04.1-.03.21-.07.31-.1s.21-.05.32-.07c.1-.02.43-.11.02-.01.57-.13 1.24-.1 1.83-.08.3.01.61.02.91.05.15.01.3.03.45.05-.27-.04.22.04.28.05.3.05.6.12.89.19.14.03.28.09.42.11.1.03.07.02-.1-.05.16-1.52.05-2.02-.35-1.5-.35.36-.64.79-.97 1.18-.32.37-.66.74-1.03 1.06-.09.08-.29.22-.08.07l-.3.21c-.12.08-.25.15-.37.21-.06.03-.11.06-.17.08.17-.07.17-.07.01-.01-.73.28-1.31 1.02-1.05 1.85.23.71 1.06 1.35 1.85 1.05 1.17-.44 2.14-1.15 2.98-2.07.35-.39.68-.8 1.02-1.21.57-.69 1.2-1.43.89-2.4-.29-.89-1.09-1.27-1.94-1.48-.72-.18-1.46-.29-2.2-.37-1.28-.14-2.63-.13-3.89.15-1.3.29-2.66 1.14-2.93 2.54-.1.49-.04 1.11.39 1.46 1.53 1.26 3.16 2.39 4.9 3.34.69.38 1.67.19 2.05-.54.35-.68.18-1.62-.56-2.03zM77.87 43.95l.58.06c.18.02.19.02.03 0 .1.01.19.03.29.04.33.05.66.11.99.18.68.15 1.36.33 2.02.55.34.12.68.24 1.02.38.44.17-.26-.12.17.07.18.08.35.16.53.24.65.31 1.28.67 1.89 1.05.66.42 1.68.16 2.05-.54.39-.74.17-1.6-.54-2.05-2.73-1.72-5.83-2.71-9.03-2.99-.78-.07-1.53.74-1.5 1.5.04.89.66 1.44 1.5 1.51zM114.98 43.04c.48-.27.96-.52 1.46-.74l.21-.09c-.18.08-.19.08-.03.02.11-.04.22-.09.33-.13.27-.1.55-.2.83-.29.52-.17 1.05-.31 1.58-.42.27-.06.53-.11.8-.15.13-.02.27-.05.4-.06-.42.04.1-.01.18-.02.41-.04.76-.14 1.06-.44.26-.26.46-.69.44-1.06-.03-.74-.66-1.59-1.5-1.5-2.57.28-5.03 1.02-7.28 2.3-.68.39-.97 1.38-.54 2.05.45.68 1.32.94 2.06.53z"/>
                <path
                    d="M97.85 84.33c1.93.89 4.14 1.06 5.8-.49 1.62-1.52 1.91-4.04 1.78-6.14-.05-.81-.65-1.5-1.5-1.5s-1.45.69-1.5 1.5c-.23 3.85 3.08 7.15 6.93 6.92.81-.05 1.5-.65 1.5-1.5 0-.77-.69-1.55-1.5-1.5-2.31.14-4.06-1.61-3.93-3.92h-3c.03.49.04.97.02 1.46l-.03.37c0 .03-.04.32-.02.16.03-.19-.03.18-.04.21l-.06.26c-.04.19-.09.37-.15.55-.03.1-.07.19-.1.28.04-.11.09-.19.01-.04l-.27.48c-.09.16-.02.03.05-.05-.06.06-.11.13-.17.19-.09.1-.43.33-.1.13-.12.08-.24.16-.37.23-.05.03-.25.1-.04.02.23-.09-.04.01-.09.02-.06.01-.13.03-.19.05-.25.09.23.01.05 0-.15-.01-.31.02-.47.01-.07 0-.14-.01-.22-.02.35.01.11.02.01-.01-.18-.04-.35-.08-.52-.14a2.25 2.25 0 00-.24-.08c-.4-.13.26.13-.13-.06-.74-.34-1.62-.21-2.05.54-.37.66-.2 1.73.54 2.07zM78.05 66.35c-.65 0-1.27.11-1.88.28 1.75.63 3.01 2.29 3.01 4.25 0 2.5-2.03 4.53-4.53 4.53-1.85 0-3.43-1.11-4.14-2.7-.23.86-.4 1.75-.4 2.7 0 5.01 3.55 9.07 7.94 9.07s7.94-4.06 7.94-9.07c-.01-5-3.56-9.06-7.94-9.06z"/>
                <path
                    d="M134.02 102.7l.96 4.17c.44 1.9-1.16 3.89-3.57 4.45l-18.36 4.23c-2.41.55-4.71-.54-5.15-2.44l-.96-4.17c-.44-1.9-2.74-2.99-5.15-2.44l-7.71 1.78c-2.41.55-4 2.54-3.57 4.45l7.6 32.99c.44 1.9 2.74 2.99 5.15 2.44l7.71-1.78c2.41-.55 4.71.54 5.15 2.44l.85 3.69c.44 1.9 2.74 2.99 5.15 2.44l18.36-4.23c2.41-.55 4-2.54 3.57-4.45l-.85-3.69c-.44-1.9 1.16-3.89 3.57-4.45l7.71-1.78c2.41-.55 4-2.54 3.57-4.45l-7.6-32.99c-.44-1.9-2.74-2.99-5.15-2.44l-7.71 1.78c-2.41.56-4.01 2.55-3.57 4.45z"
                    fill="#e1262f"/>
                <path
                    d="M132.57 103.1c.19.81.37 1.63.56 2.44.17.73.56 1.67.34 2.42-.47 1.6-2.36 1.88-3.76 2.2-4.1.94-8.2 1.89-12.3 2.83-1.48.34-2.95.69-4.43 1.02-.68.15-1.37.24-2.06.06-1.13-.29-1.49-1-1.72-2.03-.49-2.11-.66-4.61-2.5-6.02-2.03-1.55-4.4-1.19-6.69-.66-3.84.88-11.3 1.43-11.05 6.9.04.78.28 1.57.45 2.32l1.02 4.43c1.89 8.21 3.78 16.43 5.68 24.64.18.79.34 1.6.55 2.38.77 2.82 3.7 4.06 6.43 3.64 1.73-.26 3.45-.76 5.15-1.15 1.65-.38 4.16-1.4 5.72-.34.79.54.84 1.52 1.04 2.38.2.86.34 1.77.62 2.61.97 2.93 4.28 3.74 7 3.17 3.45-.71 6.87-1.58 10.3-2.37 2.01-.46 4.02-.93 6.03-1.39 1.31-.3 2.68-.52 3.85-1.22 1.4-.82 2.52-2.19 2.76-3.82.15-1.02-.12-1.97-.35-2.95-.19-.81-.53-1.7-.57-2.54-.07-1.41 1.4-2.21 2.57-2.51 1.77-.45 3.56-.82 5.34-1.23 2.14-.49 4.33-.86 5.84-2.64 2.05-2.42.82-5.42.2-8.13-1.91-8.31-3.83-16.63-5.74-24.94-.6-2.6-.79-5.8-3.47-7.14-2.14-1.06-4.29-.49-6.47.01-1.87.43-3.76.82-5.62 1.3-2.95.77-5.27 3.17-4.72 6.33.33 1.9 3.22 1.09 2.89-.8-.38-2.16 2.7-2.64 4.21-2.99 1.9-.44 3.79-.89 5.69-1.31 1.47-.33 3.24-.16 3.68 1.5.23.86.4 1.74.6 2.6 1.83 7.94 3.66 15.87 5.48 23.81.34 1.48.68 2.97 1.03 4.45.14.62.38 1.28.44 1.92.2 2.06-2.27 2.55-3.81 2.91l-5.84 1.35c-2.39.55-4.74 1.98-5.22 4.57-.35 1.88.69 3.68.88 5.51.19 1.8-1.8 2.46-3.23 2.78-1.57.36-3.14.72-4.7 1.08-3.93.9-7.85 1.81-11.78 2.71-1.35.31-3.13.8-4.16-.47-.48-.6-.55-1.65-.71-2.38-.18-.8-.31-1.63-.59-2.4-1.89-5.2-8.64-2.64-12.46-1.76-1.55.36-4.17 1.31-5.22-.43-.33-.54-.39-1.35-.53-1.95-1.76-7.65-3.53-15.31-5.29-22.96-.63-2.73-1.32-5.45-1.89-8.2-.33-1.61 1.02-2.59 2.48-2.97 1.69-.43 3.41-.79 5.12-1.18 1.59-.37 3.91-1.29 5.33-.07.61.53.68 1.5.85 2.24.21.89.38 1.8.62 2.68.84 3.12 4.1 4.19 7.02 3.6.93-.19 1.85-.43 2.78-.64 4.08-.94 8.16-1.88 12.25-2.82 1.09-.25 2.2-.48 3.28-.76 2.71-.69 5.19-3 4.72-6-.24-1.5-.67-2.99-1.01-4.47-.45-1.83-3.34-1.03-2.91.85z"/>
                <path
                    d="M127.19 104.27l.96 4.17c.44 1.9-1.16 3.89-3.57 4.45l-18.36 4.23c-2.41.55-4.71-.54-5.15-2.44l-.96-4.17c-.44-1.9-2.74-2.99-5.15-2.44l-7.71 1.78c-2.41.55-4 2.54-3.57 4.45l7.6 32.99c.44 1.9 2.74 2.99 5.15 2.44l7.71-1.78c2.41-.55 4.71.54 5.15 2.44l.85 3.69c.44 1.9 2.74 2.99 5.15 2.44l18.36-4.23c2.41-.55 4-2.54 3.57-4.45l-.85-3.69c-.44-1.9 1.16-3.89 3.57-4.45l7.71-1.78c2.41-.55 4-2.54 3.57-4.45l-7.6-32.99c-.44-1.9-2.74-2.99-5.15-2.44l-7.71 1.78c-2.41.56-4 2.55-3.57 4.45z"
                    fill="#e76969"/>
                <path
                    d="M125.75 104.67c.19.81.37 1.63.56 2.44.17.73.56 1.67.34 2.42-.47 1.6-2.36 1.88-3.76 2.2-4.1.94-8.2 1.89-12.3 2.83-1.48.34-2.95.69-4.43 1.02-.68.15-1.37.24-2.06.06-1.13-.29-1.49-1-1.72-2.03-.49-2.11-.66-4.61-2.5-6.02-2.03-1.55-4.4-1.19-6.69-.66-3.84.88-11.3 1.43-11.05 6.9.04.78.28 1.57.45 2.32l1.02 4.43c1.89 8.21 3.78 16.43 5.68 24.64.18.79.34 1.6.55 2.38.77 2.82 3.7 4.06 6.43 3.64 1.73-.26 3.45-.76 5.15-1.15 1.65-.38 4.16-1.4 5.72-.34.79.54.84 1.52 1.04 2.38.2.86.34 1.77.62 2.61.97 2.93 4.28 3.74 7 3.17 3.45-.71 6.87-1.58 10.3-2.37 2.01-.46 4.02-.93 6.03-1.39 1.31-.3 2.68-.52 3.85-1.22 1.4-.82 2.52-2.19 2.76-3.82.15-1.02-.12-1.97-.35-2.95-.19-.81-.53-1.7-.57-2.54-.07-1.41 1.4-2.21 2.57-2.51 1.77-.45 3.56-.82 5.34-1.23 2.14-.49 4.33-.86 5.84-2.64 2.05-2.42.82-5.42.2-8.13-1.91-8.31-3.83-16.63-5.74-24.94-.6-2.6-.79-5.8-3.47-7.14-2.14-1.06-4.29-.49-6.47.01-1.87.43-3.76.82-5.62 1.3-2.95.77-5.27 3.17-4.72 6.33.33 1.9 3.22 1.09 2.89-.8-.38-2.16 2.7-2.64 4.21-2.99 1.9-.44 3.79-.89 5.69-1.31 1.47-.33 3.24-.16 3.68 1.5.23.86.4 1.74.6 2.6 1.83 7.94 3.66 15.87 5.48 23.81.34 1.48.68 2.97 1.03 4.45.14.62.38 1.28.44 1.92.2 2.06-2.27 2.55-3.81 2.91l-5.84 1.35c-2.39.55-4.74 1.98-5.22 4.57-.35 1.88.69 3.68.88 5.51.19 1.8-1.8 2.46-3.23 2.78-1.57.36-3.14.72-4.7 1.08-3.93.9-7.85 1.81-11.78 2.71-1.35.31-3.13.8-4.16-.47-.48-.6-.55-1.65-.71-2.38-.18-.8-.31-1.63-.59-2.4-1.89-5.2-8.64-2.64-12.46-1.76-1.55.36-4.17 1.31-5.22-.43-.33-.54-.39-1.35-.53-1.95-1.76-7.65-3.53-15.31-5.29-22.96-.63-2.73-1.32-5.45-1.89-8.2-.33-1.61 1.02-2.59 2.48-2.97 1.69-.43 3.41-.79 5.12-1.18 1.59-.37 3.91-1.29 5.33-.07.61.53.68 1.5.85 2.24.21.89.38 1.8.62 2.68.84 3.12 4.1 4.19 7.02 3.6.93-.19 1.85-.43 2.78-.64 4.08-.94 8.16-1.88 12.25-2.82 1.09-.25 2.2-.48 3.28-.76 2.71-.69 5.19-3 4.72-6-.24-1.5-.67-2.99-1.01-4.47-.45-1.83-3.35-1.03-2.91.85z"/>
                <g>
                    <path
                        className="prefijost4mb4"
                        d="M32.59 134.24c-7.03 9.61-11.28 22.67-6.18 33.43 3.77 7.96 11.94 13.03 20.36 15.64 20.71 6.4 44.94-.8 58.81-17.46 1.51-1.82 2.94-3.8 3.55-6.09 1.22-4.6-1.17-9.53-4.66-12.77-3.93-3.65-9.29-5.72-14.65-5.65-10.28.13-19.43 7.65-29.71 7.52-.88-.01-1.79-.09-2.59-.45-2.16-.99-2.88-3.91-2.1-6.16.78-2.25 2.67-3.92 4.62-5.28"/>
                    <path
                        d="M31.29 133.48c-8.34 11.49-12.71 27.95-2.95 39.97 4.38 5.4 10.78 8.94 17.31 11.07 6.39 2.08 13.23 2.89 19.93 2.51 13.39-.76 26.5-6.11 36.38-15.22 2.55-2.35 5.05-4.97 6.91-7.91 1.99-3.14 2.59-6.78 1.51-10.36-2.15-7.11-9.18-12.07-16.28-13.33-7.56-1.35-14.52 1.64-21.44 4.26-3.4 1.28-6.93 2.53-10.57 2.81-1.55.12-3.78.42-4.84-.99-.89-1.2-.79-2.91-.15-4.19.8-1.62 2.25-2.82 3.69-3.84 1.56-1.11.06-3.71-1.51-2.59-2.72 1.94-5.43 4.47-5.65 8.02-.21 3.28 1.84 6.15 5.15 6.58 7.08.91 14.11-2.8 20.56-5.13 3.31-1.19 6.74-2.22 10.27-2.29 3.66-.08 7.3.89 10.46 2.74 3.03 1.78 5.69 4.39 7.04 7.68 1.43 3.48.82 6.79-1.29 9.83-3.71 5.32-9.08 9.72-14.6 13.03-5.56 3.33-11.68 5.66-18.04 6.93-12.57 2.52-27 .83-37.58-6.85-5.49-3.99-9.31-9.91-9.86-16.75-.56-7.05 1.78-14.06 5.28-20.09.87-1.5 1.83-2.95 2.85-4.36 1.15-1.58-1.45-3.08-2.58-1.53z"/>
                </g>
                <g>
                    <path
                        className="prefijost6mb4"
                        d="M97.24 150.66c.19-.16.38-.32.57-.47.11-.09.22-.17.33-.26.15-.12-.24.18-.08.06.05-.04.1-.07.15-.11a26.9 26.9 0 013.89-2.45c.7-.36.96-1.39.54-2.05-.46-.71-1.31-.93-2.05-.54a29.3 29.3 0 00-5.46 3.7c-.6.51-.56 1.6 0 2.12.63.58 1.47.54 2.11 0zm4.47 5.51c1.35-.17 2.59-.49 3.84-1.03 1.14-.49 2.16-1.16 3.11-1.94.61-.5.56-1.61 0-2.12-.65-.59-1.47-.53-2.12 0l-.15.12c-.13.1-.1.08.07-.05-.04.08-.24.18-.32.23-.21.15-.43.29-.66.43-.44.26-.89.49-1.35.7-.1.05-.06.03.13-.06-.06.02-.12.05-.18.07-.12.05-.25.09-.37.14-.25.09-.5.16-.75.23s-.51.13-.77.18c-.13.03-.26.05-.39.07l-.19.03c.24-.03.27-.04.11-.01-.41.05-.76.13-1.06.44-.26.26-.46.69-.44 1.06.03.74.66 1.62 1.49 1.51zm3.91 6.45c1.6-.45 3.15-1.18 4.47-2.19.32-.25.58-.49.69-.9.1-.36.05-.84-.15-1.16-.21-.32-.51-.6-.9-.69-.37-.08-.84-.09-1.16.15-.81.62-1.69 1.13-2.63 1.53l.36-.15c-.48.2-.98.38-1.49.52-.76.21-1.3 1.07-1.05 1.85.26.76 1.05 1.27 1.86 1.04zm-14.98-15.69c.36-.44.74-.86 1.15-1.25.2-.2.41-.39.63-.57.1-.09.2-.17.31-.26.06-.05.12-.09.17-.14.14-.12-.31.23-.06.04.91-.68 1.89-1.26 2.92-1.72.32-.14.6-.57.69-.9.1-.36.05-.84-.15-1.16-.21-.32-.51-.6-.9-.69-.42-.1-.77-.02-1.16.15-2.21.98-4.21 2.5-5.73 4.37-.26.32-.44.64-.44 1.06 0 .37.16.81.44 1.06.55.52 1.59.66 2.13.01z"/>
                </g>
            </g>
            <g>
                <defs>
                    <path
                        id="prefix__SVGID_9_"
                        d="M182.8 90.47c.02 47.82-40.17 86.6-89.77 86.62-49.59.02-89.81-38.74-89.83-86.56S43.38 3.93 92.97 3.91s89.81 38.74 89.83 86.56"/>
                </defs>
                <clipPath id="prefix__SVGID_10_">
                    <use xlinkHref="#prefix__SVGID_9_" overflow="visible"/>
                </clipPath>
                <g clipPath="url(#prefix__SVGID_10_)">
                    <path
                        className="prefijost6mb4"
                        d="M115.33 133.74l8.36-1.68c.05 1.25-.03 2.5-.24 3.74-.34 2.01-1.36 4.27-3.37 4.64-1.55.29-3.1-.75-3.9-2.11s-1.03-2.96-1.23-4.52"/>
                    <path
                        d="M115.73 135.19l8.36-1.68c-.63-.48-1.27-.96-1.9-1.45.05 1.35-.02 2.61-.28 3.8-.05.24-.11.47-.18.7-.04.12-.07.23-.11.35-.02.06-.04.12-.06.17-.01.03-.11.28-.04.1.07-.16-.07.16-.1.21-.05.11-.11.21-.17.32l-.18.3c-.07.1-.27.34-.07.12-.15.17-.3.33-.47.49-.2.19.18-.1-.05.04-.11.06-.24.12-.34.2-.15.12.24-.06.05-.02-.05.01-.11.04-.16.06-.11.03-.22.05-.34.08.25-.06.01-.01-.12-.01-.06 0-.13-.01-.19-.01-.2.01.22.06.02.01-.12-.03-.25-.05-.37-.09l-.18-.06c.02.01.21.11.06.02-.11-.06-.23-.12-.35-.18-.07-.04-.4-.27-.18-.1-.21-.16-.4-.35-.58-.55-.06-.07-.23-.32-.1-.11-.08-.13-.18-.26-.25-.4-.09-.15-.17-.31-.25-.47 0 0-.1-.23-.05-.1.05.11-.05-.15-.06-.17-.12-.33-.22-.67-.3-1.02s-.15-.7-.21-1.05c-.03-.18-.06-.35-.08-.53l-.03-.23c-.04-.28.05.35-.02-.13-.1-.77-.62-1.54-1.5-1.5-.72.03-1.61.67-1.5 1.5.22 1.68.45 3.34 1.22 4.88.7 1.41 1.94 2.53 3.43 3.06 1.53.54 3.18.13 4.41-.88 1.03-.85 1.67-2.12 2.07-3.38.55-1.72.67-3.63.61-5.42-.03-1.02-.93-1.64-1.9-1.45l-8.36 1.68c-.77.16-1.29 1.11-1.05 1.85.27.82 1.03 1.22 1.85 1.05zm9.67-11.21c-.5.82-.32 2 .4 2.64.43.38.91.59 1.49.61.43.02.92-.13 1.28-.36.37-.23.71-.56.92-.95.21-.4.31-.78.33-1.22.01-.15-.02-.3-.04-.44-.02-.16-.04-.32-.09-.47-.16-.44-.33-.73-.63-1.09-.46-.55-1.23-.86-1.94-.85-.74.01-1.47.32-1.99.85-.51.52-.85 1.27-.77 2.01.05.45.14.86.39 1.26.24.39.53.67.9.93.19.13.41.21.62.3.22.09.45.11.69.13.47.05.94-.1 1.36-.31.21-.11.4-.26.57-.43.08-.08.15-.17.22-.27.07-.09.15-.18.2-.28.29-.53.38-1.13.22-1.71-.1-.36-.36-.71-.69-.9-.32-.19-.8-.27-1.16-.15-.36.12-.71.34-.9.69-.19.36-.26.76-.15 1.16.01.03.02.07.02.1a5.46 5.46 0 01-.05-.4c.01.07.01.13 0 .2.02-.13.04-.27.05-.4-.01.07-.03.13-.05.19l.15-.36c-.03.07-.07.14-.12.2.08-.1.16-.2.23-.3-.06.07-.12.14-.19.19.1-.08.2-.16.3-.23-.08.06-.15.1-.24.14l.36-.15c-.09.04-.17.06-.27.08.13-.02.27-.04.4-.05-.09.01-.18.01-.27 0 .13.02.27.04.4.05-.1-.02-.19-.04-.29-.08l.36.15c-.1-.04-.2-.1-.29-.17.1.08.2.16.3.23-.1-.08-.18-.16-.26-.26.08.1.16.2.23.3-.07-.09-.12-.19-.17-.29l.15.36c-.04-.1-.07-.21-.09-.32.02.13.04.27.05.4-.01-.1-.01-.2 0-.3-.02.13-.04.27-.05.4.02-.09.04-.18.08-.27l-.15.36c.04-.1.1-.18.16-.27-.08.1-.16.2-.23.3.07-.08.14-.16.22-.22-.1.08-.2.16-.3.23.1-.08.21-.14.33-.19l-.36.15c.11-.04.22-.07.33-.09-.13.02-.27.04-.4.05.1-.01.21-.01.31 0a5.46 5.46 0 00-.4-.05c.09.01.18.04.27.07l-.36-.15c.08.04.16.08.24.14-.1-.08-.2-.16-.3-.23.09.07.17.15.24.24-.08-.1-.16-.2-.23-.3.07.09.12.19.17.29l-.15-.36c.05.11.08.23.1.35a5.46 5.46 0 01-.05-.4c.01.11.02.22 0 .33.02-.13.04-.27.05-.4-.01.1-.04.2-.08.29l.15-.36c-.04.08-.08.16-.13.23.08-.1.16-.2.23-.3-.06.08-.12.14-.2.2.1-.08.2-.16.3-.23-.08.06-.15.1-.24.14l.36-.15c-.08.03-.15.05-.23.06.13-.02.27-.04.4-.05-.07.01-.14.01-.21 0 .13.02.27.04.4.05-.05-.01-.1-.02-.15-.04l.36.15a.507.507 0 01-.16-.09c.1.08.2.16.3.23-.06-.04-.1-.09-.15-.15.08.1.16.2.23.3a.507.507 0 01-.09-.16l.15.36c-.03-.06-.04-.13-.05-.2.02.13.04.27.05.4v-.14c-.02.13-.04.27-.05.4.01-.05.02-.09.04-.14l-.15.36c.01-.03.03-.05.04-.08.2-.33.25-.79.15-1.16-.1-.35-.36-.73-.69-.9-.35-.18-.77-.28-1.16-.15-.36.15-.67.38-.88.72zM106.79 127.8c-.5.82-.32 2 .4 2.64.43.38.91.59 1.49.61.43.02.92-.13 1.28-.36.37-.23.71-.56.92-.95.21-.4.31-.78.33-1.22.01-.15-.02-.3-.04-.44-.02-.16-.04-.32-.09-.47-.16-.44-.33-.73-.63-1.09-.46-.55-1.23-.86-1.94-.85-.74.01-1.47.32-1.99.85-.51.52-.85 1.27-.77 2.01.05.45.14.86.39 1.26.24.39.53.67.9.93.19.13.41.21.62.3.22.09.45.11.69.13.47.05.94-.1 1.36-.31.21-.11.4-.26.57-.43.08-.08.15-.17.22-.27.07-.09.15-.18.2-.28.29-.53.38-1.13.22-1.71-.1-.36-.36-.71-.69-.9-.32-.19-.8-.27-1.16-.15-.36.12-.71.34-.9.69-.19.36-.26.76-.15 1.16.01.03.02.07.02.1a5.46 5.46 0 01-.05-.4c.01.07.01.13 0 .2.02-.13.04-.27.05-.4-.01.07-.03.13-.05.19l.15-.36c-.03.07-.07.14-.12.2.08-.1.16-.2.23-.3-.06.07-.12.14-.19.19.1-.08.2-.16.3-.23-.08.06-.15.1-.24.14l.36-.15c-.09.04-.17.06-.27.08.13-.02.27-.04.4-.05-.09.01-.18.01-.27 0 .13.02.27.04.4.05-.1-.02-.19-.04-.29-.08l.36.15c-.1-.04-.2-.1-.29-.17.1.08.2.16.3.23-.1-.08-.18-.16-.26-.26.08.1.16.2.23.3-.07-.09-.12-.19-.17-.29l.15.36c-.04-.1-.07-.21-.09-.32.02.13.04.27.05.4-.01-.1-.01-.2 0-.3-.02.13-.04.27-.05.4.02-.09.04-.18.08-.27l-.15.36c.04-.1.1-.18.16-.27-.08.1-.16.2-.23.3.07-.08.14-.16.22-.22-.1.08-.2.16-.3.23.1-.08.21-.14.33-.19l-.36.15c.11-.04.22-.07.33-.09-.13.02-.27.04-.4.05.1-.01.21-.01.31 0a5.46 5.46 0 00-.4-.05c.09.01.18.04.27.07l-.36-.15c.08.04.16.08.24.14-.1-.08-.2-.16-.3-.23.09.07.17.15.24.24-.08-.1-.16-.2-.23-.3.07.09.12.19.17.29l-.15-.36c.05.11.08.23.1.35a5.46 5.46 0 01-.05-.4c.01.11.02.22 0 .33.02-.13.04-.27.05-.4-.01.1-.04.2-.08.29l.15-.36c-.04.08-.08.16-.13.23.08-.1.16-.2.23-.3-.06.08-.12.14-.2.2.1-.08.2-.16.3-.23-.08.06-.15.1-.24.14l.36-.15c-.08.03-.15.05-.23.06.13-.02.27-.04.4-.05-.07.01-.14.01-.21 0 .13.02.27.04.4.05-.05-.01-.1-.02-.15-.04l.36.15a.507.507 0 01-.16-.09c.1.08.2.16.3.23-.06-.04-.1-.09-.15-.15.08.1.16.2.23.3a.507.507 0 01-.09-.16l.15.36c-.03-.06-.04-.13-.05-.2.02.13.04.27.05.4v-.14c-.02.13-.04.27-.05.4.01-.05.02-.09.04-.14l-.15.36c.01-.03.03-.05.04-.08.2-.33.25-.79.15-1.16-.1-.35-.36-.73-.69-.9-.35-.18-.77-.28-1.16-.15-.36.15-.67.37-.88.72z"/>
                </g>
            </g>
        </svg>

    )
}

function SVGMblockBN(props) {
    return (<img src={'/svg/mblock-inactivo.svg'} alt="Logo"/>) 
}
