var backtrace = require("backtrace-node");

backtrace.initialize({
  endpoint: "https://yolo.sp.backtrace.io:6098",
  token: "fd0d693c474173099aeea0c34ac1f301417d0d61902c020420884d7190e4fde3",
});

const interval = setInterval(() => {
  const report = backtrace.createReport();
  const error = new Error("ZEEP ZOOP");
  report.setError(error);
  report.addObjectAttributes({
    zeep: Math.random() > 0.5 ? "zoop" : "ZOOP!",
    randomNumber: Math.floor(Math.random() * 100),
  });
  report.sendSync();
}, 100);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
