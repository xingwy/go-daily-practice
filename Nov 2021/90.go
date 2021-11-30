// 需求：给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
// 限制：解集不能包含重复的子集。返回的解集中，子集可以按任意顺序排列。

func subsetsWithDup(nums []int) [][]int {

	var recursion func(i int, col []int)
	_map := make(map[int]int, len(nums))
	_unique := make([]int, 0)

	// 构建Map
	for _, value := range nums {
		_, ok := _map[value]
		if ok {
			_map[value]++
		} else {
			_map[value] = 1
			_unique = append(_unique, value)
		}
	}

	total := len(_unique)
	res := make([][]int, 0)
	recursion = func(index int, col []int) {
		if index == total {
			// 输出结果
			res = append(res, col)
			return
		}
		// 组装_unique i层数据
		for i := 0; i <= _map[_unique[index]]; i++ {
			var t = make([]int, len(col))
			copy(t, col)
			recursion(index+1, t)
			col = append(col, _unique[index])
		}
	}

	recursion(0, []int{})

	return res
}