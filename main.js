

// get an instance fo an RxJS Observable
let obs = Rx.Observable
    .interval(1000)
    .take(3)
    .map(() => Date.now())

obs.subscribe(value => console.log("Subscriber: " + value));