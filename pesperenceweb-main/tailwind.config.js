/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#305050",
        secondary: "#FF5E5B",
        terinary: "#EDC9AF",
        important_text: "#002147",
        highlight_background: "#F4F4F9",
        Yellow: "#FBFC9C",
        lightedtext: "#4B5563",
      },
      width: {
        mainwidth: "92%",
        squarewidth: "50%",
        absbottom: "40px ",
        midbottom: "60px ",
      },
      height: {
        featuredpublication: "400px",
        minh: "40vh",
      },
      spacing: {
        topT: "25px",
      },
      borderRadius: {
        radius: "15%",
      },

      inset: {
        // Before break point of sm
        "canada-top": "60%",
        "canada-left": "23%",
        "usa-top": "78%",
        "usa-left": "30%",
        "london-top": "51%",
        "london-left": "63%",
        "israel-top": "66%",
        "israel-left": "56%",
        "saudi-arabia-top": "67%",
        "saudi-arabia-left": "63%",
        "australia-top": "84%",
        "australia-left": "88%",
        "south-africa-top": "81%",
        "south-africa-left": "55%",
        "india-top": "68%",
        "india-left": "72%",
        "japan-top": "59%",
        "japan-left": "90%",

        // After the Small screen Break point --> 640px
        "sm-canada-top": "53%",
        "sm-canada-left": "23%",
        "sm-usa-top": "73%",
        "sm-usa-left": "30%",
        "sm-london-top": "40%",
        "sm-london-left": "62%",
        "sm-israel-top": "56%",
        "sm-israel-left": "57%",
        "sm-saudi-arabia-top": "57%",
        "sm-saudi-arabia-left": "62%",
        "sm-australia-top": "78%",
        "sm-australia-left": "88%",
        "sm-south-africa-top": "75%",
        "sm-south-africa-left": "53%",
        "sm-india-top": "58%",
        "sm-india-left": "72%",
        "sm-japan-top": "50%",
        "sm-japan-left": "90%",
      },
    },
  },
  plugins: [],
};
