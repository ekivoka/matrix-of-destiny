import "./HomeDesktop.scss";
import appScreensImg from "../assets/imgs/app-screens.png";
import qrCodeImg from "../assets/imgs/qr-code.png";
import { Link } from "react-router-dom";
import FeatureCard from "./FeatureCard";

function HomeMobile() {
    return (
        <div className="home-desktop">
            <div className="container">
                <header>
                    <h1>
                        <span>матрица </span> <span>судьбы</span>{" "}
                    </h1>
                    <Link className="login-btn" to="/login">
                        Войти
                    </Link>
                </header>
                <div className="description">
                    <section className="description__text-wrap">
                        <h2>
                            Построй опору в жизни и начни <br />
                            свой осознанный путь <br />с матрицей судьбы
                        </h2>
                        <p className="text">
                            Расчет матриц, нумерология, ежедневные <br /> советы и рекомендации в
                            одном удобном <br /> приложении
                        </p>
                        <p className="qr-code-text">
                            Отсканируй QR-code, чтобы скачать из App Store 
                        </p>
                        <img src={qrCodeImg} className="qr-code"></img>
                    </section>
                    <section className="description__image-wrap">
                        <img src={appScreensImg} className="app-screens"></img>
                    </section>
                </div>
                <section className="description-footer">
                    <h2>Открой все грани своей судьбы с тарифом PRO</h2>
                    <p className="text">
                        Приобретая тариф, ты получаешь доступ к <br />
                        полной расшифровке всех матриц, нумерологии <br />и рекомендациям для
                        улучшения своей жизни
                    </p>
                </section>
            </div>
            <section className="features-wrapper">
                <FeatureCard title={"Матрица судьбы"} />
                <FeatureCard title={"Матрица судьбы"} />
                <FeatureCard title={"Матрица судьбы"} />
                <FeatureCard title={"Матрица судьбы"} />
                <FeatureCard title={"Матрица судьбы"} />
                <FeatureCard title={"Матрица судьбы"} />
            </section>
        </div>
    );
}

export default HomeMobile;
