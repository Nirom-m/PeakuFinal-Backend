  CREATE TABLE estado_perfil (
          id INT AUTO_INCREMENT PRIMARY KEY,
    estado_perfil VARCHAR(50) NOT NULL
    );
    
    CREATE TABLE perfiles(
         id INT AUTO_INCREMENT PRIMARY KEY,
        nombre_perfil varchar(50) not null,
        estado_perfil_id int not null,
        KEY estado_perfil_id_idx(estado_perfil_id)
);

CREATE TABLE cliente(
    cliente_id int auto_increment primary key,
    email varchar(50) not null,
    telefono int,
    direccion varchar(50),
    username varchar(50),
    password varchar(50),
    nombre_perfil varchar(50),
);

CREATE TABLE reserva (
    id int auto_increment,
    cliente_id int,
    plan_id int,
    viaje_id int,
    empleado_id int,
    subtotal int,
    metodo_pago varchar(50),
    descuento int,
    total int,
    KEY cliente_id_idx(cliente_id),
    KEY plan_id_idx(plan_id),
    KEY viaje_id_idx(viaje_id),
    KEY empleado_id_idx(empleado_id),
);
    '