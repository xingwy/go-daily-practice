
// 问题：判断序列是否为二叉搜索树的后序遍历结果

func verifyPostorder(postorder []int) bool {
	type FuncType func(int, int) bool
	var c FuncType

	c = func(start, end int) bool {
		if start >= end {
			return true
		}

		p := start
		for postorder[p] < postorder[end] {
			p++
		}

		m := p
		for postorder[p] > postorder[end] {
			p++
		}

		if p != end {
			return false
		}
		return c(start, m-1) && c(m, end-1)
	}

	return c(0, len(postorder)-1)
}