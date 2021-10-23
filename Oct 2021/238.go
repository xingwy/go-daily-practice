// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
// 限制: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
// 进阶：你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间

func productExceptSelf(nums []int) []int {
    count := len(nums)
	result := make([]int, count)
	init := 1
	// 计算后缀积
	for i := count-1; i >= 1; i-- {
		init *= nums[i]
		result[i] = init
	}
	// 左至右遍历，使用init保存左缀积
	init = 1
	for i := 0; i < count - 1; i++ {
		result[i] = result[i+1] * init
		init *= nums[i]
	}
	result[count-1] = init
	return result
}