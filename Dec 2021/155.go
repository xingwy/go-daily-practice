// 需求：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

type MinStack struct {
	mins  []int
	datas []int
}

func Constructor() MinStack {
	return MinStack{mins: make([]int, 0), datas: make([]int, 0)}
}

func (this *MinStack) Push(val int) {
	this.datas = append(this.datas, val)
	length := len(this.mins)

	if length == 0 {
		this.mins = append(this.mins, val)
	} else {
		if this.mins[length-1] >= val {
			this.mins = append(this.mins, val)
		}
	}
}

func (this *MinStack) Pop() {
	datasLen := len(this.datas)
	minsLen := len(this.mins)
	item := this.datas[datasLen-1]

	this.datas = this.datas[:len(this.datas)-1]

	if this.mins[minsLen-1] == item {
		this.mins = this.mins[:len(this.mins)-1]
	}
}

func (this *MinStack) Top() int {
	return this.datas[len(this.datas)-1]
}

func (this *MinStack) GetMin() int {
	return this.mins[len(this.mins)-1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */
