import kidscarelogo from '../../../../../Images/NavBar/KidsCareLogo.png';
import cosmetologielogo from '../../../../../Images/NavBar/CosmetologieLogo.png';
import bodyconceptlogo from '../../../../../Images/NavBar/BodyConceptLogo.png';
import curamedixlogo from '../../../../../Images/NavBar/CuramedixLogo.png';

const getLogoUrl = branchName => {
  switch (branchName) {
    case 'Kidscare':
        return kidscarelogo;
    case 'Cosmetologie':
        return cosmetologielogo;
    case 'Bodyconcept':
        return bodyconceptlogo;
    case 'Curamedix':
        return curamedixlogo;    
  
    default:
        console.log('URL not found')
  }
}

export default getLogoUrl