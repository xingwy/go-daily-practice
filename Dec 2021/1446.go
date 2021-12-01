// 问题：给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。
// 需求：请你返回字符串的能量。

func maxPower(s string) int {
	size := len(s)
	if size == 0 {
		return 0
	}

	max := 1
	count := 1
	flag := s[0]
	for i := 1; i < size; i++ {
		if flag == s[i] {
			count++
		} else {
			if max < count {
				max = count
			}
			count = 1
			flag = s[i]
		}
	}
	if max < count {
		return count
	}
	return max

}