
// 问题：找出数组中重复的数字。长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。

func findRepeatNumber(nums []int) int {
	var t int
	for i := 0; i < len(nums); i++ {
		if nums[i] < 0 {
			t = -nums[i]
		} else {
			t = nums[i]
		}

		if nums[t] < 0 {
			return t
		} else {
			if t == 0 {
				nums[0] = -1
			} else {
				nums[t] = -nums[t]
			}
		}
	}
	return -1
}