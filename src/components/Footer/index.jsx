
import FooterItems from "./FooterItems"
import logoFooter from '../../assets/logoFooter.svg';
function Footer(props) {
    return (
        <div>
            <div className="footer">
                <div className="box">
                   <div className="logo">
                    <img src={logoFooter} alt="" />
                    <h1>Writing made Easy.</h1>
                   </div>
                <div className="content-box">
                   <div className="item1">
                   <FooterItems title="Say Hello" content={['hello@easyType.ai']} />
                   </div>
                   <div className="item2">
                   <FooterItems title="Community" content={['facebook','instagram','Linkedin']} />
                   </div>
                   <div className="item3">
                   <FooterItems title="Legal" content={['Privacy policy','Terms & conditions']} />
                   </div>
                </div>
                <div className="search">
                   <div className="text">
                    <h3>Subscribe to the latest news</h3>
                    </div>
                    <div className="searchbar">
                   <input type="text" placeholder="E-mail" name="search"></input>
                   <button type="submit">SUBSCRIBE</button>
                   </div>
                   </div>
            </div>
            </div>
        </div>
    )
}
export default Footer