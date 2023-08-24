

INSERT INTO `recycle-db-orm`.rol(rol) VALUES('admin');
INSERT INTO `recycle-db-orm`.rol(rol) VALUES('user');



INSERT INTO `recycle-db-orm`.province(province_name) VALUES('Jujuy');
INSERT INTO `recycle-db-orm`.province(province_name) VALUES('Salta');
INSERT INTO `recycle-db-orm`.province(province_name) VALUES('Tucumán');


INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('Dr. Manuel Belgrano', 1);
INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('Palpalá', 1);
INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('El Carmen', 1);
INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('San Pedro', 1);
INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('Tilcara', 1);

INSERT INTO `recycle-db-orm`.department(department_name, id_province) VALUES('Capital', 2);


INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('San Salvador de Jujuy', 1);
INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('La Almona', 1);
INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('Lozano', 1);
INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('León', 1);
INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('Yala', 1);
INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('Palpalá', 2);

INSERT INTO `recycle-db-orm`.location(location_name, id_department) VALUES('Salta', 6);



INSERT INTO `recycle-db-orm`.container_type(residuo, color, description) VALUES('envases de plasticos, metalicos', 'amarillo', 'latas de convservas bebidas, bandejas de aluminio, aerosoles, botellas de agua, refrescos y leche');
INSERT INTO `recycle-db-orm`.container_type(residuo, color, description) VALUES('envases de vidrio', 'verde', 'aqui se puede depositar cualquier envase de vidrio');



INSERT INTO `recycle-db-orm`.organization(organization_name, phone, email, organization_type, id_location)
VALUES('ProNoa S.R.L.', '0388 427-0598', 'pronoa@gmail.com', 'Sociedad de responsabilidad limitada', 6);
INSERT INTO `recycle-db-orm`.organization(organization_name, phone, email, organization_type, id_location)
VALUES('Eco Norte Reciclaje', '0388 15-462-2161', 'info@econortereciclado.com.ar', 'Sociedad de responsabilidad limitada', 1);


INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.29993714871891', '-24.186265872215632', 'ProNoa S.R.L.', 1, 1, 'Gral. San Martín y Sarmiento , Plaza Belgrano');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.3138125596427', '-24.184266891394362', 'ProNoa S.R.L.', 1, 1, 'Av. España y Gral. Belgrano, Parque San Martín en la Federación de Básquetbol');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.29398601458216', '-24.191218420633565', 'ProNoa S.R.L.', 2, 1, 'Av. Pueyrredón y Juana Manuela Gorriti - Plaza de Los Inmigrantes');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.29108968307749', '-24.197691881172982', 'Eco Norte Reciclaje', 1, 1, 'Av. Exodo y Rocha Zolorzano - Estadio 23 de Agosto - Club Gimnasia y Esgrima de Jujuy');


INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.40681414128757', '-24.076866044780687', 'Eco Norte Reciclaje', 1, 3, 'José Humberto Martearena y Niña Yolanda - Registro Civil');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.40838061268613', '-24.078019853557187', 'Eco Norte Reciclaje', 2, 3, 'Pje. Florida - Parroquia San Antonio de Padua');




INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.2155544764568', '-24.253474880351217', 'ProNoa S.R.L.', 1, 6, 'Av. del Congreso y Av. Rio de la Plata - Casino Golf Gral. San Martín');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.21082778163257', '-24.26382337866905', 'ProNoa S.R.L.', 1, 6, 'Juan José Paso - Ciudad de Los niños');
INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.21122930599634', '-24.264475364937038', 'ProNoa S.R.L.', 2, 6, 'Juan José Paso - Ciudad de Los niños - Biblioteca Popular Antonio Palerí');

INSERT INTO `recycle-db-orm`.container(longitude, latitude, organization_name, id_container_type, id_location, street_description)
VALUES('-65.40096730023625', '-24.79380763975472', 'ProNoa S.R.L.', 1, 7, 'Av. San Martìn y Av. Hypòlito Yrigoyen - Parque San Martìn');












