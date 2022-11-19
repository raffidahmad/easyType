import batteryIcon from '../assets/battery.svg';
function Phone(props) {
    return (
        <div>
            <div>

                <div>9:41</div>
                <img src={battery} alt="battery" />
            </div>
            <p>Welcome back to <b>easytype</b></p>

        </div>
    );
}

export default Phone;