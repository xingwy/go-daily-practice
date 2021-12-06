// 问题：给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
// 题目数据 保证 整个链式结构中不存在环。

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	lenA := 0
	lenB := 0

	node := headA

	for node != nil {
		lenA++
		node = node.Next
	}

	node = headB
	for node != nil {
		lenB++
		node = node.Next
	}

	if lenA >= lenB {
		node = headA
		otherNode := headB
		for i := 0; i < lenA-lenB; i++ {
			node = node.Next
		}

		for i := 0; i < lenB; i++ {
			if node == otherNode {
				return node
			}
			node = node.Next
			otherNode = otherNode.Next
		}

	} else {
		node = headB
		otherNode := headA
		for i := 0; i < lenB-lenA; i++ {
			node = node.Next
		}

		for i := 0; i < lenA; i++ {
			if node == otherNode {
				return node
			}
			node = node.Next
			otherNode = otherNode.Next
		}
	}

	return nil
}