import FooterItems from "./FooterItems"
import logoFooter from '../../assets/logoFooter.svg';
import Button from "../Button"
import styled from "styled-components";

const Input = styled.input`
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    border:none;
    border-radius: 5px;
    width: 60%;
    color: black;
    :focus {
        outline:none;
        border:none;
    };
    ::placeholder {
        color: #000000;
        font-weight: 600;
    };
    
`

const footerContent = [
    {
        title: "Say Hello",
        content: ["hello@easyType.ai"]
    },
    {
        title: "Community",
        content: ["Instagram", "Tiktok", "LinkedIn"]
    },
    {

        title: "Legal",
        content: ["Privacy Policy", "Terms & Conditions"]

    }
]
function Footer(props) {
    return (
        <div className="footer">
            <div style={{
                display: "flex",
                gap: '0.5rem',
                marginBottom: props.isMobile ? "2rem" : "0",
            }}>
                <img src={logoFooter} />
                <h2 style={{
                    width: "5%",
                }}>Writing made Easy.</h2>
            </div>
            <div style={{
                display: "flex",
                flexDirection: props.isMobile ? "column" : "row",
                gap: '4rem',
            }}>
                {
                    footerContent.map((content, index) => (
                        <FooterItems
                            key={index}
                            title={content.title}
                            content={content.content} />
                    ))
                }
            </div>

            <div>
                <h6 style={{
                    fontWeight: '700',
                    fontSize:'32px',
                    lineHeight:'38px',
                    marginBottom:'2rem',
                }}>Subscribe to the latest news</h6>
                <div style={{
                    display: "flex",
                    gap: '1rem',
                }}>
                    <Input
                        type="text"
                        placeholder="E-mail" />
                    <Button name="SUBSCRIBE" style={{width:'40%'}}/>
                </div>
            </div>

        </div>
    )
}
export default Footer