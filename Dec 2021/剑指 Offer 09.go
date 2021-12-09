
// 问题：用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
type CQueue struct {
	stack1 []int
	stack2 []int
}

func Constructor() CQueue {
	return CQueue{stack1: make([]int, 0), stack2: make([]int, 0)}
}

func (this *CQueue) AppendTail(value int) {
	this.stack1 = append(this.stack1, value)
}

func (this *CQueue) DeleteHead() int {
	var v int
	if len(this.stack2) > 0 {
		v = this.stack2[len(this.stack2)-1]
		this.stack2 = this.stack2[:len(this.stack2)-1]
		return v
	}
	if len(this.stack1) == 0 {
		return -1
	}

	// 迁移
	for i := len(this.stack1) - 1; i >= 0; i-- {
		this.stack2 = append(this.stack2, this.stack1[i])
	}
	this.stack1 = this.stack1[:0]
	return this.DeleteHead()
}

/**
 * Your CQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AppendTail(value);
 * param_2 := obj.DeleteHead();
 */