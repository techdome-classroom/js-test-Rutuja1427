function getTotalIsles(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(r, c) {
    // Check boundaries and whether the cell is valid for DFS
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W' || visited[r][c]) return;

    // Mark the cell as visited
    visited[r][c] = true;

    // Explore all four possible directions
    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  }

  let numIsles = 0;

  // Traverse the entire grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'L' && !visited[r][c]) {
        // Found an unvisited land cell, start DFS and count an island
        numIsles++;
        dfs(r, c);
      }
    }
  }

  return numIsles;
}

module.exports = getTotalIsles;
