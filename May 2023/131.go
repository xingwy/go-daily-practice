// 需求：给你一个字符串s，请你将s分割成一些子串，使每个子串都是回文串。返回s
// 所有可能的分割方案。
// 回文串 是正着读和反着读都一样的字符串。

func partition(s string) [][]string {
	// words[i][j] 代表子串i-j 是否为回文
	var ans [][]string
	var ret []string
	var dfs func(int)
	var size = len(s)
	var words [][]bool
	for i := 0; i < size; i++ {
		words = append(words, make([]bool, size))
	}

	for i := 0; i < size; i++ {
		for j := 0; j < size; j++ {
			if i >= j {
				words[i][j] = true
			} else {
				words[i][j] = false
			}
		}
	}

	// 动态规划求解words状态
	for i := size - 1; i >= 0; i-- {
		for j := i + 1; j < size; j++ {
			words[i][j] = (s[i] == s[j]) && words[i+1][j-1]
		}
	}

	dfs = func(i int) {
		if i == size {
			ans = append(ans, append([]string{}, ret...))
		}

		for j := i; j < size; j++ {
			if words[i][j] {
				// 是回文 裁剪放入
				ret = append(ret, s[i:j+1])
				dfs(j + 1)
				// 弹出
				ret = ret[:len(ret)-1]
			}
		}
	}

	dfs(0)
	return ans
}
