// 需求：运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制
// 实现 LRUCache 类：
//      1. LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
//      2. int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
//      3. void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，
//         则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的
//         数据值，从而为新的数据值留出空间。

type NodeList struct {
	Prev *NodeList
	Next *NodeList
	Key  int
	Val  int
}

type LRUCache struct {
	cacheMap map[int]*NodeList
	head     *NodeList
	tail     *NodeList
	capacity int
	curUse   int
}

func Constructor(capacity int) LRUCache {
	return LRUCache{cacheMap: make(map[int]*NodeList, capacity), head: nil, tail: nil, capacity: capacity}
}

func (this *LRUCache) Get(key int) int {
	_, ok := this.cacheMap[key]
	if !ok {
		return -1
	}
	node := this.cacheMap[key]
	if node == this.head && this.tail != this.head {
		this.head = node.Next
		this.head.Prev = nil
		this.tail.Next = node
		node.Prev = this.tail
		this.tail = node
		this.tail.Next = nil
	} else if node != this.tail {
		prev := node.Prev
		next := node.Next

		prev.Next = next
		next.Prev = prev

		node.Prev = this.tail
		this.tail.Next = node
		this.tail = node
	}
	return node.Val
}

func (this *LRUCache) Put(key int, value int) {
	_, ok := this.cacheMap[key]
	var node *NodeList
	if ok {
		node = this.cacheMap[key]
		if node == this.head && this.tail != this.head {
			this.head = node.Next
			this.head.Prev = nil
			this.tail.Next = node
			node.Prev = this.tail
			this.tail = node
		} else if node != this.tail {
			prev := node.Prev
			next := node.Next
			prev.Next = next
			next.Prev = prev

			node.Prev = this.tail
			this.tail.Next = node
			this.tail = node
		}
		node.Val = value
	} else {
		if this.curUse >= this.capacity {
			delete(this.cacheMap, this.head.Key)
			if this.head != this.tail {
				this.head = this.head.Next
				this.head.Prev = nil
			} else {
				this.tail = this.head
			}
			this.curUse--
		}

		node = &NodeList{Prev: nil, Next: nil, Val: value, Key: key}
		if this.head == nil {
			this.head = node
			this.tail = node
		} else {
			node.Prev = this.tail
			this.tail.Next = node
			this.tail = node
		}
		this.curUse++
	}

	this.cacheMap[key] = node
}