import { Link } from 'react-router-dom'

const menuEntrees = [
  { name: 'Salade ardechoise', desc: 'Mesclun, chevre chaud, noix, miel de lavande', price: '12' },
  { name: 'Terrine de campagne maison', desc: 'Cornichons, pain de campagne grille', price: '10' },
  { name: 'Veloute de chataignes', desc: 'Creme fraiche, eclats de noisettes torrefies', price: '11' },
  { name: 'Caillette ardechoise', desc: 'Salade verte, vinaigrette a l\'ancienne', price: '11' },
]

const menuPlats = [
  { name: 'Filet de truite de l\'Ardeche', desc: 'Beurre aux herbes, pommes grenaille, haricots verts', price: '22' },
  { name: 'Souris d\'agneau confite', desc: 'Jus au thym, gratin dauphinois', price: '24' },
  { name: 'Magret de canard', desc: 'Sauce aux myrtilles, legumes de saison poeles', price: '23' },
  { name: 'Risotto aux cepes', desc: 'Parmesan affine, huile de truffe', price: '19' },
]

const menuDesserts = [
  { name: 'Creme brulee a la lavande', desc: 'Tuile aux amandes', price: '9' },
  { name: 'Moelleux a la chataigne', desc: 'Coeur fondant, glace vanille', price: '10' },
  { name: 'Assiette de fromages', desc: 'Selection ardechoise, confiture de figues', price: '11' },
  { name: 'Tarte aux fruits de saison', desc: 'Pate sablee maison, chantilly', price: '9' },
]

const menus = [
  {
    title: 'Menu Decouverte',
    price: '32',
    desc: 'Entree + Plat + Dessert',
    note: 'Au choix parmi la carte',
  },
  {
    title: 'Menu Ardechois',
    price: '42',
    desc: 'Amuse-bouche + Entree + Plat + Fromage + Dessert',
    note: 'Accord mets et vins en supplement',
  },
  {
    title: 'Menu Enfant',
    price: '14',
    desc: 'Plat + Dessert + Boisson',
    note: 'Jusqu\'a 12 ans',
  },
]

export default function Restaurant() {
  const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`
  const marketingPath = (fileName) => `${import.meta.env.BASE_URL}marketing/${fileName}`

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={imagePath('restaurant.jpg')}
            alt="Restaurant de l'Hotel des Sites"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/60 to-noir/20" />
        </div>
        <div className="relative z-10 site-shell pb-16 w-full">
          <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
            Gastronomie
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-creme text-balance">
            Le Restaurant
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 lg:py-32">
        <div className="site-shell">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="text-or text-xs tracking-[0.4em] uppercase block mb-6">
                Cuisine locale
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-creme mb-8 leading-snug text-balance">
                {"Les saveurs de l'Ardeche a votre table"}
              </h2>
              <p className="text-creme/60 leading-relaxed mb-6">
                {"Notre chef met a l'honneur les produits du terroir ardechois : chataignes, fromages de chevre, truites de riviere, miel de lavande... Chaque plat raconte l'histoire de notre region."}
              </p>
              <p className="text-creme/60 leading-relaxed">
                {"Le restaurant est ouvert aux residents de l'hotel. En hors saison (avril a juin, septembre a novembre), profitez de notre formule demi-pension pour une experience complete."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={marketingPath('cuisine-salade-chevre-chaud.png')}
                alt="Salade au chevre chaud et noix"
                className="w-full object-cover col-span-2"
              />
              <img
                src={marketingPath('cuisine-creme-brulee.png')}
                alt="Creme brulee maison"
                className="w-full object-cover"
              />
              <img
                src={marketingPath('cuisine-mijote-ardechois.png')}
                alt="Plat mijote du terroir"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section className="py-24 bg-noir-light">
        <div className="site-shell">
          <div className="text-center mb-16">
            <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
              Nos Formules
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-creme text-balance">
              {"Menus & Formules"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {menus.map((menu, i) => (
              <div
                key={i}
                className={`p-8 border text-center flex flex-col ${
                  i === 1
                    ? 'border-or bg-or/5'
                    : 'border-gris-border hover:border-or/30'
                } transition-colors`}
              >
                {i === 1 && (
                  <span className="text-or text-[10px] tracking-[0.4em] uppercase mb-4">
                    Recommande
                  </span>
                )}
                <h3 className="font-serif text-2xl text-creme mb-2">{menu.title}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="font-serif text-4xl text-or">{menu.price}</span>
                  <span className="text-or text-lg">{"€"}</span>
                </div>
                <p className="text-creme/60 text-sm mb-2">{menu.desc}</p>
                <p className="text-creme/40 text-xs italic mt-auto pt-4">{menu.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA CARTE */}
      <section className="py-24 lg:py-32">
        <div className="site-shell-narrow">
          <div className="text-center mb-20">
            <span className="text-or text-xs tracking-[0.4em] uppercase block mb-4">
              A la carte
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-creme text-balance">
              Notre Carte
            </h2>
            <p className="text-creme/40 text-sm mt-4 italic">{"Les plats varient selon les saisons et les arrivages"}</p>
          </div>

          {/* Entrees */}
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-serif text-2xl text-or whitespace-nowrap">{"Entrees"}</h3>
              <span className="flex-1 h-px bg-gris-border" />
            </div>
            <div className="flex flex-col gap-6">
              {menuEntrees.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-creme font-medium mb-1">{item.name}</h4>
                    <p className="text-creme/40 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-or font-serif text-lg whitespace-nowrap">{item.price}{"€"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plats */}
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-serif text-2xl text-or whitespace-nowrap">Plats</h3>
              <span className="flex-1 h-px bg-gris-border" />
            </div>
            <div className="flex flex-col gap-6">
              {menuPlats.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-creme font-medium mb-1">{item.name}</h4>
                    <p className="text-creme/40 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-or font-serif text-lg whitespace-nowrap">{item.price}{"€"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-8">
              <h3 className="font-serif text-2xl text-or whitespace-nowrap">Desserts</h3>
              <span className="flex-1 h-px bg-gris-border" />
            </div>
            <div className="flex flex-col gap-6">
              {menuDesserts.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-creme font-medium mb-1">{item.name}</h4>
                    <p className="text-creme/40 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-or font-serif text-lg whitespace-nowrap">{item.price}{"€"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="text-center pt-8 border-t border-gris-border">
            <p className="text-creme/40 text-sm italic">
              {"Tous nos plats sont prepares maison avec des produits frais et locaux."}
            </p>
            <p className="text-creme/40 text-sm italic mt-2">
              {"N'hesitez pas a nous signaler vos allergies ou intolerances alimentaires."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-noir-light">
        <div className="site-shell-narrow text-center">
          <h3 className="font-serif text-3xl text-creme mb-6 text-balance">
            {"Reservez votre table"}
          </h3>
          <p className="text-creme/50 mb-8 max-w-xl mx-auto">
            {"Le restaurant est ouvert aux residents de l'hotel. Contactez-nous pour reserver votre table ou pour la formule demi-pension."}
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-or text-noir text-xs tracking-[0.25em] uppercase font-medium hover:bg-or-light transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  )
}
