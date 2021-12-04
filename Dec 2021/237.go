// 问题：请编写一个函数，用于删除单链表中某个特定节点。在设计函数时需要注意，你无法访问链表的头节点head，只能直接访问 要被删除的节点。
// 环境：题目数据保证需要删除的节点不是末尾节点。

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteNode(node *ListNode) {

	prev := node
	node = node.Next
	for {
		prev.Val = node.Val
		if node.Next == nil {
			prev.Next = nil
			break
		}
		prev = node
		node = node.Next
	}
}