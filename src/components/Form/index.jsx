import Email from "../Email";
import Button from "../Button";
function Form(props) {
    function handleSubmit(event){
        event.preventDefault();
        console.log("submitted");
        props.setTrial();
    }
    return (
        <form style={{
            display: 'flex',
            flexDirection: props.isMobile ? "column" : "row",
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '60px'
        }}
        onSubmit={(event)=>{handleSubmit(event)}}>
            <Email />
            <Button name="TRY FOR FREE" />
        </form>
    )
}

export default Form;