onmessage = function (data) {
  const ans = data.data.reduce((acc, curr) => acc + curr, 0);
  postMessage(ans);
};
