
// 问题：斐波那契数列

func fib(n int) int {
	_map := make(map[int]int)

	type FuncType func(int) int
	var c FuncType
	c = func(b int) int {
		if b == 0 {
			return 0
		}
		if b == 1 {
			return 1
		}

		v, ok := _map[b]
		if ok {
			return v
		}

		res := c(b-1) + c(b-2)
		_map[b] = res % 1000000007
		return res
	}

	return c(n)
}