const unjownLaserCharge = new Effect(80, 100, e => {
  Draw.color(Color.valueOf("FFB35C"));
  Lines.stroke(e.fin() * 2);
  Lines.circle(e.x, e.y, 4 + e.fout() * 100);

  Fill.circle(e.x, e.y, e.fin() * 20);

  Angles.randLenVectors(e.id, 20, 40 * e.fout(), (x, y) => {
    Fill.circle(e.x + x, e.y + y, e.fin() * 5);
  });

  Draw.color();

  Fill.circle(e.x, e.y, e.fin() * 10);
});

UnitTypes.corvus.weapons.get(0).bullet.colors = [Color.valueOf("FFB35C"), Color.valueOf("ffddb8"), Color.white];
UnitTypes.corvus.weapons.get(0).bullet.shootEffect = unjownLaserCharge;
UnitTypes.corvus.weapons.get(0).bullet.lightColor = Color.valueOf("FFB35C");
UnitTypes.corvus.weapons.get(0).bullet.lightningColor = Color.valueOf("FFB35C");

Planets.sun.atmosphereRadOut = 5;
Planets.sun.lightColor = Color.blue;

Planets.serpulo.orbitRadius = 3.5;
Planets.serpulo.atmosphereColor = Color.valueOf("FFB35C");
Planets.serpulo.atmosphereRadIn = 0;
Planets.serpulo.atmosphereRadOut = 10;
