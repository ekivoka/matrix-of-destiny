import "./FeatureCard.scss";

function FeatureCard({ title, description, features = [], isSoon = false }) {
    const featuresItems = features.map((feature, index) => {
        let className = `feature-details-list__item${feature.isPro ? " pro" : ""}`;
        return (
            <div key={index} className={className}>
                {feature.text}
            </div>
        );
    });
    return (
        <div className="feature-card">
            {isSoon && <Badge />}
            <div className="feature-card__title">{title}</div>

            <div className="feature-card__content">
                <div className="feature-details-list">
                    {featuresItems}
                </div>
                <div className="feature-description">{description}</div>
            </div>
        </div>
    );
}

function Badge() {
    return <div className="soon-badge">SOON</div>;
}

export default FeatureCard;
