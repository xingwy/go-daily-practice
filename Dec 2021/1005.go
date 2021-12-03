// 需求：给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
// 选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
// 重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
// 以这种方式修改数组后，返回数组 可能的最大和

func largestSumAfterKNegations(nums []int, k int) int {
	const offset = 100
	hashM := make([]int, offset*2+1)
	totalSum := 0
	for _, v := range nums {
		totalSum += v
		hashM[v+offset]++
	}

	// 负数部分(包含0)
	minWeight := -1
	for i := 0; i < offset; i++ {
		if hashM[i] != 0 {
			if hashM[i] >= k {
				totalSum += 2 * (offset - i) * k
				return totalSum
			}

			k -= hashM[i]
			totalSum += 2 * (offset - i) * hashM[i]
			minWeight = i
		}
	}

	if k%2 == 0 {
		return totalSum
	}
	k = 1
	// 正数部分
	for i := offset; i <= 2*offset; i++ {
		if hashM[i] > 0 {
			// 采取优质绝对值
			if minWeight+i > 2*offset && minWeight >= 0 {
				break
			} else {
				minWeight = i
			}
			break
		}
	}

	if minWeight < offset {
		minWeight = offset - minWeight
	} else {
		minWeight = minWeight - offset
	}
	return totalSum - 2*minWeight
}
