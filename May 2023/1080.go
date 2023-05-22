// 需求：给你二叉树的根节点root和一个整数limit ，请你同时删除树中所有不足节点，并返回最终二叉树的根节点。
// 假如通过节点node的每种可能的“根-叶”路径上值的总和全都小于给定的limit，则该节点被称之为不足节点，需要被删除。
// 叶子节点，就是没有子节点的节点。

func sufficientSubset(root *TreeNode, limit int) *TreeNode {
	var dfs func(*TreeNode, int) int
	head := &TreeNode{
		0, root,
		nil,
	}
	dfs = func(tn *TreeNode, weight int) int {
		if tn == nil {
			return weight
		}

		if tn.Left == nil && tn.Right == nil {
			return weight + tn.Val
		}

		selfWeight := weight + tn.Val
		ret := math.MinInt
		if tn.Left != nil {
			lWeight := dfs(tn.Left, selfWeight)
			if lWeight < limit {
				// 清除左子树
				tn.Left = nil
			}

			if lWeight > ret {
				ret = lWeight
			}
		}
		if tn.Right != nil {
			rWeight := dfs(tn.Right, selfWeight)
			if rWeight < limit {
				// 清除左子树
				tn.Right = nil
			}

			if rWeight > ret {
				ret = rWeight
			}
		}

		return ret
	}
	dfs(head, 0)

	return head.Left
}