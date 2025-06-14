function MyDebounce() {
  const throttleIt = (callback, delay) => {
    let prevTime = 0; //by default will gonna keep it zero
    return (...args) => {
      let currTime = new Date().getTime();
      if (currTime - prevTime < delay) return;
      prevTime = currTime;
      return callback(...args);
    };
  };
  // ------------------------------------------------------//
  const debouncedIt = (callback, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const handleFetch = throttleIt(() => {//replace here with debouncedIt if you wanna see 
    let url = "https://fakestoreapi.com/products/";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log("Response", response);
      });
  }, 1000);//every 1sec we r triggering based on the event
  return (
    <>
      <h1>Helloooo</h1>
      <input onChange={handleFetch} placeholder="Type Something.." />
    </>
  );
}
export default MyDebounce;
//debouncedIt: will wait for user to stop then thriger
//throttleIt: will trigger based on  provided delay on every event.
/**
 * Debouncing: flipkart search bar
- Delays execution until after a specified time has passed since the last event.
- Useful for search inputs, window resizing, and button clicks.

* Throttle: infinite scrolling
in throttle multiple events executes one after the other,
if we have to execute our logic only after a certain delay
suppose when any event is executed we r going to record that particular time
let last = 0; //by default will gonna keep it zero
if anther event happened
will measure
if (our currentTime - our Previous Time) is > delay time
will gonna execute that event. 
else if (our currentTime - our Previous Time) is <  delay time
then we are not going to simply return it

 */