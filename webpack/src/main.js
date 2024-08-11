import "core-js";
import sum from "./sum";
console.log("hello main js");

sum(1, 2);

// import("./sum").then((res) => {
//     console.log(res.default(2,1));
//     // console.log('res',res);
// })

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
