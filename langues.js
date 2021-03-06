var menuItemFormation = document.getElementById('menuItemFormation');
var menuItemCompetences = document.getElementById('menuItemCompetences');
var menuItemRealisations = document.getElementById('menuItemRealisations');
var menuItemContact = document.getElementById('menuItemContact');
var langageIconeDiv = document.getElementById('langageIconeDiv');
var bonjour = document.getElementById('bonjour');
var jeSuis = document.getElementById('jeSuis');
var jeSuisDescription = document.getElementById('jeSuisDescription');
var formationLabelBac = document.getElementsByClassName('formationLabelBac');
var formationTextBac = document.getElementsByClassName('formationTextBac');
var formationTitleDut = document.getElementsByClassName('formationTitleDut');
var formationTextDut = document.getElementsByClassName('formationTextDut');
var formationPlaceDut = document.getElementsByClassName('formationPlaceDut');
var formationTextLp = document.getElementsByClassName('formationTextLp');
var formationPlaceLp = document.getElementsByClassName('formationPlaceLp');
var compAutoEvaluation = document.getElementById('compAutoEvaluation');
var compSectionTitleLangagesWeb = document.getElementsByClassName('compSectionTitleLangagesWeb');
var compSectionTitleFrameworksWeb = document.getElementsByClassName('compSectionTitleFrameworksWeb');
var compSectionTitleAutresCompetencesWeb = document.getElementsByClassName('compSectionTitleAutresCompetencesWeb');
var compSectionTitleAutresCompetencesInf = document.getElementsByClassName('compSectionTitleAutresCompetencesInf');
var compSectionTitleAutres = document.getElementsByClassName('compSectionTitleAutres');
var realisationDescriptionStageDUT = document.getElementsByClassName('realisationDescriptionStageDUT');
var realisationDescriptionStageLP = document.getElementsByClassName('realisationDescriptionStageLP');
var loisirLabelJeuxVideos = document.getElementById('loisirLabelJeuxVideos');
var loisirLabelMontageVideo = document.getElementById('loisirLabelMontageVideo');
var loisirLabelPetitsProjets = document.getElementById('loisirLabelPetitsProjets');
var titleContact = document.getElementById('titleContact');
var descriptionContact = document.getElementById('descriptionContact');
var description2Contact = document.getElementById('description2Contact');
var footerDescription = document.getElementById('footerDescription');

function changeLanguage(languageId){
	switch(languageId){
		case 0 :
			menuItemFormation.innerHTML = 'Formation';
			menuItemCompetences.innerHTML = 'Comp??tences';
			menuItemRealisations.innerHTML = 'R??alisations';
			menuItemContact.innerHTML = 'Contact';
			langageIconeDiv.innerHTML = '<img id="langageIcone" src="./Ic??nes/union-jack.png" onclick="changeLanguage(1)">'
			bonjour.innerHTML = 'Bonjour !';
			jeSuis.innerHTML = 'Je suis Jason Vandaele, d??veloppeur web !';
			jeSuisDescription.innerHTML = "J'ai 21 ans et suis titulaire d'une Licence Professionnelle en ce qui concerne le domaine du web. J'aime r??aliser des projets me permettant de mettre ?? profit ma cr??ativit??, mon organisation et ma pr??voyance ! Je suis sp??cialis?? dans l'utilisation de Symfony (4 & 5) mais je peux ??galement utiliser d'autres langages et frameworks adapt??s. De plus, j'ai d??j?? pu faire des r??alisations en t??l??travail (partiel ou total), cette notion ne me pose donc pas de probl??mes !";
			compAutoEvaluation.innerHTML = 'Voici une auto-??valuation des comp??tences que je poss??de !';
			loisirLabelJeuxVideos.innerHTML = 'Jeux vid??os';
			loisirLabelMontageVideo.innerHTML = 'Montage vid??o';
			loisirLabelPetitsProjets.innerHTML = 'Petits projets';
			titleContact.innerHTML = 'Me contacter';
			descriptionContact.innerHTML = "Une question ? Une remarque ? N'h??sitez pas ?? me contacter gr??ce ?? l'adresse e-mail ci-dessous, je vous r??pondrai d??s que possible !";
			description2Contact.innerHTML = "N'h??sitez pas ?? me fournir votre num??ro de t??l??phone si vous pr??f??rez les ??changes vocaux !";
			footerDescription.innerHTML = 'Site et image de fond cr????s par Jason Vandaele.';
			for(var i=0;i<formationLabelBac.length;i++){
				formationLabelBac[i].innerHTML = 'Mention Bien';
				formationTextBac[i].innerHTML = "Baccalaur??at de Sciences et Technologies de l'Industrie et du D??veloppement Durable.<br>Option SIN (Syst??me d'Information et Num??rique), permettant de faire ses premiers pas dans le monde de l'informatique."
				formationTitleDut[i].innerHTML = 'DUT Informatique';
				formationTextDut[i].innerHTML = "Formation permettant d'acqu??rir les bases de l'informatique puis de les ma??triser. Divers langages et autres m??thodes de d??veloppement y sont enseign??s afin de pr??parer l'insertion professionnelle."
				formationPlaceDut[i].innerHTML = 'IUT de Belfort-Montb??liard';
				formationTextLp[i].innerHTML = "Licence Professionnelle (Technologies de Projets Web et mobiles) permettant de parfaire ses connaissances en web et en d??veloppement d'applications mobile pour pouvoir s'ins??rer dans le monde professionnel.";
				formationPlaceLp[i].innerHTML = 'IUT de Belfort-Montb??liard';
				compSectionTitleLangagesWeb[i].innerHTML = 'Langages Web';
				compSectionTitleFrameworksWeb[i].innerHTML = 'Frameworks Web';
				compSectionTitleAutresCompetencesWeb[i].innerHTML = 'Autres comp??tences Web';
				compSectionTitleAutresCompetencesInf[i].innerHTML = 'Autres comp??tences informatiques';
				compSectionTitleAutres[i].innerHTML = 'Autres';
				realisationDescriptionStageDUT[i].innerHTML = "Stage de DUT Informatique.<br>Ajouts et am??liorations de fonctionnalit??s appliqu??es sur le site web r??alis?? avec Symfony4, notamment d'un syst??me d'import de donn??es automatique depuis des tableaux Excel.";
				realisationDescriptionStageLP[i].innerHTML = "Stage de LP TeProW.<br>Site web enti??rement r??alis?? seul avec Symfony5, comprenant syst??me d'inscription, forum, actualit??s, gestion administrative, formulaire de contact, etc.";
			}
			break;

		case 1 :
			menuItemFormation.innerHTML = 'Formation';
			menuItemCompetences.innerHTML = 'Skills';
			menuItemRealisations.innerHTML = 'Achievements';
			menuItemContact.innerHTML = 'Contact';
			langageIconeDiv.innerHTML = '<img id="langageIcone" src="./Ic??nes/france.jpg" onclick="changeLanguage(0)">'
			bonjour.innerHTML = 'Hello !';
			jeSuis.innerHTML = 'I am Jason Vandaele, web developer !';
			jeSuisDescription.innerHTML = "I am 21 years old and hold a Professional License in the field of the web. I like to carry out projects that allow me to use my creativity, my organization and my foresight ! I specialize in using Symfony (4 & 5) but I can also use other languages and frameworks. Moreover, I have already been able to make achievements in teleworking (partial or total), this notion does not pose me any problems !";
			compAutoEvaluation.innerHTML = 'Here is a self-assessment of the skills I have !';
			loisirLabelJeuxVideos.innerHTML = 'Video games';
			loisirLabelMontageVideo.innerHTML = 'Video editing';
			loisirLabelPetitsProjets.innerHTML = 'Little projects';
			titleContact.innerHTML = 'Contact me';
			descriptionContact.innerHTML = "A question ? A comment ? Do not hesitate to contact me through the email address below, I will answer you as soon as possible !";
			description2Contact.innerHTML = 'Do not hesitate to provide me with your telephone number if you prefer voice exchanges !';
			footerDescription.innerHTML = 'Website and background image created by Jason Vandaele.';
			for(var i=0;i<formationLabelBac.length;i++){
				formationLabelBac[i].innerHTML = "Honors 'Good'";
				formationTextBac[i].innerHTML = "Baccalaureate of Sciences and Technology of the Industry and Sustainable Development.<br>Option SIN (Information System and Digital), allowing to take its first steps in the world of computer science."
				formationTitleDut[i].innerHTML = 'DUT in Computer Science';
				formationTextDut[i].innerHTML = "Formation to acquire the basics of computer science and then master them. Various languages and other development methods are taught to prepare for professional integration."
				formationPlaceDut[i].innerHTML = 'IUT of Belfort-Montb??liard';
				formationTextLp[i].innerHTML = "Professional License (Technologies of Web and mobile projects) allowing to perfect its knowledge in web and development of mobile applications to be able to insert itself in the professional world.";
				formationPlaceLp[i].innerHTML = 'IUT of Belfort-Montb??liard';
				compSectionTitleLangagesWeb[i].innerHTML = 'Web Languages';
				compSectionTitleFrameworksWeb[i].innerHTML = 'Web Frameworks';
				compSectionTitleAutresCompetencesWeb[i].innerHTML = 'Other Web Skills';
				compSectionTitleAutresCompetencesInf[i].innerHTML = 'Other IT skills';
				compSectionTitleAutres[i].innerHTML = 'Others';
				realisationDescriptionStageDUT[i].innerHTML = "DUT in Computer Science Internship.<br>Additions and improvements of functionalities applied on the website realized with Symfony4, including an automatic data import system from Excel tables.";
				realisationDescriptionStageLP[i].innerHTML = "LP TeProW Internship.<br> Website entirely realized alone with Symfony5, including registration system, forum, news, administrative management, contact form, etc.";
			}
			break;
	}
}