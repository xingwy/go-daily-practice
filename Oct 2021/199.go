// 问题：给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rightSideView(root *TreeNode) []int {
	var res []int
	if root == nil {
		return res
	}
	res = make([]int, 0)
	box := []*TreeNode{root}
	
	for len(box) > 0 {
		box_t := make([]*TreeNode, 0)
		res = append(res, box[len(box)-1].Val);
		for  i := 0; i < len(box); i++ {
			if box[i].Left != nil {
				box_t = append(box_t, box[i].Left)
			}
			if box[i].Right != nil {
				box_t = append(box_t, box[i].Right)
			}
		}
		box = box_t
	}
	return res
}