import Favicon from "/public/images/favicon.ico";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Sanjay Raj | Software Engineer",
  description:
  "Welcome to Sanjay Raj Software Engineering Portfolio.As a highly motivated and results-oriented software engineer, I bring a wealth of technical expertise and leadership abilities to every project I undertake. With a strong foundation in programming languages including Python, JavaScript, and Java, I thrive in challenging environments and excel in delivering high-quality solutions.. Let's connect and discuss your next venture!",
  keywords: [
    "portfolio",
    "Software engineer",
    "Springboot Developer",
    "Backend Java Developer",
    "Tech Blogger",
    "Software Trainer",
    "Java Developer",
    "Java",
    "Spring boot",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
