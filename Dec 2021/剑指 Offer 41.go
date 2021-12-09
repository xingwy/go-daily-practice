
// 数据流的中位数 两个堆的使用
// 问题：如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
// 设计一个支持以下两种操作的数据结构：
// 1.void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// 2.double findMedian() - 返回目前所有元素的中位数。
// 限制：最多会对addNum、findMedian进行50000次调用。

/**
 * Your MedianFinder object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddNum(num);
 * param_2 := obj.FindMedian();
 */

type Heap struct {
	data  []int
	size  int
	order int
}

func (this *Heap) Push(num int) {
	index := this.size
	this.size++
	if len(this.data) >= this.size {
		this.data[index] = num
	} else {
		this.data = append(this.data, num)
	}

	if index == 0 {
		return
	}

	var p int
	var t int
	for index > 0 {
		p = (index - 1) >> 1
		if this.compare(this.data[index], this.data[p]) {
			break
		}

		t = this.data[index]
		this.data[index] = this.data[p]
		this.data[p] = t
		index = p
	}
}

func (this *Heap) Pop() int {
	if this.size == 0 {
		return 0
	} else if this.size == 1 {
		this.size = 0
		return this.data[0]
	}
	this.size--
	index := 0
	v := this.data[0]
	this.data[0] = this.data[this.size]

	// 调整堆
	var m int
	var t int
	for index < this.size {
		left := ((index + 1) << 1) - 1
		right := ((index + 1) << 1)
		if left > this.size {
			break
		}
		if right <= this.size {
			if this.compare(this.data[left], this.data[right]) {
				m = right
			} else {
				m = left
			}
		} else {
			m = left
		}

		if this.compare(this.data[m], this.data[index]) {
			break
		}
		t = this.data[index]
		this.data[index] = this.data[m]
		this.data[m] = t

		index = m
	}

	return v
}

func (this *Heap) compare(a, b int) bool {
	if this.order < 0 {
		return a > b
	}
	return b > a

}

func (this *Heap) Top() int {
	if this.size == 0 {
		return 0
	}

	return this.data[0]
}

type MedianFinder struct {
	leftHeap  *Heap // 最大堆
	rightHeap *Heap // 最小堆
}

/** initialize your data structure here. */
func Constructor() MedianFinder {
	return MedianFinder{leftHeap: &Heap{data: make([]int, 25005), size: 0, order: 1}, rightHeap: &Heap{data: make([]int, 25005), size: 0, order: -1}}
}

func (this *MedianFinder) AddNum(num int) {
	// 判定两个堆是否平衡

	if this.leftHeap.size == 0 {
		this.leftHeap.Push(num)
	} else if this.rightHeap.size == 0 {
		leftTop := this.leftHeap.Top()
		if num >= leftTop {
			this.rightHeap.Push(num)
		} else {
			this.leftHeap.Pop()
			this.rightHeap.Push(leftTop)
			this.leftHeap.Push(num)
		}
	} else {
		// 始终保持  leftHeap.size >= rightHeap.size
		leftTop := this.leftHeap.Top()
		rightTop := this.rightHeap.Top()

		if this.leftHeap.size == this.rightHeap.size {
			if num <= rightTop {
				this.leftHeap.Push(num)
			} else {
				this.leftHeap.Push(rightTop)
				this.rightHeap.Pop()
				this.rightHeap.Push(num)
			}
		} else {
			if num >= leftTop {
				this.rightHeap.Push(num)
			} else {
				this.rightHeap.Push(leftTop)
				this.leftHeap.Pop()
				this.leftHeap.Push(num)
			}
		}
	}

}

func (this *MedianFinder) FindMedian() float64 {
	if this.leftHeap.size > this.rightHeap.size {
		return float64(this.leftHeap.Top())
	}
	return float64(this.leftHeap.Top()+this.rightHeap.Top()) / 2
}