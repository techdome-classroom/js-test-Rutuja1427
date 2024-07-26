function decodeTheRing(message, pattern) {
  const m = message.length;
  const p = pattern.length;

  // 2D array create
  const dp = Array.from({ length: m + 1 }, () => Array(p + 1).fill(false));

  
  dp[0][0] = true;

  // Fill first row 
  for (let j = 1; j <= p; j++) {
    if (pattern[j - 1] === '*') {
      dp[0][j] = dp[0][j - 1];
    } else {
      break;
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= p; j++) {
      if (pattern[j - 1] === '*') {
        // Match zero or more characters
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (pattern[j - 1] === '?' || pattern[j - 1] === message[i - 1]) {
        // Match single character
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[m][p];
}

module.exports = decodeTheRing;
