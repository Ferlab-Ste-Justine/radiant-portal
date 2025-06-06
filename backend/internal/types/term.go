package types

type AutoCompleteTerm struct {
	HighLight Term `json:"highlight,omitempty"`
	Source    Term `json:"source,omitempty"`
}

type Term struct {
	ID   string `json:"id,omitempty"`
	Name string `json:"name,omitempty"`
}

var MondoTable = Table{
	Name:  "mondo_term",
	Alias: "mondo",
}

var HPOTable = Table{
	Name:  "hpo_term",
	Alias: "hpo",
}
