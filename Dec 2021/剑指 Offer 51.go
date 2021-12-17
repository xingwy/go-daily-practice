// 题目：在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
// 思路：借助归并思想，在合并的过程中计算每一个元素的贡献值

func reversePairs(nums []int) int {
	type FuncType func([]int, int, int) int
	var mergeSort FuncType
	mergeSort = func(nums []int, start, end int) int {
		if start >= end {
			return 0
		}
		mid := start + (end-start)/2
		cnt := mergeSort(nums, start, mid) + mergeSort(nums, mid+1, end)
		tmp := []int{}
		i, j := start, mid+1
		for i <= mid && j <= end {
			if nums[i] <= nums[j] {
				tmp = append(tmp, nums[i])
				cnt += j - (mid + 1)
				i++
			} else {
				tmp = append(tmp, nums[j])
				j++
			}
		}
		for ; i <= mid; i++ {
			tmp = append(tmp, nums[i])
			cnt += end - (mid + 1) + 1
		}
		for ; j <= end; j++ {
			tmp = append(tmp, nums[j])
		}
		for i := start; i <= end; i++ {
			nums[i] = tmp[i-start]
		}
		return cnt
	}

	return mergeSort(nums, 0, len(nums)-1)
}