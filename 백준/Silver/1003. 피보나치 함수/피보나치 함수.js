const fs = require('fs');
const inputs = fs.readFileSync('./dev/stdin').toString().trim().split("\n");

const dp = [[1, 0], [0, 1]];

function fibonacci(num) {
  if (dp[num]) {
    return dp[num];
  } else if (num === 0) {
    return [1, 0];
  } if (num === 1) {
    return [0, 1];
  } else {
    const prev1 = fibonacci(num - 1);
    const prev2 = fibonacci(num - 2);
    dp[num] = [prev1[0] + prev2[0], prev1[1] + prev2[1]]
    return dp[num];
  }
}

function main() {
  const T = +inputs.shift();
  let answer = "";
  for (let i = 0; i < T; i++) {
    const N = +inputs.shift();
    answer += fibonacci(N).join(" ") + "\n";
  }
  console.log(answer);

}

main();