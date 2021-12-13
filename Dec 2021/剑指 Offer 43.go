// 题目：统计1～n 整数中1出现的次数
// 描述：输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。
// 例如：输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

func countDigitOne(n int) int {
	count := 0
	//前置位
	prev := n
	tail := 0
	//当前位
	cur := 0
	num := 1
	for prev != 0 {
		cur = prev % 10
		prev = prev / 10
		if cur == 0 {
			// 借位
			count += prev * num
		} else if cur == 1 {
			count += (prev*num + (tail + 1))
		} else {
			count += (prev*num + num)
		}

		//尾巴
		tail = cur*num + tail
		num *= 10
	}
	return count
}