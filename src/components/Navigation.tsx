import { Grid, Link } from "@chakra-ui/react";
import { Link as LinkRRD, useLocation } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "Inicio",
    route: "/",
  },
  // {
  //   id: 2,
  //   name: "Explorar",
  //   route: "/explore",
  // },
  // {
  //   id: 3,
  //   name: "Planes",
  //   route: "/plans",
  // },
  // {
  //   id: 4,
  //   name: "Logistica",
  //   route: "/logistic",
  // },
  // {
  //   id: 5,
  //   name: "Mapa",
  //   route: "/map",
  // },
  {
    id: 6,
    name: "Deudas",
    route: "/debts",
  },
];

type NavLinkProps = { name: string; route: string };

const NavLink = ({ link }: { link: NavLinkProps }) => {
  const { pathname } = useLocation();

  return (
    <LinkRRD to={link.route}>
      <Link
        bgColor={pathname === link.route ? "gray.100" : "white"}
        display="block"
        fontWeight="semibold"
        color="blue.800"
        fontSize="1.3rem"
        mb="0.7rem"
        rounded="0.4rem"
        p="0.3rem 1.5rem"
        _hover={{
          bgColor: "gray.200",
        }}
      >
        {link.name}
      </Link>
    </LinkRRD>
  );
};

const Navigation: React.FC = () => {
  return (
    <Grid mt="3rem" placeItems="center">
      {links.map((link) => (
        <NavLink key={link.id} link={link} />
      ))}
    </Grid>
  );
};

export default Navigation;
