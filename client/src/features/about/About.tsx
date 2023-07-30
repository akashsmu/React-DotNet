import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

function About() {
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get400Error()}
        >
          400
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get401Error()}
        >
          401
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get404Error()}
        >
          404
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.get500Error()}
        >
          500
        </Button>
        <Button
          variant="contained"
          onClick={() => agent.TestErrors.getValidationError()}
        >
          validation
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default About;
