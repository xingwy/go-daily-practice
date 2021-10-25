// 计算：在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 解释：你的函数可以返回索引 1，其峰值元素为 2；
// 环境：m == matrix.length
//      n == matrix[i].length
//      1 <= m, n <= 300
//      matrix[i][j] 为 '0' 或 '1'


func maximalSquare(matrix [][]byte) int {
	if (len(matrix) == 0) {
		return 0;
	}
	if (len(matrix[0]) == 0) {
		return 0;
	}

	len_i, len_j := len(matrix), len(matrix[0])
	dp := make([][]int, len_i)
	var max int
	if len_i < len_j {
		max = len_i
	} else {
		max = len_j
	}
	broder := 0
	// 初始化状态数组
	for i := 0; i < len_i; i++ {
		dp[i] = make([]int, len_j)
		for j := 0; j < len_j; j++ {
			if (matrix[i][j] == '1') {
				dp[i][j] = 1
				broder = 1
			} else {
				dp[i][j] = 0
			}
		}
	}
	for l := broder+1; l <= max; l++ {
		success := 0
		for i := 0; i <= len_i-l; i++ {
			for j := 0; j <= len_j-l; j++ {
				if dp[i][j] != broder {
					continue
				}

				// 检测扩展条件
				canExtend := true
				for start := j; start < j+l; start++ {
					if (matrix[i+broder][start] == '0') {
						canExtend = false
						break
					}
				}
				if !canExtend {
					continue
				}

				for start := i; start < i+l; start++ {
					if (matrix[start][j+broder] == '0') {
						canExtend = false
						break
					}
				}
				if !canExtend {
					continue
				}
				dp[i][j] = l
				success++
			}
		}

		if (success == 0) {
			return broder*broder
		}
		broder = l
	} 
	return broder*broder
}