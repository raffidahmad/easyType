import './style.css'
function FooterItems(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap:'0.5rem',
        }}>
            <div style={{fontWeight:'700'}}>{props.title}</div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap:'0.5rem',
        }}>
                {props.content.map((content, index) => (
                    <div key={index}>
                        {content}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default FooterItems;

