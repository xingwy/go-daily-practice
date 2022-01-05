// 单词拆分
// 描述：给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
// 说明：
// 1.分隔时可以重复使用字典中的单词。
// 2.你可以假设字典中没有重复的单词。
func wordBreak(s string, wordDict []string) []string {
	size := len(s)

	// 构建字典
	words := make(map[string]bool, len(wordDict)+1)
	for _, k := range wordDict {
		words[k] = true
	}

	_dp := make([][]string, size+1)
	_dp[0] = make([]string, 0)

	for i := 1; i <= size; i++ {
		for j := i - 1; j >= 0; j-- {
			if j == 0 {
				str := s[j:i]
				if words[str] {
					_dp[i] = append(_dp[i], str)
				}
				continue
			}
			if len(_dp[j]) > 0 {
				str := s[j:i]
				if words[str] {
					for _, v := range _dp[j] {
						var newS = v + " " + str
						_dp[i] = append(_dp[i], newS)
					}
				}
			}
		}
	}
	return _dp[size]
}
