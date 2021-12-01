// 问题：在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
// 说明：
// 1.如果题目有解，该答案即为唯一答案。
// 2.输入数组均为非空数组，且长度相同。
// 3.输入数组中的元素均为非负数。

func canCompleteCircuit(gas []int, cost []int) int {
	for i := 0; i < len(gas); i++ {
		gas[i] -= cost[i]
	}

	// 第一轮行为 尝试从可选站点出发
	begin := -1
	left := 0
	for i := 0; i < len(gas); i++ {
		if gas[i] >= 0 {
			if begin == -1 {
				begin = i
				left = gas[i]
			} else {
				left += gas[i]
			}
		} else {
			if gas[i]+left >= 0 {
				left += gas[i]
			} else {
				begin = -1
				left = 0
			}
		}
	}

	if begin == -1 || left < 0 {
		return -1
	}

	// 尾轮校验 begin出发
	left = 0
	for i := 0; i < len(gas); i++ {
		index := (i + begin) % len(gas)
		left += gas[index]
		if left < 0 {
			return -1
		}
	}

	return begin
}