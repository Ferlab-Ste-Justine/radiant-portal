CREATE TABLE `clinvar`
(
    `locus_id`          bigint NOT NULL,
    `chromosome`        varchar(2) NULL,
    `start`             bigint NULL,
    `end`               bigint NULL,
    `reference`         varchar(2000) NULL,
    `alternate`         varchar(2000) NULL,
    `interpretations`   array< varchar (100)> NULL,
    `name`              varchar(2000) NULL,
    `clin_sig`          array< varchar (2000)> NULL,
    `clin_sig_conflict` array< varchar (2000)> NULL,
    `af_exac`           decimal(38, 9) NULL,
    `clnvcso`           varchar(2000) NULL,
    `geneinfo`          varchar(2000) NULL,
    `clnsigincl`        array<varchar(2000)> NULL,
    `clnvi`             array<varchar(2000)> NULL,
    `clndisdb`          array<varchar(2000)> NULL,
    `clnrevstat`        array<varchar(2000)> NULL,
    `alleleid`          int NULL,
    `origin`            array<varchar(2000)> NULL,
    `clndnincl`         array<varchar(2000)> NULL,
    `rs`                array<varchar(2000)> NULL,
    `dbvarid`           array<varchar(2000)> NULL,
    `af_tgp`            decimal(38, 9) NULL,
    `clnvc`             varchar(2000) NULL,
    `clnhgvs`           array<varchar(2000)> NULL,
    `mc`                array<varchar(2000)> NULL,
    `af_esp`            decimal(38, 9) NULL,
    `clndisdbincl`      array<varchar(2000)> NULL,
    `conditions`        array<varchar(2000)> NULL,
    `inheritance`       array<varchar(2000)> NULL,
    `locus`             varchar(2000) NOT NULL,
    `locus_hash`        varchar(2000) NOT NULL
) ENGINE = OLAP
    PRIMARY KEY(`locus_id`);