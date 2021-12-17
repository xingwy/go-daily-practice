// 问题：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 思路：使用O(1)获取队列最大值的思路

type MaxQueue struct {
	data  []int
	cache []int
	dHead int
	dTail int
	cHead int
	cTail int
	size  int //容量，可以支持动态容量
}

func Constructor(s int) MaxQueue {
	return MaxQueue{
		data:  make([]int, s+1),
		cache: make([]int, s+1),
		dHead: 0,
		dTail: 0,
		cHead: 0,
		cTail: 0,
		size:  s + 1,
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
	this.dTail = (this.dTail + 1) % this.size

	// 维护缓存
	for this.cTail != this.cHead {
		// 逐一检查缓存队列，使其有序递增
		if this.cache[(this.cTail-1+this.size)%this.size] >= value {
			this.cache[this.cTail] = value
			this.cTail = (this.cTail + 1) % this.size
			return
		}
		// 倒退
		this.cTail = (this.cTail - 1 + this.size) % this.size
	}
	if this.cTail == this.cHead {
		this.cache[this.cTail] = value
		this.cTail = (this.cTail + 1) % this.size
	}
}

func (this *MaxQueue) Pop_front() int {
	// 弹出head
	if this.dTail == this.dHead {
		return -1
	}

	v := this.data[this.dHead]
	this.dHead = (this.dHead + 1) % this.size

	// 维护最大值缓存
	if this.cache[this.cHead] == v {
		this.cHead = (this.cHead + 1) % this.size
	}
	return v
}
func maxSlidingWindow(nums []int, k int) []int {
	if len(nums) == 0 {
		return []int{}
	}
	// 维护 O(1)获得最大值的队列
	res := []int{}
	q := Constructor(k)

	for i := 0; i < k-1; i++ {
		q.Push_back(nums[i])
	}
	for i := k - 1; i < len(nums); i++ {
		q.Push_back(nums[i])
		res = append(res, q.Max_value())
		q.Pop_front()
	}

	return res
}