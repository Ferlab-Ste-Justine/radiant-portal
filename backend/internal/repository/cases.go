package repository

import (
	"errors"
	"fmt"
	"github.com/radiant-network/radiant-api/internal/types"
	"gorm.io/gorm"
	"log"
)

type Case = types.Case

type CasesRepository struct {
	db *gorm.DB
}

type CasesDAO interface {
	GetCases() (*[]Case, error)
}

func NewCasesRepository(db *gorm.DB) *CasesRepository {
	if db == nil {
		log.Fatal("CasesRepository: db is nil")
		return nil
	}
	return &CasesRepository{db: db}
}

func (r *CasesRepository) GetCases() (*[]Case, error) {
	tx := r.db.Table(types.CaseTable.Name).
		Preload("Proband").
		Preload("Project").
		Preload("Type").
		Preload("Status").
		Preload("Request").
		Preload("PerformerLab")
	var cases []Case
	if err := tx.Find(&cases).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("error while fetching cases: %w", err)
		} else {
			return nil, nil
		}
	}

	return &cases, nil
}
