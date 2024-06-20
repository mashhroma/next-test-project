import Header from "@/components/Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {
    return (
        <div className="container">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}