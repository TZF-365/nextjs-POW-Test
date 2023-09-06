import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import "../css/global.css";
import '../css/CourseList.css';
import '../css/CourseCard.css';
import '../css/Overlay.css';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
