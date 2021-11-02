// 需求：给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
// 限制：设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
// 方案：摩尔投票法/(消消乐)

func majorityElement(nums []int) []int {
	valueA := 1000000005
	valueB := 1000000005
	countA := 0
	countB := 0
	for _, value := range nums {
		if valueA == value {
			countA++;
		} else if valueB == value {
			countB++;
		} else if countA == 0 {
			countA = 1
			valueA = value
		} else if countB == 0 {
			countB = 1
			valueB = value
		} else {
			// 削减已有数据
			countA--
			countB--
		}
	}
	// 筛选出可能的节点
	canA := 0
	canB := 0
	flag := len(nums)/3
	var res []int
	for _, value := range nums {
		if countA != 0 && value == valueA {
			canA++
		}

		if countB != 0 && value == valueB {
			canB++
		}

	}
	
	if canA > flag {
		res = append(res, valueA)
	}
	if canB > flag {
		res = append(res, valueB)
	}
	
	return res
}