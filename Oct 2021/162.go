// 前置：峰值元素是指其值严格大于左右相邻值的元素。
// 问题：给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
//      你可以假设 nums[-1] = nums[n] = -∞ 。
// 限制：你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
// 环境：1 <= nums.length <= 1000
//      -231 <= nums[i] <= 231 - 1
//      对于所有有效的 i 都有 nums[i] != nums[i + 1]



func findPeakElement(nums []int) int {
	size := len(nums)
	getNum := func (index int) int {
		if index == -1 || index == size {
			return -9999999999
		}
		return nums[index]
	}
	
	left := 0
	right := size - 1
	var mid int
	for left < right {
		mid = (left+right)/2
		mid_v := getNum(mid)
		left_v := getNum(mid-1)
		right_v := getNum(mid+1)
		if mid_v > left_v && mid_v > right_v {
			return mid
		} else if mid_v > right_v {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return left
}