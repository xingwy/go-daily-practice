
// 问题：请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

func replaceSpace(s string) string {
	return strings.Join(strings.Split(s, " "), "%20")
}