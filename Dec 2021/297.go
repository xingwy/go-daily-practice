// 问题：二叉树的序列化与反序列化。
// 需求：请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，
// 你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type NodeInfo struct {
	pIndex int
	cIndex int
	node   *TreeNode
}

type Codec struct {
}

func Constructor() Codec {
	return Codec{}
}

// Serializes a tree to a single string.
func (this *Codec) serialize(root *TreeNode) string {
	if root == nil {
		return ""
	}

	var builder strings.Builder
	nodeList := []*NodeInfo{{node: root, pIndex: 0, cIndex: 1}}
	base := 1

	for len(nodeList) > 0 {
		_tNodeList := []*NodeInfo{}

		for i := 0; i < len(nodeList); i++ {
			if nodeList[i].node.Left != nil {
				base++
				_tNodeList = append(_tNodeList, &NodeInfo{pIndex: -nodeList[i].cIndex, cIndex: base, node: nodeList[i].node.Left})
			}

			if nodeList[i].node.Right != nil {
				base++
				_tNodeList = append(_tNodeList, &NodeInfo{pIndex: nodeList[i].cIndex, cIndex: base, node: nodeList[i].node.Right})
			}

			str := fmt.Sprintf("%d:%d:%d|", nodeList[i].pIndex, nodeList[i].cIndex, nodeList[i].node.Val)
			builder.WriteString(str)
		}
		nodeList = _tNodeList

	}
	res := builder.String()
	return res[:len(res)-1]
}

// Deserializes your encoded data to tree.
func (this *Codec) deserialize(data string) *TreeNode {
	if data == "" {
		return nil
	}
	list := strings.Split(data, "|")
	_cache := make(map[int]*TreeNode)
	for i := 0; i < len(list); i++ {
		kv := strings.Split(list[i], ":")
		pIndex, _ := strconv.Atoi(kv[0])
		cIndex, _ := strconv.Atoi(kv[1])
		val, _ := strconv.Atoi(kv[2])
		node := &TreeNode{Val: val, Left: nil, Right: nil}
		_cache[cIndex] = node
		if pIndex != 0 {
			if pIndex < 0 {
				parent := _cache[-pIndex]
				parent.Left = node
			} else {
				parent := _cache[pIndex]
				parent.Right = node
			}
		}

	}
	return _cache[1]
}

/**
 * Your Codec object will be instantiated and called as such:
 * ser := Constructor();
 * deser := Constructor();
 * data := ser.serialize(root);
 * ans := deser.deserialize(data);
 */