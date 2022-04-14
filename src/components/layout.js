import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen justify-center antialiased bg-stone-700">
      <Header />
      <main className="flex-1 py-10 sm:px-6 lg:px-8">{props.children}</main>
      <Footer />
    </div>
  );
}
