const App = () => {
    return (
        <div>
      <Tweet
        name="Man"
        username="boi"
        date={new Date().toDateString()}
        message="message"
      />
      <Tweet
        name="Candice"
        username="No"
        date={new Date().toDateString()}
        message="this is"
      />
      <Tweet
        name="Mike"
        username="Hawk"
        date={new Date().toDateString()}
        message="this is a message"
      />
      </div>
    );
}