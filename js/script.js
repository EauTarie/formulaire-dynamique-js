// Capture l'élément du DOM //
const email = document.getElementById('email')
const emailCheck = document.getElementById('email-retype')
const emailButton = document.getElementById('check-email')

const password = document.getElementById('password')
const passwordCheck = document.getElementById('password-retype')


function getEmail() {

  // Récupère les valeurs des inputs //
  let emailValue = email.value
  let emailCheckValue = emailCheck.value
  console.log(emailValue, emailCheckValue) // <- A supprimer après validation des tests //
  // Fin récupération des valeurs des inputs //

  // Test si des valeurs sont présentes dans input // 
  if (emailValue == "" || emailCheckValue == "") { // Si aucune valeur n'existe //
    // Test si l'élément divison Error existe déjà //
    const errorElement = document.getElementById('errorEmailEmpty')
    if (!errorElement) { // Si division error n'existe pas
      //Construction de la boite de texte d'erreur //
      const parentElement = document.getElementById('form-email')
      let theFirstChild = parentElement.firstChild
      const newDiv = document.createElement("span")
      newDiv.setAttribute("class", "error red")
      newDiv.setAttribute("id", "errorEmailEmpty")
      const newContent = document.createTextNode("Veuillez renseigner une adresse email")
      newDiv.appendChild(newContent);
      parentElement.insertBefore(newDiv, theFirstChild)
    } else { // Si division error existe
      console.log("cet element existe déjà")
    }
    // Fin construction de la boite d'erreur //
  } else { // Si les valeurs email existent

    // REGEX //
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailRegExp = document.getElementById('errorEmailNotValid')
    if (emailValue.match(mailformat) && emailCheckValue.match(mailformat)) {
      if(emailRegExp) {
        emailRegExp.remove()
      }
    } else {
      if (!emailRegExp) { // Si division error n'existe pas
        //Construction de la boite de texte d'erreur //
        const parentElement = document.getElementById('form-email')
        let theFirstChild = parentElement.firstChild
        const newDiv = document.createElement("span")
        newDiv.setAttribute("class", "error red")
        newDiv.setAttribute("id", "errorEmailNotValid")
        const newContent = document.createTextNode("Indiquez une adresse valide")
        newDiv.appendChild(newContent);
        parentElement.insertBefore(newDiv, theFirstChild)
      } else { // Si division error existe
        console.log("cet element existe déjà")
      }
    }
    // FIN REGEX //
    const errorElementEmpty = document.getElementById('errorEmailEmpty')
    if (errorElementEmpty) { // Si la boite erreur existe
      errorElementEmpty.remove()
    }
    const errorElementSame = document.getElementById('errorEmailNotSame')
    if (emailValue === emailCheckValue) { // Si les valeurs sont STRICTEMENTS IDENTIQUES
      if (errorElementSame) {
        errorElementSame.remove()
      }
      console.log("YOUHOU")
    } else {
      if (!errorElementSame) { // Si division error n'existe pas
        //Construction de la boite de texte d'erreur //
        const parentElement = document.getElementById('form-email')
        let theFirstChild = parentElement.firstChild
        const newDiv = document.createElement("span")
        newDiv.setAttribute("class", "error red")
        newDiv.setAttribute("id", "errorEmailNotSame")
        const newContent = document.createTextNode("Vérifiez la concordance de vos adresse email")
        newDiv.appendChild(newContent);
        parentElement.insertBefore(newDiv, theFirstChild)
      } else { // Si division error existe
        console.log("cet element existe déjà")
      }
    }
    console.log('aaaaaaaaaaaa')
    console.log(email, emailCheck, emailButton)
  }
}

function submit() {
  if(getEmail()==true) {
    console.log("Salut à tous")
  } else {console.log("OTARIE DES EAUX")}
}