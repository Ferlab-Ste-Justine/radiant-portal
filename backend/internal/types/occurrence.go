package types

// Occurrence represents an occurrence
// @Description Occurrence represents an occurrence
type Occurrence struct {
	SeqId               int               `json:"seq_id" validate:"required"`
	Chromosome          string            `json:"chromosome" validate:"required"`
	Start               int64             `json:"start" validate:"required"`
	LocusId             int64             `json:"locus_id" validate:"required"`
	GenotypeQuality     int32             `json:"genotype_quality" validate:"required"`
	Filter              string            `json:"filter,omitempty"`
	Zygosity            string            `json:"zygosity" validate:"required"`
	Pf                  float64           `json:"pf" validate:"required"`
	Pc                  int               `json:"pc,omitempty"`
	Pn                  int               `json:"pn,omitempty"`
	Af                  float64           `json:"af,omitempty"`
	GnomadV3Af          float64           `json:"gnomad_v3_af" validate:"required"`
	Hgvsg               string            `json:"hgvsg" validate:"required"`
	OmimInheritanceCode JsonArray[string] `gorm:"type:json" json:"omim_inheritance_code,omitempty"`
	AdRatio             float32           `json:"ad_ratio" validate:"required"`
	VariantClass        string            `json:"variant_class" validate:"required"`
	VepImpact           VepImpact         `json:"vep_impact,omitempty" enums:"MODIFIER,LOW,MODERATE,HIGH"`
	Symbol              string            `json:"symbol,omitempty"`
	Clinvar             JsonArray[string] `gorm:"type:json" json:"clinvar,omitempty"`
	IsManeSelect        bool              `json:"is_mane_select"`
	IsCanonical         bool              `json:"is_canonical"`
	AaChange            string            `json:"aa_change,omitempty"`
	RsNumber            string            `json:"rsnumber,omitempty"`
	PickedConsequences  JsonArray[string] `gorm:"type:json" json:"picked_consequences" validate:"required"`
	TranscriptId        string            `json:"transcript_id,omitempty"`
	ImpactScore         string            `json:"impact_score,omitempty"`
} // @name Occurrence

type ExpendedOccurrence = struct {
	LocusId      int64             `json:"locus_id" validate:"required"`
	Hgvsg        string            `json:"hgvsg" validate:"required"`
	Symbol       string            `json:"symbol,omitempty"`
	SiftPred     string            `json:"sift_pred,omitempty"`
	SiftScore    float32           `json:"sift_score,omitempty"`
	FathmmPred   string            `json:"fathmm_pred,omitempty"`
	FathmmScore  float32           `json:"fathmm_score,omitempty"`
	RevelScore   float32           `json:"revel_score,omitempty"`
	CaddScore    float32           `json:"cadd_score,omitempty"`
	CaddPhred    float32           `json:"cadd_phred,omitempty"`
	SpliceaiDs   float32           `json:"spliceai_ds,omitempty"`
	SpliceaiType JsonArray[string] `gorm:"type:json" json:"spliceai_type,omitempty"`
	GnomadPli    float32           `json:"gnomad_pli,omitempty"`
	GnomadLoeuf  float32           `json:"gnomad_loeuf,omitempty"`
	GnomadV3Af   float64           `json:"gnomad_v3_af" validate:"required"`
	Gq           int32             `json:"genotype_quality" validate:"required"`
	Filter       string            `json:"filter,omitempty"`
	AdAlt        int32             `json:"ad_alt,omitempty"`
	AdTotal      int32             `json:"ad_total,omitempty"`
	InfoQd       float32           `json:"qd,omitempty"`
	IsManeSelect bool              `json:"is_mane_select"`
	IsCanonical  bool              `json:"is_canonical"`
	AaChange     string            `json:"aa_change,omitempty"`
	Rsnumber     string            `json:"rsnumber,omitempty"`
	DnaChange    string            `json:"dna_change,omitempty"`
	Consequences JsonArray[string] `gorm:"type:json" json:"picked_consequences" validate:"required"`
	VepImpact    VepImpact         `json:"vep_impact,omitempty" enums:"MODIFIER,LOW,MODERATE,HIGH"`
} // @name ExpendedOccurrence

var OccurrenceTable = Table{
	Name:  "occurrences",
	Alias: "o",
}

var FilterField = Field{
	Name:            "filter",
	CanBeSelected:   true,
	CanBeFiltered:   true,
	CanBeAggregated: true,
	Table:           OccurrenceTable,
}
var SeqIdField = Field{
	Name:          "seq_id",
	CanBeSelected: true,
	CanBeFiltered: true,
	Table:         OccurrenceTable,
}
var LocusIdField = Field{
	Name:          "locus_id",
	CanBeSelected: true,
	CanBeFiltered: true,
	CanBeSorted:   true,
	Table:         OccurrenceTable,
}
var ZygosityField = Field{
	Name:            "zygosity",
	CanBeSelected:   true,
	CanBeFiltered:   true,
	CanBeAggregated: true,
	Table:           OccurrenceTable,
}
var GenotypeQualityField = Field{
	Name:          "gq",
	Alias:         "genotype_quality",
	CanBeSelected: true,
	CanBeFiltered: true,
	CanBeSorted:   true,
	Table:         OccurrenceTable,
}
var AdRatioField = Field{
	Name:          "ad_ratio",
	CanBeSelected: true,
	CanBeFiltered: true,
	CanBeSorted:   true,
	Table:         OccurrenceTable,
}

var OccurrencesFields = []Field{
	SeqIdField,
	LocusIdField,
	FilterField,
	GenotypeQualityField,
	AdRatioField,
	PfField,
	PnField,
	PcField,
	AfField,
	HgvsgField,
	ClinvarField,
	ConsequenceField,
	SymbolFilterField,
	ImpactScoreField,
	ImpactScoreFilterField,
	OmimGenePanelField,
	HpoGenePanelField,
	RsNumberField,
	AaChangeField,
	ConsequencesField,
	SymbolField,
	IsManeSelectField,
	IsCanonicalField,
	OmimInheritanceCodeField,
	GnomadV3AfField,
	TranscriptIdField,

	// Variants
	VariantClassField,
	ChromosomeField,
	StartField,
	ZygosityField,

	// Genes
	VepImpactField,
	GnomadPliField,
	GnomadLoeufField,

	// Predictions
	CaddScoreField,
	CaddPhredField,
	DannScoreField,
	FathmmPredField,
	LrtPredField,
	Polyphen2HvarPredField,
	RevelScoreField,
	SpliceaiDsField,
	SiftPredField,
}

var OccurrencesDefaultFields = []Field{
	SeqIdField,
	LocusIdField,
	HgvsgField,
	VariantClassField,
	GnomadV3AfField,
	PfField,
	GenotypeQualityField,
	ZygosityField,
	AdRatioField,
	ConsequencesField,
	AaChangeField,
	ClinvarField,
	IsManeSelectField,
	VepImpactField,
	SymbolField,
	ChromosomeField,
	StartField,
}
