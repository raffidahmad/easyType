
function FooterItems(props) {
    return (
        <div>

            <div className="">{item.title}</div>
            <div className="footer-item-content">
                {item.content.map((content, index) => (
                    <div className="footer-item-content-item" key={index}>
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FooterItems;

