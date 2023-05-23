import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    :root {
        --gradient : linear-gradient(180deg, #373951 0%, #111827 100%);
        --white: #fff;
        --whitesmoke: rgba(255,255,255,0.6);
        --blue-gray: #373951;
        --blue-dark: #111827;
        --blue-dark--hover: #111821;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    body::-webkit-scrollbar {
        width: 15px;            
    }

    body::-webkit-scrollbar-track {
        background: var(--blue-gray);     
    }

    body::-webkit-scrollbar-thumb {
            border-radius: 0.5rem;    
            background-color: var(--blue-dark);    
        &:active {
            background-color: var(--blue-dark--hover);
        }
    }
`;
