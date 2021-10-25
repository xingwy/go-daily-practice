// 221优化版本，改变动态修改状态数组的思路
func maximalSquare(matrix [][]byte) int {
	if (len(matrix) == 0) {
		return 0;
	}
	if (len(matrix[0]) == 0) {
		return 0;
	}

	func_min := func (a, b int) int {
		if a < b {
			return a
		} else {
			return b
		}
	}

	len_i, len_j := len(matrix), len(matrix[0])
	dp := make([][]int, len_i)
	
	maxBroder := 0
	// 初始化状态数组
	for i := 0; i < len_i; i++ {
		dp[i] = make([]int, len_j)
		for j := 0; j < len_j; j++ {
			if (matrix[i][j] == '1') {
				dp[i][j] = 1
				maxBroder = 1
			} else {
				dp[i][j] = 0
			}
		}
	}

	for i := 1; i < len_i; i++ {
		for j := 1; j < len_j; j++ {
			if dp[i][j] == 1 {
				dp[i][j] = func_min(func_min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1
				if dp[i][j] > maxBroder {
					maxBroder = dp[i][j]
				}
			}
		}
	}
	return maxBroder*maxBroder
}