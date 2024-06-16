self.onmessage = function(e) {
  const { threadName } = e.data;
  for (var i = 1; i <= 100; i++) {
    console.log(i , threadName);
  }
  self.postMessage('Done');
};
