import { Outlet } from "react-router-dom";

// componenti
import Header from "../components/Header";
import Footer from "../components/Footer";

// stile
import style from '../components/Main.module.css';

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <div className={style.container}>
                    <div className={style.row}>
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}