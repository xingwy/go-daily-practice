
// 问题：一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个n级的台阶总共有多少种跳法。

func numWays(n int) int {
	_map := make(map[int]int, n)
	_map[0] = 1
	_map[1] = 1
	type funcType func(int) int
	var c funcType
	c = func(i int) int {
		_, ok := _map[i]
		if ok {
			return _map[i]
		} else {
			v := (c(i-1) + c(i-2)) % 1000000007
			_map[i] = v
			return v
		}
	}
	return c(n)
}