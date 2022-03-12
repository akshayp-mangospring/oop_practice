package main

import "fmt"

type stack []string

func (s *stack) Push(str string) {
	*s = append(*s, str)
}

func (s *stack) Pop() {
	*s = (*s)[:len(*s)-1]
}

func (s *stack) Peek() string {
	return (*s)[len(*s)-1]
}

func main() {
	var meinStack stack

	meinStack.Push("This")
	meinStack.Push("is")
	meinStack.Push("Sparta")
	fmt.Println(meinStack.Peek())
	meinStack.Pop()
	meinStack.Push("Brasil")

	fmt.Println(meinStack)
}
