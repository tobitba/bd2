CREATE (w:Wine {name:"Prancing Wolf", style: "ice wine", vintage: 2015})

CREATE (p:Publication {name: "Wine Expert Monthly"})

MATCH (p:Publication {name: "Wine Expert Monthly"}),
(w:Wine {name: "Prancing Wolf", vintage: 2015})
CREATE (p)-[r:reported_on]->(w)

match (w:Wine) -[r]- (p:Publication) set r.rating = 97 return r (porque no funciona con ->)

CREATE (g:GrapeType {name: "Riesling"})

MATCH (w:Wine {name: "Prancing Wolf"}),(g:GrapeType {name: "Riesling"})
CREATE (w)-[r:grape_type]->(g)

 CREATE (e: EphemeralNode {name: "short lived"});
 MATCH (w:Wine {name: "Prancing Wolf"}),
(e:EphemeralNode {name: "short lived"})
CREATE (w)-[r:short_lived_relationship]->(e);
 MATCH ()-[r:short_lived_relationship]-()
DELETE r;
 MATCH (e:EphemeralNode)
DELETE e;

/* ojo!
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
DELETE n, r;*/

CREATE (wr:Winery {name: "Prancing Wolf Winery"});
 MATCH (w:Wine {name: "Prancing Wolf"}),
(wr:Winery {name: "Prancing Wolf Winery"})
CREATE (wr)-[r:produced]->(w);

CREATE (w:Wine {name:"Prancing Wolf", style: "Kabinett", vintage: 2002});
CREATE (w:Wine {name: "Prancing Wolf", style: "Spätlese", vintage: 2010});
MATCH (wr:Winery {name: "Prancing Wolf Winery"}),(w:Wine {name: "Prancing Wolf"})
CREATE (wr)-[r:produced]->(w);
MATCH (w:Wine),(g:GrapeType {name: "Riesling"})
CREATE (w)-[r:grape_type]->(g);
