// 问题：给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。

func truncateSentence(s string, k int) string {

	for i := 0; i < len(s); i++ {
		if k == 0 {
			return s[0 : i-1]
		}
		if s[i] == 32 {
			k--
		}
	}
	return s
}