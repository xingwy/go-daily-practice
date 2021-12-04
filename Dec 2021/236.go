// 问题：给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 环境：所有 Node.val 互不相同。
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {

	type funcType func(*TreeNode, int)
	var LDR funcType

	var first, second, parent *TreeNode
	var min int
	LDR = func(node *TreeNode, layer int) {
		if node == nil {
			return
		}

		if first != nil && second != nil {
			return
		}

		LDR(node.Left, layer+1)

		if first == nil {
			if node.Val == p.Val || node.Val == q.Val {
				first = node
				// 暂时设置父节点
				parent = node
				min = layer
			}
		} else {
			if node.Val == p.Val || node.Val == q.Val {
				second = node
				if layer < min {
					parent = node
					min = layer
				}
			}
		}

		// 寻找第二个节点过程中更新父节点
		if second == nil && layer < min {
			parent = node
			min = layer
		}
		LDR(node.Right, layer+1)
	}
	LDR(root, 0)

	return parent
}