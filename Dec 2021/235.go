// 问题：给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	node := root
	var min, max *TreeNode

	if p.Val > q.Val {
		min = q
		max = p
	} else {
		max = q
		min = p
	}

	for node != nil {
		if min.Val < node.Val && node.Val < max.Val {
			return node
		} else if min.Val == node.Val || max.Val == node.Val {
			return node
		} else if min.Val > node.Val {
			node = node.Right
		} else {
			node = node.Left
		}
	}

	return node
}