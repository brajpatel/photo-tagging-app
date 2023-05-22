function Time(props) {
    const { time } = props;

    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    let miliseconds = ("0" + ((time / 10) % 100)).slice(-2);
    let timeString = minutes + ':' + seconds + '.' + miliseconds;

    return (
        <div className="time">
            Your time: {timeString}
        </div>
    )
}

export default Time;