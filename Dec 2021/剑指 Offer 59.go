// 问题：请定义一个队列并实现函数max_value得到队列里的最大值，要求函数max_value、push_back 和 pop_front的均摊时间复杂度都是O(1)。
// 若队列为空，pop_front 和 max_value 需要返回 -1

type MaxQueue struct {
	data  []int
	cache []int
	dHead int
	dTail int
	cHead int
	cTail int
	// size  int 容量，可以支持动态容量
}

func Constructor() MaxQueue {
	return MaxQueue{
		data:  make([]int, 10000),
		cache: make([]int, 10000),
		dHead: 0,
		dTail: 0,
		cHead: 0,
		cTail: 0,
	}
}

func (this *MaxQueue) Max_value() int {
	if this.cHead == this.cTail {
		return -1
	}
	// 取缓存队首
	return this.cache[this.cHead]
}

func (this *MaxQueue) Push_back(value int) {
	this.data[this.dTail] = value
	this.dTail = (this.dTail + 1) % 10000

	// 维护缓存
	for this.cTail != this.cHead {
		// 逐一检查缓存队列，使其有序递增
		if this.cache[(this.cTail-1+10000)%10000] > value {
			this.cache[this.cTail] = value
			this.cTail = (this.cTail + 1) % 10000
			return
		}
		// 倒退
		this.cTail = (this.cTail - 1 + 10000) % 10000
	}
	if this.cTail == this.cHead {
		this.cache[this.cTail] = value
		this.cTail = (this.cTail + 1) % 10000
	}
}

func (this *MaxQueue) Pop_front() int {
	// 弹出head
	if this.dTail == this.dHead {
		return -1
	}

	v := this.data[this.dHead]
	this.dHead = (this.dHead + 1) % 10000

	// 维护最大值缓存
	if this.cache[this.cHead] == v {
		this.cHead = (this.cHead + 1) % 10000
	}

	return v
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Max_value();
 * obj.Push_back(value);
 * param_3 := obj.Pop_front();
 */