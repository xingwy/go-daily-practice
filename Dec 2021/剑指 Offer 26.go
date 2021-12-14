
// 问题：输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
// B是A的子结构， 即 A中有出现和B相同的结构和节点值。

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSubStructure(A *TreeNode, B *TreeNode) bool {
	// 判断A树和B树是否同根
	if A == nil || B == nil {
		return false
	}
	same := false
	type FuncType func(*TreeNode, *TreeNode) bool
	var c FuncType
	c = func(tpa, tpb *TreeNode) bool {
		if tpb == nil {
			return true
		}
		if tpa == nil {
			return false
		}

		if tpa.Val != tpb.Val {
			return false
		}

		return c(tpa.Left, tpb.Left) && c(tpa.Right, tpb.Right)
	}

	arr := []*TreeNode{A}

	for len(arr) > 0 {
		t := make([]*TreeNode, 0)

		for _, v := range arr {
			same = c(v, B)

			if same {
				return same
			}

			if v.Left != nil {
				t = append(t, v.Left)
			}

			if v.Right != nil {
				t = append(t, v.Right)
			}
		}
		arr = t
	}
	return same
}