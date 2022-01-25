// 路径总和 III 
// 描述：给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, targetSum int) int {
	// 前缀和
	var _map = make(map[int]int)
	type HandleFunc func (*TreeNode, int) int
	var handle HandleFunc
    _map[0] = 1
	handle = func (node *TreeNode, curr int) int  {
		if node == nil {
			return 0
		}

		curr += node.Val
		ret := _map[curr-targetSum]
		
		_map[curr] += 1
		ret += handle(node.Left, curr)
		ret += handle(node.Right, curr)
		_map[curr] -= 1
		
		return ret
	}

	return handle(root, 0)
}
