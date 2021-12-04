// 问题：存在一个不含 0 的 环形 数组 nums ，每个 nums[i] 都表示位于下标 i 的角色应该向前或向后移动的下标个数：
//      1.如果 nums[i] 是正数，向前（下标递增方向）移动 |nums[i]| 步
//      2.如果 nums[i] 是负数，向后（下标递减方向）移动 |nums[i]| 步
// 说明：因为数组是 环形 的，所以可以假设从最后一个元素向前移动一步会到达第一个元素，而第一个元素向后移动一步会到达最后一个元素。
// 限制：时间复杂度为 O(n) 且额外空间复杂度为 O(1)

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