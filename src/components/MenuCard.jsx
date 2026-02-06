function MenuCard({ image, title, description }) {
    return (
        <article className="menu-item">
            <div className="img-wrapper">
                <div
                    className="img"
                    style={{ backgroundImage: `url(${image})` }}
                />
            </div>
            <div className="body">
                <h4>{title}</h4>
            </div>
        </article>
    );
}

export default MenuCard;
