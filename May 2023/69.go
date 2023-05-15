// 需求：给你一个非负整数x，计算并返回x的算术平方根。
// 由于返回类型是整数，结果只保留整数部分，小数部分将被舍去。
// 注意：不允许使用任何内置指数函数和算符，例如pow(x, 0.5)或者x ** 0.5。

func mySqrt(x int) int {
	left := 1
	right := x
	var mid int
	for left <= right {
		mid = (left + right) / 2
		if mid*mid <= x {
			if (mid+1)*(mid+1) > x {
				return mid
			}
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return mid
}