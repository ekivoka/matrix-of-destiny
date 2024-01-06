import "./Home.scss";
import appstoreBtn from "../assets/imgs/appstore-btn.png";

function Home() {
    return (
        <div className="home">
            <div className="login-btn">Войти</div>
            <h1 className="title"> матрица судьбы </h1>
            <div className="subtitle"> Построй опору в жизни и начни свой осознанный путь</div>
            <img src={appstoreBtn} className="appstore-btn"></img>
            <div className="caption">
                {" "}
                Открой все грани своей судьбы с тарифом <span className="accent-text">PRO</span>
            </div>
            <div className="feature-list">
                <div className="feature-list__item">Матрица судьбы</div>
                <div className="feature-list__item">Матрица совместимости</div>
                <div className="feature-list__item">Матрицам финансов</div>
                <div className="feature-list__item">Матрица ребенка</div>
                <div className="feature-list__item">Нумерология</div>
                <div className="feature-list__item">Рекомендации</div>
            </div>

            <button className="gradient-btn">Продолжить за 349 ₽ в месяц</button>
            <div className="btn-caption">Подписку можно отменить в любой момент</div>

            <div className="primary-text">
                Приобретая тариф <span className="accent-text">PRO</span>, ты получаешь доступ к полной расшифровке всех матриц,
                нумерологии и рекомендациям для улучшения своей жизни
            </div>
            {/*  */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            
            <div>
                {" "}
                Приобретая тариф PRO, ты получаешь доступ к полной расшифровке всех матриц,
                нумерологии и рекомендациям для улучшения своей жизни{" "}
            </div>
            <div>
                <div> Матрица судьбы </div>
                <div> Матрица совместимости</div>
                <div> Матрицам финансов</div>
                <div> Матрица ребенка</div>
                <div> Нумерология </div>
                <div> Рекомендации</div>
            </div>
            <div>Продолжить за 349 р. в месяц</div>
            <div>Подписку можно отменить в любой момент списание раз в месяц.</div>
            <div>Terms of service</div>
            <div>Privacy policy</div>
            <div>we do not collect cookie</div>
        </div>
    );
}

export default Home;
