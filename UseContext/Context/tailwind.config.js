/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
    animation:{        
      slideright:'slideright 1s ease-in-out',
      slideleft:'slideleft 1s ease-in-out',
      scaleIn:'scaleIn 2s ease-in-out',
    },      
    keyframes:{
      slideright:{          
        '0%':{transform:'translatex(800px)'},
      },
      slideleft:{
        // '100%':{transform:'translatex(-100%)'},
        // '0%':{transform:'translatex(0%)'}
        "0%":{transform:"translate(-800px)"}
      },
      scaleIn:{
        "0%":{transform:"scale(1.3)"}
      }
    }
  },  
},
  plugins: [],
}