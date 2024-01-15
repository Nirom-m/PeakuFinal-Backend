CREATE TABLE perfiles(
        id int auto_increment primary key
        nombre_perfil varchar(50) not null
        FOREIGN KEY estado_perfil int not null
        FOREIGN KEY (estado_perfil) REFERENCES estado_perfil(id)
)

CREATE TABLE estado_perfil (
    id int auto_increment primary key
    estado_perfil varchar(50) not null
)

