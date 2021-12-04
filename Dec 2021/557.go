// 问题：给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// 环境：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

func reverseWords(s string) string {
	str := make([]byte, len(s))
	count := 0

	for i := 0; i < len(s); i++ {
		if s[i] == 32 {
			index := count
			for index > 0 {
				str[i-index] = s[i-count+index-1]
				index--
			}
			count = 0
			str[i] = 32
		} else {
			count++
			if i+1 == len(s) {
				index := count
				for index > 0 {
					str[i-index+1] = s[i-count+index]
					index--
				}
			}
		}
	}
	return string(str)
}