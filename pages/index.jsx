import Link from "next/link";
import {Container, Button} from 'semantic-ui-react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <Container>
      <img
        src="logos/logo-line-white.svg"
        alt="logo of Mieux Voter"
        height="128"
        className="d-block ml-auto mr-auto mb-4"
      />
      <Link href={{pathname: "mobilisation"}}>
        <Button primary
        >
          <FontAwesomeIcon icon={faRocket} className="mr-2" />
          Je mobilise mon élu·e
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
