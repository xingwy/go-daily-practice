// 问题：最小的k个数
// 描述：小根堆

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

func (this *Heap) Size() int {
	return this.size
}

func (this *Heap) ToData() []int {
	return this.data
}

func getLeastNumbers(arr []int, k int) []int {
	heap := Heap{data: make([]int, k), size: 0, order: 1}

	for _, v := range arr {
		size := heap.Size()
		if size < k {
			heap.Push(v)
		} else {
			top := heap.Top()
			if top > v {
				heap.Pop()
				heap.Push(v)
			}
		}
	}
	return heap.ToData()
}