create KEYSPACE demo_cql_music WITH replication = {'class': 'SimpleStrategy',
    'replication_factor': '1' };

USE demo_cql_music;


/*
 En Cassandra, un blob es un tipo de dato que representa un objeto grande binario (Binary Large Object).
 Se utiliza para almacenar datos binarios, como imágenes, archivos o cualquier otro tipo de datos que no se ajusten
 a los tipos de datos de texto estándar de Cassandra

 A Universally Unique Identifier (UUID) is a 128-bit label used to uniquely identify objects in computer systems.

 */
create TABLE canciones (id uuid PRIMARY KEY, titulo text, album text,
                        artista text, data blob);


create TABLE lista_reproduccion (id uuid, nro_cancion int, cancion_id
                                    uuid, titulo text, album text, artista text, PRIMARY KEY (id, nro_cancion));

INSERT INTO lista_reproduccion (id, nro_cancion, cancion_id, titulo,
                                artista,
                                album)
VALUES
    (62c36092-82a1-3a00-93d1-46196ee77204,
     6,
     7db1a490-5878-11e2-bcfd-0800200c9a66, 'Asilo', 'Jorge Drexler', 'Salvavidas de Hielo');

select * from lista_reproduccion;

INSERT INTO canciones (id) values (now());

select * from canciones;

SELECT * FROM lista_reproduccion WHERE artista='Jorge Drexler' allow filtering ;

CREATE INDEX indice_artista ON lista_reproduccion (artista);

SELECT * FROM lista_reproduccion WHERE artista='Jorge Drexler' ;

ALTER TABLE lista_reproduccion ADD mapa  map <uuid,text>;


UPDATE lista_reproduccion SET mapa = mapa + { 121 : "fd" } WHERE
    id = 62c36092-82a1-3a00-93d1-46196ee77204 AND nro_cancion=6;

UPDATE lista_reproduccion SET artista = artista + {'2017'} WHERE
    id = 62c36092-82a1-3a00-93d1-46196ee77204 AND nro_cancion=6;

UPDATE lista_reproduccion SET etiquetas = etiquetas + {'guitarra'}
WHERE id = 62c36092-82a1-3a00-93d1-46196ee77204 AND nro_cancion=6;

UPDATE lista_reproduccion SET etiquetas = etiquetas + {'Mon Laferte'}
WHERE id = 62c36092-82a1-3a00-93d1-46196ee77204 AND nro_cancion=6;


CREATE INDEX indice_etiquetas ON lista_reproduccion (etiquetas);
SELECT * FROM lista_reproduccion WHERE etiquetas CONTAINS
                                       'guitarra';

DELETE FROM lista_reproduccion where id = 62c36092-82a1-3a00-93d1-46196ee77204 AND nro_cancion = 6;

DROP TABLE lista_reproduccion;

DROP KEYSPACE demo_cql_music;