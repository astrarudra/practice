package main

import (
	"fmt"
)

func add(a int, b int) (int, error) {
	//return 0, fmt.Errorf("OPPS !!")
	return a + b, nil
}

type Dictionary struct {
	Key   string
	Value int
	Valid bool
}

func (x *Dictionary) Exists() bool {
	return x.Valid
}

func main() {
	fmt.Println("hello World")
	// Declaration
	a := 5
	fmt.Println(a)
	s := fmt.Sprintf("%d (Type %T)", a, a)
	fmt.Println(s)
	// List
	list := []string{"abc", "test", "hello"}
	fmt.Println(list)
	// Loops
	for i := 0; i < len(list); i++ {
		fmt.Println(list[i])
	}
	for i, item := range list {
		fmt.Println(i, item)
	}
	// Function
	c, _ := add(3, 4)
	fmt.Println(c)
	// MAP
	dict := map[string]int{
		"a": 1,
		"b": 2,
	}
	dict["new"] = 3
	delete(dict, "b") // delete
	fmt.Println("DICT - ", dict, dict["a"])
	_, exists := dict["a"]
	fmt.Println("check - ", exists)
	for k, v := range dict {
		fmt.Println(k, v)

	}
	// Struct
	xyz := Dictionary{"hello", 123, true}
	fmt.Println(xyz, xyz.Exists())
}
