// 需求：存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，
// 只保留原始链表中 没有重复出现 的数字。返回同样按升序排列的结果链表。
// 提示：链表中节点数目在范围 [0, 300] 内,-100 <= Node.val <= 100,数据保证链表已经按升序排列
// 例子： [1,4,3,2,5,2] x=3时，结果为[1,2,2,4,3,5]
// 限制：常量级额外空间

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	src := &ListNode{Val: 9999, Next: nil}
	pre := src
	cur := head
	for cur != nil {
		if cur.Next == nil {
			if pre.Val != cur.Val {
				pre.Next = cur
				pre = pre.Next
			}
			break
		}
		if cur.Val == cur.Next.Val {
			value := cur.Val
			for cur != nil {
				if value != cur.Val {
					break
				}
				cur = cur.Next
			}
		} else {
			pre.Next = cur
			cur = cur.Next
			pre = pre.Next
		}
	}
	pre.Next = nil
	return src.Next
}