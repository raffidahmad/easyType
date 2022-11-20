
function FooterItems(props) {
    return (
        <div>

            <div className="">{props.title}</div>
            <div className="footer-item-content">
                {props.content.map((content, index) => (
                    <div className="footer-item-content-item" key={index}>
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FooterItems;

