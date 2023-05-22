// 需求：给你一个二叉树的根节点root，检查它是否轴对称。

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}
	var dfs func(*TreeNode, *TreeNode) bool
	dfs = func(tn1, tn2 *TreeNode) bool {
		if tn1 == nil && tn2 == nil {
			return true
		}
		if (tn1 == nil && tn2 != nil) || (tn2 == nil && tn1 != nil) {
			return false
		}
		if tn1.Val != tn2.Val {
			return false
		}

		return dfs(tn1.Left, tn2.Right) && dfs(tn2.Left, tn1.Right)
	}

	return dfs(root.Left, root.Right)
}
