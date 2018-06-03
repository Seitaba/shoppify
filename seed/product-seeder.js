var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URI);

const products = [
  new Product({
    imagePath:
      "https://d1pqlgpcx1bu0k.cloudfront.net/static/img/GOW-OG-image.jpg",
    title: "God of War",
    description:
      "Dans ce nouvel épisode de God Of War, le héros évoluera dans un monde aux inspirations nordiques, très forestier et montagneux. Dans ce beat-them-all, un enfant accompagnera le héros principal, pouvant apprendre des actions du joueur, et même gagner de l'expérience.",
    price: 67
  }),
  new Product({
    imagePath: "https://i.ytimg.com/vi/4qI3oIFPn2Y/maxresdefault.jpg",
    title: "Detroit become human",
    description:
      "Prochain jeu de Quantic Dream, Detroit : Become Human semble être un film interactif à la manière des derniers projets de David Cage. Dans celui-ci, le joueur semble pouvoir incarner Connor ou Kara, et l'ensemble de l'histoire se déroulera dans la ville de Detroit, devenue le centre névralgique de la production d'androïdes. Ces derniers se contentent pour la plupart de s'employer à effectuer les tâches pour lesquelles ils ont été créés. Toutefois, leur présence ne fait pas l'unanimité et certains individus estiment que ces être mécaniques volent le travail des humain.",
    price: 69
  }),
  new Product({
    imagePath:
      "https://blog.sketchfab.com/wp-content/uploads/2016/07/SKFB-WOW-LEGION-CONTEST-840x500.jpg",
    title: "World of warcraft legion",
    description: "World of Warcraft: Legion est la sixième extension de jeu vidéo du jeu de rôle en ligne massivement multijoueur World of Warcraft. Elle a été annoncée à la gamescom et est axée sur le retour de la légion ardente en Azeroth.",
    price: 45
  }),
  new Product({
    imagePath: "https://gocdkeys.com/images/captures/overwatch-pc-cd-key-3.jpg",
    title: "Overwatch",
    description: "Jeu d'action en vue à la première personne, Overwatch prend place dans un futur proche, en 2074 pour être exact. Dans des parties en 6 contre 6, le joueur incarne un héros parmi la palette proposée. Chaque personnage a des caractéristiques et des capacités particulières et un rôle défini parmi Attaque, Défense, Tank et Soutien. Les équipes cherchent donc un équilibre afin d'être le plus efficace possible dans l'accomplissement des objectifs (Capture de points, etc).",
    price: 19
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}