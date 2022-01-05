// 单词拆分
// 描述：给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s

func wordBreak(s string, wordDict []string) bool {
	size := len(s)
	_words := make(map[string]bool, len(wordDict)+1)

	for _, k := range wordDict {
		_words[k] = true
	}

	_dp := make([]bool, size+1)
	_dp[0] = true

	for i := 1; i <= size; i++ {
		for j := i - 1; j >= 0; j-- {
			if _dp[j] {
				str := s[j:i]
				if _words[str] {
					_dp[i] = true
					break
				}
			}
		}
	}
	return _dp[size]
}
