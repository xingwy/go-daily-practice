// 需求：如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个回文串 。


func isPalindrome(s string) bool {
	var same func(int, int) bool
	l, r := -1, len(s)

	same = func(i1, i2 int) bool {
		if i1 < 97 {
			i1 += (97 - 65)
		}

		if i2 < 97 {
			i2 += (97 - 65)
		}

		return i1 == i2
	}
	for l <= r {
		// 下一个 l
		success_l := false
		for i := l + 1; i < r-1; i++ {
			if s[i] >= 97 && s[i] <= 122 || s[i] >= 65 && s[i] <= 90 || s[i] >= 48 && s[i] <= 57 {
				l = i
				success_l = true
				break
			}
		}

		// 下一个 r
		success_r := false
		for i := r - 1; i > l; i-- {
			if s[i] >= 97 && s[i] <= 122 || s[i] >= 65 && s[i] <= 90 || s[i] >= 48 && s[i] <= 57 {
				r = i
				success_r = true
				break
			}
		}

		if !success_l || !success_r {
			return true
		}

		if !same(int(s[l]), int(s[r])) {
			return false
		}
	}
	return true
}
