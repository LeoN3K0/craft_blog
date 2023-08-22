import Footer from './componentsLayout/footer';
import NavBar from './componentsLayout/navBar';

export const metadata = {
  title: 'Craft Blog',
  description: 'Craft Blog created By Hailie',
  name: 'viewport',
  content: 'initial-scale=1, width=device-width',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
