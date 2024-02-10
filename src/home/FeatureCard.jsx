import "./FeatureCard.scss";

function FeatureCard({ title }) {
    return (
        <div className="feature-card">
            <Badge />
            <div className="feature-card__title">{title}</div>

            <div className="feature-card__content">
                <div className="feature-details-list">
                    <div className="feature-details-list__item pro">Финансы</div>
                    <div className="feature-details-list__item">Отношения</div>
                    <div className="feature-details-list__item pro">Основа личности</div>
                    <div className="feature-details-list__item">Родовая карма</div>
                </div>
                <div className="feature-description">
                    Полная расшифровка всех энергий, подробное описание каждой энерегии, энергий в
                    плюсе и минусе, энергии по годам
                </div>
            </div>
        </div>
    );
}

function Badge() {
    return <div className="soon-badge">SOON</div>;
}

export default FeatureCard;
