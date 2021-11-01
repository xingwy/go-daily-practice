// 需求：给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
// 限制：你应当 保留 两个分区中每个节点的初始相对位置。
// 例子： [1,4,3,2,5,2] x=3时，结果为[1,2,2,4,3,5]

func partition(head *ListNode, x int) *ListNode {
	first := &ListNode{ Val: 0, Next: nil } 
	second := &ListNode{ Val: 0, Next: nil } 
	cur := head
	first_cur := first
	second_cur := second

	for cur != nil {
		if cur.Val < x {
			next := cur.Next
			first_cur.Next = cur
			cur.Next = nil
			first_cur = cur
			cur = next
		} else {
			next := cur.Next
			second_cur.Next = cur
			cur.Next = nil
			second_cur = cur
			cur = next
		}
	}
	first_cur.Next = second.Next
	return first.Next
}