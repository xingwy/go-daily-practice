// 需求：给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树
// 限制：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？
// 解决：正序和逆序遍历，找出正序第一个和逆序第一个，交换位置，遍历一次即可完成

func recoverTree(root *TreeNode)  {
	var first, second *TreeNode
	var min, max *TreeNode
	type funcType func(*TreeNode)
	var LDR, RDL funcType

	LDR = func (node *TreeNode) {
		if node == nil || first != nil {
			return
		}

		LDR(node.Left)

		if min == nil {
			// 左值为空
			min = node
		} else {
			if min.Val > node.Val {
				// 找到左值
				first = min
			} else {
				min = node
			}
		}
		LDR(node.Right)
	}

	RDL = func (node *TreeNode) {
		if node == nil || second != nil {
			return
		}

		RDL(node.Right)
		if max == nil {
			// 左值为空
			max = node
		} else {
			if max.Val < node.Val {
				// 找到左值
				second = max
			} else {
				max = node
			}
		}
		RDL(node.Left)
	}

	LDR(root)
	RDL(root)

	var val = first.Val
	first.Val = second.Val
	second.Val = val
}
