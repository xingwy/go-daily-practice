// 需求：给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 限制：请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

package main

import "fmt"

func main () {
    list := []int {1,2,3,4,5,3}
    max := longestConsecutive(list)
    fmt.Println(max)
}

func longestConsecutive(nums []int) int {
    _map := make(map[int]bool)
    for _, value := range nums {
        _map[value] = true
    }
    max := 0;
    for num, _ := range _map {
        if _, ok := _map[num-1]; !ok {
            curNum := num
            count := 1;
            for {
                _, ok := _map[curNum+1];
                if ok {
                    curNum++
                    count++
                } else {
                    break
                }
            }
            if max < count {
                max = count
            }
        }
    }
    return max
}