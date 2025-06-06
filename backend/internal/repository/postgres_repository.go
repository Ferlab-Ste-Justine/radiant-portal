package repository

import (
	"log"

	"github.com/radiant-network/radiant-api/internal/client"
	"gorm.io/gorm"
)

type PostgresRepository struct {
	db              *gorm.DB
	Interpretations *InterpretationsRepository
	UserSets        *UserSetsRepository
}

type PostgresDAO interface {
	CheckDatabaseConnection() string
}

func NewPostgresRepository(db *gorm.DB, pubmedClient client.PubmedClientService) *PostgresRepository {
	return &PostgresRepository{db: db, Interpretations: NewInterpretationsRepository(db, pubmedClient), UserSets: NewUserSetsRepository(db)}
}

func (r *PostgresRepository) CheckDatabaseConnection() string {
	sqlDb, err := r.db.DB()
	if err != nil {
		log.Fatal("failed to get database object:", err)
		return "down"
	}

	if err = sqlDb.Ping(); err != nil {
		log.Fatal("failed to ping database", err)
		return "down"
	}
	return "up"
}
