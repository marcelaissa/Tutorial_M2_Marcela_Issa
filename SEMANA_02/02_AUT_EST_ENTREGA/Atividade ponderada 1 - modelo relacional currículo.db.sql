BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Pessoa" (
	"Id_Pessoa"	INTEGER NOT NULL,
	"Nome"	TEXT NOT NULL,
	"Foto"	BLOB,
	PRIMARY KEY("Id_Pessoa")
);
CREATE TABLE IF NOT EXISTS "Dados_Pessoais" (
	"Id_Dados_Pessoais"	INTEGER NOT NULL,
	"Telefone"	NUMERIC,
	"Email"	TEXT,
	"Linkedin"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_Dados_Pessoais")
);
CREATE TABLE IF NOT EXISTS "Formacoes" (
	"Id_Formacoes"	INTEGER NOT NULL,
	"Nome_formacoes"	TEXT,
	"Nome_Instituicoes"	TEXT,
	"Periodo"	NUMERIC,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_Formacoes")
);
CREATE TABLE IF NOT EXISTS "Experiencias" (
	"Id_experiencia"	INTEGER NOT NULL,
	"Nome_experiencia"	TEXT,
	"Periodo"	NUMERIC,
	"Nome_cargo"	TEXT,
	"Nome_empresa"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_experiencia")
);
CREATE TABLE IF NOT EXISTS "Realizacoes" (
	"Id_realizacoes"	INTEGER NOT NULL,
	"Nome_realizacoes"	TEXT,
	"Ano"	NUMERIC,
	"Descricao"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_realizacoes")
);
CREATE TABLE IF NOT EXISTS "Projetos" (
	"Id_Projeto"	INTEGER NOT NULL,
	"Nome_Projeto"	TEXT,
	"Nome_Parceiro"	TEXT,
	"Periodo"	NUMERIC,
	"Descricao"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_Projeto")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"Id_Habilidades"	INTEGER NOT NULL,
	"Nome_habilidades"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_Habilidades")
);
CREATE TABLE IF NOT EXISTS "Idiomas" (
	"Id_Idiomas"	INTEGER NOT NULL,
	"Nome_Idioma"	TEXT,
	"Id_Pessoa"	INTEGER,
	FOREIGN KEY("Id_Pessoa") REFERENCES "Pessoa"("Id_Pessoa"),
	PRIMARY KEY("Id_Idiomas")
);
INSERT INTO "Pessoa" ("Id_Pessoa","Nome","Foto") VALUES (1,'Marcela Issa Martins',NULL);
INSERT INTO "Idiomas" ("Id_Idiomas","Nome_Idioma","Id_Pessoa") VALUES (1,'Inglês',NULL);
COMMIT;
