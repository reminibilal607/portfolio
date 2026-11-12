// Toutes les informations éditoriales sont centralisées ici.
export const profile = {
 name: 'Billal REMINI', initials: 'BR',
 title: 'Modélisation, optimisation & aide à la décision',
 education: 'Étudiant en Mastère Prépa Digital à HETIC Paris',
 introduction: 'Titulaire d’un master en modélisation, optimisation et aide à la décision, je poursuis actuellement ma formation en Mastère Prépa Digital à HETIC Paris. Je souhaite mettre mes compétences en mathématiques appliquées, en optimisation et en programmation au service de projets de Data Science et d’intelligence artificielle.',
 availability: 'Stage en Data Science, IA ou optimisation — 4 à 6 mois — à partir du 10 mai 2027.',
 email: 'bilalremini380@gmail.com', linkedin: 'https://www.linkedin.com/in/billal-remini-b95057399/', cv: '/CV_Billal_REMINI.pdf',
 about: 'Mon parcours en mathématiques appliquées m’a conduit à me spécialiser en modélisation, optimisation et aide à la décision. Aujourd’hui, ma formation à HETIC Paris prolonge ce socle vers la Data Science et l’intelligence artificielle.',
 interest: 'L’optimisation est au cœur de mes intérêts : modéliser des problèmes concrets et rechercher des solutions adaptées aux contraintes opérationnelles.',
 exploration: ['Recherche opérationnelle', 'Optimisation combinatoire', 'Applications industrielles de l’IA', 'Données et prise de décision'],
};
export const skills = [
 { title: 'Programmation', icon: 'code', tags: ['Python', 'C', 'MATLAB'] },
 { title: 'Modélisation & optimisation', icon: 'brain', tags: ['Modélisation mathématique', 'Optimisation', 'Algorithmes génétiques', 'Planification et ordonnancement', 'Aide à la décision'] },
 { title: 'Données', icon: 'data', tags: ['Nettoyage de données', 'Analyse de données', 'Échantillons représentatifs'] },
 { title: 'Outils', icon: 'tools', tags: ['Pack Office'] },
 { title: 'En cours de formation', icon: 'brain', learning: true, tags: ['Data Science', 'Intelligence artificielle'] },
];
export const experience = {
 role: 'Stagiaire — Service Planification', company: 'Général Emballage, Akbou', dates: 'Février à avril 2026',
 missions: ['Planification et ordonnancement de la fabrication du carton ondulé sur les machines de transformation.', 'Analyse et nettoyage des données de production, notamment la suppression des données répétitives.', 'Constitution d’un échantillon représentatif d’un mois de fabrication.', 'Comparaison de la méthode EDD (Earliest Due Date) et d’un algorithme génétique pour l’ordonnancement.'],
 result: 'Dans cette étude, l’algorithme génétique a donné des résultats plus satisfaisants que la méthode EDD.',
};
// Ajouter de futurs projets à ce tableau, uniquement avec des informations vérifiées.
export const projects = [{
 title: 'Planification et ordonnancement de la fabrication du carton ondulé',
 subtitle: 'Mémoire de master — 2026 — Général Emballage',
 context: 'Ce mémoire est lié à mon stage au service Planification de Général Emballage.',
 details: [
 ['Problématique', 'Organiser la production sur les machines de transformation du carton ondulé.'],
 ['Données', 'Des données réelles de production, nettoyées et préparées pour l’étude.'],
 ['Approche', 'Modélisation du problème et comparaison de la méthode EDD avec un algorithme génétique.'],
 ['Résultat', 'Des résultats plus satisfaisants obtenus avec l’algorithme génétique dans le cadre de l’étude.'],
 ], tags: ['Modélisation', 'Optimisation', 'Ordonnancement', 'Analyse de données'], github: null,
}];
export const formations = [
 { date: 'En cours', title: 'Mastère Prépa Digital', school: 'HETIC Paris' },
 { date: '2026', title: 'Master Modélisation, Optimisation et Aide à la Décision', school: 'Université Abderrahmane Mira de Béjaïa' },
 { date: '2024', title: 'Licence Mathématiques Appliquées', school: 'Université Abderrahmane Mira de Béjaïa' },
 { date: '2021', title: 'Baccalauréat Sciences expérimentales', school: 'Lycée Massinissa', note: 'Mention Bien' },
];
export const languages = [['Kabyle', 'Langue maternelle'], ['Arabe', 'Courant'], ['Français', 'Très bon niveau'], ['Anglais', 'Bon niveau']];
