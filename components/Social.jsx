import {Icon, Button} from "semantic-ui-react"

const Social = () => (
  <>
    <Button
      as="a"
      href="https://www.facebook.com/sharer/sharer.php?u=passonmonmaire"
      className="teal basic"
      target="_blank"
      style={{margin: "5px"}}
    >
      <Icon name="facebook" /> Facebook
    </Button>
    <Button
      style={{margin: "5px"}}
      className="teal basic"
      as="a"
      target="_blank"
      href="https://twitter.com/intent/tweet?text=Soyons les plus nombreux·ses possibles à mobiliser notre élu·e pour un choix démocratique des parrainages à l'élection présidentielle. %23démocratie
👉 passonmonmaire.fr&url=passonmonmaire.fr"
    >
      <Icon name="twitter" /> Twitter
    </Button>
  </>
)

export default Social
