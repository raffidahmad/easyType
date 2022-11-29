import batteryIcon from '../assets/Battery.svg';
import Text from './common/StyledText';
import styled from "styled-components";
import groupIcon from '../assets/groupIcon.svg';
const Text2 = styled(Text)`
    font-size: 33px;
    line-height: 32px;
    mark{
        background-color: transparent;
        color:#EACA6A;
        text-decoration: underline;
        cursor: pointer;
    };
    `;
    const Text3 = styled(Text2)`
    text-align: left;
    padding: 0 10px;
    `;

const Circle = styled.span`
    background-color: #83BE8F;
    border-radius: 50%;
    display: inline-block;
    height: 15px;
    width: 15px;
    `;

function Phone(props) {
    return (
        <div style={{
            border: "5px solid black",
            borderRadius: "35px",
            width: props.isMobile ? "80%" : '45%',
            margin: "auto",

        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "30px ",
            }}>
                <div style={{
                    fontSize:'28px'
                }}>
                    9:41
                </div>
                <div>
                    <img src={batteryIcon} />
                </div>
            </div>
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "10%",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    marginBottom: "15%",
                    marginLeft: "5%",
                }}>
                    <img src={groupIcon} width='37px' />
                    <Text style={{
                        fontSize: "33px",
                        marginBottom: "0px",
                    }}>
                        Welcome back to <span>easytype!</span>
                    </Text>
                </div>

                <Text3>
                    I need an essay about <mark>hungry dinosours</mark> and <mark>how they got exctinct</mark> with<mark> 500</mark> words.
                </Text3>
                
            </div>
            <div style={{
                    border: "1px solid",
                    borderColor: 'rgb(224, 217, 217)',
                    borderRadius: "25px 25px 0 0",
                    width: "90%",
                    minHeight: props.isMobile ? "35vh" : "70vh",
                    margin: "auto",
                }}>
                    <Text2 style={{ padding: '10px' }}>
                        Just a moment, I’m writing
                        &nbsp;
                        <Circle style={{ opacity: '0.25' }} />
                        &nbsp;
                        <Circle style={{ opacity: '0.5' }} />
                        &nbsp;
                        <Circle />
                    </Text2>
                </div>

        </div>

    );
}

export default Phone;