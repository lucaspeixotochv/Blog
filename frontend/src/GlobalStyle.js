import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    :root {
        --gradient : linear-gradient(180deg, #373951 0%, #111827 100%);
        --white: #fff;
        --whitesmoke: rgba(255,255,255,0.6);
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`;
