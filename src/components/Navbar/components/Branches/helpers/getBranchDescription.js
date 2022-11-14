const getBranchDescription = branchName => {
    switch (branchName) {
        case 'Kidscare':
          return 'Kinder & Familie'
        case 'Cosmetologie':
            return 'Kosmetik'
        case 'Bodyconcept':
          return 'Körperästhetik'
        case 'Curamedix':
          return 'Prävention'        
        default:
          break;
      }
}

export default getBranchDescription;