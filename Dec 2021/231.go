// 问题：给你一个整数n，请你判断该整数是否是2的幂次方。如果是，返回true；否则，返回false

func isPowerOfTwo(n int) bool {
	if n <= 0 {
		return false
	} else if n == 1 {
		return true
	} else if n%2 == 1 {
		return false
	} else {
		return isPowerOfTwo(n/2)
	}

}