import { ThemeProvider } from "@/components/helpers/theme-provider";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import siteMetadata from "@/constants/site-metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={siteMetadata.theme}
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
