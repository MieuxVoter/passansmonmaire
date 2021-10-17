import Link from "next/link";
import {Segment, Grid, Header, Container, List} from "semantic-ui-react"
import {useTranslation} from "next-i18next";
import Social from "@components/Social"
import * as ROUTES from "@constants/routes"
import partners from "@constants/partners"

const Footer = () => {

  const Footer = () => (
    <Segment inverted vertical style={{padding: "5em 0em"}}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="À propos" />
              <List link inverted>
                <List.Item
                  as={Link}
                  to={ROUTES.PRIVACY_POLICY}
                  content="Politique de confidentialité"
                />
                <List.Item
                  as={Link}
                  to={ROUTES.NOUS_CONTACTER}
                  content="Nous contacter"
                />
                <List.Item as={Link} to={ROUTES.TERMS}>
                  Mentions légales
                </List.Item>
                <List.Item
                  as="a"
                  href="https://github.com/MieuxVoter/voterpourleclimat"
                >
                  Code source
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Partenaires" />
              <List link inverted>
                <List.Item as="a"></List.Item>

                {partners.map((partner, partnerId) => (
                  <List.Item as="a" href={partner.site} key={partnerId}>
                    {partner.name}
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Consultations" />
              <List link inverted>
                <List.Item></List.Item>
                <List.Item as={Link} to={ROUTES.SE_NOURRIR}>
                  Se nourrir
                </List.Item>
                <List.Item as={Link} to={ROUTES.SE_LOGER}>
                  Se loger
                </List.Item>
                <List.Item as={Link} to={ROUTES.SE_DEPLACER}>
                  Se déplacer
                </List.Item>
                <List.Item as={Link} to={ROUTES.PRODUIRE}>
                  Produire
                </List.Item>
                <List.Item as={Link} to={ROUTES.CONSOMMER}>
                  Consommer
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Partager le vote
              </Header>
              <Social />
              <p style={{marginTop: "1em"}}>
                À nous de porter notre voix toujours plus haut, toujours plus fort
                ! Invitez vos connaissances à rejoindre le préférendum.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
};
export default Footer;
