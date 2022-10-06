module.exports ={
    content: [
        "./src/components/**/*.tsx",
        "./src/pages/**/*.tsx",
        "./src/views/**/*.tsx"],
    theme:{
        extend:{
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }
          
                'md': '1024px',
                // => @media (min-width: 1024px) { ... }
          
                'lg': '1280px',
                // => @media (min-width: 1280px) { ... }
            }
        },
        plugins:[],
    }
}