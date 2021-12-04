// 问题：给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines 里面的字符构成。
// 限制：magazine 中的每个字符只能在 ransomNote 中使用一次。

func canConstruct(ransomNote string, magazine string) bool {
	_map := make(map[rune]int, 26)

	for _, v := range magazine {
		_map[v]++
	}

	for _, v := range ransomNote {
		_, ok := _map[v]

		if !ok {
			return false
		}

		if _map[v] <= 0 {
			return false
		}
		_map[v]--
	}

	return true
}