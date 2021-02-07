import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen justify-center antialiased bg-gray-50 dark:bg-gray-900 transition duration-500">
      <Header />
      <main className="flex-1 py-12 sm:px-6 lg:px-8">{props.children}</main>
      <Footer />
    </div>
  );
}
