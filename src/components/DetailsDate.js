import Accordion from 'react-bootstrap/Accordion';




function AllCollapseExample(props) {

  return (

    <Accordion>
      <Accordion.Item eventKey="Disponibilidad">
        <Accordion.Header>Disponibilidad del inmueble</Accordion.Header>
        <Accordion.Body>
          {props.date}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;