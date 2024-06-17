self.onmessage = function(e) {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
  self.postMessage('Done');
};
