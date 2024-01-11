import "./Home.scss";
import appstoreBtn from "../assets/imgs/appstore-btn.png";
import FeatureCollapse from "./FeatureCollapse";

function Home() {
    return (
        <div className="home">
            <div className="wrapper-top">
                <div className="login-btn">Войти</div>
                <h1 className="title">матрица судьбы</h1>
                <div className="subtitle"> Построй опору в жизни и начни свой осознанный путь</div>
                <img src={appstoreBtn} className="appstore-btn"></img>

                <div className="caption">
                    Открой все грани своей судьбы с тарифом <span className="accent-text">PRO</span>
                </div>

                <div className="feature-list">
                    <div className="feature-list__item">Матрица судьбы</div>
                    <div className="feature-list__item">Матрица совместимости</div>
                    <div className="feature-list__item">Матрица финансов</div>
                    <div className="feature-list__item">Матрица ребенка</div>
                    <div className="feature-list__item">Нумерология</div>
                    <div className="feature-list__item">Рекомендации</div>
                </div>

                <button className="gradient-btn">Продолжить за 349 ₽ в месяц</button>
                <div className="btn-caption">Подписку можно отменить в любой момент</div>
            </div>
            <div className="wrapper-bottom">
                <div className="pro-description primary-text">
                    Приобретая тариф <span className="accent-text">PRO</span>, ты получаешь доступ к
                    полной расшифровке всех матриц, нумерологии и рекомендациям для улучшения своей
                    жизни
                </div>

                <div className="collapse-wrapper">
                    <FeatureCollapse title="Матрица судьбы">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>

                    <FeatureCollapse title="Матрица совместимости">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>

                    <FeatureCollapse title="Матрица финансов">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>

                    <FeatureCollapse title="Матрица ребенка">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>

                    <FeatureCollapse title="Нумерология">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>

                    <FeatureCollapse title="Рекомендации">
                        <div className="feature-details-list">
                            <div className="feature-details-list__item pro">Основа личности</div>
                            <div className="feature-details-list__item pro">Финансы</div>
                            <div className="feature-details-list__item">Отношения</div>
                            <div className="feature-details-list__item">Родовая карма</div>
                        </div>
                        <div className="feature-description">
                            Полная расшифровка всех энергий, подробное описание каждой энерегии,
                            энергий в плюсе и минусе, энергии по годам
                        </div>
                    </FeatureCollapse>
                </div>

                <button className="gradient-btn">Продолжить за 349 ₽ в месяц</button>
                <div className="btn-caption">
                    Подписку можно отменить в любой момент <br /> Cписание раз в месяц
                </div>
                <footer>
                    <div>Terms of service</div>
                    <div>Privacy policy</div>
                    <div>We do not collect cookie</div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
