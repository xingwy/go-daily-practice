
// 问题：实现pow(x, n)，即计算 x 的n次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

func myPow(x float64, n int) float64 {
	var base int
	if n < 0 {
		base = -n
	} else {
		base = n
	}

	type funcType func(float64, int) float64
	var c funcType
	c = func(b float64, i int) float64 {
		if i == 0 {
			return 1
		} else if i == 1 {
			return b
		} else {
			v := c(b, i/2)

			if i%2 == 1 {
				return b * v * v
			} else {
				return v * v
			}
		}

	}
	v := c(x, base)

	if n < 0 {
		return 1 / v
	}
	return v
}