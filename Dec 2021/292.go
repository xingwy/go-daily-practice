// 问题：Nim 游戏

func canWinNim(n int) bool {
	n %= 4
	if n == 0 {
		return false
	}
	return true
}