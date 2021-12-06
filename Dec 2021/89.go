// 问题：格雷编码
// n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）
// 第一个整数是0, 一个整数在序列中出现不超过一次,每对相邻整数的二进制表示恰好一位不同 ，且第一个 和 最后一个
// 整数的二进制表示 恰好一位不同。
// 给你一个整数 n ，返回任一有效的 n 位格雷码序列 。

func grayCode(n int) []int {
	if n == 1 {
		return []int{0, 1}
	}

	nums := grayCode(n - 1)
	res := make([]int, 2*len(nums))
	for i := 0; i < len(nums); i += 2 {
		index := i * 2
		res[index] = nums[i] << 1
		res[index+1] = res[index] + 1
		res[index+2] = (nums[i+1] << 1) + 1
		res[index+3] = res[index+2] - 1
	}
	return res
}