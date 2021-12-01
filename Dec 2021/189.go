// 问题：给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 线性复杂度，使用K个空间

func rotate(nums []int, k int) {
	count := len(nums)
	k = k % count
	if k == 0 || count <= 1 {
		return
	}

	cache := make([]int, k)
	for i := 0; i < k; i++ {
		cache[i] = nums[i]
	}

	var t int
	for i := 0; i < count; i++ {
		t = nums[(k+i)%count]
		nums[(k+i)%count] = cache[i%k]
		cache[i%k] = t
	}
}