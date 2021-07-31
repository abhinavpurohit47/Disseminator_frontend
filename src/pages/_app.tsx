import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen font-serif text-white bg-gray-800 grid place-items-center">
  
    <div>
    <Component {...pageProps} />
    </div>
    </div> 
  )
}


export default MyApp;
