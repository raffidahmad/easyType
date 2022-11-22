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
            borderRadius: "25px",
            width: props.isMobile ? "80%" : '25%',
            margin: "auto",

        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px ",
            }}>
                <div>
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
                alignItems: "center",
                marginBottom: "0px",
                padding: "10px",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    marginBottom: "50px",
                }}>
                    <img src={groupIcon} width='30px' />
                    <Text style={{
                        fontSize: "20px",
                        marginBottom: "0px",
                    }}>
                        Welcome back to <span>easytype!</span>
                    </Text>
                </div>

                <Text2>
                    I need an essay about <mark>hungry dinosours</mark> and <mark>how they got exctinct</mark> with<mark> 500</mark> words.
                </Text2>
                
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