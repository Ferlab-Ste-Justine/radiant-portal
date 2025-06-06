package utils

import (
	"github.com/radiant-network/radiant-api/internal/types"
	"github.com/stretchr/testify/assert"
	"testing"
)

type Person struct {
	Name string
	Age  int
	City string
}

func Test_GroupByProperty(t *testing.T) {
	people := []Person{
		{Name: "Alice", Age: 25, City: "New York"},
		{Name: "Bob", Age: 30, City: "Los Angeles"},
		{Name: "Charlie", Age: 25, City: "New York"},
		{Name: "David", Age: 35, City: "Chicago"},
	}

	groupedByCity := GroupByProperty(people, func(p Person) string {
		return p.City
	})

	assert.Equal(t, 3, len(groupedByCity))
	assert.Equal(t, 2, len(groupedByCity["New York"]))
	assert.Equal(t, 1, len(groupedByCity["Chicago"]))
	assert.Equal(t, 1, len(groupedByCity["Los Angeles"]))
}

func Test_SortConsequences(t *testing.T) {
	variantsConsequences := []types.VariantConsequence{
		{IsPicked: false, Symbol: "CCC"},
		{IsPicked: false, Symbol: "BBB"},
		{IsPicked: true, Symbol: "DDD"},
		{IsPicked: false, Symbol: "AAA"},
	}

	result := SortConsequences(variantsConsequences)

	assert.Equal(t, 4, len(result))
	assert.Equal(t, "DDD", result[0].Symbol)
	assert.Equal(t, "AAA", result[1].Symbol)
	assert.Equal(t, "BBB", result[2].Symbol)
	assert.Equal(t, "CCC", result[3].Symbol)
}
