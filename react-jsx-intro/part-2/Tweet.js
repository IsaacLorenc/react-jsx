const Tweet = (props) => {
    return (
        <div className='tweet'>
            <p>{props.name}</p>
            <p className='username'>{props.username}</p>
            <p className='date'>{props.date}</p>
            <p>{props.message}</p>
        </div>
    );
}